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

function normalizeHyphens(text: string): string {
  return (text || '').replace(/[\u2010-\u2015\u2212]/g, '-');
}

function normalizeCveHyphens(text: string): string {
  return (text || '').replace(
    /CVE[\u2010-\u2015\u2212-](\d{4})[\u2010-\u2015\u2212-](\d{4,7})/gi,
    'CVE-$1-$2'
  );
}

function extractCvesFromText(text: string): string[] {
  const norm = normalizeCveHyphens(text);
  const matches = norm.match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

function formatD1Article(r: any): ArticleItem {
  const cleanTitle = normalizeCveHyphens(r.title || '');
  const cleanSummary = normalizeCveHyphens(r.summary || '');
  const existingCves = JSON.parse(r.cves_json || '[]').map((c: string) =>
    normalizeHyphens(c).toUpperCase()
  );
  const cves = Array.from(
    new Set([...existingCves, ...extractCvesFromText(`${cleanTitle} ${cleanSummary}`)])
  );
  return {
    id: r.source_url || r.slug,
    slug: r.slug,
    title: cleanTitle,
    headline: cleanTitle,
    summary: cleanSummary,
    category: r.category,
    severity: r.severity,
    source: r.source,
    sourceName: r.source,
    sourceUrl: r.source_url,
    url: r.source_url,
    publishedAt: r.published_at,
    cves,
    additionalSources: JSON.parse(r.additional_sources_json || '[]'),
    aliases: JSON.parse(r.aliases_json || '[]'),
  };
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
    const hex = slug.match(/-([a-f0-9]{8})$/)?.[1] || slug.slice(-8);

    // Compute legacy 6-char hex for backward-compatible routing
    let legacyHash = 0;
    const idStr = art.id || sourceUrl || title;
    for (let i = 0; i < idStr.length; i++) {
      legacyHash = (legacyHash << 5) - legacyHash + idStr.charCodeAt(i);
      legacyHash |= 0;
    }
    const legacyHex = Math.abs(legacyHash).toString(16).padStart(6, '0').slice(0, 6);

    const aliases: string[] = [baseSlug, `article-${hex}`, hex];
    if (baseSlug) aliases.push(`${baseSlug}-${legacyHex}`);
    if (art.id && !aliases.includes(art.id.toLowerCase())) {
      aliases.push(art.id.toLowerCase());
    }
    if (art.aliases && Array.isArray(art.aliases)) {
      for (const a of art.aliases) {
        if (!aliases.includes(a)) aliases.push(a);
      }
    }

    let summary = (art.summary || '').trim();
    if (summary.includes('Corroborated Threat Intelligence') || /[\[\(](?:\.\.\.|…|\s)+[\]\)]/.test(summary)) {
      summary = summary.replace(/[\[\(](?:\.\.\.|…|\s)+[\]\)]/g, '');
      summary = summary.replace(
        /\s*(?:([.?!]))?\s*\((?:Corroborated Threat Intelligence:\s*)?Associated (?:CVE is|CVEs are)\s*([^)]+)\)\.?/gi,
        (match: string, punct: string, cveList: string) => {
          const cleanList = cveList.trim();
          const isPlural = cleanList.includes(',') || cleanList.includes(' and ');
          const prefix = punct ? `${punct} ` : '. ';
          return `${prefix}${isPlural ? 'The vulnerabilities are tracked as' : 'The vulnerability is tracked as'} ${cleanList}.`;
        }
      );
      summary = summary.replace(/\.{2,}/g, '.').replace(/\s+/g, ' ').trim();
    }

    // Edge sanitization: Strip raw advisory table dumps / version lists (vers:intdot/, vers:all/*, etc.)
    if (/vers:(?:intdot|all)\/|cpe:2\.3:|CVSS Vendor Equipment/i.test(summary)) {
      const vulnMatch = summary.match(/(?:Vulnerabilities\s+CVE-\d{4}-\d+\s+|Background\s+Critical Infrastructure[^\.]*?\.\s*)([A-Z][^]+)$/);
      if (vulnMatch && vulnMatch[1]) {
        summary = vulnMatch[1].trim();
      } else {
        const sentences = summary.split(/(?<=[.?!])\s+/);
        const goodSentences = sentences.filter(sent => 
          !/vers:(?:intdot|all)\/|cpe:2\.3:|CVSS Vendor Equipment/i.test(sent) &&
          /\b(?:vulnerability|vulnerabilities|overflow|execution|flaw|attack|exploit)\b/i.test(sent)
        );
        if (goodSentences.length > 0) {
          summary = goodSentences.join(' ').trim();
        }
      }

      // Preserve explicit CVE tracking in prose if stripped from tabular header
      const originalCveMatch = (art.summary || '').match(/\bCVE-\d{4}-\d{4,7}\b/i);
      if (originalCveMatch && !summary.includes(originalCveMatch[0])) {
        summary = `${summary.replace(/[.\s]+$/, '')}. The flaw is tracked as ${originalCveMatch[0].toUpperCase()}.`;
      }
    }

    summary = normalizeCveHyphens(summary);
    const cleanTitle = normalizeCveHyphens(title);
    const cleanHeadline = art.headline ? normalizeCveHyphens(art.headline) : cleanTitle;
    const existingCves = Array.isArray(art.cves)
      ? art.cves.map((c: string) => normalizeHyphens(c).toUpperCase())
      : [];
    const allSearchText = `${cleanTitle} ${summary} ${art.sourceUrl || ''} ${art.id || ''} ${art.url || ''}`;
    const cves = Array.from(
      new Set([...existingCves, ...extractCvesFromText(allSearchText)])
    );

    let category = art.category || 'General';
    if (cves.length > 0) {
      if (category === 'General' || !category) category = 'CVE';
      const hasCveInText = cves.some(c => cleanTitle.includes(c) || summary.includes(c));
      if (!hasCveInText) {
        const tracking = cves.length === 1
          ? `The flaw is tracked as ${cves[0]}.`
          : `The vulnerabilities are tracked as ${cves.slice(0, 3).join(', ')}.`;
        summary = `${summary.replace(/[.\s]+$/, '')}. ${tracking}`;
      }
    } else if (category === 'CVE') {
      category = 'Vulnerability';
    }

    deduped.push({
      ...art,
      title: cleanTitle,
      headline: cleanHeadline,
      summary,
      category,
      cves,
      slug,
      aliases,
      additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : []
    });
  }

  return deduped.slice(0, 500);
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

