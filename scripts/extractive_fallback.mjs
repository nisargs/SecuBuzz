/**
 * SecuBuzz Deterministic Extractive NLP Fallback Engine
 *
 * Tier 2 Emergency Airbag: Runs ONLY when all primary AI engines
 * (Groq, Gemini, OpenRouter) are unavailable, rate-limited, or return empty batches.
 *
 * Enforces strict boolean quality gates:
 * - Minimum 28 words across complete, grammatical sentences.
 * - Zero broken sentences (never chops mid-thought, rejects incomplete clauses).
 * - Identifiable security event/vulnerability (strictly excluding generic legal/crime terms).
 * - Identifiable affected vendor/product/organization or explicit CVE identifier.
 * - Rejection of raw tabular data, CVE dumps, and RSS teaser stubs.
 * - Stateless deterministic stripping of navigation, CTA, and support boilerplate.
 * - Strict timestamp integrity: eliminates recency fabrication and future clock skew.
 * - Preservation of failed candidates for retry (zero silent data loss).
 */

// -----------------------------------------------------------------------------
// 1. TIMESTAMP INTEGRITY & NORMALIZATION (ZERO RECENCY FABRICATION)
// -----------------------------------------------------------------------------

export function normalizeTimestamp(rawDate, maxFutureSkewMs = 10 * 60 * 1000) {
  const now = Date.now();
  const ingestedAt = new Date(now).toISOString();

  if (!rawDate) {
    return {
      publishedAt: null,
      isPublishedTimeUnknown: true,
      ingestedAt,
      isFutureSkew: false,
    };
  }

  const parsed = Date.parse(rawDate);
  if (isNaN(parsed) || parsed <= 0) {
    return {
      publishedAt: null,
      isPublishedTimeUnknown: true,
      ingestedAt,
      isFutureSkew: false,
    };
  }

  // Reject future publication timestamps beyond publisher clock skew tolerance (10 minutes)
  if (parsed > now + maxFutureSkewMs) {
    return {
      publishedAt: null,
      isPublishedTimeUnknown: true,
      ingestedAt,
      isFutureSkew: true,
      rawFutureDate: new Date(parsed).toISOString(),
    };
  }

  return {
    publishedAt: new Date(parsed).toISOString(),
    isPublishedTimeUnknown: false,
    ingestedAt,
    isFutureSkew: false,
  };
}

// -----------------------------------------------------------------------------
// 2. PRE-CLEANING & NORMALIZATION
// -----------------------------------------------------------------------------

export function cleanHtml(raw) {
  if (!raw) return '';
  let text = String(raw);

  // Step 1: Extract CDATA blocks if present
  text = text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1');

  // Step 2: Decode HTML entities that may enclose tags or special characters
  text = text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#xd;/gi, ' ')
    .replace(/&#10;/gi, ' ');

  // Step 2.5: Delimit HTML block-level elements with periods to preserve natural sentence breaks
  text = text.replace(/<\/(?:p|div|li|tr|h[1-6]|dd|dt|blockquote|section|article)>\s*|<br\s*\/?>\s*/gi, '. ');

  // Step 3: Strip scripts, styles, and HTML tags
  text = text
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/gi, '') // Strip naked URLs
    .replace(/The post .* appeared first on .*/gi, '') // Common RSS promo tail
    .replace(/Read more (?:at|on|here)?.*$/gi, '')
    .replace(/Continue reading .*$/gi, '')
    .replace(/The Hacker News .*$/gi, '')
    .replace(/Copyright \d{4}.*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Step 3.5: Delimit raw advisory section transitions running together without punctuation
  text = text.replace(/(?:Background|Vulnerabilities|Executive Summary|Description|Overview|Remediation|Mitigations)\s*(?:CVE-\d{4}-\d+\s*)?(?=[A-Z])/g, '. ');

  // Step 4: Clean continuation brackets anywhere in text (e.g. "[...]" or "[…]" or "(...)")
  text = text.replace(/[\[\(](?:\.\.\.|…|\s)+[\]\)]/g, '');

  // Step 5: Convert internal corroboration tags into clean grammatical sentences
  text = text.replace(
    /\s*(?:([.?!]))?\s*\((?:Corroborated Threat Intelligence:\s*)?Associated (?:CVE is|CVEs are)\s*([^)]+)\)\.?/gi,
    (match, punct, cveList) => {
      const cleanList = cveList.trim();
      const isPlural = cleanList.includes(',') || cleanList.includes(' and ');
      const prefix = punct ? `${punct} ` : '. ';
      return `${prefix}${isPlural ? 'The vulnerabilities are tracked as' : 'The vulnerability is tracked as'} ${cleanList}.`;
    }
  );

  return text.replace(/\.{2,}/g, '.').replace(/\s+/g, ' ').trim();
}

