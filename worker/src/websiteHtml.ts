import { SEED_KEV_ADVISORIES } from './seedKev';

/**
 * SecuBuzz Website Template Engine (Anti-AI / Sober Architecture)
 * 
 * Rules & Philosophy:
 * - ZERO emojis anywhere in the UI.
 * - Human, direct copy (No buzzwords like 'distillation', 'telemetry', 'engineered', 'fidelity').
 * - Strictly two modes: Dark (#0B0F14) and Light (#F8FAFC) with instant persistence.
 * - Server-rendered individual pages for /news/:slug and /advisories/:cve for full SEO indexing.
 * - Accurate legal descriptions (no false encryption claims, accurate AdMob disclosures).
 */

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

export function escapeHtml(str: string = ''): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
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

export function formatTimeAgo(dateString?: string): string {
  if (!dateString) return '';
  try {
    const diffHours = Math.floor((Date.now() - new Date(dateString).getTime()) / (1000 * 60 * 60));
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  } catch {
    return '';
  }
}

const COMMON_CSS = `
  :root {
    --bg: #0B0F14;
    --card-bg: #121820;
    --card-hover: #17202B;
    --border: #1E293B;
    --border-subtle: #16202D;
    --cyan: #4CC9F0;
    --cyan-subtle: rgba(76, 201, 240, 0.08);
    --cyan-glow: rgba(76, 201, 240, 0.2);
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-muted: #64748B;
    --critical: #EF4444;
    --high: #F59E0B;
    --medium: #10B981;
    --low: #64748B;
    --font-heading: 'Exo', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --transition: 0.18s ease;
  }

  [data-theme="light"] {
    --bg: #F8FAFC;
    --card-bg: #FFFFFF;
    --card-hover: #F1F5F9;
    --border: #E2E8F0;
    --border-subtle: #EDF2F7;
    --cyan: #0284C7;
    --cyan-subtle: rgba(2, 132, 199, 0.08);
    --cyan-glow: rgba(2, 132, 199, 0.12);
    --text-primary: #0F172A;
    --text-secondary: #475569;
    --text-muted: #64748B;
    --critical: #DC2626;
    --high: #D97706;
    --medium: #059669;
    --low: #64748B;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg);
    color: var(--text-primary);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    transition: background-color var(--transition), color var(--transition);
  }

  a {
    color: var(--cyan);
    text-decoration: none;
    transition: opacity var(--transition);
  }

  a:hover {
    opacity: 0.85;
  }

  /* Header */
  .navbar {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
    transition: background-color var(--transition), border-color var(--transition);
  }

  .nav-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--text-primary);
  }

  .brand-logo {
    width: 28px;
    height: 28px;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .brand-name {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.5px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-link {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    transition: color var(--transition);
  }

  .nav-link:hover, .nav-link.active {
    color: var(--text-primary);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .theme-toggle-btn {
    background: var(--card-bg);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    border-radius: 4px;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
  }

  .theme-toggle-btn:hover {
    color: var(--text-primary);
    border-color: var(--cyan);
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 4px;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all var(--transition);
    text-decoration: none;
    border: 1px solid transparent;
  }

  .btn-primary {
    background: var(--cyan);
    color: #0B0F14;
  }

  .btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px var(--cyan-glow);
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border-color: var(--border);
  }

  .btn-outline:hover {
    border-color: var(--cyan);
    color: var(--cyan);
  }

  /* Page Wrapper */
  .page-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 20px 80px;
  }

  /* Hero */
  .hero {
    padding: 50px 0 30px;
    text-align: center;
    max-width: 780px;
    margin: 0 auto;
  }

  .hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--cyan);
    background: var(--cyan-subtle);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 4px;
    margin-bottom: 18px;
  }

  .hero-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: clamp(2rem, 5vw, 3.2rem);
    letter-spacing: -1px;
    line-height: 1.15;
    margin-bottom: 18px;
    color: var(--text-primary);
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 28px;
  }

  .hero-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .hero-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .hero-meta span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .hero-meta span::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--cyan);
  }

  /* Feature Grid */
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 40px 0;
  }

  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 24px;
    transition: all var(--transition);
  }

  .card:hover {
    border-color: var(--cyan);
    background: var(--card-hover);
  }

  .card-num {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 0.8rem;
    color: var(--cyan);
    letter-spacing: 1px;
    margin-bottom: 12px;
  }

  .card-title {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 8px;
    color: var(--text-primary);
  }

  .card-desc {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  /* Feed / List View */
  .section-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
  }

  .section-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.6rem;
    color: var(--text-primary);
  }

  .section-subtitle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-top: 4px;
  }

  .feed-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .feed-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 20px;
    transition: all var(--transition);
    position: relative;
  }

  .feed-card:hover {
    border-color: var(--cyan);
    background: var(--card-hover);
  }

  .feed-card.critical {
    border-left: 3px solid var(--critical);
  }

  .feed-card.high {
    border-left: 3px solid var(--high);
  }

  .feed-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }

  .feed-badges {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .badge {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 0.7rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 4px;
  }

  .badge.critical {
    color: var(--critical);
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.25);
  }

  .badge.high {
    color: var(--high);
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
  }

  .badge.medium {
    color: var(--medium);
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  .badge.low {
    color: var(--low);
    background: rgba(100, 116, 139, 0.1);
    border: 1px solid rgba(100, 116, 139, 0.25);
  }

  .badge.tag {
    color: var(--text-muted);
    background: var(--border-subtle);
  }

  .feed-time {
    font-size: 0.8rem;
    color: var(--text-muted);
  }

  .feed-headline {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--text-primary);
    line-height: 1.4;
    margin-bottom: 8px;
  }

  .feed-headline a {
    color: var(--text-primary);
  }

  .feed-headline a:hover {
    color: var(--cyan);
  }

  .feed-summary {
    font-size: 0.92rem;
    color: var(--text-secondary);
    line-height: 1.55;
    margin-bottom: 14px;
  }

  .feed-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-top: 10px;
    border-top: 1px solid var(--border-subtle);
    font-size: 0.82rem;
  }

  .feed-source {
    color: var(--text-muted);
  }

  .feed-source strong {
    color: var(--text-secondary);
  }

  /* Policy / Article / Content Wrapper */
  .content-wrapper {
    max-width: 820px;
    margin: 0 auto;
  }

  .content-header {
    margin-bottom: 32px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border);
  }

  .content-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    color: var(--text-primary);
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .content-meta {
    font-size: 0.88rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .section-block {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 26px;
    margin-bottom: 20px;
  }

  .section-block h2 {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--text-primary);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .section-block h2::before {
    content: "";
    display: inline-block;
    width: 3px;
    height: 16px;
    background: var(--cyan);
    border-radius: 2px;
  }

  .section-block p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.65;
    margin-bottom: 12px;
  }

  .section-block p:last-child {
    margin-bottom: 0;
  }

  .section-block ul {
    margin: 12px 0 14px 22px;
    color: var(--text-secondary);
  }

  .section-block li {
    font-size: 0.92rem;
    margin-bottom: 8px;
  }

  .callout-box {
    background: var(--cyan-subtle);
    border: 1px solid var(--border);
    border-left: 3px solid var(--cyan);
    border-radius: 4px;
    padding: 16px 20px;
    margin: 16px 0;
  }

  .callout-box p {
    color: var(--text-primary);
    font-size: 0.95rem;
    margin-bottom: 0;
  }

  .advisory-detail-box {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 24px;
    margin-bottom: 24px;
  }

  .advisory-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--border-subtle);
  }

  .advisory-item-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-family: var(--font-heading);
    letter-spacing: 1px;
    color: var(--text-muted);
    margin-bottom: 4px;
  }

  .advisory-item-value {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .download-cta-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    margin: 40px 0;
  }

  .download-cta-title {
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 1.4rem;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  .download-cta-desc {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 20px;
  }

  /* Footer */
  .footer {
    border-top: 1px solid var(--border);
    background: var(--bg);
    padding: 44px 20px;
    margin-top: 60px;
  }

  .footer-container {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .footer-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .footer-copyright {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }

  .footer-link {
    font-size: 0.85rem;
    color: var(--text-secondary);
  }

  .footer-link:hover {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
`;

