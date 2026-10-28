import { GITHUB_ADVISORIES } from './githubAdvisories';
export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run<T = unknown>(): Promise<{ success: boolean; meta: unknown }>;
  all<T = unknown>(): Promise<{ results: T[] }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export interface Env {
  DB: D1Database;
  PUSH_ADMIN_SECRET?: string;
  ADMIN_KEY?: string;
  GITHUB_PAT?: string;
  ASSETS?: {
    fetch(request: Request | string, init?: RequestInit): Promise<Response>;
  };
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-admin-key',
};

// Single source of truth for the /support redirect destination (kept in one config spot)
export const SUPPORT_TARGET_URL = 'https://ko-fi.com/secubuzz';

const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

function jsonResponse(
  data: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {}
): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ success: false, error: message }, status);
}

function isValidExpoPushToken(token: unknown): boolean {
  if (typeof token !== 'string') return false;
  // Expo push tokens have format ExponentPushToken[...] or ExpoPushToken[...]
  return (
    (token.startsWith('ExponentPushToken[') || token.startsWith('ExpoPushToken[')) &&
    token.endsWith(']')
  );
}

function isAuthorized(request: Request, env: Env): boolean {
  const allowed = [env.PUSH_ADMIN_SECRET, env.ADMIN_KEY].filter(Boolean) as string[];
  if (allowed.length === 0) {
    // If no secret configured in worker env, allow internal operations during development
    return true;
  }
  const authHeader = request.headers.get('Authorization') || '';
  const customKey = request.headers.get('x-admin-key') || '';
  const url = new URL(request.url);
  const queryKey = url.searchParams.get('key') || url.searchParams.get('secret') || '';

  if (allowed.some(s => s === customKey)) return true;
  if (allowed.some(s => s === queryKey)) return true;
  if (allowed.some(s => authHeader === `Bearer ${s}`)) return true;
  return false;
}

function getVisitorInfo(request: Request): { visitorId: string; isRepeat: number; isNewCookie: boolean } {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(/(?:^|;\s*)sb_vid=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return { visitorId: match[1], isRepeat: 1, isNewCookie: false };
  }
  return { visitorId: crypto.randomUUID(), isRepeat: 0, isNewCookie: true };
}

import {
  ArticleItem,
  KevVulnerability,
  createSlug,
  generateSitemapXml,
  generateRssXml,
  injectMetaTags,
} from './sitemap';
import { SEED_KEV_ADVISORIES } from './seedKev';

import {
  FAVICON_48_BASE64,
  FAVICON_32_BASE64,
  APPLE_TOUCH_BASE64,
  APP_ICON_BASE64,
} from './iconAssets';

const R2_FEED_URL = 'https://pub-3fb02516aa81498eb34da1b79161b1c8.r2.dev/feed.json';
const CISA_KEV_URL = 'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json';

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const ENTITY_TERMS = [
  'bitget', 'kiteworks', 'netscaler', 'citrix', 'wireshark', 'snowflake',
  'chatgpt', 'elementor', 'sharepoint', 'fortinet', 'palo alto', 'ivanti',
  'sonicwall', 'cisco', 'crowdstrike', 'vmware', 'salesforce', 'qualys',
  'telegram', 'ransomhub', 'lockbit', 'akira', 'qilin', 'blacksuit',
  'coregraphics', 'core graphics', 'safari', 'webkit', 'ios'
];

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'in', 'on', 'for', 'to', 'of', 'and', 'is', 'with', 'after', 'from',
  'targets', 'fixes', 'flaw', 'vulnerability', 'vulnerabilities', 'security', 'cyber',
  'attack', 'attacks', 'new', 'release', 'addresses', 'update', 'updates', 'by', 'as',
  'at', 'about', 'over', 'into', 'warns', 'alert', 'patch', 'patches', 'zero-day', 'exploit',
  'exploited', 'users', 'critical', 'high', 'active', 'actively', 'amid', 'amidst', 'via'
]);