// -----------------------------------------------------------------------------
// 3. STATELESS NAVIGATION, CTA & SUPPORT BOILERPLATE STRIPPER
// (CRITICAL: ZERO /g FLAGS - STRICTLY STATELESS AND IDEMPOTENT)
// -----------------------------------------------------------------------------

const CTA_BOILERPLATE_PATTERNS = [
  /if you find (?:any )?new issues[,\s]/i,
  /file a bug[,\s]/i,
  /visit our .* communities[,\s]/i,
  /report an issue or send feedback/i,
  /interested in switching channels\?/i,
  /sign up for (?:our )?newsletter/i,
  /subscribe to (?:our )?(?:feed|updates|channel|newsletter)/i,
  /follow us on (?:twitter|x|linkedin|mastodon|bluesky)/i,
  /click here to (?:read|view|download|learn)/i,
  /download the (?:full )?report/i,
  /for more information(?:,| visit| see)/i,
  /questions\? contact us at/i,
  /general:\s*chromebook help community/i,
];

const CTA_TAIL_PATTERNS = [
  /if you find (?:any )?new issues[,\s].*$/i,
  /file a bug[,\s].*$/i,
  /visit our .* communities[,\s].*$/i,
  /report an issue or send feedback.*$/i,
  /interested in switching channels\?.*$/i,
  /sign up for (?:our )?newsletter.*$/i,
  /subscribe to (?:our )?(?:feed|updates|channel|newsletter).*$/i,
  /follow us on (?:twitter|x|linkedin|mastodon|bluesky).*$/i,
  /click here to (?:read|view|download|learn).*$/i,
  /download the (?:full )?report.*$/i,
  /for more information(?:,| visit| see).*$/i,
  /questions\? contact us at.*$/i,
  /general:\s*chromebook help community.*$/i,
];

export function isBoilerplateSentence(sentence) {
  if (!sentence) return true;
  for (const pattern of CTA_BOILERPLATE_PATTERNS) {
    if (pattern.test(sentence)) {
      return true;
    }
  }
  return false;
}

const DANGLING_TAIL_REGEX = /\b(and|or|but|with|the|a|an|in|on|at|to|for|from|by|including|such as|which|that|who|as well as|although|though|because|while|if|when|where|whether|into|onto|upon|about)\s*[.?!]?$/i;

/**
 * Strips CTA tails strictly without synthesizing punctuation on incomplete clauses.
 * If stripping leaves an incomplete clause, the sentence is discarded (returns '').
 */