const COMMON_HEADER = (activeNav: string) => `
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="brand" aria-label="SecuBuzz">
        <img src="/icon.png?v=2" alt="SecuBuzz Logo" class="brand-logo" width="28" height="28" />
        <span class="brand-name">SecuBuzz</span>
      </a>

      <div class="nav-links">
        <a href="/" class="nav-link ${activeNav === 'home' ? 'active' : ''}">Home</a>
        <a href="/news" class="nav-link ${activeNav === 'news' ? 'active' : ''}">News Briefs</a>
        <a href="/advisories" class="nav-link ${activeNav === 'advisories' ? 'active' : ''}">CISA Advisories</a>
        <a href="/publishers" class="nav-link ${activeNav === 'publishers' ? 'active' : ''}">For Publishers</a>
        <a href="/download" class="nav-link ${activeNav === 'download' ? 'active' : ''}">Download</a>
      </div>

      <div class="nav-actions">
        <button id="themeToggleBtn" class="theme-toggle-btn" title="Toggle Light/Dark Theme" aria-label="Toggle theme">
          <svg id="themeIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </svg>
        </button>
        <a href="/download" class="btn btn-primary">
          Get App
        </a>
      </div>
    </div>
  </nav>
`;

const COMMON_FOOTER = `
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-info">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-heading); font-weight: 800; font-size: 1rem;">SecuBuzz</span>
          <span style="color: var(--text-muted); font-size: 0.85rem;">by MiSo Labs</span>
        </div>
        <p class="footer-copyright">Security news in 60 words. CISA zero-day tracking. 100% free.</p>
      </div>

      <div class="footer-links">
        <a href="/news" class="footer-link">News</a>
        <a href="/advisories" class="footer-link">Advisories</a>
        <a href="/download" class="footer-link">Download</a>
        <a href="/publishers" class="footer-link">For Publishers</a>
        <a href="/privacy" class="footer-link">Privacy Policy</a>
        <a href="/terms" class="footer-link">Terms of Service</a>
        <a href="/account-deletion" class="footer-link">Data Deletion</a>
        <a href="/contact" class="footer-link">Contact</a>
        <a href="/about" class="footer-link">About</a>
      </div>
    </div>
  </footer>

  <!-- Cloudflare Web Analytics -->
  <script type="module" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "3c443df0b27a4db6b0380677e533dba8"}'></script>
`;

const THEME_SCRIPT = `
  <script>
    (function() {
      const storageKey = 'secubuzz-theme';
      function getPreferredTheme() {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark') return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      }

      function updateIcon(theme) {
        const icon = document.getElementById('themeIcon');
        if (!icon) return;
        if (theme === 'light') {
          // Moon icon (plain SVG)
          icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        } else {
          // Sun icon (plain SVG)
          icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }
      }

      const initialTheme = getPreferredTheme();
      document.documentElement.setAttribute('data-theme', initialTheme);

      window.addEventListener('DOMContentLoaded', () => {
        updateIcon(initialTheme);
        const toggleBtn = document.getElementById('themeToggleBtn');
        if (toggleBtn) {
          toggleBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem(storageKey, next);
            updateIcon(next);
          });
        }
      });
    })();
  </script>
`;

