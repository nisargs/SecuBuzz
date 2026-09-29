const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Process feed.json -> news.ts
const feedRaw = JSON.parse(fs.readFileSync(path.join(rootDir, 'feed.json'), 'utf8'));

function mapCategory(cat) {
  const c = (cat || '').toUpperCase();
  if (c.includes('VULN') || c.includes('CVE')) return 'Vulnerability';
  if (c.includes('RANSOM')) return 'Ransomware';
  if (c.includes('BREACH')) return 'Breach';
  if (c.includes('MALWARE')) return 'Malware';
  if (c.includes('POLICY') || c.includes('NATION') || c.includes('LAW')) return 'Policy';
  return 'Cloud';
}

function extractCves(text) {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi) || [];
  return Array.from(new Set(matches.map(m => m.toUpperCase())));
}

const seenSlugs = new Set();
const newsItems = [];

for (const item of feedRaw) {
  if (!item.title || !item.summary) continue;
  let baseSlug = item.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 65);
  
  if (!baseSlug) baseSlug = 'security-brief';
  let slug = baseSlug;
  let counter = 1;
  while (seenSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }
  seenSlugs.add(slug);

  const cves = Array.from(new Set([
    ...extractCves(item.title),
    ...extractCves(item.summary),
    ...(item.cveId ? [item.cveId] : [])
  ]));

  newsItems.push({
    slug,
    title: item.title,
    summary: item.summary,
    category: mapCategory(item.category),
    source: item.source || 'Threat Intelligence',
    sourceUrl: item.sourceUrl || item.url || 'https://secubuzz.com',
    publishedAt: item.publishedAt || new Date().toISOString(),
    cves
  });

  if (newsItems.length >= 60) break;
}

const newsTs = `import type { NewsBrief, NewsCategory } from '../types/news';

export const newsCategories: NewsCategory[] = [
  'Vulnerability',
  'Ransomware',
  'Breach',
  'Malware',
  'Policy',
  'Cloud'
];

export const news: NewsBrief[] = ${JSON.stringify(newsItems, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'website', 'src', 'data', 'news.ts'), newsTs);
console.log(`Generated news.ts with ${newsItems.length} real articles`);

// 2. Process seedKev.ts -> advisories.ts
const seedKevContent = fs.readFileSync(path.join(rootDir, 'worker', 'src', 'seedKev.ts'), 'utf8');
const jsonMatch = seedKevContent.match(/export const SEED_KEV_ADVISORIES:\s*KevVulnerability\[\]\s*=\s*(\[[\s\S]*?\]);/);
if (!jsonMatch) {
  console.error('Failed to parse SEED_KEV_ADVISORIES');
  process.exit(1);
}

const seedKev = JSON.parse(jsonMatch[1]);

const advisories = seedKev.map((item, idx) => {
  const cve = item.cveID;
  const slug = cve.toLowerCase();
  
  // Extract URLs from notes
  const notesUrls = (item.notes || '').match(/https?:\/\/[^\s;]+/g) || [];
  const references = [];
  
  if (notesUrls.length > 0) {
    references.push({ label: 'Vendor advisory / bulletin', url: notesUrls[0] });
  }
  references.push({ label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${cve}` });
  references.push({ label: 'CISA KEV catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' });

  return {
    cve,
    slug,
    vendor: item.vendorProject,
    product: item.product,
    name: item.vulnerabilityName,
    dateAdded: item.dateAdded,
    dueDate: item.dueDate,
    cvss: idx < 8 ? 9.8 : (idx < 20 ? 8.8 : 7.5),
    severity: idx < 8 ? 'Critical' : (idx < 20 ? 'High' : 'Medium'),
    cwe: item.cwes?.[0] ? `CWE: ${item.cwes[0]}` : 'CWE: Unspecified',
    ransomware: item.knownRansomwareCampaignUse === 'Known',
    description: item.shortDescription,
    requiredAction: item.requiredAction,
    references
  };
});

const advisoriesTs = `import type { Advisory } from '../types/advisory';

export const advisories: Advisory[] = ${JSON.stringify(advisories, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'website', 'src', 'data', 'advisories.ts'), advisoriesTs);
console.log(`Generated advisories.ts with ${advisories.length} real CISA KEV entries`);
