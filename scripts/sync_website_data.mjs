import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const FEED_FILE = path.join(rootDir, 'feed.json');
const R2_FEED_URL = 'https://pub-3fb02516aa81498eb34da1b79161b1c8.r2.dev/feed.json';
const OUTPUT_NEWS_TS = path.join(rootDir, 'website', 'src', 'data', 'news.ts');
const OUTPUT_RSS_XML = path.join(rootDir, 'website', 'public', 'rss.xml');

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

async function main() {
  const feed = await loadFeed();
  console.log(`Loaded ${feed.length} raw articles from feed`);

  // Sort newest first
  feed.sort((a, b) => {
    const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
    const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
    return timeB - timeA;
  });

  const seenSlugs = new Map();
  const cveMap = new Map();
  const titleMap = new Map();

  const deduped = [];

  for (const art of feed) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const cves = extractCves(title + ' ' + summary);
    const category = mapCategory(art.category, title + ' ' + summary);

    let rawSlug = slugify(title);
    if (!rawSlug) rawSlug = 'brief';

    // Deduplication check:
    // 1) Shared CVE within 48h
    // 2) Identical slug/headline
    let duplicateOf = null;

    if (cves.length > 0) {
      for (const cve of cves) {
        if (cveMap.has(cve)) {
          duplicateOf = cveMap.get(cve);
          break;
        }
      }
    }

    if (!duplicateOf && titleMap.has(rawSlug)) {
      duplicateOf = titleMap.get(rawSlug);
    }

    if (duplicateOf) {
      // Merge as additionalSource
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some(s => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }
      if (!duplicateOf.aliases) duplicateOf.aliases = [];
      if (!duplicateOf.aliases.includes(rawSlug)) {
        duplicateOf.aliases.push(rawSlug);
      }
      continue;
    }

    // Allocate slug
    let slug = rawSlug;
    if (seenSlugs.has(slug)) {
      const count = seenSlugs.get(slug) + 1;
      seenSlugs.set(slug, count);
      slug = `${slug}-${count}`;
    } else {
      seenSlugs.set(slug, 1);
    }

    const item = {
      slug,
      title,
      summary,
      category,
      source,
      sourceUrl,
      publishedAt,
      cves,
    };

    deduped.push(item);

    // Record for deduplication of following older articles
    for (const cve of cves) {
      cveMap.set(cve, item);
    }
    titleMap.set(rawSlug, item);
  }

  console.log(`Deduplicated into ${deduped.length} clean briefs`);

  // 1. Write website/src/data/news.ts
  const newsTsContent = `import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Vulnerability',
  'Ransomware',
  'Breach',
  'Malware',
  'Policy',
  'Cloud'
];

export const news: NewsBrief[] = ${JSON.stringify(deduped, null, 2)};
`;

  fs.writeFileSync(OUTPUT_NEWS_TS, newsTsContent, 'utf8');
  console.log(`Updated ${OUTPUT_NEWS_TS}`);

  // 2. Write website/public/rss.xml
  const buildDate = new Date().toUTCString();
  const rssItems = deduped.slice(0, 50).map(art => {
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

main().catch(err => {
  console.error('Failed to sync website data:', err);
  process.exit(1);
});