function getTitleKeywords(title: string): string[] {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function extractCvesFromText(text: string): string[] {
  const matches = (text || '').match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

function deduplicateFeed(articles: any[]): ArticleItem[] {
  const cutoffTime = Date.now() - THIRTY_DAYS_MS;
  const recentArticles = (articles || [])
    .filter(art => {
      const t = Date.parse(art.publishedAt || art.pubDate || 0) || 0;
      return t >= cutoffTime;
    })
    .sort((a, b) => {
      const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
      const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
      return timeB - timeA;
    });

  const deduped: ArticleItem[] = [];
  const seenIds = new Set<string>();
  const seenUrls = new Set<string>();
  const seenNormTitles = new Set<string>();

  for (const art of recentArticles) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const sourceUrl = (art.sourceUrl || art.url || '').trim().toLowerCase();
    const articleId = (art.id || sourceUrl || title).trim().toLowerCase();
    const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);

    // O(1) duplicate filter (protects free-tier CPU limit from quadratic degradation)
    if (seenIds.has(articleId) || (sourceUrl && seenUrls.has(sourceUrl)) || (normTitle && seenNormTitles.has(normTitle))) {
      continue;
    }

    seenIds.add(articleId);
    if (sourceUrl) seenUrls.add(sourceUrl);
    if (normTitle) seenNormTitles.add(normTitle);

    const slug = art.slug || createSlug(title, art.id || sourceUrl || title);
    const baseSlug = (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
    const hex = slug.slice(-6);

    const aliases: string[] = [baseSlug, `article-${hex}`, hex];
    if (art.id && !aliases.includes(art.id.toLowerCase())) {
      aliases.push(art.id.toLowerCase());
    }
    if (art.aliases && Array.isArray(art.aliases)) {
      for (const a of art.aliases) {
        if (!aliases.includes(a)) aliases.push(a);
      }
    }

    deduped.push({
      ...art,
      slug,
      aliases,
      additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : []
    });
  }

  return deduped.slice(0, 350);
}

let cachedArticles: ArticleItem[] | null = null;
let cachedArticlesTime = 0;

async function getArticles(): Promise<ArticleItem[]> {
  const now = Date.now();
  if (cachedArticles && now - cachedArticlesTime < 60 * 1000) {
    return cachedArticles;
  }
  try {
    const res = await fetch(R2_FEED_URL);
    if (res.ok) {
      const raw: any[] = await res.json();
      cachedArticles = deduplicateFeed(raw);
      cachedArticlesTime = now;
      return cachedArticles || [];
    }
  } catch (err) {
    console.error('Failed to fetch articles from R2:', err);
  }
  return cachedArticles || [];
}

let cachedAllKev: KevVulnerability[] = SEED_KEV_ADVISORIES;
let cachedRecentKev: KevVulnerability[] = SEED_KEV_ADVISORIES;
let cachedKevTime = 0;

async function getKevAdvisories(full: boolean = true): Promise<KevVulnerability[]> {
  const now = Date.now();
  if (cachedAllKev.length >= 1000 && now - cachedKevTime < 30 * 60 * 1000) {
    return full ? cachedAllKev : cachedRecentKev;
  }
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(CISA_KEV_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'SecuBuzz/1.0 (+https://secubuzz.com)',
        'Accept': 'application/json',
      },
      cf: {
        cacheTtl: 3600,
        cacheEverything: true,
      },
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data: any = await res.json();
      if (data && Array.isArray(data.vulnerabilities) && data.vulnerabilities.length > 0) {
        // Sort newest first
        const sorted = [...data.vulnerabilities].sort((a, b) => {
          const timeA = Date.parse(a.dateAdded) || 0;
          const timeB = Date.parse(b.dateAdded) || 0;
          return timeB - timeA;
        });
        cachedAllKev = sorted;
        cachedRecentKev = sorted.slice(0, 100);
        cachedKevTime = now;
        return full ? cachedAllKev : cachedRecentKev;
      }
    }
  } catch (err) {
    console.error('Failed to fetch KEV catalog:', err);
  }
  // Backoff on failure so we don't hammer upstream on every request
  cachedKevTime = now - 25 * 60 * 1000;
  return full
    ? (cachedAllKev.length > 0 ? cachedAllKev : SEED_KEV_ADVISORIES)
    : (cachedRecentKev.length > 0 ? cachedRecentKev : SEED_KEV_ADVISORIES);
}

let cachedVideoPath: string | null = null;
let cachedVideoBuffer: ArrayBuffer | null = null;

const epssCache = new Map<string, { epss: number; percentile: number; delta7d: number | null; date?: string; cachedAt: number }>();
async function getEpssScore(cve: string) {
  const now = Date.now();
  const cached = epssCache.get(cve);
  if (cached && now - cached.cachedAt < 24 * 3600 * 1000) {
    return cached;
  }
  try {
    const res = await fetch(`https://api.first.org/data/v1/epss?cve=${cve}&scope=time-series`);
    if (res.ok) {
      const json: any = await res.json();
      const item = json.data?.[0];
      if (item && item.epss) {
        const epssVal = parseFloat(item.epss);
        const ts = item['time-series'];
        const epss7d = ts && ts.length > 0 ? parseFloat(ts[Math.min(6, ts.length - 1)].epss) : epssVal;
        const result = {
          cve,
          epss: epssVal,
          percentile: parseFloat(item.percentile),
          delta7d: Number((epssVal - epss7d).toFixed(4)),
          date: item.date,
          cachedAt: now,
        };
        epssCache.set(cve, result);
        return result;
      }
    }
  } catch (err) {
    console.warn('EPSS fetch error:', err);
  }
  return { cve, epss: null, percentile: null, delta7d: null };
}

const cveMetricsCache = new Map<string, any>();
async function getCveMetrics(cve: string) {
  const now = Date.now();
  const cached = cveMetricsCache.get(cve);
  if (cached && now - cached.cachedAt < 24 * 3600 * 1000) {
    return cached;
  }
  try {
    const res = await fetch(`https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=${cve}`, {
      headers: { 'User-Agent': 'SecuBuzz/1.0 (+https://secubuzz.com)' },
    });
    if (res.ok) {
      const json: any = await res.json();
      const vuln = json.vulnerabilities?.[0]?.cve;
      const v31 = vuln?.metrics?.cvssMetricV31?.[0]?.cvssData;
      const v40 = vuln?.metrics?.cvssMetricV40?.[0]?.cvssData;
      const best = v31 || v40;
      if (best) {
        const result = {
          cve,
          vectorString: best.vectorString,
          version: best.version,
          score: best.baseScore,
          baseScore: best.baseScore,
          severity: best.baseSeverity,
          baseSeverity: best.baseSeverity,
          attackVector: best.attackVector,
          attackComplexity: best.attackComplexity,
          privilegesRequired: best.privilegesRequired,
          userInteraction: best.userInteraction,
          scope: best.scope,
          confidentialityImpact: best.confidentialityImpact,
          integrityImpact: best.integrityImpact,
          availabilityImpact: best.availabilityImpact,
          cachedAt: now,
        };
        cveMetricsCache.set(cve, result);
        return result;
      }
    }
  } catch (err) {
    console.warn('NVD fetch error:', err);
  }
  return { cve, vectorString: null };
}

