import fs from 'fs';

// -----------------------------------------------------------------------------
// EXTRACTIVE NLP SUMMARIZER IMPLEMENTATION
// -----------------------------------------------------------------------------

function cleanHtml(raw) {
  if (!raw) return '';
  let text = String(raw);

  // Extract CDATA blocks first if present
  text = text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1');

  // Step 1: Decode HTML entities that may enclose tags or special characters
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ');

  // Step 2: Strip scripts, styles, and HTML tags (including newly decoded tags)
  text = text
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/gi, '') // Strip naked URLs
    .replace(/The post .* appeared first on .*/gi, '') // Common RSS promo tail
    .replace(/Read more .*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text;
}

function splitSentences(text) {
  if (!text) return [];

  // Step 1: Token masking to protect non-sentence periods
  const masks = [];
  const mask = (regex) => {
    text = text.replace(regex, (match) => {
      const token = `__TOKEN_${masks.length}__`;
      masks.push({ token, original: match });
      return token;
    });
  };

  // Protect CVEs (e.g. CVE-2026-98432)
  mask(/CVE-\d{4}-\d+/gi);

  // Protect software versions and decimals (e.g. v1.0.3, 6.5.2, 9.8, $0.01)
  mask(/\b[vV]?\d+\.\d+(?:\.\d+)*\b/g);

  // Protect common abbreviations and acronyms
  mask(/\b(U\.S\.|U\.K\.|e\.g\.|i\.e\.|et\s+al\.|Inc\.|Corp\.|Ltd\.|Co\.|vs\.|Dr\.|Mr\.|Ms\.|No\.|Dept\.|approx\.|avg\.)/gi);

  // Step 2: Split on true sentence boundaries
  // Matches a period/question/exclamation followed by whitespace and a capital letter, or end of string
  const rawSentences = text
    .split(/(?<=[.?!])\s+(?=[A-Z0-9"']|$)/)
    .map(s => s.trim())
    .filter(s => s.length > 5);

  // Step 3: Unmask tokens back to original text
  const sentences = rawSentences.map(s => {
    let unmasked = s;
    for (const m of masks) {
      unmasked = unmasked.replaceAll(m.token, m.original);
    }
    return unmasked;
  });

  return sentences;
}

function extractFallbackBrief(title, rawDescription) {
  const cleanTitle = cleanHtml(title);
  const cleanDesc = cleanHtml(rawDescription);
  const combinedText = `${cleanTitle}. ${cleanDesc}`;

  const sentences = splitSentences(cleanDesc);

  // Trap 3 Guard: Minimum word count check (No 15-word stubs)
  const totalWordsInSource = cleanDesc.split(/\s+/).filter(Boolean).length;
  if (totalWordsInSource < 30 && sentences.length < 2) {
    return {
      status: 'REJECTED_TOO_SHORT',
      reason: `Source description too short (${totalWordsInSource} words). Refusing to publish stub.`,
      raw: cleanDesc
    };
  }

  // Select complete sentences targeting 45 - 65 words total
  const selectedSentences = [];
  let currentWords = 0;

  for (const s of sentences) {
    const sWords = s.split(/\s+/).filter(Boolean).length;
    // Don't add sentences that are pure boilerplate artifacts
    if (/appeared first on|copyright|all rights reserved|click here/i.test(s)) continue;

    selectedSentences.push(s);
    currentWords += sWords;

    // Ideal window: 2 to 3 sentences, between 45 and 65 words
    if (currentWords >= 45 && selectedSentences.length >= 2) {
      break;
    }
    if (selectedSentences.length >= 3) {
      break;
    }
  }

  let brief = selectedSentences.join(' ').trim();

  // If after sentence assembly it's still slightly short, check if adding title context helps
  const briefWordCount = brief.split(/\s+/).filter(Boolean).length;
  if (briefWordCount < 35) {
    return {
      status: 'REJECTED_INSUFFICIENT_DENSITY',
      reason: `Could only extract ${briefWordCount} words across full sentences.`,
      raw: brief
    };
  }

  // Ensure strict terminal punctuation
  if (!/[.?!]$/.test(brief)) {
    brief += '.';
  }

  // Threat Category Heuristic
  let category = 'GENERAL';
  if (/CVE-\d{4}-\d+/i.test(combinedText)) category = 'CVE';
  else if (/ransomware|extortion|lockbit/i.test(combinedText)) category = 'RANSOMWARE';
  else if (/breach|leaked|stolen|compromised records/i.test(combinedText)) category = 'BREACH';
  else if (/zero-day|0-day|remote code execution|rce|vulnerability|flaw/i.test(combinedText)) category = 'VULNERABILITY';
  else if (/state-sponsored|apt\d+|china|russia|north korea|iran/i.test(combinedText)) category = 'NATION_STATE';

  // Threat Severity Heuristic
  let severity = 'MEDIUM';
  if (/actively exploit|in the wild|zero-day|0-day|remote root|unauthenticated rce|critical/i.test(combinedText)) {
    severity = 'CRITICAL';
  } else if (/privilege escalation|high severity|cvss (?:7|8)|breach|ransomware/i.test(combinedText)) {
    severity = 'HIGH';
  } else if (/minor|low severity|informational/i.test(combinedText)) {
    severity = 'LOW';
  }

  return {
    status: 'ACCEPTED',
    headline: cleanTitle,
    brief,
    wordCount: briefWordCount,
    sentenceCount: selectedSentences.length,
    category,
    severity
  };
}

// -----------------------------------------------------------------------------
// TEST HARNESS: 10 REAL-WORLD FEEDS
// -----------------------------------------------------------------------------

const TEST_SOURCES = [
  { name: '1. Newsroom Lede (BleepingComputer)', url: 'https://www.bleepingcomputer.com/feed/' },
  { name: '2. Standard News (The Hacker News)', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { name: '3. Short Stub / Teaser (Krebs on Security)', url: 'https://krebsonsecurity.com/feed/' },
  { name: '4. Enterprise Tech (Dark Reading)', url: 'https://www.darkreading.com/rss.xml' },
  { name: '5. Vendor PSIRT (Cisco)', url: 'https://tools.cisco.com/security/center/psirtrss20/CiscoSecurityAdvisory.xml' },
  { name: '6. Vendor PSIRT (Fortinet)', url: 'https://fortiguard.fortinet.com/rss/ir.xml' },
  { name: '7. Vendor PSIRT (Microsoft MSRC)', url: 'https://api.msrc.microsoft.com/update-guide/rss' },
  { name: '8. Government KEV (CISA Advisories)', url: 'https://www.cisa.gov/cybersecurity-advisories/all.xml' },
  { name: '9. Research Lab (Sophos)', url: 'https://news.sophos.com/en-us/category/threat-research/feed/' },
  { name: '10. Linux Distro PSIRT (Red Hat)', url: 'https://access.redhat.com/security/data/metrics/rhsa.rss' }
];

async function runTestHarness() {
  console.log('========================================================================');
  console.log('🧪 SECUBUZZ DETERMINISTIC FALLBACK TEST HARNESS (10 REAL-WORLD SOURCES)');
  console.log('========================================================================\n');

  let passed = 0;
  let rejected = 0;

  for (const src of TEST_SOURCES) {
    try {
      const res = await fetch(src.url, { signal: AbortSignal.timeout(10000) });
      const xml = await res.text();
      const items = xml.split(/<item[\s>]/i).slice(1);
      if (items.length === 0) {
        console.log(`❌ [${src.name}] No items found in feed.`);
        continue;
      }

      // Pick the first item
      const item = items[0];
      const titleMatch = item.match(/<title>[\s\S]*?<\/title>/i);
      const descMatch = item.match(/<(?:description|summary)>[\s\S]*?<\/(?:description|summary)>/i) ||
                        item.match(/<content:encoded>[\s\S]*?<\/content:encoded>/i);

      const title = titleMatch ? titleMatch[0] : 'Untitled';
      const desc = descMatch ? descMatch[0] : '';

      const result = extractFallbackBrief(title, desc);

      console.log(`📌 ${src.name}`);
      console.log(`   Source Title: "${title}"`);
      if (result.status === 'ACCEPTED') {
        passed++;
        console.log(`   Status:       ✅ ACCEPTED (${result.wordCount} words | ${result.sentenceCount} sentences | [${result.category} / ${result.severity}])`);
        console.log(`   Brief:        "${result.brief}"`);
      } else {
        rejected++;
        console.log(`   Status:       🛡️ ${result.status}`);
        console.log(`   Reason:       ${result.reason}`);
        console.log(`   Raw Text:     "${result.raw?.slice(0, 120)}..."`);
      }
      console.log('------------------------------------------------------------------------\n');
    } catch (err) {
      console.log(`❌ [${src.name}] Fetch error: ${err.message}\n`);
    }
  }

  console.log('========================================================================');
  console.log(`📊 HARNESS RESULTS: ${passed} Accepted | ${rejected} Rejected by Safety Guards`);
  console.log('========================================================================');
}

runTestHarness();