function renderBasePage(
  meta: { title: string; description: string; canonicalPath: string; schemaJson?: string },
  activeNav: string,
  content: string
): string {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(meta.title)}</title>
  <meta name="description" content="${escapeHtml(meta.description)}" />
  <meta name="author" content="MiSo Labs" />
  <link rel="canonical" href="https://secubuzz.com${meta.canonicalPath}" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png?v=2" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2" />
  <link rel="shortcut icon" href="/favicon.ico?v=2" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />

  <!-- OpenGraph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://secubuzz.com${meta.canonicalPath}" />
  <meta property="og:title" content="${escapeHtml(meta.title)}" />
  <meta property="og:description" content="${escapeHtml(meta.description)}" />
  <meta property="og:site_name" content="SecuBuzz" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
  <meta name="twitter:description" content="${escapeHtml(meta.description)}" />

  ${meta.schemaJson ? `<script type="application/ld+json">${meta.schemaJson}</script>` : ''}

  <!-- Fonts: Exo & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Exo:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

  <style>${COMMON_CSS}</style>
  ${THEME_SCRIPT}
</head>
<body>
  ${COMMON_HEADER(activeNav)}
  <main>
    ${content}
  </main>
  ${COMMON_FOOTER}
</body>
</html>`;
}

// -----------------------------------------------------------------------------
// 1. HOME PAGE
// -----------------------------------------------------------------------------
export function getHomePageHtml(recentArticles: ArticleItem[] = []): string {
  const renderedBriefs = (recentArticles.slice(0, 6)).map(item => {
    const headline = item.headline || item.title || 'Security Update';
    const slug = createSlug(headline, item.id);
    const sev = (item.severity || 'low').toLowerCase();
    const source = item.sourceName || item.source || 'Threat Source';

    return `
      <article class="feed-card ${sev}">
        <div class="feed-card-header">
          <div class="feed-badges">
            <span class="badge ${sev}">${escapeHtml(item.severity || 'INFO')}</span>
            <span class="badge tag">${escapeHtml(item.category || 'BRIEF')}</span>
          </div>
          <span class="feed-time">${formatTimeAgo(item.publishedAt)}</span>
        </div>
        <h3 class="feed-headline">
          <a href="/news/${slug}">${escapeHtml(headline)}</a>
        </h3>
        <p class="feed-summary">${escapeHtml(item.summary)}</p>
        <div class="feed-footer">
          <span class="feed-source">Source: <strong>${escapeHtml(source)}</strong></span>
          <a href="/news/${slug}">Read Brief &rarr;</a>
        </div>
      </article>
    `;
  }).join('');

  const content = `
    <div class="page-container">
      <section class="hero">
        <div class="hero-tag">Active Threat Feed</div>
        <h1 class="hero-title">Security news in 60 words.</h1>
        <p class="hero-subtitle">
          Factual cybersecurity briefs and direct CISA zero-day tracking for security professionals. No clickbait, no accounts, no tracking.
        </p>

        <div class="hero-buttons">
          <a href="/download" class="btn btn-primary" style="padding: 12px 24px; font-size: 0.95rem;">
            Get Android App
          </a>
          <a href="/news" class="btn btn-outline" style="padding: 12px 24px; font-size: 0.95rem;">
            Browse All Briefs
          </a>
        </div>

        <div class="hero-meta">
          <span>CISA KEV Tracking</span>
          <span>60-Word Briefs</span>
          <span>No User Accounts</span>
          <span>Offline Reading</span>
        </div>
      </section>

      <!-- 3 Core Pillars (Plain Words, No Buzzwords) -->
      <section class="grid-3">
        <div class="card">
          <div class="card-num">01</div>
          <h2 class="card-title">CISA Zero-Days</h2>
          <p class="card-desc">
            Direct tracking of vulnerabilities actively exploited in the wild from the CISA KEV catalog, with vendor patch deadlines.
          </p>
        </div>

        <div class="card">
          <div class="card-num">02</div>
          <h2 class="card-title">Short, Factual Briefs</h2>
          <p class="card-desc">
            60-word summaries focused strictly on facts: affected versions, CVE IDs, and remediation. No opinion or PR filler.
          </p>
        </div>

        <div class="card">
          <div class="card-num">03</div>
          <h2 class="card-title">No Accounts. No Tracking.</h2>
          <p class="card-desc">
            No signup, no emails, and no passwords. Your saved stories stay on your phone, and we never track what you read.
          </p>
        </div>
      </section>

      <!-- Latest Briefs (Pre-rendered for Googlebot & fast load) -->
      <section class="section-block" style="margin-top: 40px;">
        <div class="section-header">
          <div>
            <h2 class="section-title">Latest Security Briefs</h2>
            <p class="section-subtitle">Real-time updates distilled from global security sources.</p>
          </div>
          <a href="/news" class="btn btn-outline" style="font-size: 0.82rem;">View All (${recentArticles.length || '250+'}) &rarr;</a>
        </div>

        <div class="feed-list">
          ${renderedBriefs || '<p style="color:var(--text-muted); text-align:center; padding:20px;">Loading news briefs...</p>'}
        </div>
      </section>

      <!-- App Download Banner -->
      <div class="download-cta-card">
        <h2 class="download-cta-title">Read on your phone with zero noise.</h2>
        <p class="download-cta-desc">Full-screen vertical reading, offline cache, and instant severity filtering.</p>
        <a href="/download" class="btn btn-primary" style="padding: 10px 22px;">Download Free on Android</a>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'SecuBuzz · Security news in 60 words',
    description: 'Fast, factual cybersecurity briefs and CISA zero-day tracking for security professionals. 100% free, zero tracking, no accounts.',
    canonicalPath: '/',
  }, 'home', content);
}