export interface VendorHealthTelemetry {
  vendor: string;
  status: 'OPERATIONAL' | 'DEGRADED' | 'OUTAGE';
  summary: string;
  statusUrl: string;
  updatedAt?: string;
}

const BASELINE_VENDOR_REGISTRY: Record<string, VendorHealthTelemetry> = {
  Azure: {
    vendor: 'Azure',
    status: 'OPERATIONAL',
    summary: 'All Azure cloud regions & services operational',
    statusUrl: 'https://azure.status.microsoft/en-us/status',
  },
  Microsoft: {
    vendor: 'Microsoft',
    status: 'OUTAGE',
    summary: 'Service degradation affecting Microsoft 365, Teams & Exchange Online',
    statusUrl: 'https://status.cloud.microsoft/m365/referrer=serviceStatusRedirect',
  },
  AWS: {
    vendor: 'AWS',
    status: 'OPERATIONAL',
    summary: 'All AWS services operating normally',
    statusUrl: 'https://health.aws.amazon.com/health/status',
  },
  'Palo Alto Networks': {
    vendor: 'Palo Alto Networks',
    status: 'DEGRADED',
    summary: 'Prisma Cloud: Alert Manual and Automated Remediation is unavailable',
    statusUrl: 'https://status.paloaltonetworks.com/',
  },
  CrowdStrike: {
    vendor: 'CrowdStrike',
    status: 'OPERATIONAL',
    summary: 'Falcon cloud platform operational',
    statusUrl: 'https://falcon.crowdstrike.com/',
  },
  Cloudflare: {
    vendor: 'Cloudflare',
    status: 'DEGRADED',
    summary: 'Durable Objects increased error rates in North America',
    statusUrl: 'https://www.cloudflarestatus.com/',
  },
  Cisco: {
    vendor: 'Cisco',
    status: 'OPERATIONAL',
    summary: 'Duo & Cisco Security services operational',
    statusUrl: 'https://status.cisco.com/',
  },
  Fortinet: {
    vendor: 'Fortinet',
    status: 'OPERATIONAL',
    summary: 'FortiCloud services operational',
    statusUrl: 'https://status.fortistatus.com/',
  },
  'Red Hat': {
    vendor: 'Red Hat',
    status: 'OPERATIONAL',
    summary: 'Red Hat Hybrid Cloud Console operational',
    statusUrl: 'https://status.redhat.com/',
  },
  Google: {
    vendor: 'Google',
    status: 'OPERATIONAL',
    summary: 'Google Cloud Platform operational',
    statusUrl: 'https://status.cloud.google.com/',
  },
  Atlassian: {
    vendor: 'Atlassian',
    status: 'OPERATIONAL',
    summary: 'Jira & Confluence cloud operational',
    statusUrl: 'https://status.atlassian.com/',
  },
  GitLab: {
    vendor: 'GitLab',
    status: 'OPERATIONAL',
    summary: 'GitLab.com operational',
    statusUrl: 'https://status.gitlab.com/',
  },
  Oracle: {
    vendor: 'Oracle',
    status: 'OPERATIONAL',
    summary: 'Oracle Cloud Infrastructure operational',
    statusUrl: 'https://ocistatus.oraclecloud.com/',
  },
  Ivanti: {
    vendor: 'Ivanti',
    status: 'OPERATIONAL',
    summary: 'All Ivanti Cloud systems operational',
    statusUrl: 'https://status.ivanticloud.com/',
  },
  Citrix: {
    vendor: 'Citrix',
    status: 'OPERATIONAL',
    summary: 'Citrix Cloud services operational',
    statusUrl: 'https://status.cloud.com/',
  },
  'Check Point': {
    vendor: 'Check Point',
    status: 'DEGRADED',
    summary: 'Smart-1 Cloud unavailable in UAE region',
    statusUrl: 'https://status.checkpoint.com/',
  },
  SonicWall: {
    vendor: 'SonicWall',
    status: 'DEGRADED',
    summary: 'Email delivery to some mail services impacted (HES NA) & WNM login issue',
    statusUrl: 'https://status.sonicwall.com/',
  },
  VMware: {
    vendor: 'VMware',
    status: 'OPERATIONAL',
    summary: 'Broadcom / VMware Cloud operational',
    statusUrl: 'https://status.broadcom.com/',
  },
  Apple: {
    vendor: 'Apple',
    status: 'OPERATIONAL',
    summary: 'Apple Developer & System Services operational',
    statusUrl: 'https://www.apple.com/support/systemstatus/',
  },
  Okta: {
    vendor: 'Okta',
    status: 'OPERATIONAL',
    summary: 'All Okta Identity Cloud services operational',
    statusUrl: 'https://trust.okta.com/',
  },
  Zscaler: {
    vendor: 'Zscaler',
    status: 'OPERATIONAL',
    summary: 'ZIA & ZPA Zero Trust clouds operational',
    statusUrl: 'https://trust.zscaler.com/',
  },
  SentinelOne: {
    vendor: 'SentinelOne',
    status: 'OPERATIONAL',
    summary: 'Singularity XDR platform operational',
    statusUrl: 'https://status.sentinelone.com/',
  },
  Sophos: {
    vendor: 'Sophos',
    status: 'OPERATIONAL',
    summary: 'Sophos Central operational',
    statusUrl: 'https://sophoscentral.status.page/',
  },
  F5: {
    vendor: 'F5',
    status: 'OPERATIONAL',
    summary: 'F5 Distributed Cloud Services operational',
    statusUrl: 'https://www.f5cloudstatus.com/',
  },
  GitHub: {
    vendor: 'GitHub',
    status: 'OPERATIONAL',
    summary: 'All GitHub services operational',
    statusUrl: 'https://www.githubstatus.com/',
  },
  Slack: {
    vendor: 'Slack',
    status: 'OPERATIONAL',
    summary: 'All Slack services operational',
    statusUrl: 'https://status.slack.com/',
  },
  Tenable: {
    vendor: 'Tenable',
    status: 'OUTAGE',
    summary: 'Tenable One & Vulnerability Management platform issues',
    statusUrl: 'https://status.tenable.com/',
  },
  Qualys: {
    vendor: 'Qualys',
    status: 'DEGRADED',
    summary: 'Qualys Cloud Platform operational issues',
    statusUrl: 'https://status.qualys.com/',
  },
  Rapid7: {
    vendor: 'Rapid7',
    status: 'OPERATIONAL',
    summary: 'Insight Platform services operational',
    statusUrl: 'https://status.rapid7.com/',
  },
  CyberArk: {
    vendor: 'CyberArk',
    status: 'OPERATIONAL',
    summary: 'Identity Security & Privilege Cloud operational',
    statusUrl: 'https://status.cyberark.com/',
  },
  HashiCorp: {
    vendor: 'HashiCorp',
    status: 'OPERATIONAL',
    summary: 'HCP Vault & Terraform Cloud operational',
    statusUrl: 'https://status.hashicorp.com/',
  },
  '1Password': {
    vendor: '1Password',
    status: 'OPERATIONAL',
    summary: '1Password service operational',
    statusUrl: 'https://status.1password.com/',
  },
  'Trend Micro': {
    vendor: 'Trend Micro',
    status: 'OPERATIONAL',
    summary: 'Trend Vision One operational',
    statusUrl: 'https://status.trendmicro.com/',
  },
};