export function stripCtaTail(sentence) {
  if (!sentence) return '';
  let cleaned = sentence;

  let patternMatched = false;
  for (const pattern of CTA_TAIL_PATTERNS) {
    if (pattern.test(cleaned)) {
      cleaned = cleaned.replace(pattern, '').trim();
      patternMatched = true;
    }
  }

  // If a CTA tail was stripped:
  if (patternMatched) {
    // 1. Discard if it ends with a dangling preposition, conjunction, or relative pronoun
    if (DANGLING_TAIL_REGEX.test(cleaned)) {
      return '';
    }
    // 2. Discard if it ends with punctuation indicating an unfinished clause (comma, colon, semicolon, dash, hyphen, slash)
    if (/[,:;—–\-\/\\]\s*$/.test(cleaned)) {
      return '';
    }
    // 3. Must terminate with a genuine sentence ending (. ? !).
    // DO NOT append '.' to synthesize a complete sentence!
    if (!/[.?!]["']?$/.test(cleaned)) {
      return '';
    }
  }

  return cleaned;
}

// -----------------------------------------------------------------------------
// 4. TABULAR DATA & CVE DUMP DETECTOR
// -----------------------------------------------------------------------------

export function isTabularData(text) {
  if (!text) return false;

  // Check 1: Dense CVE listings (e.g. Fortinet raw advisory tables)
  const cveMatches = text.match(/CVE-\d{4}-\d+/gi) || [];
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length > 0 && cveMatches.length >= 3) {
    const cveRatio = cveMatches.length / words.length;
    if (cveRatio > 0.04) {
      return true; // Over 4% of all words are raw CVE IDs
    }
  }

  // Check 2: Repetitive CVE score/severity listings without sentence structure
  if (/(?:CVSSv?\d|CVE-\d{4}-\d+)[^\n.]{0,30}\((?:critical|high|medium|low)\)/i.test(text)) {
    return true;
  }

  // Check 3: Concatenated sentences without spaces after periods (e.g. "22.x.CVE")
  if (/\b\d+\.x\.[A-Z]/i.test(text) || /\bCVE-\d{4}-\d+-[A-Z]/.test(text)) {
    return true;
  }

  // Check 4: Repetitive "affects version" lists
  const affectsCount = (text.match(/affects\s+[\w\s.-]+(?:\d+\.x|\d+\.\d+)/gi) || []).length;
  if (affectsCount >= 2) {
    return true;
  }

  // Check 5: Machine version strings or repetitive path/slash tables (e.g. "vers:all/*", "vers:intdot/", "cpe:2.3:")
  if (/vers:(?:all|\*|intdot)/i.test(text) || /cpe:2\.3:/i.test(text)) {
    return true;
  }
  const slashes = (text.match(/\//g) || []).length;
  if (slashes >= 4 && words.length > 0 && slashes / words.length > 0.05) {
    return true;
  }

  return false;
}

// -----------------------------------------------------------------------------
// 5. TOKEN-MASKING SENTENCE BOUNDARY DISAMBIGUATION
// -----------------------------------------------------------------------------

export function splitSentences(text) {
  if (!text) return [];

  const masks = [];
  let maskedText = text;

  const mask = (regex) => {
    maskedText = maskedText.replace(regex, (match) => {
      const token = `__TOKEN_${masks.length}__`;
      masks.push({ token, original: match });
      return token;
    });
  };

  // Mask 1: CVEs (e.g. CVE-2026-98432)
  mask(/CVE-\d{4}-\d+/gi);

  // Mask 2: Software versions, decimals, currencies (e.g. v1.0.3, 6.5.2, 9.8, $0.01, 26.x)
  // Preserves version lists in releases like GitLab, Chrome, RHEL
  mask(/\b[vV]?\d+\.\d+(?:\.\d+)*(?:-[a-zA-Z0-9.]+)?\b/g);
  mask(/\b\d+\.x\b/gi);
  mask(/\$\d+(?:\.\d+)?/g);

  // Mask 3: Abbreviations, acronyms, and honorifics
  mask(/\b(U\.S\.|U\.K\.|E\.U\.|e\.g\.|i\.e\.|et\s+al\.|Inc\.|Corp\.|Ltd\.|Co\.|vs\.|Dr\.|Mr\.|Ms\.|No\.|Dept\.|approx\.|avg\.|Jan\.|Feb\.|Mar\.|Apr\.|Jun\.|Jul\.|Aug\.|Sep\.|Sept\.|Oct\.|Nov\.|Dec\.)/gi);

  // Split on true terminal sentence boundaries: period, question mark, or exclamation mark
  // followed by whitespace and a capital letter, number, or quote, or end of string.
  const rawSentences = maskedText
    .split(/(?<=[.?!])\s+(?=[A-Z0-9"']|$)/)
    .map(s => s.trim())
    .filter(s => s.length > 8);

  // Unmask tokens back to original text
  const sentences = rawSentences.map(s => {
    let unmasked = s;
    for (const m of masks) {
      unmasked = unmasked.replaceAll(m.token, m.original);
    }
    return unmasked;
  });

  return sentences;
}

// -----------------------------------------------------------------------------
// 6. CONTROLLED CYBERSECURITY ENTITY & EVENT DICTIONARIES
// -----------------------------------------------------------------------------

// Controlled dictionary of recognized tech platforms, security vendors, software, threat actors, and standards orgs
export const CYBER_ENTITY_REGEX = /\b(?:microsoft|windows(?:\s+server)?|azure|entra(?:\s+id)?|active\s+directory|exchange(?:\s+server)?|sharepoint|outlook|office\s*365|m365|powershell|apple|macos|ios|ipados|watchos|safari|webkit|google|android|chrome(?:os)?|chromium|pixel|google\s+workspace|linux|ubuntu|debian|red\s*hat|rhel|centos|fedora|rocky\s+linux|almalinux|suse|opensuse|arch\s+linux|alpine|aws|amazon\s+web\s+services|amazon\s+linux|cloudflare|cisco|ios-xe|asa|anyconnect|duo|talos|fortinet|fortigate|fortios|fortimanager|fortianalyzer|forticlient|palo\s+alto(?:\s+networks)?|pan-os|globalprotect|prisma|cortex|unit\s*42|check\s+point|sophos|ivanti|pulse\s+secure|connect\s+secure|epmm|sonicwall|juniper|junos|f5|big-ip|zscaler|crowdstrike|sentinelone|trend\s+micro|broadcom|vmware|vcenter|esxi|workstation|horizon|citrix|netscaler|splunk|tenable|qualys|rapid7|wiz|huntress|proofpoint|barracuda|aruba|ubiquiti|synology|qnap|netgear|d-link|tp-link|chainalysis|mandiant|recorded\s+future|dragos|group-ib|kaspersky|eset|malwarebytes|bitdefender|gitlab|github|atlassian|jira|confluence|bitbucket|apache|tomcat|http\s+server|struts|log4j|kafka|hadoop|spark|nginx|caddy|iis|php|python|node\.js|nodejs|npm|pnpm|yarn|docker|kubernetes|k8s|helm|containerd|openssl|openssh|sudo|systemd|glibc|curl|libcurl|wordpress|drupal|joomla|magento|woocommerce|oracle|weblogic|mysql|postgresql|postgres|redis|mongodb|mariadb|sqlite|elasticsearch|kibana|sap|netweaver|salesforce|servicenow|snowflake|databricks|zoom|teams|slack|telegram|signal|whatsapp|intel|amd|nvidia|qualcomm|arm|mediatek|realtek|lockbit|blackcat|alphv|akira|clop|bianlian|ransomhub|qakbot|trickbot|cobalt\s+strike|mimikatz|metasploit|volt\s+typhoon|salt\s+typhoon|flax\s+typhoon|lazarus|apt\d+|fancy\s+bear|cozy\s+bear|sandworm|scattered\s+spider|midnight\s+blizzard|forest\s+blizzard|cisa|fbi|nsa|gchq|enisa|ncsc|cert-eu|cert-cc|mitre|nvd|first\.org|epss)\b/i;

// Narrowed cybersecurity events: strictly excludes generic legal terms (arrest, sentenced, prison, indicted) in isolation
export const SECURITY_EVENT_REGEX = /\b(vulnerability|vulnerabilities|flaw|flaws|bug|bugs|weakness|weaknesses|exploit|exploits|exploited|zero-day|0-day|zero-days|0-days|cve|cve-\d{4}-\d+|rce|remote code execution|privilege escalation|denial of service|dos|ddos|sql injection|sqli|cross-site|xss|buffer overflow|memory corruption|auth bypass|authentication bypass|patch|patches|patched|security advisory|security update|security bulletin|security alert|emergency patch|ransomware|extortion|data breach|security breach|breach|breached|compromise|compromised|leaked credentials|stolen credentials|data leak|data exfiltration|exfiltration|unauthorized access|malware|trojan|backdoor|spyware|infostealer|stealer|rootkit|keylogger|botnet|phishing|phish|spear-phishing|threat actor|threat actors|hacker|hackers|hacking|hacked|hijack|hijacked|cybercrime|cyberattack|cyber attack|cyber espionage|cisa|cisa kev|known exploited)\b/i;

const RSS_BOILERPLATE_REGEX = /appeared first on|read more at|read more on|continue reading|copyright \d{4}|all rights reserved|click here to|subscribe to|categories:|tags:/i;

/**
 * Validates that an article references a legitimate cybersecurity entity,
 * affected product/vendor, or explicit CVE/advisory identifier.
 * Generic capitalized words alone do NOT pass this check.
 */
export function hasIdentifiableEntity(title, brief) {
  const combined = `${title} ${brief}`;

  // 1. Explicit CVE or Structured Advisory Identifier (do NOT reject advisories just because they use a CVE ID)
  if (/\b(?:CVE-\d{4}-\d{4,7}|GHSA-[a-z0-9-]{14,20}|RHSA-\d{4}:\d+|USN-\d+-\d+|VMSA-\d{4}-\d+|ZDI-CAN-\d+|AV\d{2}-\d+)\b/i.test(combined)) {
    return true;
  }

  // 2. Controlled Vendor, Product, Platform, Threat Actor, or Security Institution Dictionary
  if (CYBER_ENTITY_REGEX.test(combined)) {
    return true;
  }

  // 3. Structured Corporate/Organization Pattern (e.g. "Acme Corp.", "Globex Inc.", "Cyberdyne Systems")
  if (/\b[A-Z][a-zA-Z0-9_.-]+(?:\s+[A-Z][a-zA-Z0-9_.-]+)*\s+(?:Inc\.|Corp\.|Corporation|LLC|Ltd\.|Technologies|Networks|Security|Software|Systems|Labs|Group|Partners)\b/.test(combined)) {
    return true;
  }

  // 4. Industry Subject Attribution Pattern (e.g. "firm Chainalysis", "platform Northflank", "vendor Cisco")
  if (/\b(?:firm|company|platform|vendor|provider|carrier|retailer|bank|hospital|university|exchange)\s+[A-Z][a-zA-Z0-9_.-]+\b/.test(combined)) {
    return true;
  }

  return false;
}

// -----------------------------------------------------------------------------
// 7. QUALITY GATE: MANDATORY REJECTION CONDITIONS
// -----------------------------------------------------------------------------

export function validateExtractiveBrief(title, brief, sentences, fullSourceText) {
  const words = brief.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Condition 1: Word count floor (clean 28-word minimum)
  if (wordCount < 28) {
    return {
      isValid: false,
      reason: `REJECTED_TOO_SHORT: Only ${wordCount} words extracted (minimum 28 required).`,
    };
  }

  // Condition 1b: Word count ceiling (clean 65-word maximum)
  if (wordCount > 65) {
    return {
      isValid: false,
      reason: `REJECTED_TOO_LONG: ${wordCount} words extracted (maximum 65 permitted).`,
    };
  }

  // Condition 2: Trailing truncation / broken sentence check
  if (brief.endsWith('...') || brief.endsWith('…') || /[-—–:,;]$/.test(brief)) {
    return {
      isValid: false,
      reason: 'REJECTED_BROKEN_SENTENCE: Brief ends with truncation, ellipsis, or trailing punctuation.',
    };
  }

  // Condition 3: Strict terminal punctuation
  if (!/[.?!]["']?$/.test(brief)) {
    return {
      isValid: false,
      reason: 'REJECTED_INCOMPLETE_PUNCTUATION: Brief does not terminate with proper sentence ending (. ? !).',
    };
  }

  // Condition 4: Dangling prepositions or conjunctions before ending period
  if (DANGLING_TAIL_REGEX.test(brief)) {
    return {
      isValid: false,
      reason: 'REJECTED_DANGLING_TAIL: Brief ends with an incomplete dangling clause or preposition.',
    };
  }

  // Condition 5: RSS boilerplate contamination
  if (RSS_BOILERPLATE_REGEX.test(brief)) {
    return {
      isValid: false,
      reason: 'REJECTED_RSS_BOILERPLATE: Brief contains marketing or syndication boilerplate.',
    };
  }

  // Condition 6: Identifiable security event / vulnerability
  const combinedContext = `${title} ${brief}`;
  if (!SECURITY_EVENT_REGEX.test(combinedContext)) {
    return {
      isValid: false,
      reason: 'REJECTED_NO_SECURITY_EVENT: No identifiable security event, flaw, or incident found.',
    };
  }

  // Condition 7: Tabular data / raw CVE dump check
  if (isTabularData(brief) || isTabularData(fullSourceText)) {
    return {
      isValid: false,
      reason: 'REJECTED_TABULAR_DATA: Text consists of raw tabular CVE listings or unformatted metrics.',
    };
  }

  // Condition 8: Identifiable entity or subject presence
  if (!hasIdentifiableEntity(title, brief)) {
    return {
      isValid: false,
      reason: 'REJECTED_NO_AFFECTED_ENTITY: No identifiable vendor, product, platform, or CVE identifier found.',
    };
  }

  return { isValid: true };
}

// -----------------------------------------------------------------------------
// 8. TAXONOMY CLASSIFIERS (CATEGORY & SEVERITY)
// -----------------------------------------------------------------------------

export function classifyThreat(title, text) {
  const combined = `${title} ${text}`.toLowerCase();

  // Category classification (standardized uppercase)
  let category = 'GENERAL';
  if (/cve-\d{4}-\d+/i.test(combined)) category = 'CVE';
  else if (/ransomware|extortion|lockbit|blackcat|play ransomware/i.test(combined)) category = 'RANSOMWARE';
  else if (/breach|leaked|stolen records|credential leak|data exfiltration/i.test(combined)) category = 'BREACH';
  else if (/zero-day|0-day|remote code execution|unauthenticated rce|vulnerability|flaw|buffer overflow/i.test(combined)) category = 'VULNERABILITY';
  else if (/state-sponsored|nation-state|apt\d+|china|russia|north korea|iran|volt typhoon|salt typhoon/i.test(combined)) category = 'NATION STATE';

  // Severity classification (CVSS 3.1 / CISA KEV objective criteria)
  // CRITICAL requires explicit critical indicators:
  // - CVSS >= 9.0
  // - Explicit unauthenticated RCE
  // - Zero-day in-the-wild exploitation on enterprise perimeter / infrastructure / server / kernel
  // - Explicit critical severity alert or emergency directive
  const hasCriticalIndicator =
    /\bcvss(?:\s*v\d+)?(?:\s*score)?\s*(?:of\s*|[=:]\s*)?(?:9\.[0-9]|10(?:\.0)?)\b/i.test(combined) ||
    /\bunauthenticated\s+(?:rce|remote\s+code\s+execution)\b/i.test(combined) ||
    /(?:\b(?:zero-day|0-day|actively\s+exploited|in\s+the\s+wild)\b.*\b(?:firewall|gateway|vpn|server|perimeter|appliance|infrastructure|kernel)\b|\b(?:firewall|gateway|vpn|server|perimeter|appliance|infrastructure|kernel)\b.*\b(?:zero-day|0-day|actively\s+exploited|in\s+the\s+wild)\b)/i.test(combined) ||
    /\bcritical[-\s](?:severity|vulnerability|flaw|advisory|patch|alert|zero-day|rce)\b/i.test(combined) ||
    /\b(?:cisa\s+emergency\s+directive|emergency\s+(?:directive|patch|advisory))\b/i.test(combined);

  // Lower severity indicators (Medium / Low)
  const hasLowSeverityIndicator = /\b(?:low[-\s]severity|minor\s+vulnerability|informational|cvss(?:\s*v\d+)?(?:\s*score)?\s*(?:of\s*|[=:]\s*)?[0-3]\.[0-9])\b/i.test(combined);
  const hasMediumSeverityIndicator = /\b(?:medium[-\s]severity|cvss(?:\s*v\d+)?(?:\s*score)?\s*(?:of\s*|[=:]\s*)?[4-6]\.[0-9])\b/i.test(combined);

  // High severity indicators:
  // CISA KEV / Known Exploited without critical indicators lands in HIGH (or MEDIUM if lower severity context applies)
  const hasHighSeverityIndicator =
    /\b(?:cisa\s+kev|known\s+exploited(?:\s+vulnerabilit(?:y|ies))?|cisa\s+adds?\s+to\s+kev)\b/i.test(combined) ||
    /\b(?:actively\s+exploited|exploited\s+in\s+the\s+wild|in-the-wild\s+exploitation|zero-day|0-day)\b/i.test(combined) ||
    /\bcvss(?:\s*v\d+)?(?:\s*score)?\s*(?:of\s*|[=:]\s*)?(?:7\.[0-9]|8\.[0-9])\b/i.test(combined) ||
    /\bhigh[-\s]severity\b/i.test(combined) ||
    /\b(?:privilege\s+escalation|data\s+breach|confirmed\s+breach|active\s+ransomware|ransomware\s+attack|unauthorized\s+access|credential\s+theft)\b/i.test(combined);

  let severity = 'MEDIUM';
  if (hasCriticalIndicator) {
    severity = 'CRITICAL';
  } else if (hasLowSeverityIndicator && !hasHighSeverityIndicator) {
    severity = 'LOW';
  } else if (hasMediumSeverityIndicator && !hasHighSeverityIndicator) {
    severity = 'MEDIUM';
  } else if (hasHighSeverityIndicator) {
    // If lower severity context explicitly applies (e.g. CVSS 5.4 or medium severity), don't elevate to HIGH
    if (hasMediumSeverityIndicator && !/\b(?:privilege\s+escalation|data\s+breach|confirmed\s+breach|active\s+ransomware|high[-\s]severity|cvss(?:\s*v\d+)?(?:\s*score)?\s*(?:of\s*|[=:]\s*)?[7-8]\.[0-9])\b/i.test(combined)) {
      severity = 'MEDIUM';
    } else {
      severity = 'HIGH';
    }
  }

  return { category, severity };
}

// -----------------------------------------------------------------------------
// 9. SENTENCE DENSITY SCORING & SELECTION
// -----------------------------------------------------------------------------

export function scoreSentence(sentence, index = 0, title = '') {
  let score = 0;

  // Dimension 1: Flaw / Event identification (+3)
  if (/\b(?:vulnerability|vulnerabilities|flaw|flaws|bug|bugs|weakness|weaknesses|exploit|exploits|exploited|zero-day|0-day|zero-days|0-days|rce|remote code execution|privilege escalation|denial of service|dos|ddos|sql injection|sqli|buffer overflow|memory corruption|auth bypass|authentication bypass|ransomware|extortion|breach|breaches|exfiltration|malware|trojan|backdoor|phishing|cve-\d{4}-\d+)\b/i.test(sentence)) {
    score += 3;
  }

  // Dimension 2: Affected Product / Platform / Vendor (+3)
  if (CYBER_ENTITY_REGEX.test(sentence) || /\bCVE-\d{4}-\d+\b/i.test(sentence)) {
    score += 3;
  }

  // Dimension 3: Exploitation / Impact / Threat Actor (+2)
  if (/\b(?:actively exploited|in the wild|under active attack|cvss|threat actor|apt\d+|ransomware|extortion|stolen|compromised|leak|emergency directive)\b/i.test(sentence)) {
    score += 2;
  }

  // Dimension 4: Remediation / Patch / Advisory (+2)
  if (/\b(?:patch|patches|patched|fix|fixes|fixed|update|updates|updated|release|releases|released|mitigation|mitigations|workaround|workarounds|advisory|advisories|upgrade|upgrades|upgraded|version|versions)\b/i.test(sentence)) {
    score += 2;
  }

  // Position bonus: news reporting lede bonus (index 0 gets +1.5, index 1 gets +0.8)
  if (index === 0) score += 1.5;
  else if (index === 1) score += 0.8;

  return score;
}

// -----------------------------------------------------------------------------
// 10. MAIN EXTRACTIVE FALLBACK SUMMARIZER
// -----------------------------------------------------------------------------

export function extractFallbackBrief(title, rawDescription, sourceUrl = '', rawContentEncoded = '') {
  const cleanTitle = cleanHtml(title);
  let cleanDesc = cleanHtml(rawDescription);

  // If raw description is too short (e.g. teaser) but content:encoded is available within the RSS item
  if (cleanDesc.split(/\s+/).filter(Boolean).length < 28 && rawContentEncoded) {
    const cleanContent = cleanHtml(rawContentEncoded);
    if (cleanContent.split(/\s+/).filter(Boolean).length >= 28) {
      cleanDesc = cleanContent;
    }
  }

  // Tabular gate upfront
  if (isTabularData(cleanDesc)) {
    return {
      status: 'REJECTED',
      reason: 'REJECTED_TABULAR_DATA: Source contains raw CVE tables or version dumps.',
      sourceUrl,
      headline: cleanTitle,
      raw: cleanDesc,
    };
  }

  const rawSentences = splitSentences(cleanDesc);

  if (rawSentences.length === 0) {
    return {
      status: 'REJECTED',
      reason: 'REJECTED_NO_SENTENCES: Could not parse any grammatical sentences from description.',
      sourceUrl,
      headline: cleanTitle,
      raw: cleanDesc,
    };
  }

  // 1. Filter and score candidate sentences
  const candidates = [];
  for (let i = 0; i < rawSentences.length; i++) {
    const s = rawSentences[i];
    if (RSS_BOILERPLATE_REGEX.test(s)) continue;
    if (isBoilerplateSentence(s)) continue;

    const cleaned = stripCtaTail(s);
    if (!cleaned || cleaned.length < 12) continue;

    const words = cleaned.split(/\s+/).filter(Boolean).length;
    const score = scoreSentence(cleaned, i, cleanTitle);
    candidates.push({ originalIndex: i, sentence: cleaned, words, score });
  }

  if (candidates.length === 0) {
    return {
      status: 'REJECTED',
      reason: 'REJECTED_BROKEN_SENTENCE: No complete, grammatically valid sentences remained after stripping boilerplate.',
      sourceUrl,
      headline: cleanTitle,
      raw: cleanDesc,
    };
  }

  // 2. Select high-value sentences up to the word ceiling (65 words, max 3 sentences)
  // Sort candidates by score descending to prioritize high-value content
  const sortedByScore = [...candidates].sort((a, b) => b.score - a.score);

  const selectedCandidates = [];
  let currentWords = 0;

  for (const cand of sortedByScore) {
    if (selectedCandidates.length >= 3) break;

    // First sentence: only take if it stays within ceiling (<= 65 words)
    if (selectedCandidates.length === 0) {
      if (cand.words > 65) {
        continue;
      }
      selectedCandidates.push(cand);
      currentWords += cand.words;
      continue;
    }

    // Check if adding this candidate stays within ceiling (65 words) or helps reach minimum floor (28 words)
    if (currentWords + cand.words <= 65 || currentWords < 28) {
      // If we already reached comfortable 35 words, require meaningful informational score (>= 2.5) to avoid adding fluff
      if (currentWords >= 35 && cand.score < 2.5) {
        continue;
      }
      selectedCandidates.push(cand);
      currentWords += cand.words;
      if (currentWords >= 65) break;
    }
  }

  if (selectedCandidates.length === 0) {
    return {
      status: 'REJECTED',
      reason: 'REJECTED_TOO_LONG: Candidate sentences exceed maximum 65-word threshold.',
      sourceUrl,
      headline: cleanTitle,
      raw: cleanDesc,
    };
  }

  // 3. Strictly preserve original document order of selected sentences
  selectedCandidates.sort((a, b) => a.originalIndex - b.originalIndex);
  const selectedSentences = selectedCandidates.map(c => c.sentence);
  let brief = selectedSentences.join(' ').trim();

  // Validate the assembled brief through the quality gate
  const gateResult = validateExtractiveBrief(cleanTitle, brief, selectedSentences, cleanDesc);

  if (!gateResult.isValid) {
    return {
      status: 'REJECTED',
      reason: gateResult.reason,
      sourceUrl,
      headline: cleanTitle,
      extractedSentences: selectedSentences,
      wordCount: brief.split(/\s+/).filter(Boolean).length,
      raw: cleanDesc,
    };
  }

  const { category, severity } = classifyThreat(cleanTitle, brief);
  const wordCount = brief.split(/\s+/).filter(Boolean).length;

  return {
    status: 'ACCEPTED',
    headline: cleanTitle,
    summary: brief,
    wordCount,
    sentenceCount: selectedSentences.length,
    category,
    severity,
    sourceUrl,
    extractedSentences: selectedSentences,
  };
}

// -----------------------------------------------------------------------------
// 11. ARTICLE BUILDER FOR INGESTION PIPELINE
// -----------------------------------------------------------------------------

export function buildFallbackArticle(candidate, fallbackResult, normaliseUrlFn, extractCvesFn) {
  const sourceUrl = normaliseUrlFn(candidate.url);
  const { publishedAt, isPublishedTimeUnknown, ingestedAt, isFutureSkew } = normalizeTimestamp(candidate.publishedAt);

  let summary = fallbackResult.summary;
  const headline = fallbackResult.headline;
  let category = fallbackResult.category;

  const rawCveText = `${headline} ${summary} ${candidate.url || ''} ${candidate.id || ''} ${candidate.description || ''}`;
  const cves = typeof extractCvesFn === 'function' ? extractCvesFn(rawCveText) : [];

  // Guarantee that every article with CVEs mentions at least one CVE in its prose
  if (cves.length > 0) {
    if (category === 'GENERAL' || category === 'General' || !category) {
      category = 'CVE';
    }
    const hasCveInText = cves.some(cve => headline.includes(cve) || summary.includes(cve));
    if (!hasCveInText) {
      const trackingSentence = cves.length === 1
        ? `The flaw is tracked as ${cves[0]}.`
        : `The vulnerabilities are tracked as ${cves.slice(0, 3).join(', ')}.`;

      const cleanSummary = summary.replace(/[.\s]+$/, '');
      const candidateSummary = `${cleanSummary}. ${trackingSentence}`;
      if (candidateSummary.split(/\s+/).length <= 65) {
        summary = candidateSummary;
      }
    }
  } else if (category === 'CVE') {
    // If categorized as CVE but has no actual CVE ID, reclassify as Vulnerability
    category = 'VULNERABILITY';
  }

  return {
    id: sourceUrl,
    sourceUrl,
    title: headline,
    headline,
    summary,
    category,
    severity: fallbackResult.severity,
    source: candidate.sourceName || candidate.source || 'SecuBuzz',
    publishedAt,
    ingestedAt,
    isPublishedTimeUnknown,
    isFutureSkew,
    cves,
    additionalSources: [],
    isFallback: true,
  };
}
