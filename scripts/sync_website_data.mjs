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

function createSlug(headline = '', id = '') {
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  let hash = 0;
  const idStr = id || headline || '';
  for (let i = 0; i < idStr.length; i++) {
    hash = (hash << 5) - hash + idStr.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(6, '0').slice(0, 6);
  return base ? `${base}-${hex}` : `article-${hex}`;
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
        console.log(`Loaded ${data.length} articles from local feed.json`);
        return data;
      }
    } catch (e) {
      console.warn('Failed to parse local feed.json, falling back to R2:', e);
    }
  }

  try {
    console.log('Fetching live feed from Cloudflare R2...');
    const res = await fetch(R2_FEED_URL);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        console.log(`Loaded ${data.length} live articles from R2 into memory`);
        return data;
      }
    }
  } catch (e) {
    console.warn('Failed to fetch live feed from R2:', e.message);
  }

  throw new Error('No feed data available from local cache or R2');
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
      const dupSlug = createSlug(title, art.id || art.sourceUrl || art.url || title);
      if (!duplicateOf.aliases.includes(dupSlug)) duplicateOf.aliases.push(dupSlug);
      if (rawSlug && !duplicateOf.aliases.includes(rawSlug)) duplicateOf.aliases.push(rawSlug);
      if ((!duplicateOf.cves || duplicateOf.cves.length === 0) && cves.length > 0) {
        duplicateOf.cves = cves;
      }
      continue;
    }

    const articleId = art.id || art.sourceUrl || art.url || title;
    const slug = createSlug(title, articleId);
    const baseSlug = (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
    const hex = slug.slice(-6);

    const aliases = [baseSlug, `article-${hex}`, hex];
    if (rawSlug && rawSlug !== slug && !aliases.includes(rawSlug)) {
      aliases.push(rawSlug);
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
      aliases
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

const GITHUB_ADVISORIES_URL = 'https://api.github.com/advisories?per_page=50';

function formatEcosystem(ecosystem) {
  if (!ecosystem) return 'Open Source';
  const lower = ecosystem.toLowerCase();
  if (lower === 'go') return 'Go';
  if (lower === 'npm') return 'npm';
  if (lower === 'pypi') return 'Python (PyPI)';
  if (lower === 'maven') return 'Java (Maven)';
  if (lower === 'rubygems') return 'RubyGems';
  if (lower === 'nuget') return '.NET (NuGet)';
  if (lower === 'rust' || lower === 'cargo') return 'Rust (Cargo)';
  if (lower === 'packagist') return 'PHP (Packagist)';
  return ecosystem.charAt(0).toUpperCase() + ecosystem.slice(1);
}

function formatProductName(product) {
  if (!product) return 'Software System';
  if (product.startsWith('github.com/') || product.startsWith('gitlab.com/')) {
    const parts = product.split('/');
    if (parts.length >= 3) {
      const owner = parts[1];
      const repo = parts[2];
      const version = parts[3] ? ` (${parts[3]})` : '';
      return `${repo}${version} · ${owner}`;
    }
  }
  return product;
}

function cleanAdvisoryDescription(rawDesc, fallbackSummary) {
  let text = (rawDesc || fallbackSummary || '').trim();
  if (!text) return '';
  text = text.replace(/```[\s\S]*?```/g, '');
  const summaryMatch = text.match(/(?:^|\n)#+\s*Summary\s*\n+([\s\S]*?)(?=\n#+|$)/i);
  if (summaryMatch && summaryMatch[1].trim().length > 30) {
    text = summaryMatch[1];
  }
  text = text.replace(/^#+\s+.*$/gm, '');
  text = text.replace(/#+\s*(?:Summary|Details|Impact|Patches|Workarounds|References|PoC|Proof of Concept)\b:?/gi, '');
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  text = text.replace(/https?:\/\/\S+/g, '');
  text = text.replace(/`([^`]+)`/g, '$1');
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/\*([^*]+)\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  // Clean HTML markup tags (preserving non-tag tokens like <host>, <port>, <user>)
  text = text.replace(/<\/?(?:p|div|span|a|br|h[1-6]|ul|ol|li|code|pre|b|i|strong|em|table|tr|td|th|tbody|thead|blockquote|hr|img|section|article)\b[^>]*>/gi, ' ');
  // Unescape standard HTML entities
  text = text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
  text = text.replace(/\r\n|\n|\r/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length < 20 && fallbackSummary) {
    text = fallbackSummary.trim();
  }
  if (text.length > 400) {
    const periodIdx = text.slice(0, 400).lastIndexOf('. ');
    if (periodIdx > 120) {
      text = text.slice(0, periodIdx + 1);
    } else {
      const spaceIdx = text.slice(0, 400).lastIndexOf(' ');
      if (spaceIdx > 80) {
        text = `${text.slice(0, spaceIdx)}...`;
      } else {
        text = `${text.slice(0, 400)}...`;
      }
    }
  }
  return text;
}

async function fetchGitHubAdvisories() {
  try {
    const res = await fetch(GITHUB_ADVISORIES_URL, {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'SecuBuzz-Web-Sync/1.0 (+https://secubuzz.com)'
      }
    });
    if (!res.ok) {
      console.warn(`GitHub Advisories fetch returned HTTP ${res.status}`);
      return [];
    }
    const rawList = await res.json();
    if (!Array.isArray(rawList)) return [];

    return rawList.map(item => {
      const firstVuln = item.vulnerabilities?.[0];
      const rawPkgName = firstVuln?.package?.name || 'Open Source Package';
      const formattedPkg = formatProductName(rawPkgName);
      const ecosystem = formatEcosystem(firstVuln?.package?.ecosystem);
      const firstPatched = firstVuln?.first_patched_version;

      const rawSeverity = (item.severity || '').toUpperCase();
      const severity = rawSeverity === 'CRITICAL' ? 'Critical' : (rawSeverity === 'HIGH' ? 'High' : (rawSeverity === 'LOW' ? 'Low' : 'Medium'));
      const cleanDesc = cleanAdvisoryDescription(item.description, item.summary);
      const cvss = item.cvss_severities?.cvss_v4?.score || item.cvss_severities?.cvss_v3?.score;
      const cve = item.cve_id || item.ghsa_id;

      return {
        cve,
        slug: cve.toLowerCase(),
        vendor: ecosystem,
        product: formattedPkg,
        name: item.summary || cve,
        dateAdded: item.published_at ? item.published_at.split('T')[0] : '',
        dueDate: '',
        cvss,
        severity,
        cwe: (item.cwes?.[0]?.cwe_id || '—').replace(/^CWE:\s*/i, ''),
        ransomware: false,
        description: cleanDesc,
        requiredAction: firstPatched
          ? `Upgrade ${formattedPkg} to version ${firstPatched} or later.`
          : 'No patched release available yet. Check advisory mitigations and workarounds.',
        references: [
          { label: 'GitHub Advisory', url: item.html_url },
          ...(item.cve_id ? [{ label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${item.cve_id}` }] : [])
        ]
      };
    });
  } catch (err) {
    console.warn('Failed to fetch GitHub Advisories:', err);
    return [];
  }
}

