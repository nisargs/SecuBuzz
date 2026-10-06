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
  if (!env.PUSH_ADMIN_SECRET) {
    // If no secret configured in worker env, allow internal operations during development
    return true;
  }
  const authHeader = request.headers.get('Authorization');
  const customKey = request.headers.get('x-admin-key');

  if (customKey === env.PUSH_ADMIN_SECRET) {
    return true;
  }
  if (authHeader && authHeader === `Bearer ${env.PUSH_ADMIN_SECRET}`) {
    return true;
  }
  return false;
}

import {
  ArticleItem,
  KevVulnerability,
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

  const deduped: any[] = [];

  for (const art of recentArticles) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const fullText = (title + ' ' + summary).toLowerCase();
    const cves = extractCvesFromText(title + ' ' + summary);
    const keywords = getTitleKeywords(title);
    const time = Date.parse(publishedAt) || 0;

    let duplicateOf: any = null;
    for (const existing of deduped) {
      const existingTime = Date.parse(existing.publishedAt) || 0;
      const timeDiffDays = Math.abs(time - existingTime) / (1000 * 3600 * 24);
      if (timeDiffDays > 7) continue;

      // 1) Shared CVE
      const existingCves = extractCvesFromText((existing.title || existing.headline || '') + ' ' + (existing.summary || ''));
      if (cves.length > 0 && existingCves.some(c => cves.includes(c))) {
        duplicateOf = existing;
        break;
      }

      // 2) Shared Enterprise Entity
      const existingFull = ((existing.title || existing.headline || '') + ' ' + (existing.summary || '')).toLowerCase();
      for (const ent of ENTITY_TERMS) {
        if (fullText.includes(ent) && existingFull.includes(ent)) {
          duplicateOf = existing;
          break;
        }
      }
      if (duplicateOf) break;

      // 3) Shared specific soldier espionage event
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
      const existingKw = new Set(getTitleKeywords(existing.title || existing.headline || ''));
      const overlap = keywords.filter(k => existingKw.has(k));
      if (overlap.length >= 2 && timeDiffDays <= 3) {
        duplicateOf = existing;
        break;
      }
    }

    if (duplicateOf) {
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some((s: any) => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }
      continue;
    }

    deduped.push({
      ...art,
      additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : []
    });
  }

  return deduped.slice(0, 250);
}

let cachedArticles: ArticleItem[] | null = null;
let cachedArticlesTime = 0;

async function getArticles(): Promise<ArticleItem[]> {
  const now = Date.now();
  if (cachedArticles && now - cachedArticlesTime < 10 * 60 * 1000) {
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
  if (cachedAllKev.length > 0 && now - cachedKevTime < 30 * 60 * 1000) {
    return full ? cachedAllKev : cachedRecentKev;
  }
  try {
    const res = await fetch(CISA_KEV_URL, {
      headers: {
        'User-Agent': 'SecuBuzz/1.0 (+https://secubuzz.com)',
        'Accept': 'application/json',
      },
    });
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
  return full
    ? (cachedAllKev.length > 0 ? cachedAllKev : SEED_KEV_ADVISORIES)
    : (cachedRecentKev.length > 0 ? cachedRecentKev : SEED_KEV_ADVISORIES);
}

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
    const slug = clean.slice('/news/'.length).toLowerCase();
    return articlesList.some(
      a => (a.slug && a.slug.toLowerCase() === slug) ||
           (a.aliases && a.aliases.some((al: string) => al.toLowerCase() === slug))
    );
  }

  if (clean.startsWith('/advisories/')) {
    const slug = clean.slice('/advisories/'.length).toLowerCase();
    return advisoriesList.some(
      a => (a.cveID && a.cveID.toLowerCase() === slug) ||
           (a.cveID && slug.includes(a.cveID.toLowerCase()))
    );
  }

  return false;
}

