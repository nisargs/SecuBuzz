import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const FEED_FILE = path.join(rootDir, 'feed.json');
const R2_FEED_URL = 'https://pub-3fb02516aa81498eb34da1b79161b1c8.r2.dev/feed.json';
const CISA_KEV_URL = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';

const OUTPUT_NEWS_TS = path.join(rootDir, 'website', 'src', 'data', 'news.ts');
const OUTPUT_ADVISORIES_TS = path.join(rootDir, 'website', 'src', 'data', 'advisories.ts');
const OUTPUT_RSS_XML = path.join(rootDir, 'website', 'public', 'rss.xml');

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const ENTITY_TERMS = [
  'bitget', 'kiteworks', 'netscaler', 'citrix', 'wireshark', 'snowflake',
  'chatgpt', 'elementor', 'sharepoint', 'fortinet', 'palo alto', 'ivanti',
  'sonicwall', 'cisco', 'crowdstrike', 'vmware', 'salesforce', 'qualys',
  'telegram', 'ransomhub', 'lockbit', 'akira', 'qilin', 'blacksuit',
  'coregraphics', 'core graphics', 'safari', 'webkit', 'ios'
];

const CVE_SCORE_OVERRIDES = {
  'CVE-2025-52691': 10.0,
};

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'in', 'on', 'for', 'to', 'of', 'and', 'is', 'with', 'after', 'from',
  'targets', 'fixes', 'flaw', 'vulnerability', 'vulnerabilities', 'security', 'cyber',
  'attack', 'attacks', 'new', 'release', 'addresses', 'update', 'updates', 'by', 'as',
  'at', 'about', 'over', 'into', 'warns', 'alert', 'patch', 'patches', 'zero-day', 'exploit',
  'exploited', 'users', 'critical', 'high', 'active', 'actively', 'amid', 'amidst', 'via'
]);