async function syncAdvisories() {
  try {
    console.log('Fetching live CISA KEV catalog and GitHub Advisories...');
    const [cisaRes, githubAdvisories] = await Promise.all([
      fetch(CISA_KEV_URL, {
        headers: { 'User-Agent': 'SecuBuzz/1.0 (+https://secubuzz.com)' }
      }),
      fetchGitHubAdvisories()
    ]);
    if (!cisaRes.ok) throw new Error(`HTTP ${cisaRes.status} fetching CISA KEV`);
    const data = await cisaRes.json();
    if (!data || !Array.isArray(data.vulnerabilities)) return;

    const sortedCisa = [...data.vulnerabilities].sort((a, b) => {
      const timeA = Date.parse(a.dateAdded) || 0;
      const timeB = Date.parse(b.dateAdded) || 0;
      return timeB - timeA;
    });

    const cisaAdvisories = sortedCisa.map(item => {
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
        dueDate: item.dueDate || '',
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

    // Merge and deduplicate by CVE ID
    const cisaCveSet = new Set(cisaAdvisories.map(a => a.cve.toUpperCase()));
    const uniqueGithub = githubAdvisories.filter(gh => !cisaCveSet.has(gh.cve.toUpperCase()));

    const combined = [...cisaAdvisories, ...uniqueGithub].sort((a, b) => {
      const timeA = Date.parse(a.dateAdded) || 0;
      const timeB = Date.parse(b.dateAdded) || 0;
      return timeB - timeA;
    });

    const advContent = `import type { Advisory } from '../types/advisory';

export const advisories: Advisory[] = ${JSON.stringify(combined, null, 2)};
`;

    fs.writeFileSync(OUTPUT_ADVISORIES_TS, advContent, 'utf8');
    console.log(`Updated ${OUTPUT_ADVISORIES_TS} with ${combined.length} combined advisories (${cisaAdvisories.length} CISA KEV + ${uniqueGithub.length} GitHub)`);
  } catch (err) {
    console.warn('Could not sync advisories statically:', err);
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