const LIVE_STATUS_SOURCES = [
  { vendor: 'Azure', type: 'rss', url: 'https://azure.status.microsoft/en-us/status/feed/', statusUrl: 'https://azure.status.microsoft/en-us/status' },
  { vendor: 'Palo Alto Networks', type: 'statuspage', url: 'https://status.paloaltonetworks.com/api/v2/summary.json', statusUrl: 'https://status.paloaltonetworks.com/' },
  { vendor: 'Cloudflare', type: 'statuspage', url: 'https://www.cloudflarestatus.com/api/v2/summary.json', statusUrl: 'https://www.cloudflarestatus.com/' },
  { vendor: 'Check Point', type: 'statuspage', url: 'https://status.checkpoint.com/api/v2/summary.json', statusUrl: 'https://status.checkpoint.com/' },
  { vendor: 'Ivanti', type: 'statuspage', url: 'https://status.ivanticloud.com/api/v2/summary.json', statusUrl: 'https://status.ivanticloud.com/' },
  { vendor: 'Tenable', type: 'statuspage', url: 'https://status.tenable.com/api/v2/summary.json', statusUrl: 'https://status.tenable.com/' },
  { vendor: 'Qualys', type: 'statuspage', url: 'https://status.qualys.com/api/v2/summary.json', statusUrl: 'https://status.qualys.com/' },
  { vendor: 'Rapid7', type: 'statuspage', url: 'https://status.rapid7.com/api/v2/summary.json', statusUrl: 'https://status.rapid7.com/' },
  { vendor: 'Red Hat', type: 'statuspage', url: 'https://status.redhat.com/api/v2/summary.json', statusUrl: 'https://status.redhat.com/' },
  { vendor: 'Cisco', type: 'statuspage', url: 'https://status.duo.com/api/v2/summary.json', statusUrl: 'https://status.cisco.com/' },
  { vendor: 'Atlassian', type: 'statuspage', url: 'https://status.atlassian.com/api/v2/summary.json', statusUrl: 'https://status.atlassian.com/' },
  { vendor: 'GitHub', type: 'statuspage', url: 'https://www.githubstatus.com/api/v2/summary.json', statusUrl: 'https://status.githubstatus.com/' },
  { vendor: 'SentinelOne', type: 'statuspage', url: 'https://status.sentinelone.com/api/v2/summary.json', statusUrl: 'https://status.sentinelone.com/' },
  { vendor: 'HashiCorp', type: 'statuspage', url: 'https://status.hashicorp.com/api/v2/summary.json', statusUrl: 'https://status.hashicorp.com/' },
  { vendor: '1Password', type: 'statuspage', url: 'https://status.1password.com/api/v2/summary.json', statusUrl: 'https://status.1password.com/' },
  { vendor: 'SonicWall', type: 'statushub', url: 'https://status.sonicwall.com/api/statuses', statusUrl: 'https://status.sonicwall.com/' },
];

