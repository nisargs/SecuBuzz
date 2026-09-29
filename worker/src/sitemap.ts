export interface ArticleItem {
  id: string;
  headline?: string;
  title?: string;
  summary: string;
  sourceName?: string;
  source?: string;
  sourceUrl?: string;
  url?: string;
  category?: string;
  severity?: string;
  publishedAt?: string;
  vendorProject?: string;
  product?: string;
  dueDate?: string;
  requiredAction?: string;
  patchedVersion?: string;
  vulnerableVersionRange?: string;
}

export interface KevVulnerability {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  requiredAction: string;
  dueDate: string;
  knownRansomwareCampaignUse?: string;
  notes?: string;
}

export function createSlug(headline: string = '', id: string = ''): string {
  const base = headline
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(6, '0').slice(0, 6);
  return base ? `${base}-${hex}` : `article-${hex}`;
}

export function generateSitemapXml(
  articles: ArticleItem[] = [],
  advisories: KevVulnerability[] = []
): string {
  const today = new Date().toISOString().slice(0, 10);

  const staticUrls = [
    { loc: 'https://secubuzz.com/', priority: '1.0', changefreq: 'daily' },
    { loc: 'https://secubuzz.com/news', priority: '0.9', changefreq: 'hourly' },
    { loc: 'https://secubuzz.com/advisories', priority: '0.9', changefreq: 'daily' },
    { loc: 'https://secubuzz.com/download', priority: '0.9', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/publishers', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/privacy', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/terms', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/contact', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/about', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://secubuzz.com/account-deletion', priority: '0.6', changefreq: 'monthly' },
  ];

  const staticEntries = staticUrls
    .map(
      u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  const articleEntries = articles
    .map(art => {
      const headline = art.headline || art.title || '';
      const slug = createSlug(headline, art.id);
      const mod = art.publishedAt ? art.publishedAt.slice(0, 10) : today;
      return `  <url>
    <loc>https://secubuzz.com/news/${slug}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('\n');

  const advisoryEntries = advisories
    .map(adv => {
      const slug = adv.cveID.toLowerCase();
      const mod = adv.dateAdded ? adv.dateAdded.slice(0, 10) : today;
      return `  <url>
    <loc>https://secubuzz.com/advisories/${slug}</loc>
    <lastmod>${mod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${articleEntries}
${advisoryEntries}
</urlset>`;
}
