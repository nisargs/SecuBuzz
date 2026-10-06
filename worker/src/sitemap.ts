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
    { loc: 'https://secubuzz.com/terms', priority: '0.8', changefreq: 'monthly' },
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

export function generateRssXml(articles: ArticleItem[] = []): string {
  const buildDate = new Date().toUTCString();
  const items = articles.slice(0, 50).map(art => {
    const headline = art.headline || art.title || 'Threat Intelligence Brief';
    const slug = createSlug(headline, art.id);
    const link = `https://secubuzz.com/news/${slug}`;
    const pubDate = art.publishedAt ? new Date(art.publishedAt).toUTCString() : buildDate;
    const cleanSummary = (art.summary || '').replace(/[\x00-\x1F\x7F]/g, '');

    return `    <item>
      <title><![CDATA[${headline}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${cleanSummary}]]></description>
      <pubDate>${pubDate}</pubDate>
      <source url="${art.sourceUrl || art.url || link}">${art.sourceName || art.source || 'SecuBuzz'}</source>
      ${art.category ? `<category>${art.category}</category>` : ''}
    </item>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
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
</rss>`;
}

export function injectMetaTags(
  html: string,
  pathname: string,
  articles: ArticleItem[],
  advisories: KevVulnerability[]
): string {
  let title = 'SecuBuzz · Quick Cybersecurity News in 60 Words & CISA KEV Radar';
  let description = 'Quick, factual 60-word cybersecurity news briefs and CISA KEV zero-day tracking for security professionals. Zero tracking, fast triage, verified sources.';
  let canonicalPath = pathname.replace(/\/$/, '') || '';
  let ogType = 'website';
  let jsonLdObj: Record<string, unknown> | null = null;

  if (pathname === '/' || pathname === '') {
    title = 'SecuBuzz · Quick Cybersecurity News in 60 Words & CISA KEV Radar';
    description = 'Quick, factual 60-word cybersecurity news briefs and CISA KEV zero-day tracking for security professionals. Zero tracking, fast triage, verified sources.';
    canonicalPath = '';
    jsonLdObj = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'SecuBuzz',
      url: 'https://secubuzz.com/',
      description,
      publisher: {
        '@type': 'Organization',
        name: 'MiSo Labs',
        url: 'https://secubuzz.com',
      },
    };
  } else if (pathname === '/news') {
    title = 'Quick Cybersecurity News in 60 Words · SecuBuzz';
    description = 'Quick, concise 60-word cybersecurity news briefs covering active zero-days, enterprise ransomware campaigns, and CISA advisories.';
    jsonLdObj = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Quick Cybersecurity News Briefs',
      url: 'https://secubuzz.com/news',
      description,
    };
  } else if (pathname.startsWith('/news/')) {
    const slug = pathname.replace('/news/', '').toLowerCase();
    const article = articles.find(a => {
      const headline = a.headline || a.title || '';
      const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
      const artSlug = createSlug(headline, a.id).toLowerCase();
      return artSlug === slug || slug.startsWith(base) || base.startsWith(slug) || slug.includes(base.slice(0, 35));
    });
    if (article) {
      const artTitle = article.headline || article.title || 'Security Brief';
      title = `${artTitle} · 60-Word Security Brief · SecuBuzz`;
      description = `[60-Word Security Brief] ${article.summary || description}`;
      ogType = 'article';
      jsonLdObj = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: artTitle,
        description: article.summary,
        datePublished: article.publishedAt,
        url: `https://secubuzz.com/news/${slug}`,
        author: {
          '@type': 'Organization',
          name: article.sourceName || article.source || 'SecuBuzz',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SecuBuzz',
          url: 'https://secubuzz.com',
        },
      };
    }
  } else if (pathname === '/advisories') {
    title = 'CISA Known Exploited Vulnerabilities (KEV) Tracker & EPSS Radar · SecuBuzz';
    description = 'Track active zero-days in the CISA Known Exploited Vulnerabilities (KEV) catalog with federal remediation deadlines, EPSS exploit likelihood scores, and vendor patch actions.';
    jsonLdObj = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'CISA Known Exploited Vulnerabilities (KEV) Radar',
      url: 'https://secubuzz.com/advisories',
      description,
    };
  } else if (pathname.startsWith('/advisories/')) {
    const slug = pathname.replace('/advisories/', '').toLowerCase();
    const adv = advisories.find(a => a.cveID.toLowerCase() === slug || slug.includes(a.cveID.toLowerCase()));
    if (adv) {
      title = `${adv.cveID}: ${adv.vendorProject} ${adv.product} Exploit Status, Patch & CISA KEV · SecuBuzz`;
      const actionText = adv.requiredAction ? ` Action: ${adv.requiredAction}.` : '';
      const dueText = adv.dueDate ? ` Due: ${adv.dueDate}.` : '';
      const summaryText = adv.shortDescription || adv.vulnerabilityName || '';
      description = `CISA KEV active zero-day alert for ${adv.cveID} (${adv.vendorProject} ${adv.product}).${actionText}${dueText} ${summaryText}`.trim();
      ogType = 'article';
      jsonLdObj = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${adv.cveID} Vulnerability Advisory - ${adv.vendorProject} ${adv.product}`,
        description: adv.shortDescription || adv.vulnerabilityName,
        datePublished: adv.dateAdded,
        url: `https://secubuzz.com/advisories/${slug}`,
        author: {
          '@type': 'Organization',
          name: 'CISA / SecuBuzz',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SecuBuzz',
          url: 'https://secubuzz.com',
        },
      };
    }
  } else if (pathname === '/about') {
    title = 'About SecuBuzz · MiSo Labs';
    description = 'SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs. No tracking, anonymous crash reports only.';
  } else if (pathname === '/download') {
    title = 'Download SecuBuzz for Android · Closed Testing';
    description = 'Download SecuBuzz for Android. Fast 60-word cybersecurity briefs and CISA zero-day alerts. Now in closed testing on Google Play.';
  } else if (pathname === '/publishers') {
    title = 'For Publishers & Security Researchers · SecuBuzz';
    description = 'How SecuBuzz attributes and links to cybersecurity publishers, researchers, and reporters. Concise 60-word briefs pointing readers directly to original reporting.';
  } else if (pathname === '/privacy') {
    title = 'Privacy Policy · SecuBuzz';
    description = 'Privacy Policy for SecuBuzz by MiSo Labs. No tracking, zero ad profiles, anonymous crash reports only.';
  } else if (pathname === '/terms') {
    title = 'Terms of Service · SecuBuzz';
    description = 'Terms of Service for SecuBuzz by MiSo Labs. Security intelligence reading terms and guidelines.';
  } else if (pathname === '/account-deletion') {
    title = 'Account & Data Deletion · SecuBuzz';
    description = 'Data privacy and deletion policy for SecuBuzz. 100% on-device data retention with immediate local purge options.';
  } else if (pathname === '/contact') {
    title = 'Contact SecuBuzz · MiSo Labs';
    description = 'Contact the SecuBuzz team at MiSo Labs. Support, bug reports, publisher partnerships, and coordinated security disclosures.';
  }

  const canonicalUrl = canonicalPath ? `https://secubuzz.com${canonicalPath}` : 'https://secubuzz.com/';

  const escapeAttr = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  let resultHtml = html
    .replace(/<title>.*?<\/title>/i, `<title>${escapeAttr(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeAttr(description)}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeAttr(title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeAttr(description)}" />`)
    .replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${ogType}" />`)
    .replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${escapeAttr(title)}" />`)
    .replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${escapeAttr(description)}" />`);

  if (jsonLdObj) {
    const jsonLdString = JSON.stringify(jsonLdObj);
    if (resultHtml.includes('application/ld+json')) {
      resultHtml = resultHtml.replace(
        /<script type="application\/ld\+json">.*?<\/script>/is,
        `<script type="application/ld+json">${jsonLdString}</script>`
      );
    } else {
      resultHtml = resultHtml.replace(
        '</head>',
        `  <script type="application/ld+json">${jsonLdString}</script>\n  </head>`
      );
    }
  }

  return resultHtml;
}