let cachedVendorStatus: Record<string, VendorHealthTelemetry> | null = null;
let cachedVendorStatusTime = 0;

async function getVendorStatusTelemetry(): Promise<Record<string, VendorHealthTelemetry>> {
  const now = Date.now();
  if (cachedVendorStatus && now - cachedVendorStatusTime < 5 * 60 * 1000) {
    return cachedVendorStatus;
  }

  const updated: Record<string, VendorHealthTelemetry> = { ...BASELINE_VENDOR_REGISTRY };

  try {
    const results = await Promise.allSettled(
      LIVE_STATUS_SOURCES.map(async (src) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);
        try {
          const headers: Record<string, string> = {
            'User-Agent': 'SecuBuzz-Status-Poller/1.0 (+https://secubuzz.com)',
          };
          if (src.type === 'statushub') {
            headers['STATUSHUB-HUB-API-CLIENT'] = 'true';
            headers['HUB-HOST'] = 'status.sonicwall.com';
            headers['LOCALE'] = 'en-US';
          }
          const res = await fetch(src.url, {
            signal: controller.signal,
            headers,
          });

          if (!res.ok) return null;

          let status: 'OPERATIONAL' | 'DEGRADED' | 'OUTAGE' = 'OPERATIONAL';
          let summary = 'All systems operational';

          if (src.type === 'statuspage') {
            const data: any = await res.json();
            const indicator = data.status?.indicator || 'none';
            const incidents = (data.incidents || []).filter((i: any) => i.status !== 'resolved');
            const maintenances = (data.scheduled_maintenances || []).filter((m: any) => m.status === 'in_progress');

            if (indicator === 'critical' || indicator === 'major') {
              status = 'OUTAGE';
              summary = incidents[0]?.name || data.status?.description || 'Major service outage';
            } else if (indicator !== 'none' || incidents.length > 0 || maintenances.length > 0) {
              status = 'DEGRADED';
              summary = incidents[0]?.name || (maintenances[0] ? `${maintenances[0].name} in progress` : data.status?.description) || 'Service degradation';
            }
          } else if (src.type === 'statushub') {
            const data: any = await res.json();
            const affected: string[] = [];
            for (const g of (data.groups || [])) {
              for (const s of (g.services || [])) {
                if (s.status !== 1) {
                  affected.push(s.service_name);
                }
              }
            }
            if (affected.length > 0) {
              status = 'DEGRADED';
              summary = `Service performance issues: ${affected.slice(0, 2).join(', ')}`;
            }
          } else if (src.type === 'rss') {
            const xml = await res.text();
            const items = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];
            if (items.length > 0) {
              const firstItem = items[0];
              const titleMatch = firstItem.match(/<title>([\s\S]*?)<\/title>/i);
              const incidentTitle = titleMatch ? titleMatch[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() : 'Active Azure Incident';
              if (/outage|critical|major/i.test(incidentTitle)) {
                status = 'OUTAGE';
              } else {
                status = 'DEGRADED';
              }
              summary = incidentTitle;
            } else {
              status = 'OPERATIONAL';
              summary = 'All Azure cloud regions & services operational';
            }
          }

          return {
            vendor: src.vendor,
            status,
            summary,
            statusUrl: src.statusUrl,
            updatedAt: new Date().toISOString(),
          };
        } finally {
          clearTimeout(timeoutId);
        }
      })
    );

    for (const r of results) {
      if (r.status === 'fulfilled' && r.value) {
        updated[r.value.vendor] = r.value;
      }
    }

    cachedVendorStatus = updated;
    cachedVendorStatusTime = now;
  } catch (err) {
    console.error('Failed to poll vendor status:', err);
    if (!cachedVendorStatus) {
      cachedVendorStatus = updated;
    }
  }

  return cachedVendorStatus || BASELINE_VENDOR_REGISTRY;
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

// -------------------------------------------------------------
// High-Efficiency Search, CVE & Alias Caches (D1 Quota Safeguards)
// -------------------------------------------------------------
const searchCache = new Map<string, { data: { count: number; results: any[] }; cachedAt: number }>();
const SEARCH_CACHE_MAX = 500;
const SEARCH_CACHE_TTL = 60 * 60 * 1000; // 1 hour in worker memory

function getCachedSearchResult(key: string): { count: number; results: any[] } | null {
  const entry = searchCache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.cachedAt > SEARCH_CACHE_TTL) {
    searchCache.delete(key);
    return null;
  }
  return entry.data;
}

function setCachedSearchResult(key: string, data: { count: number; results: any[] }): void {
  if (searchCache.size >= SEARCH_CACHE_MAX) {
    const oldest = searchCache.keys().next().value;
    if (oldest) searchCache.delete(oldest);
  }
  searchCache.set(key, { data, cachedAt: Date.now() });
}

let cachedKnownCves: Set<string> | null = null;
let cachedKnownCvesTime = 0;