// -----------------------------------------------------------------------------
// 2. NEWS LIST PAGE (/news)
// -----------------------------------------------------------------------------
export function getNewsListPageHtml(articles: ArticleItem[] = []): string {
  const cardsHtml = articles.map(item => {
    const headline = item.headline || item.title || 'Security Update';
    const slug = createSlug(headline, item.id);
    const sev = (item.severity || 'low').toLowerCase();
    const source = item.sourceName || item.source || 'Threat Source';

    return `
      <article class="feed-card ${sev}">
        <div class="feed-card-header">
          <div class="feed-badges">
            <span class="badge ${sev}">${escapeHtml(item.severity || 'INFO')}</span>
            <span class="badge tag">${escapeHtml(item.category || 'BRIEF')}</span>
          </div>
          <span class="feed-time">${formatTimeAgo(item.publishedAt)}</span>
        </div>
        <h2 class="feed-headline" style="font-size: 1.15rem;">
          <a href="/news/${slug}">${escapeHtml(headline)}</a>
        </h2>
        <p class="feed-summary">${escapeHtml(item.summary)}</p>
        <div class="feed-footer">
          <span class="feed-source">Source: <strong>${escapeHtml(source)}</strong></span>
          <div style="display:flex; gap:14px;">
            <a href="/news/${slug}">Read Brief</a>
            <a href="${escapeHtml(item.sourceUrl || item.url || '#')}" target="_blank" rel="noopener noreferrer">Original Article &rarr;</a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">Cybersecurity News Briefs</h1>
        <p class="content-meta">
          <span>${articles.length} active briefs</span>
          <span>Updated every 4 hours</span>
        </p>
      </div>

      <div class="feed-list">
        ${cardsHtml || '<p style="color:var(--text-muted); text-align:center;">No briefs available at this time.</p>'}
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Cybersecurity News Briefs · SecuBuzz',
    description: 'Current cybersecurity news briefs, vulnerability disclosures, and incident reports summarized in 60 words.',
    canonicalPath: '/news',
  }, 'news', content);
}

// -----------------------------------------------------------------------------
// 3. INDIVIDUAL NEWS STORY PAGE (/news/:slug)
// -----------------------------------------------------------------------------
export function getArticleDetailPageHtml(article: ArticleItem, slug: string): string {
  const headline = article.headline || article.title || 'Security Brief';
  const source = article.sourceName || article.source || 'Security Source';
  const sev = (article.severity || 'low').toLowerCase();
  const sourceUrl = article.sourceUrl || article.url || 'https://secubuzz.com';

  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline,
    description: article.summary,
    datePublished: article.publishedAt || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: source,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SecuBuzz by MiSo Labs',
      url: 'https://secubuzz.com',
    },
  });

  const content = `
    <div class="page-container content-wrapper">
      <div style="margin-bottom: 20px;">
        <a href="/news" style="font-size: 0.88rem;">&larr; Back to all briefs</a>
      </div>

      <article>
        <div class="content-header">
          <div style="display:flex; gap:8px; margin-bottom:12px;">
            <span class="badge ${sev}">${escapeHtml(article.severity || 'INFO')}</span>
            <span class="badge tag">${escapeHtml(article.category || 'BRIEF')}</span>
          </div>
          <h1 class="content-title">${escapeHtml(headline)}</h1>
          <div class="content-meta">
            <span>Published: <time datetime="${escapeHtml(article.publishedAt || '')}">${escapeHtml(article.publishedAt?.slice(0, 10) || 'Recent')}</time></span>
            <span>Source: <strong>${escapeHtml(source)}</strong></span>
          </div>
        </div>

        <div class="section-block">
          <h2>Summary</h2>
          <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text-primary);">
            ${escapeHtml(article.summary)}
          </p>
        </div>

        <div class="section-block" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Original reporting published by ${escapeHtml(source)}.</p>
          </div>
          <a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            Read Original Article &rarr;
          </a>
        </div>
      </article>

      <div class="download-cta-card">
        <h2 class="download-cta-title">Get alerts for critical zero-days on your phone.</h2>
        <p class="download-cta-desc">SecuBuzz notifies you when major vulnerabilities strike enterprise software.</p>
        <a href="/download" class="btn btn-primary">Download Free App</a>
      </div>
    </div>
  `;

  return renderBasePage({
    title: `${headline} · SecuBuzz`,
    description: article.summary.slice(0, 155),
    canonicalPath: `/news/${slug}`,
    schemaJson,
  }, 'news', content);
}

// -----------------------------------------------------------------------------
// 4. ADVISORIES LIST PAGE (/advisories)
// -----------------------------------------------------------------------------
export function getAdvisoriesListPageHtml(advisories: KevVulnerability[] = []): string {
  const itemsToRender = (advisories && advisories.length > 0) ? advisories : SEED_KEV_ADVISORIES;
  const cardsHtml = itemsToRender.map(item => {
    return `
      <article class="feed-card critical">
        <div class="feed-card-header">
          <div class="feed-badges">
            <span class="badge critical">CRITICAL</span>
            <span class="badge tag">CISA KEV</span>
            ${item.knownRansomwareCampaignUse === 'Known' ? '<span class="badge high">RANSOMWARE USE</span>' : ''}
          </div>
          <span class="feed-time">Added: ${escapeHtml(item.dateAdded)}</span>
        </div>
        <h2 class="feed-headline" style="font-size: 1.15rem;">
          <a href="/advisories/${escapeHtml(item.cveID.toLowerCase())}">${escapeHtml(item.cveID)}: ${escapeHtml(item.vulnerabilityName || item.product)}</a>
        </h2>
        <p class="feed-summary">${escapeHtml(item.shortDescription)}</p>

        <div style="background:var(--border-subtle); padding:10px 14px; border-radius:4px; font-size:0.85rem; margin-bottom:12px;">
          <div><strong>Vendor / Product:</strong> ${escapeHtml(item.vendorProject)} · ${escapeHtml(item.product)}</div>
          <div><strong>Remediation Due:</strong> <span style="color:var(--critical); font-weight:600;">${escapeHtml(item.dueDate)}</span></div>
        </div>

        <div class="feed-footer">
          <span class="feed-source">Action: <strong>${escapeHtml(item.requiredAction)}</strong></span>
          <a href="/advisories/${escapeHtml(item.cveID.toLowerCase())}">View Details &rarr;</a>
        </div>
      </article>
    `;
  }).join('');

  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">CISA Known Exploited Vulnerabilities</h1>
        <p class="content-meta">
          <span>Active zero-days tracked by U.S. CISA</span>
          <span>Federal remediation deadlines</span>
        </p>
      </div>

      <div class="feed-list">
        ${cardsHtml}
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'CISA KEV Threat Advisories · SecuBuzz',
    description: 'Active zero-day vulnerabilities cataloged by CISA with federal mitigation due dates and patch guidance.',
    canonicalPath: '/advisories',
  }, 'advisories', content);
}

// -----------------------------------------------------------------------------
// 5. INDIVIDUAL ADVISORY PAGE (/advisories/:cve)
// -----------------------------------------------------------------------------
export function getAdvisoryDetailPageHtml(advisory: KevVulnerability): string {
  const cve = advisory.cveID.toUpperCase();

  const schemaJson = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: `${cve}: ${advisory.vulnerabilityName || advisory.product}`,
    description: advisory.shortDescription,
    datePublished: advisory.dateAdded,
    author: {
      '@type': 'Organization',
      name: 'Cybersecurity and Infrastructure Security Agency (CISA)',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SecuBuzz by MiSo Labs',
      url: 'https://secubuzz.com',
    },
  });

  const content = `
    <div class="page-container content-wrapper">
      <div style="margin-bottom: 20px;">
        <a href="/advisories" style="font-size: 0.88rem;">&larr; Back to all advisories</a>
      </div>

      <article>
        <div class="content-header">
          <div style="display:flex; gap:8px; margin-bottom:12px;">
            <span class="badge critical">CRITICAL ZERO-DAY</span>
            <span class="badge tag">CISA KEV</span>
            ${advisory.knownRansomwareCampaignUse === 'Known' ? '<span class="badge high">KNOWN RANSOMWARE USE</span>' : ''}
          </div>
          <h1 class="content-title">${escapeHtml(cve)}</h1>
          <p style="font-size:1.15rem; color:var(--text-secondary); margin-top:6px;">${escapeHtml(advisory.vulnerabilityName || advisory.product)}</p>
        </div>

        <div class="advisory-detail-box">
          <h2 style="font-family:var(--font-heading); font-size:1.1rem; margin-bottom:12px; color:var(--text-primary);">Affected Infrastructure</h2>
          <div class="advisory-grid">
            <div>
              <div class="advisory-item-label">Vendor</div>
              <div class="advisory-item-value">${escapeHtml(advisory.vendorProject)}</div>
            </div>
            <div>
              <div class="advisory-item-label">Product</div>
              <div class="advisory-item-value">${escapeHtml(advisory.product)}</div>
            </div>
            <div>
              <div class="advisory-item-label">Date Added to KEV</div>
              <div class="advisory-item-value">${escapeHtml(advisory.dateAdded)}</div>
            </div>
            <div>
              <div class="advisory-item-label">Federal Remediation Due</div>
              <div class="advisory-item-value" style="color:var(--critical);">${escapeHtml(advisory.dueDate)}</div>
            </div>
          </div>
        </div>

        <div class="section-block">
          <h2>Vulnerability Overview</h2>
          <p style="font-size: 1rem; line-height: 1.65;">
            ${escapeHtml(advisory.shortDescription)}
          </p>
        </div>

        <div class="section-block">
          <h2>Mandatory Action Required</h2>
          <p style="font-size: 1rem; color: var(--text-primary);">
            ${escapeHtml(advisory.requiredAction)}
          </p>
          ${advisory.notes ? `<p style="font-size:0.88rem; color:var(--text-muted); margin-top:10px;">${escapeHtml(advisory.notes)}</p>` : ''}
        </div>

        <div class="section-block" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
          <p style="font-size:0.85rem; color:var(--text-muted);">Source: CISA Known Exploited Vulnerabilities Catalog (U.S. Public Domain)</p>
          <a href="https://nvd.nist.gov/vuln/detail/${escapeHtml(cve)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
            View on NIST NVD &rarr;
          </a>
        </div>
      </article>

      <div class="download-cta-card">
        <h2 class="download-cta-title">Track active zero-days on your phone.</h2>
        <p class="download-cta-desc">SecuBuzz delivers instant notifications when new CVEs are added to CISA KEV.</p>
        <a href="/download" class="btn btn-primary">Get SecuBuzz for Android</a>
      </div>
    </div>
  `;

  return renderBasePage({
    title: `${cve} Advisory: ${advisory.vulnerabilityName || advisory.product} · SecuBuzz`,
    description: advisory.shortDescription.slice(0, 155),
    canonicalPath: `/advisories/${cve.toLowerCase()}`,
    schemaJson,
  }, 'advisories', content);
}

// -----------------------------------------------------------------------------
// 6. DOWNLOAD PAGE (/download)
// -----------------------------------------------------------------------------
export function getDownloadPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper" style="text-align: center;">
      <div class="content-header" style="text-align: center;">
        <h1 class="content-title">Get SecuBuzz for Android</h1>
        <p class="content-meta" style="justify-content: center;">
          <span>Version 1.0</span>
          <span>100% Free</span>
          <span>Android (iOS coming later)</span>
        </p>
      </div>

      <div class="section-block" style="padding: 40px 24px; max-width: 520px; margin: 0 auto 30px;">
        <p style="color: var(--text-secondary); margin-bottom: 24px;">
          Available now on Google Play. Zero registration required. Install and start reading immediately.
        </p>

        <a href="https://play.google.com/store/apps/details?id=com.misolabs.secubuzz" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 14px 28px; font-size: 1rem;">
          Download on Google Play
        </a>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Scan from your phone or search <strong>SecuBuzz</strong> on the Play Store.
          </p>
        </div>
      </div>

      <div class="grid-3" style="text-align: left; margin-top: 40px;">
        <div class="card">
          <h2 class="card-title">Vertical Card Feed</h2>
          <p class="card-desc">One concise security brief per screen. Swipe quickly to triage morning news without clutter.</p>
        </div>
        <div class="card">
          <h2 class="card-title">Offline Cache</h2>
          <p class="card-desc">Stores up to 250 briefs on your device so you can catch up during flights or poor connectivity.</p>
        </div>
        <div class="card">
          <h2 class="card-title">1-Tap Incident Share</h2>
          <p class="card-desc">Generates pre-formatted Slack, Teams, and Jira snippets ready to paste into security channels.</p>
        </div>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Download SecuBuzz · Android Security App',
    description: 'Download SecuBuzz on Android. 60-word cybersecurity briefs, CISA zero-day alerts, and offline reading. 100% free.',
    canonicalPath: '/download',
  }, 'download', content);
}

// -----------------------------------------------------------------------------
// 7. FOR PUBLISHERS PAGE (/publishers)
// -----------------------------------------------------------------------------
export function getPublishersPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">For Publishers & Content Partners</h1>
        <p class="content-meta">Editorial Standards · Attribution · 48-Hour Removal SLA</p>
      </div>

      <div class="callout-box">
        <p>
          <strong>Summary of Publisher Policy:</strong> SecuBuzz is an independent news aggregator. We write short, original 40 to 60 word briefs based on public RSS feeds. We never copy full articles, we never scrape images, we always display your publication name, and we link directly to your original article so readers visit your site.
        </p>
      </div>

      <div class="section-block">
        <h2>1. How We Use Content</h2>
        <p>
          Cybersecurity professionals check dozens of blogs and advisories every morning. SecuBuzz acts as a triage reader:
        </p>
        <ul>
          <li><strong>Short Original Briefs:</strong> We write our own 40 to 60 word factual summaries highlighting affected software, CVE numbers, and fixes.</li>
          <li><strong>No Full Text or Images:</strong> We never copy full articles or scrape publisher graphics.</li>
          <li><strong>Clear Attribution:</strong> Your publication name is shown clearly in plain text (for example, <em>Source: BleepingComputer</em>). We do not use third-party logos.</li>
          <li><strong>Direct Link Back:</strong> Every brief includes a <em>"Read Original"</em> button linking to your canonical article so readers visit your website for the full story.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>2. Our 48-Hour Feed Removal SLA</h2>
        <p>
          We respect digital publishers. If you represent a publication whose public feed is included in SecuBuzz and you prefer to be removed, we will remove your feed quickly and courteously.
        </p>
        <div class="callout-box" style="border-left-color: var(--high);">
          <p>
            <strong>Guaranteed Removal Timeline:</strong> We honor all feed removal requests within <strong>48 hours</strong>. No legal formalisms required.
          </p>
        </div>
        <p>
          To request removal, send an email from your publication's domain to:
        </p>
        <p style="margin: 16px 0;">
          <a href="mailto:publishers@secubuzz.com?subject=Feed%20Removal%20Request" class="btn btn-outline">
            Email: publishers@secubuzz.com
          </a>
        </p>
        <p>
          Please include the feed URL or domain you would like removed.
        </p>
      </div>

      <div class="section-block">
        <h2>3. Licensing & Commercial Inquiries</h2>
        <p>
          SecuBuzz is currently 100% free. If your publication offers an official licensed data feed or API, we welcome discussions:
        </p>
        <p style="margin-top: 8px;">
          <strong>Email:</strong> <a href="mailto:publishers@secubuzz.com">publishers@secubuzz.com</a><br />
          <strong>Developer:</strong> MiSo Labs (<a href="https://secubuzz.com">secubuzz.com</a>)
        </p>
      </div>

      <div class="section-block">
        <h2>4. Public Domain Feeds (CISA & NVD)</h2>
        <p>
          Advisories from the U.S. Federal Government, including CISA KEV and NIST NVD, are works of the United States Government under 17 U.S.C. § 105 and reside in the public domain. SecuBuzz includes these alerts with courtesy attribution.
        </p>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'For Publishers & Content Partners · SecuBuzz',
    description: 'Editorial standards, fair use aggregation policy, and 48-hour feed removal SLA for news publishers.',
    canonicalPath: '/publishers',
  }, 'publishers', content);
}

// -----------------------------------------------------------------------------
// 8. PRIVACY POLICY PAGE (/privacy) - CORRECTED
// -----------------------------------------------------------------------------
export function getPrivacyPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">Privacy Policy</h1>
        <p class="content-meta">Effective Date: September 28, 2026 · SecuBuzz by MiSo Labs</p>
      </div>

      <div class="callout-box">
        <p><strong>Zero Personal Data Harvesting:</strong> SecuBuzz does not collect your name, email address, phone number, contacts, precise location, photos, financial information, or biometric data.</p>
      </div>

      <div class="section-block">
        <h2>1. Overview</h2>
        <p>
          SecuBuzz ("we", "us", or "our"), operated by <strong>MiSo Labs</strong>, is a mobile cybersecurity news and vulnerability tracking app. This Privacy Policy outlines our data practices for the mobile app and secubuzz.com.
        </p>
        <p>
          SecuBuzz does not require account creation, and we do not track what you read.
        </p>
      </div>

      <div class="section-block">
        <h2>2. Data We Process</h2>
        <p>The only technical data processed is:</p>
        <ul>
          <li><strong>Locally Saved Articles:</strong> Articles you bookmark are stored locally on your device. They are never sent to our servers.</li>
          <li><strong>Push Notification Tokens:</strong> If you turn on news alerts, an anonymous Expo Push token is generated for your device and stored in our Cloudflare D1 database. It is used solely to deliver security alerts and can be turned off anytime in your device settings.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>3. Information Stored on Your Device</h2>
        <p>
          SecuBuzz stores minimal temporary state locally on your phone (such as cached briefs and saved bookmarks). This data never leaves your device and is erased if you clear app storage or uninstall the app.
        </p>
      </div>

      <div class="section-block">
        <h2>4. External Publisher Links</h2>
        <p>
          SecuBuzz summarizes public security feeds. When you tap <em>"Read Original"</em>, you are directed to the publisher's website (for example, The Hacker News, BleepingComputer, CISA). Once you leave SecuBuzz, the external publisher's privacy policy applies.
        </p>
      </div>

      <div class="section-block">
        <h2>5. Advertising & Analytics</h2>
        <p>
          <strong>In-App:</strong> The current release of the SecuBuzz mobile application does not display commercial advertisements or use tracking SDKs. We may introduce non-intrusive advertisements or optional subscriptions in future releases to support operational costs; if so, this policy will be updated before any advertising SDK is introduced.
        </p>
        <p>
          <strong>Website (secubuzz.com):</strong> We use <strong>Cloudflare Web Analytics</strong> on this website. It is a privacy-first, cookieless tool that measures aggregate traffic without cookies, browser local storage, or personal tracking.
        </p>
      </div>

      <div class="section-block" id="account-deletion">
        <h2>6. Account & Data Deletion</h2>
        <p>
          <strong>App Name:</strong> SecuBuzz<br />
          SecuBuzz does not use accounts or logins. If you wish to delete all stored data:
        </p>
        <ul>
          <li><strong>Delete Local Data:</strong> In the app, go to <strong>Settings</strong> &gt; tap <strong>Clear Cache</strong>. Or in Android Settings &gt; Apps &gt; SecuBuzz &gt; Storage &gt; tap <strong>Clear Storage</strong>.</li>
          <li><strong>Delete Push Notification Token:</strong> Toggle notifications off in Android Settings, or uninstall the app. To request manual removal of your token from our backend database, email <a href="mailto:support@secubuzz.com?subject=Data%20Deletion%20Request">support@secubuzz.com</a>.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>7. Contact Information</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:support@secubuzz.com">support@secubuzz.com</a><br />
          <strong>Developer:</strong> MiSo Labs (<a href="https://secubuzz.com">secubuzz.com</a>)
        </p>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Privacy Policy · SecuBuzz',
    description: 'Privacy policy for SecuBuzz by MiSo Labs. No accounts, no personal tracking, and local storage on device.',
    canonicalPath: '/privacy',
  }, 'privacy', content);
}

// -----------------------------------------------------------------------------
// 9. ACCOUNT DELETION PAGE (/account-deletion)
// -----------------------------------------------------------------------------
export function getAccountDeletionPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">Account & Data Deletion Instructions</h1>
        <p class="content-meta">Google Play Compliance · SecuBuzz by MiSo Labs</p>
      </div>

      <div class="callout-box">
        <p>
          <strong>No User Accounts:</strong> SecuBuzz does not require account creation, logins, or passwords. Your saved bookmarks and reading history remain entirely on your physical device.
        </p>
      </div>

      <div class="section-block">
        <h2>Step 1: Deleting Local Data & Bookmarks</h2>
        <p>To erase all saved articles, cached news, and settings from your device:</p>
        <ul>
          <li>Open <strong>SecuBuzz</strong> on your phone.</li>
          <li>Tap <strong>Settings</strong> &gt; tap <strong>Clear Cache</strong>.</li>
          <li>Alternatively, on Android go to <strong>Settings</strong> &gt; <strong>Apps</strong> &gt; <strong>SecuBuzz</strong> &gt; <strong>Storage</strong> &gt; tap <strong>Clear Storage</strong>.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Step 2: Revoking & Deleting Push Tokens</h2>
        <p>If you enabled news alerts, your phone holds an anonymous push token. To delete it:</p>
        <ul>
          <li>Turn off notifications in Android Settings &gt; Apps &gt; SecuBuzz &gt; Notifications.</li>
          <li>Uninstall the app (Android automatically deactivates expired tokens).</li>
          <li>For manual database removal, email <a href="mailto:support@secubuzz.com?subject=Push%20Token%20Deletion%20Request">support@secubuzz.com</a>. Manual requests are processed within 30 days.</li>
        </ul>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Account & Data Deletion · SecuBuzz',
    description: 'Instructions for deleting local data, saved bookmarks, and push notification tokens in SecuBuzz.',
    canonicalPath: '/account-deletion',
  }, 'privacy', content);
}

// -----------------------------------------------------------------------------
// 10. TERMS OF SERVICE PAGE (/terms)
// -----------------------------------------------------------------------------
export function getTermsPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">Terms of Service</h1>
        <p class="content-meta">Effective Date: September 28, 2026 · SecuBuzz by MiSo Labs</p>
      </div>

      <div class="section-block">
        <h2>1. Informational Purposes Only</h2>
        <p>
          SecuBuzz provides short summaries of public cybersecurity news, vulnerability reports, and CISA advisories. All content is provided strictly for informational and educational awareness.
        </p>
        <p>
          SecuBuzz does not provide formal legal advice, incident response certification, or cybersecurity consulting. You and your organization are responsible for evaluating security advisories in your own systems.
        </p>
      </div>

      <div class="section-block">
        <h2>2. Third-Party Content & Trademarks</h2>
        <p>
          All referenced news headlines, reporting, and trademarks belong to their respective publishers and researchers. SecuBuzz provides brief editorial summaries under fair use commentary and provides links to the original sources.
        </p>
        <p>
          U.S. government security alerts (such as CISA KEV) reside in the public domain. SecuBuzz claims no copyright over government works.
        </p>
      </div>

      <div class="section-block">
        <h2>3. Disclaimer of Warranties</h2>
        <p>
          SecuBuzz is provided "as is" without warranty of any kind. While we strive for accuracy, we cannot guarantee that summaries are error-free or that feeds will be delivered without network interruption.
        </p>
      </div>

      <div class="section-block">
        <h2>4. Contact</h2>
        <p>For questions regarding these terms, contact <a href="mailto:support@secubuzz.com">support@secubuzz.com</a>.</p>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Terms of Service · SecuBuzz',
    description: 'Terms of Service and informational disclaimer for SecuBuzz by MiSo Labs.',
    canonicalPath: '/terms',
  }, 'terms', content);
}

// -----------------------------------------------------------------------------
// 11. ABOUT PAGE (/about)
// -----------------------------------------------------------------------------
export function getAboutPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">About SecuBuzz</h1>
        <p class="content-meta">The Mission · MiSo Labs · Contact</p>
      </div>

      <div class="section-block">
        <h2>The Mission: Cut the Security Noise</h2>
        <p>
          Every morning, security practitioners spend 30 to 45 minutes wading through redundant blog posts, marketing filler, and sensationalist headlines.
        </p>
        <p>
          SecuBuzz was built to fix that: deliver 60-word, factual security briefs and active CISA zero-day tracking in a distraction-free format.
        </p>
      </div>

      <div class="section-block">
        <h2>Design Principles</h2>
        <ul>
          <li><strong>Micro-Dot Telemetry:</strong> Objective severity ratings based on CVSS and CISA standards.</li>
          <li><strong>No Social Distractions:</strong> No comments, no like counters, and no algorithmic feeds.</li>
          <li><strong>Factual Focus:</strong> 60-word briefs, vendor mitigation deadlines, and clean incident sharing.</li>
        </ul>
      </div>

      <div class="section-block">
        <h2>Developer & Disclosures</h2>
        <p>
          SecuBuzz is developed by <strong>MiSo Labs</strong>.<br />
          Built by Nisarg.
        </p>
        <p style="margin-top: 10px;">
          <strong>Website:</strong> <a href="https://secubuzz.com">secubuzz.com</a><br />
          <strong>Support:</strong> <a href="mailto:support@secubuzz.com">support@secubuzz.com</a><br />
          <strong>Publishers:</strong> <a href="mailto:publishers@secubuzz.com">publishers@secubuzz.com</a>
        </p>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'About SecuBuzz · MiSo Labs',
    description: 'About SecuBuzz by MiSo Labs. The mission to deliver concise, factual cybersecurity intelligence.',
    canonicalPath: '/about',
  }, 'about', content);
}

// -----------------------------------------------------------------------------
// 12. DEDICATED CONTACT PAGE (/contact)
// -----------------------------------------------------------------------------
export function getContactPageHtml(): string {
  const content = `
    <div class="page-container content-wrapper">
      <div class="content-header">
        <h1 class="content-title">Contact Us</h1>
        <p class="content-meta">Support · Publisher Inquiries · Security Vulnerabilities</p>
      </div>

      <div class="grid-3">
        <div class="card">
          <h2 class="card-title">General Support</h2>
          <p class="card-desc">For bug reports, app feedback, or general questions about SecuBuzz.</p>
          <p style="margin-top: 14px;">
            <a href="mailto:support@secubuzz.com" class="btn btn-outline" style="font-size:0.82rem;">support@secubuzz.com</a>
          </p>
        </div>

        <div class="card">
          <h2 class="card-title">For Publishers</h2>
          <p class="card-desc">For feed removal requests, licensing discussions, or syndication.</p>
          <p style="margin-top: 14px;">
            <a href="mailto:publishers@secubuzz.com" class="btn btn-outline" style="font-size:0.82rem;">publishers@secubuzz.com</a>
          </p>
        </div>

        <div class="card">
          <h2 class="card-title">Security & Disclosures</h2>
          <p class="card-desc">To report security issues or vulnerabilities in our apps or infrastructure.</p>
          <p style="margin-top: 14px;">
            <a href="mailto:support@secubuzz.com" class="btn btn-outline" style="font-size:0.82rem;">support@secubuzz.com</a>
          </p>
        </div>
      </div>

      <div class="section-block" style="margin-top: 30px;">
        <h2>Publisher Removal Guarantee</h2>
        <p>
          If you are an authorized representative of a publication and want your feed excluded, email <a href="mailto:publishers@secubuzz.com">publishers@secubuzz.com</a> with the feed URL. We process removals within 48 hours without friction.
        </p>
      </div>
    </div>
  `;

  return renderBasePage({
    title: 'Contact SecuBuzz · Support & Publisher Inquiries',
    description: 'Contact SecuBuzz and MiSo Labs for app support, publisher inquiries, and security disclosures.',
    canonicalPath: '/contact',
  }, 'contact', content);
}

// -----------------------------------------------------------------------------
// 13. DYNAMIC SITEMAP GENERATOR
// -----------------------------------------------------------------------------
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
