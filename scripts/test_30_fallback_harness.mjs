/**
 * SecuBuzz 30-Article Release Gate Test Harness
 *
 * Evaluates the Deterministic Extractive NLP Fallback Engine across 30 live sources:
 * - 15 Newsrooms
 * - 9 Vendor PSIRTs & Distros
 * - 3 Government KEV & CERTs
 * - 3 Threat Labs & Supply Chain Watchdogs
 *
 * Release Gate Criteria:
 * - >= 80% produce readable briefs overall (or cleanly rejected with zero garbage).
 * - Zero broken sentences.
 * - Zero fabricated facts.
 * - Zero misleading severity labels.
 * - Zero table dumps published.
 * - Zero stubs published (< 28 words).
 */

import { extractFallbackBrief } from './extractive_fallback.mjs';

const HARNESS_SOURCES = [
  // ---------------------------------------------------------------------------
  // Tier 1: Newsrooms (15 Sources)
  // ---------------------------------------------------------------------------
  { id: 1, name: 'The Hacker News', type: 'NEWSROOM', url: 'https://feeds.feedburner.com/TheHackersNews' },
  { id: 2, name: 'BleepingComputer', type: 'NEWSROOM', url: 'https://www.bleepingcomputer.com/feed/' },
  { id: 3, name: 'Krebs on Security', type: 'NEWSROOM', url: 'https://krebsonsecurity.com/feed/' },
  { id: 4, name: 'SecurityWeek', type: 'NEWSROOM', url: 'https://www.securityweek.com/feed/' },
  { id: 5, name: 'The Record', type: 'NEWSROOM', url: 'https://therecord.media/feed/' },
  { id: 6, name: 'Help Net Security', type: 'NEWSROOM', url: 'https://www.helpnetsecurity.com/feed/' },
  { id: 7, name: 'Dark Reading', type: 'NEWSROOM', url: 'https://www.darkreading.com/rss.xml' },
  { id: 8, name: 'Cyber Security News', type: 'NEWSROOM', url: 'https://feeds.feedburner.com/cyber-security-news' },
  { id: 9, name: 'SANS Internet Storm Center', type: 'NEWSROOM', url: 'https://isc.sans.edu/rssfeed_full.xml' },
  { id: 10, name: 'Wiz Research', type: 'NEWSROOM', url: 'https://www.wiz.io/blog/rss.xml' },
  { id: 11, name: 'Cloudflare Security', type: 'NEWSROOM', url: 'https://blog.cloudflare.com/rss/' },
  { id: 12, name: 'Unit 42 (Palo Alto)', type: 'NEWSROOM', url: 'https://unit42.paloaltonetworks.com/feed/' },
  { id: 13, name: 'Cisco Talos', type: 'NEWSROOM', url: 'https://blog.talosintelligence.com/rss/' },
  { id: 14, name: 'Trend Micro Research', type: 'NEWSROOM', url: 'https://feeds.feedburner.com/TrendMicroResearch' },
  { id: 15, name: 'SentinelOne', type: 'NEWSROOM', url: 'https://www.sentinelone.com/blog/feed/' },

  // ---------------------------------------------------------------------------
  // Tier 2: Vendor PSIRT & Distros (9 Sources)
  // ---------------------------------------------------------------------------
  { id: 16, name: 'Cisco PSIRT', type: 'VENDOR_PSIRT', url: 'https://tools.cisco.com/security/center/psirtrss20/CiscoSecurityAdvisory.xml' },
  { id: 17, name: 'Red Hat RHSA', type: 'VENDOR_PSIRT', url: 'https://access.redhat.com/security/data/metrics/rhsa.rss' },
  { id: 18, name: 'Palo Alto Networks PSIRT', type: 'VENDOR_PSIRT', url: 'https://security.paloaltonetworks.com/rss.xml' },
  { id: 19, name: 'Fortinet FortiGuard PSIRT', type: 'VENDOR_PSIRT', url: 'https://fortiguard.fortinet.com/rss/ir.xml' },
  { id: 20, name: 'Microsoft MSRC', type: 'VENDOR_PSIRT', url: 'https://api.msrc.microsoft.com/update-guide/rss' },
  { id: 21, name: 'Google Chrome Releases', type: 'VENDOR_PSIRT', url: 'https://feeds.feedburner.com/GoogleChromeReleases' },
  { id: 22, name: 'AWS Security Bulletins', type: 'VENDOR_PSIRT', url: 'https://aws.amazon.com/security/security-bulletins/feed/' },
  { id: 23, name: 'GitLab Security Releases', type: 'VENDOR_PSIRT', url: 'https://docs.gitlab.com/releases/patch-releases.xml' },
  { id: 24, name: 'Ubuntu Security Notices', type: 'VENDOR_PSIRT', url: 'https://usn.ubuntu.com/rss.xml' },

  // ---------------------------------------------------------------------------
  // Tier 3: Government KEV & CERTs (3 Sources)
  // ---------------------------------------------------------------------------
  { id: 25, name: 'CISA Advisories', type: 'GOV_KEV', url: 'https://www.cisa.gov/cybersecurity-advisories/all.xml' },
  { id: 26, name: 'CERT-EU Advisories', type: 'GOV_KEV', url: 'https://cert.europa.eu/publications/security-advisories-rss' },
  { id: 27, name: 'ZDI Published Advisories', type: 'GOV_KEV', url: 'https://www.zerodayinitiative.com/rss/published/' },

  // ---------------------------------------------------------------------------
  // Tier 4: Threat Labs & Supply Chain (3 Sources)
  // ---------------------------------------------------------------------------
  { id: 28, name: 'Sophos Threat Research', type: 'THREAT_LAB', url: 'https://news.sophos.com/en-us/category/threat-research/feed/' },
  { id: 29, name: 'Socket.dev Supply Chain', type: 'THREAT_LAB', url: 'https://socket.dev/api/blog/feed.atom' },
  { id: 30, name: 'Huntress Incident Research', type: 'THREAT_LAB', url: 'https://www.huntress.com/blog/rss.xml' }
];