function isKnownSpaRoute(pathname: string, articlesList: ArticleItem[], advisoriesList: KevVulnerability[]): boolean {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const STATIC_ROUTES = new Set([
    '/',
    '/news',
    '/advisories',
    '/download',
    '/about',
    '/privacy',
    '/terms',
    '/data-privacy',
    '/account-deletion',
    '/publishers',
    '/contact',
  ]);

  if (STATIC_ROUTES.has(clean)) return true;

  if (clean.startsWith('/news/')) {
    const rawSlug = clean.slice('/news/'.length).toLowerCase();
    const slug = decodeURIComponent(rawSlug).replace(/\.html?$/i, '');
    if (!slug) return false;
    // 1) First check active feed
    const inFeed = articlesList.some(a => {
      const headline = a.headline || a.title || '';
      const articleId = a.id || a.sourceUrl || a.url || headline;
      const artSlug = (a.slug || createSlug(headline, articleId)).toLowerCase();
      if (artSlug === slug) return true;
      if (a.aliases && a.aliases.some((al: string) => al.toLowerCase() === slug)) return true;
      const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
      if (base && (slug === base || slug.startsWith(base) || base.startsWith(slug))) return true;
      return false;
    });
    if (inFeed) return true;

    // 2) Any valid news slug (alphanumeric with hyphens/underscores/dots, >= 3 chars) is a valid SPA article route
    // This allows Googlebot to index historical/aged-out stories with HTTP 200 instead of receiving a 404
    // Strict news check (eliminates soft 404s)
    return false;
  }

  if (clean.startsWith('/advisories/')) {
    const rawSlug = clean.slice('/advisories/'.length).toLowerCase();
    const slug = decodeURIComponent(rawSlug).replace(/\.html?$/i, '');
    if (!slug) return false;
    // 1) Any standard CVE (cve-YYYY-NNNN) or GHSA identifier
    // Validated against advisoriesList below
    // 2) Active KEV catalog match
    if (advisoriesList.some(
      a => (a?.cveID && a.cveID.toLowerCase() === slug) ||
           (a?.cveID && slug.includes(a.cveID.toLowerCase())) ||
           ((a as any)?.cve && (a as any).cve.toLowerCase() === slug)
    )) {
      return true;
    }
    // 3) Any valid advisory slug (>= 4 chars)
    // Strict advisory check (eliminates soft 404s)
    return false;
  }

  return false;
}