function getKeywords(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function mapCategory(cat, text = '') {
  const upper = (cat || '').toUpperCase();
  if (upper === 'BREACH') return 'Breach';
  if (upper === 'RANSOMWARE') return 'Ransomware';
  if (upper === 'CVE' || upper === 'VULNERABILITY') return 'Vulnerability';
  if (upper === 'NATION_STATE') return 'Malware';
  const lowerText = text.toLowerCase();
  if (lowerText.includes('cloud') || lowerText.includes('aws') || lowerText.includes('azure') || lowerText.includes('container')) {
    return 'Cloud';
  }
  if (lowerText.includes('malware') || lowerText.includes('trojan') || lowerText.includes('rat ') || lowerText.includes('spyware')) {
    return 'Malware';
  }
  return 'Policy';
}

function extractCves(text) {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

function slugify(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function escapeXml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function loadFeed() {
  if (fs.existsSync(FEED_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(FEED_FILE, 'utf8'));
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    } catch (e) {
      console.warn('Failed to parse local feed.json, falling back to R2', e);
    }
  }

  console.log('Fetching live feed from Cloudflare R2...');
  const res = await fetch(R2_FEED_URL);
  if (!res.ok) throw new Error(`HTTP error ${res.status} fetching R2 feed`);
  return await res.json();
}

async function syncNews() {
  const feed = await loadFeed();
  console.log(`Loaded ${feed.length} raw articles from feed`);

  const cutoffTime = Date.now() - THIRTY_DAYS_MS;

  // 1. Sort newest first & filter older than 30 days
  const recentArticles = feed
    .filter(art => {
      const t = Date.parse(art.publishedAt || art.pubDate || 0) || 0;
      return t >= cutoffTime;
    })
    .sort((a, b) => {
      const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
      const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
      return timeB - timeA;
    });

  console.log(`Filtered to ${recentArticles.length} articles within 30-day window`);

  const seenSlugs = new Map();
  const deduped = [];

  for (const art of recentArticles) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const fullText = (title + ' ' + summary).toLowerCase();
    const cves = extractCves(title + ' ' + summary);
    const keywords = getKeywords(title);
    const category = mapCategory(art.category, title + ' ' + summary);
    const time = Date.parse(publishedAt) || 0;

    let rawSlug = slugify(title);
    if (!rawSlug) rawSlug = 'brief';

    // Deduplication check
    let duplicateOf = null;
    for (const existing of deduped) {
      const existingTime = Date.parse(existing.publishedAt) || 0;
      const timeDiffDays = Math.abs(time - existingTime) / (1000 * 3600 * 24);
      if (timeDiffDays > 7) continue;

      // 1) Shared CVE
      if (cves.length > 0 && existing.cves.some(c => cves.includes(c))) {
        duplicateOf = existing;
        break;
      }

      // 2) Shared Enterprise Entity
      const existingFull = (existing.title + ' ' + existing.summary).toLowerCase();
      for (const ent of ENTITY_TERMS) {
        if (fullText.includes(ent) && existingFull.includes(ent)) {
          duplicateOf = existing;
          break;
        }
      }
      if (duplicateOf) break;

      // 3) Shared specific soldier event
      if (fullText.includes('soldier') && existingFull.includes('soldier')) {
        duplicateOf = existing;
        break;
      }

      // 4) Normalized component / zero-day matching (e.g. Apple CoreGraphics zero-day coverage)
      const normFull = fullText.replace(/[^a-z0-9]/g, '');
      const normExisting = existingFull.replace(/[^a-z0-9]/g, '');
      if (
        (normFull.includes('coregraphics') && normExisting.includes('coregraphics')) ||
        (normFull.includes('apple') && normFull.includes('zeroday') && normExisting.includes('apple') && normExisting.includes('zeroday') && timeDiffDays <= 3)
      ) {
        duplicateOf = existing;
        break;
      }

      // 5) Overlap of 2+ significant keywords within 3 days
      const existingKw = new Set(existing.keywords);
      const overlap = keywords.filter(k => existingKw.has(k));
      if (overlap.length >= 2 && timeDiffDays <= 3) {
        duplicateOf = existing;
        break;
      }
    }

    if (duplicateOf) {
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some(s => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }
      if (!duplicateOf.aliases) duplicateOf.aliases = [];
      if (!duplicateOf.aliases.includes(rawSlug)) {
        duplicateOf.aliases.push(rawSlug);
      }
      if ((!duplicateOf.cves || duplicateOf.cves.length === 0) && cves.length > 0) {
        duplicateOf.cves = cves;
      }
      continue;
    }

    let slug = rawSlug;
    if (seenSlugs.has(slug)) {
      const count = seenSlugs.get(slug) + 1;
      seenSlugs.set(slug, count);
      slug = `${slug}-${count}`;
    } else {
      seenSlugs.set(slug, 1);
    }

    const rawSev = (art.severity || '').toUpperCase();
    const severity = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(rawSev) ? rawSev : undefined;

    const item = {
      slug,
      title,
      summary,
      category,
      severity,
      source,
      sourceUrl,
      publishedAt,
      cves,
      keywords,
      additionalSources: [],
      aliases: []
    };

    deduped.push(item);
  }

  // Strip temporary internal keywords before serialization
  const cleanBriefs = deduped.map(({ keywords, ...rest }) => rest);
  console.log(`Deduplicated into ${cleanBriefs.length} clean unique briefs`);

  // Write website/src/data/news.ts
  const newsTsContent = `import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Vulnerability',
  'Ransomware',
  'Breach',
  'Malware',
  'Policy',
  'Cloud'
];

export const news: NewsBrief[] = ${JSON.stringify(cleanBriefs, null, 2)};
`;

  fs.writeFileSync(OUTPUT_NEWS_TS, newsTsContent, 'utf8');
  console.log(`Updated ${OUTPUT_NEWS_TS}`);

  // Write website/public/rss.xml
  const buildDate = new Date().toUTCString();
  const rssItems = cleanBriefs.slice(0, 50).map(art => {
    const headline = escapeXml(art.title);
    const link = `https://secubuzz.com/news/${art.slug}`;
    const pubDate = art.publishedAt ? new Date(art.publishedAt).toUTCString() : buildDate;
    const cleanSummary = (art.summary || '').replace(/[\x00-\x1F\x7F]/g, '');

    return `    <item>
      <title>${headline}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${cleanSummary}]]></description>
      <pubDate>${pubDate}</pubDate>
      <source url="${art.sourceUrl || link}">${escapeXml(art.source)}</source>
      <category>${escapeXml(art.category)}</category>
    </item>`;
  }).join('\n');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SecuBuzz · Cybersecurity News Briefs</title>
    <link>https://secubuzz.com/news</link>
    <description>Fast, factual 60-word cybersecurity briefs and CISA KEV alerts for security professionals.</description>
    <language>en-us</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="https://secubuzz.com/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>
`;

  fs.writeFileSync(OUTPUT_RSS_XML, rssXml, 'utf8');
  console.log(`Updated ${OUTPUT_RSS_XML}`);
}

async function syncAdvisories() {
  try {
    console.log('Fetching live CISA KEV catalog...');
    const res = await fetch(CISA_KEV_URL, {
      headers: { 'User-Agent': 'SecuBuzz/1.0 (+https://secubuzz.com)' }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching CISA KEV`);
    const data = await res.json();
    if (!data || !Array.isArray(data.vulnerabilities)) return;

    const sorted = [...data.vulnerabilities].sort((a, b) => {
      const timeA = Date.parse(a.dateAdded) || 0;
      const timeB = Date.parse(b.dateAdded) || 0;
      return timeB - timeA;
    });

    const advisories = sorted.map(item => {
      const cve = item.cveID;
      const isRansomware =
        item.knownRansomwareCampaignUse === 'Known' ||
        item.knownRansomwareCampaignUse === 'known' ||
        item.knownRansomwareCampaignUse === true;

      const rawCwe = item.cwes && Array.isArray(item.cwes) && item.cwes.length > 0
        ? item.cwes.join(', ')
        : (item.cwe || '');
      const cleanCwe = rawCwe ? rawCwe.replace(/^(CWE[:\s-]+)+/i, 'CWE-').trim() : '—';

      const cvss = CVE_SCORE_OVERRIDES[cve] ?? (typeof item.cvss === 'number' ? item.cvss : undefined);
      const severity = cvss !== undefined
        ? (cvss >= 9.0 ? 'Critical' : (cvss >= 7.0 ? 'High' : (cvss >= 4.0 ? 'Medium' : 'Low')))
        : (isRansomware ? 'Critical' : 'High');

      return {
        cve,
        slug: cve.toLowerCase(),
        vendor: item.vendorProject || 'Enterprise Vendor',
        product: item.product || 'Software System',
        name: item.vulnerabilityName || cve,
        dateAdded: item.dateAdded || '',
        dueDate: item.dueDate || 'Immediate',
        cvss,
        severity,
        cwe: cleanCwe ? `CWE-${cleanCwe.replace(/^CWE-/i, '')}` : '—',
        ransomware: isRansomware,
        description: item.shortDescription || item.vulnerabilityName || '',
        requiredAction: (item.requiredAction || 'Apply vendor updates according to instructions.').replace(/\s*\(see URL in Notes\)/gi, '').trim(),
        references: [
          { label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${cve}` },
          { label: 'CISA KEV catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' }
        ]
      };
    });

    const advContent = `import type { Advisory } from '../types/advisory';

export const advisories: Advisory[] = ${JSON.stringify(advisories, null, 2)};
`;

    fs.writeFileSync(OUTPUT_ADVISORIES_TS, advContent, 'utf8');
    console.log(`Updated ${OUTPUT_ADVISORIES_TS} with ${advisories.length} CISA KEV entries`);
  } catch (err) {
    console.warn('Could not sync CISA advisories statically:', err);
  }
}

async function main() {
  await syncNews();
  await syncAdvisories();
}

main().catch(err => {
  console.error('Failed to sync website data:', err);
  process.exit(1);
});