async function getKnownCveSet(): Promise<Set<string>> {
  const now = Date.now();
  if (cachedKnownCves && now - cachedKnownCvesTime < 60 * 60 * 1000) {
    return cachedKnownCves;
  }

  const set = new Set<string>();

  // Extract all CVEs from in-memory active feed (0 D1 rows read)
  try {
    const feedArticles = await getArticles();
    for (const a of feedArticles) {
      if (Array.isArray(a.cves)) {
        for (const c of a.cves) {
          if (c && typeof c === 'string') {
            set.add(normalizeHyphens(c).toUpperCase().trim());
          }
        }
      }
    }
  } catch (err) {
    console.error('Failed to extract CVEs from active feed:', err);
  }

  if (set.size > 0) {
    cachedKnownCves = set;
    cachedKnownCvesTime = now;
  }
  return cachedKnownCves || set;
}

let cachedSitemapXml: string | null = null;
let cachedSitemapTime = 0;

let cachedPushTokens: any[] = [];
let cachedPushTokensTime = 0;

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
    '/sources',
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
      if (base && slug === base) return true;
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
    if (/^cve-\d{4}-\d{4,7}$/i.test(slug) || /^ghsa-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}$/i.test(slug)) {
      return true;
    }
    // 2) Active KEV catalog match
    if (advisoriesList.some(
      a => (a?.cveID && a.cveID.toLowerCase() === slug) ||
           (a?.cveID && slug.includes(a.cveID.toLowerCase())) ||
           ((a as any)?.cve && (a as any).cve.toLowerCase() === slug)
    )) {
      return true;
    }
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
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
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

      // API: Live Vendor Health & Outage Telemetry (Edge Cached 5min, 0 D1 reads, 0 AI tokens)
      if (url.pathname === '/api/vendor-status') {
        const vendorData = await getVendorStatusTelemetry();
        return jsonResponse(vendorData, 200, {
          'Cache-Control': 'public, max-age=180, s-maxage=300, stale-while-revalidate=120',
        });
      }

      // API: News articles JSON (Deduplicated, 30-day window)
      if (url.pathname === '/api/news' || url.pathname === '/feed.json') {
        const articles = await getArticles();
        return jsonResponse(articles, 200, {
          'Cache-Control': 'public, max-age=30, s-maxage=60, stale-while-revalidate=30',
        });
      }

      // API: Search archived news in D1
      if (url.pathname === '/api/news/search') {
        const rawQ = (url.searchParams.get('q') || '').trim();
        if (!rawQ) {
          return jsonResponse({ count: 0, results: [] });
        }

        const q = normalizeHyphens(rawQ);
        const cveMatch = q.match(/^CVE-(\d{4})-(\d{4,7})$/i);
        const cacheKey = q.toLowerCase();

        // 1. Check in-memory search cache (0 D1 rows read)
        const cached = getCachedSearchResult(cacheKey);
        if (cached) {
          return jsonResponse(cached, 200, {
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          });
        }

        // 2. Fast-filter CVE queries against in-memory known CVE set (0 D1 rows read on misses)
        if (cveMatch) {
          const normalizedCve = `CVE-${cveMatch[1]}-${cveMatch[2]}`.toUpperCase();
          const knownCves = await getKnownCveSet();
          if (!knownCves.has(normalizedCve)) {
            const emptyResult = { count: 0, results: [] };
            setCachedSearchResult(cacheKey, emptyResult);
            return jsonResponse(emptyResult, 200, {
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
            });
          }
        }

        // 3. Query D1 (only for known CVEs or keyword queries)
        let rows: any[] = [];
        try {
          if (cveMatch) {
            // SQL '_' wildcard matches both ASCII '-' and Unicode dashes (e.g. U+2011)
            const wildTerm = `%CVE_${cveMatch[1]}_${cveMatch[2]}%`;
            const { results } = await env.DB.prepare(
              `SELECT slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json
               FROM articles
               WHERE title LIKE ? OR summary LIKE ? OR cves_json LIKE ?
               ORDER BY published_at DESC
               LIMIT 100;`
            ).bind(wildTerm, wildTerm, wildTerm).all();

            const exactRegex = new RegExp(`CVE-${cveMatch[1]}-${cveMatch[2]}(?!\\d)`, 'i');
            rows = (results || [])
              .filter((r: any) =>
                exactRegex.test(normalizeHyphens(`${r.title || ''} ${r.summary || ''} ${r.cves_json || ''}`))
              )
              .slice(0, 50);
          } else {
            const term = `%${q}%`;
            const altTerm = q.includes('-') ? `%${q.replace(/-/g, '\u2011')}%` : term;
            const { results } = await env.DB.prepare(
              `SELECT slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json
               FROM articles
               WHERE title LIKE ? OR summary LIKE ? OR cves_json LIKE ? OR title LIKE ? OR summary LIKE ?
               ORDER BY published_at DESC
               LIMIT 50;`
            ).bind(term, term, term, altTerm, altTerm).all();
            rows = results || [];
          }

          const formatted = rows.map(formatD1Article);
          const responseData = { count: formatted.length, results: formatted };
          setCachedSearchResult(cacheKey, responseData);

          return jsonResponse(responseData, 200, {
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          });
        } catch (dbErr: any) {
          console.warn('D1 search query fallback (quota or error):', dbErr?.message);
          // Graceful fallback to filtering in-memory active feed
          const articles = await getArticles();
          const cleanQ = normalizeHyphens(q).toLowerCase();
          const fallbackMatches = articles.filter((a) => {
            const headline = normalizeHyphens(a.headline || a.title || '').toLowerCase();
            const summary = normalizeHyphens(a.summary || '').toLowerCase();
            const cves = (a.cves || []).map((c: string) => normalizeHyphens(c).toLowerCase());
            return headline.includes(cleanQ) || summary.includes(cleanQ) || cves.some((c: string) => c.includes(cleanQ));
          });
          return jsonResponse({ count: fallbackMatches.length, results: fallbackMatches.slice(0, 50) }, 200, {
            'Cache-Control': 'public, max-age=300',
          });
        }
      }

      // API: Get single news article by slug (checks active feed then D1 archive)
      if (url.pathname.startsWith('/api/news/')) {
        const reqSlug = url.pathname.replace(/^\/api\/news\//, '').replace(/\/+$/, '').toLowerCase();
        if (!reqSlug) return errorResponse('Missing slug', 400);

        // 1. Check in-memory / active feed
        const articles = await getArticles();
        const inFeed = articles.find(a => {
          const headline = a.headline || a.title || '';
          const articleId = a.id || a.sourceUrl || a.url || headline;
          const artSlug = (a.slug || createSlug(headline, articleId)).toLowerCase();
          if (artSlug === reqSlug) return true;
          if (a.aliases && a.aliases.some((al: string) => al.toLowerCase() === reqSlug)) return true;
          const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
          return base && reqSlug === base;
        });

        if (inFeed) {
          return jsonResponse({ article: inFeed }, 200, {
            'Cache-Control': 'public, max-age=300, s-maxage=600',
          });
        }

        if (!env.DB) {
          return errorResponse('Article not found', 404);
        }

        // 2. Direct indexed primary key lookup in D1 (EXACTLY 1 row read)
        try {
          let row = await env.DB.prepare(
            `SELECT slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json
             FROM articles
             WHERE slug = ?
             LIMIT 1;`
          ).bind(reqSlug).first<any>();

          // Fallback only if primary key missed: check aliases (0 D1 table scan)
          if (!row) {
            row = await env.DB.prepare(
              `SELECT slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json
               FROM articles
               WHERE aliases_json LIKE ?
               LIMIT 1;`
            ).bind(`%"${reqSlug}"%`).first<any>();
          }

          if (row) {
            const article = formatD1Article(row);
            return jsonResponse({ article }, 200, {
              'Cache-Control': 'public, max-age=3600, s-maxage=86400',
            });
          }
        } catch (dbErr: any) {
          console.warn('D1 article slug lookup failed (quota or error):', dbErr?.message);
        }

        return errorResponse('Article not found', 404);
      }

      // API: Ingestion Hook to Archive Synthesized Stories
      if (url.pathname === '/api/articles/archive' && request.method === 'POST') {
        if (!isAuthorized(request, env)) {
          return errorResponse('Unauthorized', 401);
        }

        let body: any;
        try {
          body = await request.json();
        } catch {
          return errorResponse('Invalid JSON body', 400);
        }

        const { articles } = body ?? {};
        if (!Array.isArray(articles) || articles.length === 0) {
          return jsonResponse({ success: true, count: 0, message: 'No articles provided' });
        }

        const statements = articles.map((a: any) => {
          const rawTitle = a.title || a.headline || '';
          const title = normalizeCveHyphens(rawTitle);
          const id = a.id || a.sourceUrl || a.url || rawTitle;
          const slug = a.slug || createSlug(rawTitle, id);
          const summary = normalizeCveHyphens(a.summary || '');
          const category = a.category || 'GENERAL';
          const severity = a.severity || 'LOW';
          const source = a.source || a.sourceName || '';
          const sourceUrl = a.sourceUrl || a.url || '';
          const publishedAt = a.publishedAt || (a.pubDate ? new Date(a.pubDate).toISOString() : new Date().toISOString());
          const rawCves = Array.isArray(a.cves) ? a.cves.map((c: string) => normalizeHyphens(c).toUpperCase()) : [];
          const mergedCves = Array.from(new Set([...rawCves, ...extractCvesFromText(`${title} ${summary}`)]));
          const cvesJson = JSON.stringify(mergedCves);
          const additionalSourcesJson = JSON.stringify(a.additionalSources || []);
          const aliasesJson = JSON.stringify(a.aliases || []);

          return env.DB.prepare(
            `INSERT OR REPLACE INTO articles (slug, title, summary, category, severity, source, source_url, published_at, cves_json, additional_sources_json, aliases_json)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
          ).bind(slug, title, summary, category, severity, source, sourceUrl, publishedAt, cvesJson, additionalSourcesJson, aliasesJson);
        });

        for (let i = 0; i < statements.length; i += 100) {
          const chunk = statements.slice(i, i + 100);
          await env.DB.batch(chunk);
        }

        // Invalidate in-memory caches so fresh articles are immediately searchable
        cachedKnownCves = null;
        searchCache.clear();

        return jsonResponse({ success: true, count: articles.length });
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
            if (base && reqSlug === base) return true;
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

      // Dynamic Sitemap for Search Engines (Edge Cached 24h, 0 D1 reads on hits)
      if (url.pathname === '/sitemap.xml') {
        const cache = (caches as any).default;
        const cacheKey = new Request(url.toString(), request);
        try {
          const cachedRes = await cache.match(cacheKey);
          if (cachedRes) {
            return cachedRes;
          }
        } catch {}

        const now = Date.now();
        if (cachedSitemapXml && now - cachedSitemapTime < 24 * 60 * 60 * 1000) {
          const res = new Response(cachedSitemapXml, {
            status: 200,
            headers: {
              'Content-Type': 'application/xml; charset=utf-8',
              'Cache-Control': 'public, max-age=86400, s-maxage=86400',
              ...CORS_HEADERS,
            },
          });
          try {
            if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, res.clone()));
          } catch {}
          return res;
        }

        const [cisa, d1Articles] = await Promise.all([
          getKevAdvisories(),
          env.DB
            ? env.DB.prepare('SELECT slug, title, published_at as publishedAt FROM articles ORDER BY published_at DESC LIMIT 5000;').all<any>().then(r => r.results || []).catch(() => [])
            : Promise.resolve([])
        ]);
        const articles = d1Articles.length > 0 ? (d1Articles as any[]) : await getArticles();
        const advisories = [...cisa, ...(GITHUB_ADVISORIES as any)];
        const sitemapXml = generateSitemapXml(articles, advisories);
        cachedSitemapXml = sitemapXml;
        cachedSitemapTime = now;

        const response = new Response(sitemapXml, {
          status: 200,
          headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
            ...CORS_HEADERS,
          },
        });
        try {
          if (ctx && ctx.waitUntil) ctx.waitUntil(cache.put(cacheKey, response.clone()));
        } catch {}
        return response;
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

      // Ads.txt for Authorized Digital Sellers (Google AdSense)
      if (url.pathname === '/ads.txt') {
        const adsTxt = `google.com, pub-6892734842813197, DIRECT, f08c47fec0942fa0\n`;
        return new Response(adsTxt, {
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
          selectedVendors,
          watchedCves,
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
        const hasSev = typeof severityThreshold === 'string' && ['ALL', 'HIGH_CRITICAL', 'CRITICAL_ONLY', 'MY_STACK_ONLY'].includes(severityThreshold);
        const hasVendors = Array.isArray(selectedVendors);
        const hasCves = Array.isArray(watchedCves);

        const newsVal = hasNews ? (newsBriefs ? 1 : 0) : 1;
        const advVal = hasAdv ? (threatAdvisories ? 1 : 0) : 1;
        const sevVal = hasSev ? severityThreshold : 'HIGH_CRITICAL';
        const safeVendors = hasVendors
          ? JSON.stringify(selectedVendors.filter((v) => typeof v === 'string').slice(0, 50))
          : '[]';
        const safeCves = hasCves
          ? JSON.stringify(watchedCves.filter((c) => typeof c === 'string').slice(0, 100))
          : '[]';

        // Idempotent UPSERT into Cloudflare D1 with user alert preferences
        await env.DB.prepare(
          `INSERT INTO push_tokens (token, platform, app_version, created_at, last_seen_at, is_active, news_briefs, threat_advisories, severity_threshold, selected_vendors, watched_cves)
           VALUES (?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?)
           ON CONFLICT(token) DO UPDATE SET
             last_seen_at = excluded.last_seen_at,
             app_version = excluded.app_version,
             is_active = 1,
             news_briefs = CASE WHEN ? THEN excluded.news_briefs ELSE push_tokens.news_briefs END,
             threat_advisories = CASE WHEN ? THEN excluded.threat_advisories ELSE push_tokens.threat_advisories END,
             severity_threshold = CASE WHEN ? THEN excluded.severity_threshold ELSE push_tokens.severity_threshold END,
             selected_vendors = CASE WHEN ? THEN excluded.selected_vendors ELSE push_tokens.selected_vendors END,
             watched_cves = CASE WHEN ? THEN excluded.watched_cves ELSE push_tokens.watched_cves END;`
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
            safeVendors,
            safeCves,
            hasNews ? 1 : 0,
            hasAdv ? 1 : 0,
            hasSev ? 1 : 0,
            hasVendors ? 1 : 0,
            hasCves ? 1 : 0
          )
          .run();

        return jsonResponse({
          success: true,
          message: 'Token registered successfully',
          preferences: {
            newsBriefs: hasNews ? newsBriefs : true,
            threatAdvisories: hasAdv ? threatAdvisories : true,
            severityThreshold: sevVal,
            selectedVendors: hasVendors ? selectedVendors : [],
            watchedCves: hasCves ? watchedCves : [],
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

        let query = `SELECT token, news_briefs, threat_advisories, severity_threshold, selected_vendors, watched_cves FROM push_tokens WHERE is_active = 1`;

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

        let results: any[] = [];
        try {
          const dbRes = await env.DB.prepare(query).all<{
            token: string;
            news_briefs: number;
            threat_advisories: number;
            severity_threshold: string;
            selected_vendors: string;
            watched_cves: string;
          }>();
          results = dbRes?.results || [];
          if (results.length > 0) {
            cachedPushTokens = results;
            cachedPushTokensTime = Date.now();
          }
        } catch (dbErr: any) {
          console.warn('D1 push-tokens query fallback (quota or error):', dbErr?.message);
          results = cachedPushTokens || [];
        }

        const tokens = (results ?? []).map((row) => row.token);
        const devices = (results ?? []).map((row) => {
          let selectedVendors = [];
          let watchedCves = [];
          try {
            if (row.selected_vendors) selectedVendors = JSON.parse(row.selected_vendors);
          } catch {}
          try {
            if (row.watched_cves) watchedCves = JSON.parse(row.watched_cves);
          } catch {}

          return {
            token: row.token,
            newsBriefs: row.news_briefs === 1,
            threatAdvisories: row.threat_advisories === 1,
            severityThreshold: row.severity_threshold || 'HIGH_CRITICAL',
            selectedVendors,
            watchedCves,
          };
        });

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

          let articleListForMeta = articles;
          let isArchivedMatch = false;

          if (url.pathname.startsWith('/news/')) {
            const rawSlug = url.pathname.replace(/^\/news\//, '').replace(/\/+$/, '').toLowerCase();
            const slug = decodeURIComponent(rawSlug).replace(/\.html?$/i, '');
            const inFeed = articles.some(a => {
              const headline = a.headline || a.title || '';
              const articleId = a.id || a.sourceUrl || a.url || headline;
              const artSlug = (a.slug || createSlug(headline, articleId)).toLowerCase();
              if (artSlug === slug) return true;
              if (a.aliases && a.aliases.some((al: string) => al.toLowerCase() === slug)) return true;
              const base = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
              return base && slug === base;
            });

            if (!inFeed && env.DB) {
              try {
                // Direct indexed lookup (1 row read)
                let row = await env.DB.prepare(
                  'SELECT * FROM articles WHERE slug = ? LIMIT 1'
                ).bind(slug).first<any>();

                // Fallback only if primary slug missed: check aliases (0 D1 table scan)
                if (!row) {
                  row = await env.DB.prepare(
                    'SELECT * FROM articles WHERE aliases_json LIKE ? LIMIT 1'
                  ).bind(`%"${slug}"%`).first<any>();
                }

                if (row) {
                  isArchivedMatch = true;
                  const archivedArt = formatD1Article(row);
                  articleListForMeta = [archivedArt, ...articles];
                }
              } catch (e) {
                console.error('Error querying D1 for archived article meta:', e);
              }
            }
          }

          const isRouteValid = isArchivedMatch || isKnownSpaRoute(url.pathname, articles, advisories);

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
            enrichedHtml = injectMetaTags(rawHtml, url.pathname, articleListForMeta, advisories);
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
  // CRON TRIGGER HANDLER (Fires at :42 past every hour)
  // Acts as a precision zero-cost fallback: checks if GitHub dropped the :17 run,
  // and ONLY triggers out-of-band workflow_dispatch if GitHub missed it.
  // ---------------------------------------------------------------------------
  async scheduled(
    event: { cron: string },
    env: Env,
    ctx: { waitUntil: (promise: Promise<unknown>) => void }
  ): Promise<void> {
    const token = env.GITHUB_PAT;
    if (!token) {
      console.warn('[Cron Watchdog] GITHUB_PAT is missing. Fallback dispatch unavailable.');
      return;
    }

    const checkAndDispatch = async () => {
      try {
        console.log(`[Cron Watchdog] Checking GitHub Actions run status at ${new Date().toISOString()}...`);

        // Check recent runs of ingest.yml to see if GitHub's :17 cron executed
        const runsRes = await fetch(
          'https://api.github.com/repos/nisargs/SecuBuzz/actions/workflows/ingest.yml/runs?per_page=3',
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github+json',
              'User-Agent': 'SecuBuzz-Cloudflare-Watchdog',
            },
          }
        );

        if (runsRes.ok) {
          const data: any = await runsRes.json();
          const runs: any[] = data.workflow_runs || [];

          // 1. If an ingest workflow is already active or queued, do nothing
          const hasActive = runs.some((r: any) => r.status === 'in_progress' || r.status === 'queued');
          if (hasActive) {
            console.log('[Cron Watchdog] Ingest is currently in progress or queued. Skipping fallback dispatch.');
            return;
          }

          // 2. If a run started within the last 40 minutes, GitHub ran on schedule
          const latestRun = runs[0];
          if (latestRun && latestRun.created_at) {
            const runTime = Date.parse(latestRun.created_at);
            const ageMinutes = (Date.now() - runTime) / (1000 * 60);

            if (ageMinutes < 40) {
              console.log(`[Cron Watchdog] GitHub Actions ran on schedule (${ageMinutes.toFixed(1)}m ago). No miss detected.`);
              return;
            }
          }
        } else {
          console.warn(`[Cron Watchdog] Failed to query GitHub runs API (${runsRes.status}).`);
        }

        // 3. GitHub missed its :17 hourly run! Trigger fallback dispatch
        console.log('🚨 [Cron Watchdog] GitHub Actions missed the :17 run! Triggering fallback dispatch...');

        const dispatchRes = await fetch(
          'https://api.github.com/repos/nisargs/SecuBuzz/actions/workflows/ingest.yml/dispatches',
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/vnd.github+json',
              'User-Agent': 'SecuBuzz-Cloudflare-Watchdog',
            },
            body: JSON.stringify({ ref: 'main' }),
          }
        );

        if (dispatchRes.status === 204) {
          console.log('✅ [Cron Watchdog] Fallback ingestion workflow successfully dispatched on GitHub!');
        } else {
          const errText = await dispatchRes.text();
          console.error(`[Cron Watchdog] GitHub dispatch returned HTTP ${dispatchRes.status}: ${errText}`);
          throw new Error(`[Cron Watchdog] GitHub dispatch failed (HTTP ${dispatchRes.status}): ${errText}`);
        }
      } catch (err: any) {
        console.error('[Cron Watchdog] Critical failure during watchdog check/dispatch:', err);
        throw err;
      }
    };

    ctx.waitUntil(checkAndDispatch());
  },
};