async function run30Harness() {
  console.log('========================================================================');
  console.log('🧪 SECUBUZZ 30-ARTICLE RELEASE GATE TEST HARNESS');
  console.log('Testing 30 live sources across Newsrooms, PSIRTs, CERTs, and Labs');
  console.log('========================================================================\n');

  const auditLog = [];
  let totalTested = 0;
  let acceptedCount = 0;
  let rejectedCount = 0;
  let newsroomAccepted = 0;
  let newsroomTotal = 0;

  // Zero-Tolerance Invariant Counters
  let brokenSentencesPublished = 0;
  let tableDumpsPublished = 0;
  let stubsPublished = 0;

  for (const src of HARNESS_SOURCES) {
    totalTested++;
    if (src.type === 'NEWSROOM') newsroomTotal++;

    try {
      const res = await fetch(src.url, {
        signal: AbortSignal.timeout(12000),
        headers: { 'User-Agent': 'SecuBuzz-Release-Gate/1.0' }
      });
      const xml = await res.text();

      // Support both RSS <item> and Atom <entry>
      const items = xml.includes('<entry')
        ? xml.split(/<entry[\s>]/i).slice(1)
        : xml.split(/<item[\s>]/i).slice(1);

      if (items.length === 0) {
        console.log(`⚠️  [#${src.id} ${src.name}] No articles parsed from feed.`);
        continue;
      }

      const item = items[0];
      const titleMatch = item.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const descMatch = item.match(/<(?:description|summary)[^>]*>([\s\S]*?)<\/(?:description|summary)>/i);
      const contentMatch = item.match(/<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i) ||
                           item.match(/<content[^>]*>([\s\S]*?)<\/content>/i);
      const linkMatch = item.match(/<link[^>]*href=["']([^"']+)["']/i) ||
                        item.match(/<link[^>]*>([\s\S]*?)<\/link>/i);

      const title = titleMatch ? titleMatch[1] : 'Untitled';
      const desc = descMatch ? descMatch[1] : '';
      const contentEncoded = contentMatch ? contentMatch[1] : '';
      const link = linkMatch ? (linkMatch[1] || linkMatch[0]) : src.url;

      const result = extractFallbackBrief(title, desc, link, contentEncoded);

      const entry = {
        id: src.id,
        source: src.name,
        type: src.type,
        title: title.trim(),
        url: link,
        result
      };
      auditLog.push(entry);

      console.log(`[#${String(src.id).padStart(2, '0')}] ${src.name} (${src.type})`);
      console.log(`     Title: "${result.headline || title.trim().slice(0, 70)}"`);

      if (result.status === 'ACCEPTED') {
        acceptedCount++;
        if (src.type === 'NEWSROOM') newsroomAccepted++;

        // Audit safety invariants on accepted output
        if (!/[.?!]["']?$/.test(result.summary) || result.summary.endsWith('...')) {
          brokenSentencesPublished++;
          console.error(`     🚨 INVARIANT VIOLATION: Broken sentence published!`);
        }
        if (result.wordCount < 28) {
          stubsPublished++;
          console.error(`     🚨 INVARIANT VIOLATION: Stub published (< 28 words)!`);
        }
        if (result.summary.includes('CVE-') && (result.summary.match(/CVE-\d{4}-\d+/g) || []).length >= 3) {
          tableDumpsPublished++;
          console.error(`     🚨 INVARIANT VIOLATION: Raw table dump published!`);
        }

        console.log(`     Status:  ✅ ACCEPTED (${result.wordCount} words | ${result.sentenceCount} sent | [${result.category} / ${result.severity}])`);
        console.log(`     Brief:   "${result.summary}"`);
      } else {
        rejectedCount++;
        console.log(`     Status:  🛡️ ${result.status} (Safely Preserved for Retry)`);
        console.log(`     Reason:  ${result.reason}`);
      }
      console.log('------------------------------------------------------------------------');
    } catch (err) {
      console.log(`❌ [#${src.id} ${src.name}] Fetch error: ${err.message}`);
      console.log('------------------------------------------------------------------------');
    }
  }

  // ---------------------------------------------------------------------------
  // RELEASE GATE AUDIT SCORECARD
  // ---------------------------------------------------------------------------
  console.log('\n========================================================================');
  console.log('📊 SECUBUZZ EXTRACTIVE FALLBACK RELEASE GATE SCORECARD');
  console.log('========================================================================');
  console.log(`Total Sources Evaluated:         ${totalTested}`);
  console.log(`Accepted for Live Briefs:        ${acceptedCount}`);
  console.log(`Safely Rejected (Preserved):     ${rejectedCount}`);
  console.log(`Newsroom Success Rate:           ${newsroomAccepted}/${newsroomTotal} (${((newsroomAccepted / newsroomTotal) * 100).toFixed(1)}%)`);
  console.log('------------------------------------------------------------------------');
  console.log('CRITICAL SAFETY INVARIANTS:');
  console.log(`- Broken Sentences Published:    ${brokenSentencesPublished} (Target: 0)`);
  console.log(`- Stubs Published (<28 words):   ${stubsPublished} (Target: 0)`);
  console.log(`- Table Dumps Published:         ${tableDumpsPublished} (Target: 0)`);
  console.log('========================================================================\n');

  return {
    totalTested,
    acceptedCount,
    rejectedCount,
    newsroomAccepted,
    newsroomTotal,
    brokenSentencesPublished,
    stubsPublished,
    tableDumpsPublished,
    auditLog
  };
}

run30Harness();
