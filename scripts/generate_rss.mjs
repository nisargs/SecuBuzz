import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Read news.ts
const newsFile = path.join(rootDir, 'website', 'src', 'data', 'news.ts');
const content = fs.readFileSync(newsFile, 'utf8');
const match = content.match(/export const news: NewsBrief\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not parse news array from news.ts');
  process.exit(1);
}

const news = JSON.parse(match[1]);
const buildDate = new Date().toUTCString();

function escapeXml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const items = news.slice(0, 50).map(art => {
  const headline = escapeXml(art.title || art.headline || 'Threat Intelligence Brief');
  const slug = art.slug;
  const link = `https://secubuzz.com/news/${slug}`;
  const pubDate = art.publishedAt ? new Date(art.publishedAt).toUTCString() : buildDate;
  const cleanSummary = (art.summary || '').replace(/[\x00-\x1F\x7F]/g, '');

  return `    <item>
      <title>${headline}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${cleanSummary}]]></description>
      <pubDate>${pubDate}</pubDate>
      <source url="${art.sourceUrl || link}">${escapeXml(art.source || 'SecuBuzz')}</source>
      ${art.category ? `<category>${escapeXml(art.category)}</category>` : ''}
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
${items}
  </channel>
</rss>
`;

const publicRss = path.join(rootDir, 'website', 'public', 'rss.xml');
fs.writeFileSync(publicRss, rssXml);
console.log(`Generated ${publicRss} with ${news.length} items`);
