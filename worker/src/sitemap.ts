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
  slug?: string;
  aliases?: string[];
  cves?: string[];
  additionalSources?: Array<{ source: string; sourceUrl: string }>;
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
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  const idStr = (id || headline || '').trim();
  const entropy = `${base}|${idStr}`;

  let hash = 0x811c9dc5;
  for (let i = 0; i < entropy.length; i++) {
    hash ^= entropy.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hex = (hash >>> 0).toString(16).padStart(8, '0');
  return base ? `${base}-${hex}` : `article-${hex}`;
}

export function escapeHtml(s: string = ''): string {
  return (s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderPrerenderedBody(
  pathname: string,
  article?: ArticleItem,
  adv?: KevVulnerability,
  articles: ArticleItem[] = [],
  advisories: KevVulnerability[] = []
): string {
  if (pathname === '/' || pathname === '') {
    const topNews = articles.slice(0, 15);
    const topKev = advisories.slice(0, 10);

    const newsItems = topNews.map(a => {
      const title = a.headline || a.title || 'Security Brief';
      const id = a.id || a.sourceUrl || a.url || title;
      const slug = a.slug || createSlug(title, id);
      const date = a.publishedAt ? a.publishedAt.slice(0, 10) : 'Recent';
      const source = a.sourceName || a.source || 'Threat Intelligence';
      const severity = a.severity || 'HIGH';
      return `<li style="padding:14px 0;border-bottom:1px solid #1E293B;">
        <div style="font-size:12px;color:#94A3B8;font-family:monospace;margin-bottom:4px;">
          <span>${escapeHtml(date)}</span> · <span>${escapeHtml(source)}</span> · <span style="color:#EF4444;font-weight:600;">${escapeHtml(severity)}</span>
        </div>
        <h3 style="margin:0 0 6px 0;font-size:16px;font-weight:600;">
          <a href="/news/${escapeHtml(slug)}" style="color:#F8FAFC;text-decoration:none;">${escapeHtml(title)}</a>
        </h3>
        <p style="margin:0;font-size:14px;color:#94A3B8;line-height:1.5;">${escapeHtml(a.summary)}</p>
      </li>`;
    }).join('');

    const kevItems = topKev.map(k => {
      const cve = k.cveID || (k as any).cve || '';
      const slug = (k as any).slug || cve.toLowerCase();
      const vendorProd = [k.vendorProject, k.product].filter(Boolean).join(' ') || 'Vulnerability';
      const desc = k.shortDescription || k.vulnerabilityName || '';
      return `<li style="padding:12px 0;border-bottom:1px solid #1E293B;">
        <div style="font-size:12px;color:#EF4444;font-family:monospace;font-weight:600;margin-bottom:4px;">
          CISA KEV ACTIVE ZERO-DAY · DUE: ${escapeHtml(k.dueDate || 'Immediate')}
        </div>
        <h3 style="margin:0 0 4px 0;font-size:15px;font-weight:600;font-family:monospace;">
          <a href="/advisories/${escapeHtml(slug)}" style="color:#4CC9F0;text-decoration:none;">${escapeHtml(cve)}</a>
          <span style="color:#94A3B8;font-family:sans-serif;font-weight:normal;font-size:14px;"> - ${escapeHtml(vendorProd)}</span>
        </h3>
        <p style="margin:0;font-size:13px;color:#94A3B8;line-height:1.5;">${escapeHtml(desc)}</p>
      </li>`;
    }).join('');

    return `<div style="max-width:960px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <header style="margin-bottom:32px;border-bottom:1px solid #1E293B;padding-bottom:24px;">
        <h1 style="font-size:32px;font-weight:700;line-height:1.15;color:#F8FAFC;margin:0 0 12px 0;">Security news in 60 words. Zero-days within hours of CISA listing them.</h1>
        <p style="font-size:16px;color:#94A3B8;line-height:1.6;margin:0 0 16px 0;">SecuBuzz condenses the day’s cybersecurity reporting, live vendor outage status, and official vendor PSIRT advisories into source-linked 60-word briefs, pushing new Known Exploited Vulnerabilities to your Android phone with remediation deadlines.</p>
        <nav style="display:flex;gap:16px;flex-wrap:wrap;font-size:14px;">
          <a href="/news" style="color:#4CC9F0;text-decoration:none;font-weight:600;">Latest Briefs →</a>
          <a href="/advisories" style="color:#4CC9F0;text-decoration:none;font-weight:600;">CISA KEV Zero-Days →</a>
          <a href="/sources" style="color:#4CC9F0;text-decoration:none;font-weight:600;">84 Monitored Sources →</a>
          <a href="https://play.google.com/store/apps/details?id=com.secubuzz.app" style="color:#10B981;text-decoration:none;font-weight:600;">Get Android App ↗</a>
        </nav>
      </header>
      <main style="display:grid;grid-template-columns:1fr;gap:32px;">
        <section>
          <h2 style="font-size:20px;font-weight:600;color:#F8FAFC;border-bottom:1px solid #1E293B;padding-bottom:8px;margin:0 0 16px 0;">Latest 60-Word Security Intelligence</h2>
          <ul style="list-style:none;padding:0;margin:0;">${newsItems}</ul>
        </section>
        <section>
          <h2 style="font-size:20px;font-weight:600;color:#F8FAFC;border-bottom:1px solid #1E293B;padding-bottom:8px;margin:0 0 16px 0;">Active CISA Known Exploited Vulnerabilities</h2>
          <ul style="list-style:none;padding:0;margin:0;">${kevItems}</ul>
        </section>
      </main>
      <footer style="margin-top:40px;padding-top:20px;border-top:1px solid #1E293B;font-size:13px;color:#64748B;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div>SecuBuzz by MiSo Labs · Zero Tracking · Privacy-First Architecture</div>
        <div><a href="/privacy" style="color:#94A3B8;">Privacy</a> · <a href="/terms" style="color:#94A3B8;">Terms</a> · <a href="/contact" style="color:#94A3B8;">Contact</a></div>
      </footer>
    </div>`;
  }

  if (pathname === '/news') {
    const list = articles.slice(0, 30);
    const items = list.map(a => {
      const title = a.headline || a.title || 'Security Brief';
      const id = a.id || a.sourceUrl || a.url || title;
      const slug = a.slug || createSlug(title, id);
      const date = a.publishedAt ? a.publishedAt.slice(0, 10) : 'Recent';
      const source = a.sourceName || a.source || 'Threat Intelligence';
      const severity = a.severity || 'HIGH';
      return `<li style="padding:14px 0;border-bottom:1px solid #1E293B;">
        <div style="font-size:12px;color:#94A3B8;font-family:monospace;margin-bottom:4px;">
          <span>${escapeHtml(date)}</span> · <span>${escapeHtml(source)}</span> · <span style="color:#EF4444;font-weight:600;">${escapeHtml(severity)}</span>
        </div>
        <h2 style="margin:0 0 6px 0;font-size:18px;font-weight:600;">
          <a href="/news/${escapeHtml(slug)}" style="color:#F8FAFC;text-decoration:none;">${escapeHtml(title)}</a>
        </h2>
        <p style="margin:0;font-size:14px;color:#94A3B8;line-height:1.5;">${escapeHtml(a.summary)}</p>
      </li>`;
    }).join('');

    return `<div style="max-width:896px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <header style="margin-bottom:24px;border-bottom:1px solid #1E293B;padding-bottom:16px;">
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 8px 0;">Quick Cybersecurity News in 60 Words</h1>
        <p style="font-size:15px;color:#94A3B8;margin:0;">Concise, verified 60-word briefings distilled from 84 authoritative newsrooms and vendor response teams.</p>
      </header>
      <main><ul style="list-style:none;padding:0;margin:0;">${items}</ul></main>
    </div>`;
  }

  if (pathname.startsWith('/news/')) {
    if (!article) return '';
    const title = article.headline || article.title || 'Security Brief';
    const summary = article.summary || '';
    const date = article.publishedAt ? article.publishedAt.slice(0, 10) : 'Recent';
    const source = article.sourceName || article.source || 'Threat Intelligence';
    const severity = article.severity || 'HIGH';
    const cves = article.cves || [];

    const cveBlock = cves.length > 0 ? `
      <section style="margin:20px 0;padding:12px 16px;background:#0F172A;border:1px solid #1E293B;border-radius:8px;">
        <h3 style="font-size:12px;font-weight:600;color:#94A3B8;margin:0 0 8px 0;text-transform:uppercase;letter-spacing:0.05em;">Associated Vulnerabilities</h3>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${cves.map(c => `<a href="/advisories/${escapeHtml(c.toLowerCase())}" style="font-family:monospace;font-size:12px;color:#4CC9F0;background:rgba(76,201,240,0.1);padding:4px 8px;border-radius:4px;text-decoration:none;">${escapeHtml(c)}</a>`).join('')}
        </div>
      </section>` : '';

    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;">
        <a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a> · 
        <a href="/news" style="color:#94A3B8;text-decoration:none;">All News</a>
      </nav>
      <article>
        <header style="margin-bottom:20px;border-bottom:1px solid #1E293B;padding-bottom:16px;">
          <div style="font-size:12px;color:#94A3B8;font-family:monospace;margin-bottom:8px;">
            <span>${escapeHtml(date)}</span> · <span>${escapeHtml(source)}</span> · <span style="color:#EF4444;font-weight:600;">${escapeHtml(severity)}</span>
          </div>
          <h1 style="font-size:26px;font-weight:700;line-height:1.2;color:#F8FAFC;margin:0 0 10px 0;">${escapeHtml(title)}</h1>
          <div style="font-size:12px;color:#4CC9F0;font-family:monospace;">60-WORD SECURITY BRIEF</div>
        </header>
        <section style="font-size:16px;line-height:1.6;color:#CBD5E1;margin-bottom:24px;">
          <p>${escapeHtml(summary)}</p>
        </section>
        ${cveBlock}
        <footer style="margin-top:32px;padding-top:16px;border-top:1px solid #1E293B;font-size:13px;color:#94A3B8;">
          ${article.sourceUrl ? `<p>Primary reporting source: <a href="${escapeHtml(article.sourceUrl)}" target="_blank" rel="noopener noreferrer" style="color:#4CC9F0;">${escapeHtml(article.sourceName || 'Canonical Reporting')} ↗</a></p>` : ''}
          <p style="margin-top:12px;">SecuBuzz delivers instant cybersecurity briefings and CISA zero-day alerts with zero tracking. <a href="https://play.google.com/store/apps/details?id=com.secubuzz.app" style="color:#4CC9F0;">Install on Android</a>.</p>
        </footer>
      </article>
    </div>`;
  }

  if (pathname === '/advisories') {
    const list = advisories.slice(0, 30);
    const items = list.map(k => {
      const cve = k.cveID || (k as any).cve || '';
      const slug = (k as any).slug || cve.toLowerCase();
      const vendorProd = [k.vendorProject, k.product].filter(Boolean).join(' ') || 'Vulnerability';
      const desc = k.shortDescription || k.vulnerabilityName || '';
      return `<li style="padding:14px 0;border-bottom:1px solid #1E293B;">
        <div style="font-size:12px;color:#EF4444;font-family:monospace;font-weight:600;margin-bottom:4px;">
          CISA KEV ACTIVE ZERO-DAY · DUE: ${escapeHtml(k.dueDate || 'Immediate')}
        </div>
        <h2 style="margin:0 0 4px 0;font-size:18px;font-weight:600;font-family:monospace;">
          <a href="/advisories/${escapeHtml(slug)}" style="color:#4CC9F0;text-decoration:none;">${escapeHtml(cve)}</a>
          <span style="color:#94A3B8;font-family:sans-serif;font-weight:normal;font-size:15px;"> - ${escapeHtml(vendorProd)}</span>
        </h2>
        <p style="margin:0;font-size:14px;color:#94A3B8;line-height:1.5;">${escapeHtml(desc)}</p>
      </li>`;
    }).join('');

    return `<div style="max-width:896px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <header style="margin-bottom:24px;border-bottom:1px solid #1E293B;padding-bottom:16px;">
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 8px 0;">CISA Known Exploited Vulnerabilities (KEV) Radar</h1>
        <p style="font-size:15px;color:#94A3B8;margin:0;">Active zero-days with federal remediation due dates, exploit likelihood percentiles, and patch actions.</p>
      </header>
      <main><ul style="list-style:none;padding:0;margin:0;">${items}</ul></main>
    </div>`;
  }

  if (pathname.startsWith('/advisories/')) {
    if (!adv) return '';
    const cveCode = adv.cveID || (adv as any).cve || '';
    const vendor = adv.vendorProject || (adv as any).vendor || '';
    const prod = adv.product || '';
    const vendorProd = [vendor, prod].filter(Boolean).join(' ') || 'Vulnerability';
    const desc = adv.shortDescription || adv.vulnerabilityName || (adv as any).description || '';
    const cleanAction = (adv.requiredAction || '').trim();

    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;">
        <a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a> · 
        <a href="/advisories" style="color:#94A3B8;text-decoration:none;">All KEV Advisories</a>
      </nav>
      <article>
        <header style="margin-bottom:20px;border-bottom:1px solid #1E293B;padding-bottom:16px;">
          <div style="font-size:12px;color:#EF4444;font-family:monospace;font-weight:600;margin-bottom:6px;">
            CISA KNOWN EXPLOITED VULNERABILITY (KEV) ACTIVE ZERO-DAY
          </div>
          <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 6px 0;font-family:monospace;">${escapeHtml(cveCode)}</h1>
          <div style="font-size:16px;color:#94A3B8;">${escapeHtml(vendorProd)}</div>
        </header>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:16px;font-weight:600;color:#F8FAFC;margin:0 0 8px 0;">Vulnerability Overview</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;margin:0;">${escapeHtml(desc)}</p>
        </section>
        <section style="margin:20px 0;padding:16px;background:#0F172A;border:1px solid #1E293B;border-radius:8px;">
          <h2 style="font-size:14px;font-weight:600;color:#4CC9F0;margin:0 0 12px 0;text-transform:uppercase;">Federal Remediation Due Dates & Mandates</h2>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:13px;margin-bottom:12px;">
            <div><div style="color:#94A3B8;">Remediation Due Date</div><div style="font-weight:bold;color:#F8FAFC;font-family:monospace;margin-top:2px;">${escapeHtml(adv.dueDate || 'Immediate')}</div></div>
            <div><div style="color:#94A3B8;">Added to CISA KEV</div><div style="color:#F8FAFC;font-family:monospace;margin-top:2px;">${escapeHtml(adv.dateAdded || 'Cataloged')}</div></div>
          </div>
          <div style="border-top:1px solid #1E293B;padding-top:12px;">
            <strong style="color:#F8FAFC;font-size:13px;">Required Action:</strong>
            <p style="margin:4px 0 0;font-size:13px;color:#CBD5E1;">${escapeHtml(cleanAction || 'Apply vendor updates and official mitigations immediately.')}</p>
          </div>
        </section>
        <footer style="margin-top:32px;padding-top:16px;border-top:1px solid #1E293B;font-size:13px;color:#94A3B8;">
          <p>Authoritative source: <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noopener noreferrer" style="color:#4CC9F0;">CISA KEV Catalog ↗</a></p>
          <p style="margin-top:12px;">Monitor active exploits, EPSS percentiles, and remediation alerts on <a href="https://secubuzz.com/" style="color:#4CC9F0;">SecuBuzz</a>.</p>
        </footer>
      </article>
    </div>`;
  }

  if (pathname === '/about') {
    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <article>
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 12px 0;">About SecuBuzz</h1>
        <p style="font-size:16px;line-height:1.6;color:#CBD5E1;">SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs. We distill complex cyber developments into objective, 60-word briefs with direct links to primary sources.</p>
        <p style="font-size:15px;line-height:1.6;color:#CBD5E1;margin-top:16px;">We monitor 84 authoritative threat intelligence sources, including 29 premier security publications (The Hacker News, BleepingComputer, Dark Reading, Krebs on Security, SecurityWeek), 14 official vendor PSIRTs (Microsoft, Cisco, Red Hat, Palo Alto, AWS, Oracle, Google Cloud), 33 enterprise vendor outage radars, and the CISA Known Exploited Vulnerabilities catalog.</p>
        <p style="font-size:15px;line-height:1.6;color:#94A3B8;margin-top:16px;">Engineered with a strict privacy-first architecture: no user accounts, no trackers, no advertising IDs, and anonymous crash telemetry only.</p>
        <footer style="margin-top:32px;padding-top:16px;border-top:1px solid #1E293B;font-size:13px;color:#94A3B8;">
          <a href="/privacy" style="color:#94A3B8;text-decoration:underline;">Privacy Policy</a> · <a href="/terms" style="color:#94A3B8;text-decoration:underline;">Terms</a> · <a href="/contact" style="color:#94A3B8;text-decoration:underline;">Contact</a>
        </footer>
      </article>
    </div>`;
  }

  if (pathname === '/privacy') {
    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <article>
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 16px 0;">Privacy Policy</h1>
        <p style="font-size:14px;color:#94A3B8;margin-bottom:20px;">SecuBuzz by MiSo Labs · Last Updated: November 2026</p>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">1. Overview & Developer Details</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">SecuBuzz by MiSo Labs ("we", "us", or "our") develops and operates the SecuBuzz mobile application and the secubuzz.com website. We believe privacy is an absolute baseline in cybersecurity. SecuBuzz is engineered so that defense teams, analysts, and engineers can read threat intelligence without surveillance, account creation, or personal telemetry harvesting.</p>
        </section>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">2. Information We Handle</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">All bookmarked briefs, reading history, and theme settings are stored 100% locally on your device in standard local application storage. They are never transmitted to, collected by, or stored on our servers. For users opted into threat alerts, anonymous push tokens are processed strictly for alert delivery and fleet reliability.</p>
        </section>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">3. Third-Party Advertising & Cookies (Google AdSense)</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">We may partner with third-party advertising networks such as Google AdSense to display advertisements on secubuzz.com to support operational and infrastructure costs. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other sites on the Internet. Google's use of advertising cookies enables it and its partners to serve ads to visitors based on their visit to secubuzz.com and/or other sites across the Internet.</p>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;margin-top:10px;">Users may opt out of personalized advertising at any time by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style="color:#4CC9F0;">Google Ads Settings</a> or through the Digital Advertising Alliance consumer choice tool at <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style="color:#4CC9F0;">aboutads.info</a>.</p>
        </section>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">4. Privacy Contact</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">For questions or privacy inquiries regarding SecuBuzz or MiSo Labs, contact us at <a href="mailto:support@secubuzz.com" style="color:#4CC9F0;">support@secubuzz.com</a>.</p>
        </section>
      </article>
    </div>`;
  }

  if (pathname === '/terms') {
    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <article>
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 16px 0;">Terms of Service</h1>
        <p style="font-size:14px;color:#94A3B8;margin-bottom:20px;">SecuBuzz by MiSo Labs · Last Updated: November 2026</p>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">1. Service Description</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">SecuBuzz aggregates, summarizes, and indexes publicly available cybersecurity news, vendor PSIRT advisories, and CISA Known Exploited Vulnerabilities. All briefs link directly to canonical reporting sources.</p>
        </section>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">2. Source Attribution & Publisher Relationships</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">SecuBuzz honors fair use and publisher attribution across 84 monitored newsrooms, research blogs, and vendor advisories. We deliver source-linked 60-word briefs designed to drive informed traffic back to original investigative publications.</p>
        </section>
        <section style="margin-bottom:24px;">
          <h2 style="font-size:18px;color:#F8FAFC;margin-bottom:8px;">3. Contact</h2>
          <p style="font-size:15px;line-height:1.6;color:#CBD5E1;">Inquiries regarding terms of service can be directed to <a href="mailto:support@secubuzz.com" style="color:#4CC9F0;">support@secubuzz.com</a>.</p>
        </section>
      </article>
    </div>`;
  }

  if (pathname === '/contact') {
    return `<div style="max-width:768px;margin:0 auto;padding:24px 16px;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <nav style="margin-bottom:20px;font-size:14px;"><a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a></nav>
      <article>
        <h1 style="font-size:28px;font-weight:700;color:#F8FAFC;margin:0 0 16px 0;">Contact SecuBuzz</h1>
        <p style="font-size:16px;line-height:1.6;color:#CBD5E1;margin-bottom:20px;">SecuBuzz is developed by MiSo Labs. Reach out to our team using the direct operational channels below:</p>
        <ul style="list-style:none;padding:0;margin:0 0 24px 0;">
          <li style="padding:12px 0;border-bottom:1px solid #1E293B;">
            <strong style="color:#F8FAFC;">General Support & Inquiries:</strong>
            <div style="margin-top:4px;"><a href="mailto:support@secubuzz.com" style="color:#4CC9F0;">support@secubuzz.com</a></div>
          </li>
          <li style="padding:12px 0;border-bottom:1px solid #1E293B;">
            <strong style="color:#F8FAFC;">Vulnerability Disclosure & Security:</strong>
            <div style="margin-top:4px;"><a href="mailto:security@secubuzz.com" style="color:#4CC9F0;">security@secubuzz.com</a></div>
          </li>
          <li style="padding:12px 0;border-bottom:1px solid #1E293B;">
            <strong style="color:#F8FAFC;">Publishers & Source Ingestion:</strong>
            <div style="margin-top:4px;"><a href="mailto:publishers@secubuzz.com" style="color:#4CC9F0;">publishers@secubuzz.com</a></div>
          </li>
        </ul>
      </article>
    </div>`;
  }

  if (pathname === '/404') {
    return `<div style="max-width:768px;margin:0 auto;padding:48px 16px;text-align:center;font-family:system-ui,-apple-system,sans-serif;color:#E2E8F0;background:#0B0F14;min-height:100vh;">
      <h1 style="font-size:36px;font-weight:700;color:#F8FAFC;margin:0 0 16px 0;">404 · Page Not Found</h1>
      <p style="font-size:16px;color:#94A3B8;margin-bottom:24px;">The requested security brief or advisory could not be found.</p>
      <nav style="display:flex;gap:16px;justify-content:center;font-size:14px;">
        <a href="/" style="color:#4CC9F0;text-decoration:none;">← Home</a>
        <a href="/news" style="color:#4CC9F0;text-decoration:none;">Latest Briefs</a>
        <a href="/advisories" style="color:#4CC9F0;text-decoration:none;">Advisories Radar</a>
      </nav>
    </div>`;
  }

  return '';
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
    { loc: 'https://secubuzz.com/sources', priority: '0.8', changefreq: 'weekly' },
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
      const articleId = art.id || art.sourceUrl || art.url || headline;
      const slug = art.slug || createSlug(headline, articleId);
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
    .filter(adv => !!(adv?.cveID || (adv as any)?.cve || (adv as any)?.slug))
    .map(adv => {
      const slug = (adv.cveID || (adv as any).cve || (adv as any).slug || '').toLowerCase();
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
  const items = articles.slice(0, 100).map(art => {
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

export function isBotUserAgent(userAgent: string = ''): boolean {
  if (!userAgent) return false;
  return /googlebot|mediapartners-google|adsbot|feedfetcher-google|google-adsense-review|google-display-ads-bot|bingbot|yandex|baiduspider|duckduckbot|slurp|twitterbot|facebookexternalhit|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkshare|w3c_validator|whatsapp|telegrambot|applebot|curl|wget|bytespider|gptbot|claudebot|perplexity|ahrefsbot|semrushbot|dotbot|rogue/i.test(
    userAgent
  );
}

export function injectMetaTags(
  html: string,
  pathname: string,
  articles: ArticleItem[],
  advisories: KevVulnerability[],
  options: { userAgent?: string; forcePrerender?: boolean } = {}
): string {
  let title = 'SecuBuzz · Quick Cybersecurity News in 60 Words & CISA KEV Radar';
  let description = 'Real-time cybersecurity news in 60 words, live vendor outage status, and CISA KEV zero-day radar. Track active exploits, EPSS likelihood, and vendor advisories across 80+ sources.';
  let canonicalPath = pathname.replace(/\/$/, '') || '';
  let ogType = 'website';
  let jsonLdObj: Record<string, unknown> | null = null;

  let matchedArticle: ArticleItem | undefined;
  let matchedAdv: KevVulnerability | undefined;

  if (pathname === '/' || pathname === '') {
    title = 'SecuBuzz · Quick Cybersecurity News in 60 Words & CISA KEV Radar';
    description = 'Real-time cybersecurity news in 60 words, live vendor outage status, and CISA KEV zero-day radar. Track active exploits, EPSS likelihood, and vendor advisories across 80+ sources.';
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
      creator: {
        '@type': 'Person',
        name: 'Nisarg Soni',
        jobTitle: 'Security Operations Analyst',
        sameAs: 'https://www.linkedin.com/in/soni-nisarg/',
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
    const rawSlug = pathname.replace('/news/', '').toLowerCase().replace(/\/+$/, '');
    const slug = decodeURIComponent(rawSlug).replace(/\.html?$/i, '');
    matchedArticle = articles.find(a => {
      const headline = a.headline || a.title || '';
      const articleId = a.id || a.sourceUrl || a.url || headline;
      const artSlug = (a.slug || createSlug(headline, articleId)).toLowerCase();
      if (artSlug === slug) return true;
      if (a.aliases && a.aliases.some(al => al.toLowerCase() === slug)) return true;
      const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
      return base && (slug === base || slug.startsWith(base) || base.startsWith(slug));
    });
    if (matchedArticle) {
      const artTitle = matchedArticle.headline || matchedArticle.title || 'Security Brief';
      title = artTitle.length <= 48 ? `${artTitle} | SecuBuzz` : `${artTitle.slice(0, 48).trim()}… | SecuBuzz`;
      const fullSummary = matchedArticle.summary || description;
      description = fullSummary.length > 155
        ? `[60-Word Brief] ${fullSummary.slice(0, 145).replace(/[,;:\s]+$/, '')}…`
        : `[60-Word Brief] ${fullSummary}`;
      ogType = 'article';
      jsonLdObj = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'NewsArticle',
            headline: artTitle,
            description: matchedArticle.summary,
            datePublished: matchedArticle.publishedAt,
            url: `https://secubuzz.com/news/${slug}`,
            author: {
              '@type': 'Organization',
              name: matchedArticle.sourceName || matchedArticle.source || 'SecuBuzz',
            },
            publisher: {
              '@type': 'Organization',
              name: 'SecuBuzz',
              url: 'https://secubuzz.com',
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://secubuzz.com/' },
              { '@type': 'ListItem', position: 2, name: 'News', item: 'https://secubuzz.com/news' },
              { '@type': 'ListItem', position: 3, name: artTitle, item: `https://secubuzz.com/news/${slug}` },
            ],
          },
        ],
      };
    } else {
      const readableTitle = slug
        .replace(/-[a-f0-9]{6}$/i, '')
        .split('-')
        .filter(Boolean)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ') || 'Security Brief';
      title = readableTitle.length <= 48 ? `${readableTitle} | SecuBuzz` : `${readableTitle.slice(0, 48).trim()}… | SecuBuzz`;
      description = `Read verified 60-word cybersecurity intelligence on ${readableTitle}. Fast triage, zero tracking.`;
      ogType = 'article';
      jsonLdObj = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: readableTitle,
        description: `Read verified 60-word cybersecurity intelligence on ${readableTitle}.`,
        url: `https://secubuzz.com/news/${slug}`,
        author: {
          '@type': 'Organization',
          name: 'SecuBuzz',
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
    const rawSlug = pathname.replace('/advisories/', '').toLowerCase().replace(/\/+$/, '');
    const slug = decodeURIComponent(rawSlug).replace(/\.html?$/i, '');
    matchedAdv = advisories.find(a => {
      const cve = (a?.cveID || (a as any)?.cve || (a as any)?.slug || '').toLowerCase();
      return cve && (cve === slug || slug.includes(cve) || cve.includes(slug));
    });
    if (matchedAdv) {
      const cveCode = matchedAdv.cveID || (matchedAdv as any).cve || (matchedAdv as any).slug || slug.toUpperCase();
      const vendor = matchedAdv.vendorProject || (matchedAdv as any).vendor || '';
      const prod = matchedAdv.product || '';
      const vendorProd = [vendor, prod].filter(Boolean).join(' ') || 'Vulnerability';
      const shortEntity = vendorProd.length <= 16 ? vendorProd : (vendor || vendorProd.slice(0, 15));
      title = `${cveCode} (${shortEntity}): Exploit & CISA KEV | SecuBuzz`;
      if (title.length > 60) {
        title = `${cveCode} Exploit & CISA KEV | SecuBuzz`;
      }
      const cleanAction = (matchedAdv.requiredAction || '').replace(/\.+$/, '').trim();
      const duePart = matchedAdv.dueDate ? ` Due: ${matchedAdv.dueDate}.` : '';
      const prefix = `${cveCode} (${vendorProd}): CISA KEV zero-day alert.${duePart}`;
      const suffix = ' Review EPSS & CVSS metrics.';
      const budgetForAction = 155 - prefix.length - suffix.length;
      let actionPart = '';
      if (cleanAction && budgetForAction >= 30) {
        const rawAction = ` Action: ${cleanAction}.`;
        if (rawAction.length <= budgetForAction) {
          actionPart = rawAction;
        } else if (budgetForAction >= 28) {
          actionPart = ' Action: Apply vendor updates.';
        }
      }
      const summaryText = matchedAdv.shortDescription || matchedAdv.vulnerabilityName || (matchedAdv as any).description || '';
      description = `${prefix}${actionPart}${suffix}`;
      ogType = 'article';
      jsonLdObj = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'TechArticle',
            headline: `${cveCode} Vulnerability Advisory - ${vendorProd}`,
            description: summaryText || `CISA KEV active zero-day alert for ${cveCode}`,
            datePublished: matchedAdv.dateAdded,
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
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://secubuzz.com/' },
              { '@type': 'ListItem', position: 2, name: 'Advisories', item: 'https://secubuzz.com/advisories' },
              { '@type': 'ListItem', position: 3, name: cveCode, item: `https://secubuzz.com/advisories/${slug}` },
            ],
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: `Is ${cveCode} actively exploited in the wild?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: `Yes. ${cveCode} is actively tracked in the CISA Known Exploited Vulnerabilities (KEV) catalog affecting ${vendorProd}.`,
                },
              },
              {
                '@type': 'Question',
                name: `What is the required remediation action for ${cveCode}?`,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: cleanAction || 'Apply official vendor security updates and mitigations immediately.',
                },
              },
            ],
          },
        ],
      };
    } else {
      title = 'Advisory Not Found · SecuBuzz';
      description = 'The requested cybersecurity advisory could not be found. Browse active CISA KEV zero-days and enterprise advisories on SecuBuzz.';
      canonicalPath = '/404';
    }
  } else if (pathname === '/about') {
    title = 'About SecuBuzz · MiSo Labs';
    description = 'SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs. No tracking, anonymous crash reports only.';
    jsonLdObj = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About SecuBuzz',
      url: 'https://secubuzz.com/about',
      description: 'SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs.',
      publisher: {
        '@type': 'Organization',
        name: 'MiSo Labs',
        url: 'https://secubuzz.com',
      },
      creator: {
        '@type': 'Person',
        name: 'Nisarg Soni',
        jobTitle: 'Security Operations Analyst',
        sameAs: 'https://www.linkedin.com/in/soni-nisarg/',
      },
    };
  } else if (pathname === '/download') {
    title = 'Download SecuBuzz for Android · Quick Cybersecurity News';
    description = 'Download SecuBuzz for Android. Fast 60-word cybersecurity briefs and CISA zero-day alerts. Available globally on Google Play.';
  } else if (pathname === '/sources') {
    title = 'Monitored Sources, Outage Feeds & Vendor PSIRT Directory · SecuBuzz';
    description = 'Explore the directory of 84 authoritative security newsrooms, vendor PSIRTs, enterprise infrastructure outage radars, and vulnerability databases indexed by SecuBuzz.';
    jsonLdObj = {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'SecuBuzz Monitored Threat Intelligence Sources',
      url: 'https://secubuzz.com/sources',
      description,
    };
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
  } else if (pathname === '/404') {
    title = 'Page Not Found · SecuBuzz';
    description = 'The requested security brief or advisory could not be found. Browse today\'s 60-word briefs or the active CISA KEV catalog.';
    canonicalPath = '/404';
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

  // Inject semantic pre-rendered HTML body into #root for crawlers & bots, avoiding FOUC for human browsers
  const shouldPrerender = options.forcePrerender || isBotUserAgent(options.userAgent);
  if (shouldPrerender) {
    const prerenderedBody = renderPrerenderedBody(pathname, matchedArticle, matchedAdv, articles, advisories);
    if (prerenderedBody) {
      resultHtml = resultHtml.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${prerenderedBody}</div>`);
    }
  }

  return resultHtml;
}