async function findKevAdvisory(slug: string): Promise<KevVulnerability | undefined> {
  await getKevAdvisories();
  const target = slug.toLowerCase();
  return (
    cachedAllKev.find(
      adv => adv.cveID.toLowerCase() === target || target.includes(adv.cveID.toLowerCase())
    ) ||
    SEED_KEV_ADVISORIES.find(
      adv => adv.cveID.toLowerCase() === target || target.includes(adv.cveID.toLowerCase())
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
        const advisories = await getKevAdvisories(all);
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
          'Cache-Control': 'public, max-age=300, s-maxage=300',
        });
      }

      // Redirect legacy .html URLs to clean SPA paths
      if (url.pathname.endsWith('.html') && url.pathname !== '/index.html') {
        const cleanPath = url.pathname.replace(/\.html$/, '');
        return Response.redirect(`${url.origin}${cleanPath}`, 301);
      }

      // Dynamic Sitemap for Search Engines
      if (url.pathname === '/sitemap.xml') {
        const [articles, advisories] = await Promise.all([getArticles(), getKevAdvisories()]);
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

      // 1. Health check
      if (url.pathname === '/health' || url.pathname === '/api/health') {
        return jsonResponse({
          status: 'ok',
          service: 'secubuzz-push-worker',
          timestamp: new Date().toISOString(),
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

        const { token, platform, appVersion } = body ?? {};

        if (!isValidExpoPushToken(token)) {
          return errorResponse('Invalid Expo push token format');
        }

        const validPlatform =
          platform === 'ios' || platform === 'android' ? platform : 'android';
        const now = new Date().toISOString();
        const safeVersion = typeof appVersion === 'string' ? appVersion.slice(0, 32) : '1.0.0';

        // Idempotent UPSERT into Cloudflare D1
        await env.DB.prepare(
          `INSERT INTO push_tokens (token, platform, app_version, created_at, last_seen_at, is_active)
           VALUES (?, ?, ?, ?, ?, 1)
           ON CONFLICT(token) DO UPDATE SET
             last_seen_at = excluded.last_seen_at,
             app_version = excluded.app_version,
             is_active = 1;`
        )
          .bind(token, validPlatform, safeVersion, now, now)
          .run();

        return jsonResponse({
          success: true,
          message: 'Token registered successfully',
        });
      }

      // 3. Get Active Tokens (Called by scripts/ingest.mjs during cron)
      // GET /api/push-tokens
      if (
        (url.pathname === '/api/push-tokens' || url.pathname === '/push-tokens') &&
        request.method === 'GET'
      ) {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        const { results } = await env.DB.prepare(
          `SELECT token FROM push_tokens WHERE is_active = 1 ORDER BY last_seen_at DESC;`
        ).all<{ token: string }>();

        const tokens = (results ?? []).map((row: { token: string }) => row.token);

        return jsonResponse({
          success: true,
          count: tokens.length,
          tokens,
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

        let assetRes = await env.ASSETS.fetch(request);
        const contentType = assetRes.headers.get('content-type') || '';

        // If static asset was found (CSS, JS, images, icons, etc.)
        if (assetRes.status === 200 && !contentType.includes('text/html')) {
          return assetRes;
        }

        if (assetRes.status === 404) {
          if (url.pathname.match(/\.[a-zA-Z0-9]+$/)) {
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
          const [articles, advisories] = await Promise.all([getArticles(), getKevAdvisories()]);
          const isRouteValid = isKnownSpaRoute(url.pathname, articles, advisories);

          if (!isRouteValid) {
            return new Response('404 Page Not Found', {
              status: 404,
              headers: {
                'Content-Type': 'text/plain; charset=utf-8',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
                ...CORS_HEADERS,
              },
            });
          }

          const enrichedHtml = injectMetaTags(rawHtml, url.pathname, articles, advisories);
          return new Response(enrichedHtml, {
            status: 200,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'public, max-age=60, s-maxage=300',
              ...CORS_HEADERS,
            },
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