async function findKevAdvisory(slug: string): Promise<KevVulnerability | undefined> {
  await getKevAdvisories();
  const target = slug.toLowerCase();
  return (
    cachedAllKev.find(
      adv => adv?.cveID && (adv.cveID.toLowerCase() === target || target.includes(adv.cveID.toLowerCase()))
    ) ||
    SEED_KEV_ADVISORIES.find(
      adv => adv?.cveID && (adv.cveID.toLowerCase() === target || target.includes(adv.cveID.toLowerCase()))
    )
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: CORS_HEADERS,
      });
    }

    // Canonical HTTPS & Hostname Enforcement (301 Permanent Redirect)
    // Resolves GSC split-protocol indexation (e.g. http://secubuzz.com/news) and www canonicalization
    const isLocal = url.hostname === 'localhost' || url.hostname === '127.0.0.1';
    const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
    const isHttp = proto === 'http' || url.protocol === 'http:';
    const isWww = url.hostname.startsWith('www.');

    if (!isLocal && (isHttp || isWww)) {
      const canonicalTarget = new URL(request.url);
      canonicalTarget.protocol = 'https:';
      if (isWww) {
        canonicalTarget.hostname = canonicalTarget.hostname.replace(/^www\./, '');
      }
      return Response.redirect(canonicalTarget.toString(), 301);
    }

    try {
      // Smart App Download Redirect & Click Tracking (/go/play, /app, /play, /qr, /scan)
      if (
        url.pathname === '/go/play' ||
        url.pathname === '/app' ||
        url.pathname === '/play' ||
        url.pathname === '/qr' ||
        url.pathname === '/scan'
      ) {
        const defaultSource = (url.pathname === '/qr' || url.pathname === '/scan') ? 'qr_scan' : 'direct';
        const source = (url.searchParams.get('src') || url.searchParams.get('source') || defaultSource).slice(0, 64);
        const country = request.headers.get('cf-ipcountry') || 'XX';
        const referer = (request.headers.get('Referer') || '').slice(0, 255);
        const userAgent = (request.headers.get('User-Agent') || '').slice(0, 255);
        const now = new Date().toISOString();
        const { visitorId, isRepeat, isNewCookie } = getVisitorInfo(request);

        if (env.DB) {
          try {
            await env.DB.prepare(
              `INSERT INTO install_clicks (visitor_id, source, is_repeat, country, referer, user_agent, clicked_at)
               VALUES (?, ?, ?, ?, ?, ?, ?);`
            ).bind(visitorId, source, isRepeat, country, referer, userAgent, now).run();
          } catch (dbErr) {
            console.warn('Failed to record install click:', dbErr);
          }
        }

        const playStoreTarget = source === 'direct'
          ? 'https://play.google.com/store/apps/details?id=com.secubuzz.app'
          : `https://play.google.com/store/apps/details?id=com.secubuzz.app&referrer=utm_source%3D${encodeURIComponent(source)}%26utm_medium%3Dwebsite`;

        const headers = new Headers({
          'Location': playStoreTarget,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        });
        if (isNewCookie) {
          headers.append('Set-Cookie', `sb_vid=${visitorId}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`);
        }

        return new Response(null, {
          status: 302,
          headers,
        });
      }

      // Public Support Redirect (/support) -> Records click telemetry in D1 and redirects to Ko-fi
      if (url.pathname === '/support' || url.pathname === '/support/') {
        const source = (url.searchParams.get('src') || url.searchParams.get('source') || 'direct').slice(0, 64);
        const country = request.headers.get('cf-ipcountry') || 'XX';
        const referer = (request.headers.get('Referer') || '').slice(0, 255);
        const userAgent = (request.headers.get('User-Agent') || '').slice(0, 255);
        const now = new Date().toISOString();
        const { visitorId, isRepeat, isNewCookie } = getVisitorInfo(request);

        if (env.DB) {
          try {
            await env.DB.prepare(
              `INSERT INTO support_clicks (visitor_id, source, is_repeat, country, referer, user_agent, clicked_at)
               VALUES (?, ?, ?, ?, ?, ?, ?);`
            ).bind(visitorId, source, isRepeat, country, referer, userAgent, now).run();
          } catch (dbErr) {
            console.warn('Failed to record support click:', dbErr);
          }
        }

        const headers = new Headers({
          'Location': (source && source !== 'direct') ? `${SUPPORT_TARGET_URL}?src=${encodeURIComponent(source)}` : SUPPORT_TARGET_URL,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
        });
        if (isNewCookie) {
          headers.append('Set-Cookie', `sb_vid=${visitorId}; Path=/; Max-Age=31536000; SameSite=Lax; Secure`);
        }

        return new Response(null, {
          status: 302,
          headers,
        });
      }

      // API: Telemetry for Support / Ko-fi Clicks (Private - Admin Only)
      if (url.pathname === '/api/analytics/support-clicks') {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized. Admin access required.', 401);
        }
        if (!env.DB) return jsonResponse({ totalClicks: 0, uniqueClickers: 0, repeatClicks: 0, breakdown: [], countries: [], recent: [] });
        try {
          const stats: any = await env.DB.prepare(
            `SELECT COUNT(*) as total_clicks,
                    COUNT(DISTINCT visitor_id) as unique_clickers,
                    SUM(is_repeat) as repeat_clicks
             FROM support_clicks;`
          ).first();

          const { results: totals } = await env.DB.prepare(
            `SELECT source, COUNT(*) as count, COUNT(DISTINCT visitor_id) as unique_clickers, SUM(is_repeat) as repeats
             FROM support_clicks
             GROUP BY source
             ORDER BY count DESC;`
          ).all();

          const { results: countries } = await env.DB.prepare(
            `SELECT country, COUNT(*) as count
             FROM support_clicks
             GROUP BY country
             ORDER BY count DESC
             LIMIT 10;`
          ).all();

          const { results: recent } = await env.DB.prepare(
            `SELECT source, is_repeat, country, referer, clicked_at
             FROM support_clicks
             ORDER BY clicked_at DESC
             LIMIT 25;`
          ).all();

          return jsonResponse({
            success: true,
            totalClicks: Number(stats?.total_clicks || 0),
            uniqueClickers: Number(stats?.unique_clickers || 0),
            repeatClicks: Number(stats?.repeat_clicks || 0),
            breakdown: totals ?? [],
            countries: countries ?? [],
            recent: recent ?? [],
          });
        } catch (dbErr: any) {
          return errorResponse(`Database error: ${dbErr?.message || 'unknown'}`, 500);
        }
      }

      // API: Telemetry for App Install Clicks & Repeat Readers (Private - Admin Only)
      if (url.pathname === '/api/analytics/install-clicks') {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized. Admin access required.', 401);
        }
        if (!env.DB) return jsonResponse({ totalClicks: 0, uniqueClickers: 0, repeatClicks: 0, breakdown: [], countries: [], recent: [] });
        try {
          const stats: any = await env.DB.prepare(
            `SELECT COUNT(*) as total_clicks,
                    COUNT(DISTINCT visitor_id) as unique_clickers,
                    SUM(is_repeat) as repeat_clicks
             FROM install_clicks;`
          ).first();

          const { results: totals } = await env.DB.prepare(
            `SELECT source, COUNT(*) as count, COUNT(DISTINCT visitor_id) as unique_clickers, SUM(is_repeat) as repeats
             FROM install_clicks
             GROUP BY source
             ORDER BY count DESC;`
          ).all();

          const { results: countries } = await env.DB.prepare(
            `SELECT country, COUNT(*) as count
             FROM install_clicks
             GROUP BY country
             ORDER BY count DESC
             LIMIT 10;`
          ).all();

          const { results: recent } = await env.DB.prepare(
            `SELECT source, is_repeat, country, referer, clicked_at
             FROM install_clicks
             ORDER BY clicked_at DESC
             LIMIT 25;`
          ).all();

          return jsonResponse({
            success: true,
            totalClicks: Number(stats?.total_clicks || 0),
            uniqueClickers: Number(stats?.unique_clickers || 0),
            repeatClicks: Number(stats?.repeat_clicks || 0),
            breakdown: totals ?? [],
            countries: countries ?? [],
            recent: recent ?? [],
          });
        } catch (err: any) {
          return jsonResponse({ success: false, error: err.message, totalClicks: 0, uniqueClickers: 0, repeatClicks: 0, breakdown: [], countries: [], recent: [] });
        }
      }

      // API: Telemetry for Notification CTR & Opens (Private - Admin Only)
      if (url.pathname === '/api/analytics/notification-clicks' || url.pathname === '/api/analytics/notification-opens') {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized. Admin access required.', 401);
        }
        if (!env.DB) return jsonResponse({ totalOpens: 0, recent: [], topArticles: [] });
        try {
          const stats: any = await env.DB.prepare(
            `SELECT COUNT(*) as total_opens FROM notification_opens;`
          ).first();

          const { results: topArticles } = await env.DB.prepare(
            `SELECT article_id, category, severity, COUNT(*) as open_count
             FROM notification_opens
             GROUP BY article_id
             ORDER BY open_count DESC
             LIMIT 15;`
          ).all();

          const { results: recent } = await env.DB.prepare(
            `SELECT article_id, category, severity, app_version, platform, opened_at
             FROM notification_opens
             ORDER BY opened_at DESC
             LIMIT 25;`
          ).all();

          return jsonResponse({
            success: true,
            totalOpens: Number(stats?.total_opens || 0),
            topArticles: topArticles ?? [],
            recent: recent ?? [],
          });
        } catch (err: any) {
          return jsonResponse({ success: false, error: err.message, totalOpens: 0, topArticles: [], recent: [] });
        }
      }

      // Favicon & Brand Asset routes
      if (url.pathname === '/favicon.ico' || url.pathname === '/favicon.png' || url.pathname === '/assets/favicon.png') {
        const binary = Uint8Array.from(atob(FAVICON_48_BASE64), c => c.charCodeAt(0));
        return new Response(binary, {
          status: 200,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            ...CORS_HEADERS,
          },
        });
      }

      if (url.pathname === '/favicon-32.png') {
        const binary = Uint8Array.from(atob(FAVICON_32_BASE64), c => c.charCodeAt(0));
        return new Response(binary, {
          status: 200,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            ...CORS_HEADERS,
          },
        });
      }

      if (url.pathname === '/apple-touch-icon.png' || url.pathname === '/apple-touch-icon-precomposed.png') {
        const binary = Uint8Array.from(atob(APPLE_TOUCH_BASE64), c => c.charCodeAt(0));
        return new Response(binary, {
          status: 200,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            ...CORS_HEADERS,
          },
        });
      }

      if (url.pathname === '/icon.png' || url.pathname === '/assets/icon.png') {
        const binary = Uint8Array.from(atob(APP_ICON_BASE64), c => c.charCodeAt(0));
        return new Response(binary, {
          status: 200,
          headers: {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=31536000, immutable',
            ...CORS_HEADERS,
          },
        });
      }

      // API: Advisories JSON (Full CISA KEV catalog by default)
      if (url.pathname === '/api/advisories') {
        const all = url.searchParams.get('all') !== 'false';
        const cisa = await getKevAdvisories(all);
        const advisories = [...cisa, ...GITHUB_ADVISORIES];
        return jsonResponse({
          success: true,
          count: advisories.length,
          advisories,
        }, 200, {
          'Cache-Control': 'public, max-age=1800, s-maxage=1800',
        });
      }

      // API: EPSS Exploit Prediction Scores (FIRST.org)
      if (url.pathname === '/api/epss') {
        const cve = (url.searchParams.get('cve') || '').toUpperCase().trim();
        if (!cve || !cve.startsWith('CVE-')) {
          return jsonResponse({ error: 'Valid CVE parameter required' }, 400);
        }
        const data = await getEpssScore(cve);
        return jsonResponse(data, 200, {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        });
      }

      // API: Authoritative CVSS Metrics & Vector Strings (NIST NVD)
      if (url.pathname === '/api/cve-metrics') {
        const cve = (url.searchParams.get('cve') || '').toUpperCase().trim();
        if (!cve || !cve.startsWith('CVE-')) {
          return jsonResponse({ error: 'Valid CVE parameter required' }, 400);
        }
        const data = await getCveMetrics(cve);
        return jsonResponse(data, 200, {
          'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        });
      }

      // API: News articles JSON (Deduplicated, 30-day window)
      if (url.pathname === '/api/news' || url.pathname === '/feed.json') {
        const articles = await getArticles();
        return jsonResponse(articles, 200, {
          'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=30',
        });
      }

      // Redirect legacy .html URLs to clean SPA paths
      if (url.pathname.endsWith('.html') && url.pathname !== '/index.html') {
        const cleanPath = url.pathname.replace(/\.html$/, '');
        return Response.redirect(`${url.origin}${cleanPath}`, 301);
      }

      // News slug 301 redirect for legacy/alias links
      if (url.pathname.startsWith('/news/')) {
        const reqSlug = url.pathname.replace(/^\/news\//, '').replace(/\/+$/, '').toLowerCase();
        if (reqSlug) {
          const articles = await getArticles();
          const matchedArt = articles.find(a => {
            const headline = a.headline || a.title || '';
            const articleId = a.id || a.sourceUrl || a.url || headline;
            const artSlug = (a.slug || createSlug(headline, articleId)).toLowerCase();
            if (artSlug === reqSlug) return false; // Already canonical, proceed to serve
            if (a.aliases && a.aliases.some((al: string) => al.toLowerCase() === reqSlug)) return true;
            const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
            if (base && (reqSlug === base || reqSlug.startsWith(base) || base.startsWith(reqSlug))) return true;
            return false;
          });
          if (matchedArt) {
            const headline = matchedArt.headline || matchedArt.title || '';
            const articleId = matchedArt.id || matchedArt.sourceUrl || matchedArt.url || headline;
            const canonicalSlug = matchedArt.slug || createSlug(headline, articleId);
            if (canonicalSlug.toLowerCase() !== reqSlug) {
              return Response.redirect(`${url.origin}/news/${canonicalSlug}`, 301);
            }
          }
        }
      }

      // Dynamic Sitemap for Search Engines
      if (url.pathname === '/sitemap.xml') {
        const [articles, cisa] = await Promise.all([getArticles(), getKevAdvisories()]);
        const advisories = [...cisa, ...(GITHUB_ADVISORIES as any)];
        const sitemapXml = generateSitemapXml(articles, advisories);
        return new Response(sitemapXml, {
          status: 200,
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600',
            ...CORS_HEADERS,
          },
        });
      }

      // RSS Feed for news briefs
      if (url.pathname === '/rss.xml' || url.pathname === '/feed.xml' || url.pathname === '/news/rss.xml') {
        const articles = await getArticles();
        const rssXml = generateRssXml(articles);
        return new Response(rssXml, {
          status: 200,
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=1800',
            ...CORS_HEADERS,
          },
        });
      }

      // Security.txt (RFC 9116)
      if (url.pathname === '/.well-known/security.txt' || url.pathname === '/security.txt') {
        const securityTxt = `Contact: mailto:security@secubuzz.com\nExpires: 2027-12-31T23:59:59.000Z\nPreferred-Languages: en\nCanonical: https://secubuzz.com/.well-known/security.txt\nPolicy: https://secubuzz.com/privacy\nAcknowledgments: https://secubuzz.com/about\n`;
        return new Response(securityTxt, {
          status: 200,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
            ...CORS_HEADERS,
          },
        });
      }

      // Robots.txt for Web Crawlers
      if (url.pathname === '/robots.txt') {
        const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://secubuzz.com/sitemap.xml\n`;
        return new Response(robotsTxt, {
          status: 200,
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
            ...CORS_HEADERS,
          },
        });
      }

      // 1. Health check & Feed Freshness Watchdog
      if (url.pathname === '/health' || url.pathname === '/api/health') {
        const articles = await getArticles();
        const latest = articles[0];
        const pubTime = latest ? Date.parse(latest.publishedAt || (latest as any).pubDate || '') : 0;
        const now = Date.now();
        const ageHours = pubTime ? (now - pubTime) / (1000 * 60 * 60) : 999;

        // Weekend-aware publishing lull window (Saturday 00:00 UTC through Monday 16:00 UTC)
        const nowDate = new Date(now);
        const day = nowDate.getUTCDay();
        const hour = nowDate.getUTCHours();
        const isWeekend = day === 0 || day === 6 || (day === 1 && hour < 16);
        const thresholdHours = isWeekend ? 30.0 : 16.0;
        const isFresh = ageHours <= thresholdHours;

        const healthData = {
          status: isFresh ? 'ok' : 'stale_feed',
          service: 'secubuzz-push-worker',
          timestamp: new Date().toISOString(),
          feed: {
            articleCount: articles.length,
            latestHeadline: latest?.headline || latest?.title || null,
            latestPublishedAt: latest?.publishedAt || null,
            ageHours: parseFloat(ageHours.toFixed(2)),
            thresholdHours,
            isWeekend,
            isFresh,
          },
        };

        const statusCode = isFresh ? 200 : 503;
        return jsonResponse(healthData, statusCode, {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        });
      }

      // 2. Register / Update Device Push Token (Called by Mobile App)
      // POST /api/push-tokens
      if (
        (url.pathname === '/api/push-tokens' || url.pathname === '/push-tokens') &&
        request.method === 'POST'
      ) {
        let body: any;
        try {
          body = await request.json();
        } catch {
          return errorResponse('Invalid JSON body');
        }

        const {
          token,
          platform,
          appVersion,
          newsBriefs,
          threatAdvisories,
          severityThreshold,
        } = body ?? {};

        if (!isValidExpoPushToken(token)) {
          return errorResponse('Invalid Expo push token format');
        }

        const validPlatform =
          platform === 'ios' || platform === 'android' ? platform : 'android';
        const now = new Date().toISOString();
        const safeVersion = typeof appVersion === 'string' ? appVersion.slice(0, 32) : '1.0.0';

        const hasNews = typeof newsBriefs === 'boolean';
        const hasAdv = typeof threatAdvisories === 'boolean';
        const hasSev = typeof severityThreshold === 'string' && ['ALL', 'HIGH_CRITICAL', 'CRITICAL_ONLY'].includes(severityThreshold);

        const newsVal = hasNews ? (newsBriefs ? 1 : 0) : 1;
        const advVal = hasAdv ? (threatAdvisories ? 1 : 0) : 1;
        const sevVal = hasSev ? severityThreshold : 'HIGH_CRITICAL';

        // Idempotent UPSERT into Cloudflare D1 with user alert preferences
        await env.DB.prepare(
          `INSERT INTO push_tokens (token, platform, app_version, created_at, last_seen_at, is_active, news_briefs, threat_advisories, severity_threshold)
           VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?)
           ON CONFLICT(token) DO UPDATE SET
             last_seen_at = excluded.last_seen_at,
             app_version = excluded.app_version,
             is_active = 1,
             news_briefs = CASE WHEN ? THEN excluded.news_briefs ELSE push_tokens.news_briefs END,
             threat_advisories = CASE WHEN ? THEN excluded.threat_advisories ELSE push_tokens.threat_advisories END,
             severity_threshold = CASE WHEN ? THEN excluded.severity_threshold ELSE push_tokens.severity_threshold END;`
        )
          .bind(
            token,
            validPlatform,
            safeVersion,
            now,
            now,
            newsVal,
            advVal,
            sevVal,
            hasNews ? 1 : 0,
            hasAdv ? 1 : 0,
            hasSev ? 1 : 0
          )
          .run();

        return jsonResponse({
          success: true,
          message: 'Token registered successfully',
          preferences: {
            newsBriefs: hasNews ? newsBriefs : true,
            threatAdvisories: hasAdv ? threatAdvisories : true,
            severityThreshold: sevVal,
          },
        });
      }

      // 3. Get Active Tokens with Preferences (Called by scripts/ingest.mjs during cron)
      // GET /api/push-tokens (supports ?type=brief|advisory&severity=CRITICAL|HIGH|MEDIUM|LOW)
      if (
        (url.pathname === '/api/push-tokens' || url.pathname === '/push-tokens') &&
        request.method === 'GET'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const filterType = (url.searchParams.get('type') || '').toLowerCase();
        const filterSeverity = (url.searchParams.get('severity') || '').toUpperCase();

        let query = `SELECT token, news_briefs, threat_advisories, severity_threshold FROM push_tokens WHERE is_active = 1`;

        if (filterType === 'brief') {
          query += ` AND news_briefs = 1`;
        } else if (filterType === 'advisory' || filterType === 'cve') {
          query += ` AND threat_advisories = 1`;
        }

        if (filterSeverity === 'CRITICAL') {
          // CRITICAL reaches all enabled channels
        } else if (filterSeverity === 'HIGH') {
          query += ` AND severity_threshold IN ('HIGH_CRITICAL', 'ALL')`;
        } else if (filterSeverity === 'MEDIUM' || filterSeverity === 'LOW') {
          query += ` AND severity_threshold = 'ALL'`;
        }

        query += ` ORDER BY last_seen_at DESC;`;

        const { results } = await env.DB.prepare(query).all<{
          token: string;
          news_briefs: number;
          threat_advisories: number;
          severity_threshold: string;
        }>();

        const tokens = (results ?? []).map((row) => row.token);
        const devices = (results ?? []).map((row) => ({
          token: row.token,
          newsBriefs: row.news_briefs === 1,
          threatAdvisories: row.threat_advisories === 1,
          severityThreshold: row.severity_threshold || 'HIGH_CRITICAL',
        }));

        return jsonResponse({
          success: true,
          count: tokens.length,
          tokens,
          devices,
        });
      }

      // 4. Deactivate Invalid Tokens (Called by scripts/ingest.mjs if Expo returns DeviceNotRegistered)
      // POST /api/push-tokens/deactivate
      if (
        url.pathname === '/api/push-tokens/deactivate' &&
        request.method === 'POST'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        let body: any;
        try {
          body = await request.json();
        } catch {
          return errorResponse('Invalid JSON body');
        }

        const { tokens } = body ?? {};
        if (Array.isArray(tokens) && tokens.length > 0) {
          const placeholders = tokens.map(() => '?').join(',');
          await env.DB.prepare(
            `UPDATE push_tokens SET is_active = 0 WHERE token IN (${placeholders});`
          )
            .bind(...tokens)
            .run();
        }

        return jsonResponse({ success: true, message: 'Tokens deactivated' });
      }

      // 5. Check if notification was already sent for an article (Duplicate Prevention)
      // GET /api/notifications/sent?articleId=...
      if (
        url.pathname === '/api/notifications/sent' &&
        request.method === 'GET'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const articleId = url.searchParams.get('articleId');
        if (!articleId) {
          return errorResponse('Missing articleId parameter');
        }

        const record = await env.DB.prepare(
          `SELECT article_id, sent_at FROM sent_notifications WHERE article_id = ?;`
        )
          .bind(articleId)
          .first();

        return jsonResponse({
          success: true,
          alreadySent: Boolean(record),
          record,
        });
      }

      // 6. Record sent notification
      // POST /api/notifications/sent
      if (
        url.pathname === '/api/notifications/sent' &&
        request.method === 'POST'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const body: any = await request.json();
        const { articleId, headline, recipientCount } = body ?? {};

        if (!articleId) {
          return errorResponse('Missing articleId');
        }

        await env.DB.prepare(
          `INSERT INTO sent_notifications (article_id, headline, sent_at, recipient_count)
           VALUES (?, ?, ?, ?)
           ON CONFLICT(article_id) DO NOTHING;`
        )
          .bind(
            articleId,
            headline ?? '',
            new Date().toISOString(),
            Number(recipientCount ?? 0)
          )
          .run();

        return jsonResponse({ success: true, message: 'Recorded sent notification' });
      }

      // API: Telemetry for Push Notification Clicks & Tap Opens (Public Write-Only, 0 PII)
      // POST /api/notifications/clicked or POST /api/notifications/opened
      if (url.pathname === '/api/notifications/clicked' || url.pathname === '/api/notifications/opened') {
        if (request.method !== 'POST') {
          return errorResponse('Method Not Allowed. POST required to record notification opens.', 405);
        }
        if (!env.DB) return jsonResponse({ success: false, error: 'Database not available' }, 500);
        try {
          const body: any = await request.json();
          const { articleId, category, severity, appVersion, platform } = body ?? {};
          if (!articleId || typeof articleId !== 'string') {
            return errorResponse('Valid articleId required');
          }

          const now = new Date().toISOString();
          await env.DB.prepare(
            `INSERT INTO notification_opens (article_id, category, severity, app_version, platform, opened_at)
             VALUES (?, ?, ?, ?, ?, ?);`
          ).bind(
            articleId.slice(0, 500),
            (category || 'GENERAL').slice(0, 50),
            (severity || 'HIGH').slice(0, 20),
            (appVersion || '1.0.3').slice(0, 20),
            (platform || 'android').slice(0, 20),
            now
          ).run();

          return jsonResponse({ success: true, message: 'Recorded notification open' });
        } catch (err: any) {
          console.warn('Failed to record notification click:', err);
          return jsonResponse({ success: false, error: err?.message || 'Database error' }, 500);
        }
      }

      // 7. Manual / Webhook Ingestion Dispatcher
      if (url.pathname === '/api/trigger-ingest') {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const token = env.GITHUB_PAT;
        if (!token) {
          return errorResponse('GITHUB_PAT secret not configured in Worker', 500);
        }

        const ghRes = await fetch(
          'https://api.github.com/repos/nisargs/SecuBuzz/actions/workflows/ingest.yml/dispatches',
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github+json',
              'User-Agent': 'SecuBuzz-Cloudflare-Dispatcher',
            },
            body: JSON.stringify({ ref: 'main' }),
          }
        );

        if (ghRes.status === 204) {
          return jsonResponse({
            success: true,
            message: 'SecuBuzz ingestion workflow successfully triggered on GitHub!',
          });
        }

        const errText = await ghRes.text();
        return errorResponse(`GitHub API error (${ghRes.status}): ${errText}`, 502);
      }

      // If an unrecognized /api/ route is requested, return 404 JSON (never HTML)
      if (url.pathname.startsWith('/api/')) {
        return errorResponse('API endpoint not found', 404);
      }

      // Static Assets & Single Page Application (SPA) Routing via Cloudflare Workers Assets
      if (env.ASSETS) {
        // Fast drop for automated bot scans and non-HTML extensions (protects free tier CPU & bandwidth)
        const isKnownBotProbe = /^\/(wp-|cgi-bin|\.env|\.git|admin|login|phpmyadmin|shell|xmlrpc)/i.test(url.pathname);
        const isNonHtmlExtension = /\.(json|php|asp|aspx|jsp|env|git|yaml|yml|bak|sql|tar|gz|zip)$/i.test(url.pathname);
        if (isKnownBotProbe || isNonHtmlExtension) {
          return new Response('Not found', {
            status: 404,
            headers: {
              'Content-Type': 'text/plain; charset=utf-8',
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
              ...CORS_HEADERS,
            },
          });
        }

        // Native HTTP 206 Byte-Range Streaming Handler for Videos (.mp4)
        if (url.pathname.endsWith('.mp4')) {
          if (url.pathname === '/brag.mp4') {
            return Response.redirect(new URL('/secubuzz-landscape.mp4', request.url).toString(), 301);
          }

          if (!cachedVideoBuffer || cachedVideoPath !== url.pathname) {
            const initialRes = await env.ASSETS.fetch(new Request(new URL(url.pathname, request.url), { method: 'GET' }));
            if (initialRes.ok) {
              cachedVideoBuffer = await initialRes.arrayBuffer();
              cachedVideoPath = url.pathname;
            }
          }

          if (cachedVideoBuffer) {
            const total = cachedVideoBuffer.byteLength;
            const rangeHeader = request.headers.get('Range') || request.headers.get('range');

            if (request.method === 'HEAD') {
              return new Response(null, {
                status: 200,
                headers: {
                  'Content-Type': 'video/mp4',
                  'Accept-Ranges': 'bytes',
                  'Content-Length': String(total),
                  'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                  ...CORS_HEADERS,
                },
              });
            }

            if (rangeHeader) {
              const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
              if (match) {
                const start = parseInt(match[1], 10);
                if (start < total) {
                  const end = match[2] ? Math.min(parseInt(match[2], 10), total - 1) : total - 1;
                  const chunk = cachedVideoBuffer.slice(start, end + 1);
                  return new Response(chunk, {
                    status: 206,
                    headers: {
                      'Content-Type': 'video/mp4',
                      'Content-Range': `bytes ${start}-${end}/${total}`,
                      'Accept-Ranges': 'bytes',
                      'Content-Length': String(end - start + 1),
                      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                      ...CORS_HEADERS,
                    },
                  });
                }
              }
            }

            return new Response(cachedVideoBuffer, {
              status: 200,
              headers: {
                'Content-Type': 'video/mp4',
                'Accept-Ranges': 'bytes',
                'Content-Length': String(total),
                'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                ...CORS_HEADERS,
              },
            });
          }
        }

        let assetRes = await env.ASSETS.fetch(request);
        const contentType = assetRes.headers.get('content-type') || '';

        // If static asset was found (CSS, JS, images, icons, video, etc.)
        if ((assetRes.status === 200 || assetRes.status === 206) && !contentType.includes('text/html')) {
          const isImmutable = url.pathname.startsWith('/assets/') ||
            url.pathname === '/qr.png' ||
            url.pathname === '/1.jpg' ||
            url.pathname === '/2.jpg' ||
            url.pathname === '/3.jpg';
          if (isImmutable && assetRes.status === 200) {
            const cachedHeaders = new Headers(assetRes.headers);
            cachedHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
            for (const [k, v] of Object.entries(CORS_HEADERS)) {
              cachedHeaders.set(k, v);
            }
            return new Response(assetRes.body, { status: assetRes.status, headers: cachedHeaders });
          }
          return assetRes;
        }

        if (assetRes.status === 404) {
          if (url.pathname.match(/\.(png|jpe?g|gif|webp|svg|ico|css|js|map|woff2?|ttf|eot|mp4|webm|json|xml|txt)$/i)) {
            return new Response('Not found', {
              status: 404,
              headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                ...CORS_HEADERS,
              },
            });
          }
          assetRes = await env.ASSETS.fetch(new Request(new URL('/', request.url), request));
        }

        const finalContentType = assetRes.headers.get('content-type') || '';
        if (assetRes.status === 200 && finalContentType.includes('text/html')) {
          const rawHtml = await assetRes.text();
          const [articles, cisaAdv] = await Promise.all([getArticles(), getKevAdvisories()]);
          const advisories = [...cisaAdv, ...GITHUB_ADVISORIES];
          const isRouteValid = isKnownSpaRoute(url.pathname, articles, advisories);

          if (!isRouteValid) {
            let notFoundHtml = rawHtml;
            try {
              notFoundHtml = injectMetaTags(rawHtml, '/404', articles, advisories);
            } catch {}
            return new Response(notFoundHtml, {
              status: 404,
              headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
                ...CORS_HEADERS,
                ...SECURITY_HEADERS,
              },
            });
          }

          let enrichedHtml = rawHtml;
          try {
            enrichedHtml = injectMetaTags(rawHtml, url.pathname, articles, advisories);
          } catch (metaErr) {
            console.error('Failed to inject meta tags for path:', url.pathname, metaErr);
          }
          const htmlHeaders = new Headers({
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'public, max-age=0, must-revalidate',
            ...CORS_HEADERS,
            ...SECURITY_HEADERS,
          });
          // Zero cookies on regular browsing; sb_vid is set strictly on /go/play download button clicks
          return new Response(enrichedHtml, {
            status: 200,
            headers: htmlHeaders,
          });
        }

        if (assetRes.status !== 404) {
          return assetRes;
        }
      }

      return errorResponse('Not found', 404);
    } catch (error) {
      console.error('Worker error:', error);
      return errorResponse(
        error instanceof Error ? error.message : 'Internal server error',
        500
      );
    }
  },

  // ---------------------------------------------------------------------------
  // CRON TRIGGER HANDLER (Fires every 4 hours with 0-second latency)
  // ---------------------------------------------------------------------------
  async scheduled(
    event: { cron: string },
    env: Env,
    ctx: { waitUntil: (promise: Promise<unknown>) => void }
  ): Promise<void> {
    const token = env.GITHUB_PAT;
    if (!token) {
      console.warn('[Cron Trigger] GITHUB_PAT is missing. Ingestion not triggered.');
      return;
    }

    console.log(`[Cron Trigger] Dispatching SecuBuzz feed ingestion at ${new Date().toISOString()}...`);

    const dispatchPromise = fetch(
      'https://api.github.com/repos/nisargs/SecuBuzz/actions/workflows/ingest.yml/dispatches',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'SecuBuzz-Cloudflare-Cron',
        },
        body: JSON.stringify({ ref: 'main' }),
      }
    )
      .then(async (res) => {
        if (res.status === 204) {
          console.log('[Cron Trigger] Successfully dispatched GitHub ingestion workflow!');
        } else {
          const text = await res.text();
          console.error(`[Cron Trigger] GitHub returned HTTP ${res.status}: ${text}`);
        }
      })
      .catch((err) => {
        console.error('[Cron Trigger] Network error calling GitHub API:', err);
      });

    ctx.waitUntil(dispatchPromise);
  },
};
