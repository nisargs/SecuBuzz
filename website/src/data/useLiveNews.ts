import { useState, useEffect } from 'react';
import { news as initialNews } from './news';
import type { NewsBrief, NewsCategory } from '../types/news';

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function normalizeHyphens(text: string): string {
  return (text || '').replace(/[\u2010-\u2015\u2212]/g, '-');
}

export function normalizeCveText(text: string): string {
  return (text || '').replace(
    /CVE[\u2010-\u2015\u2212-](\d{4})[\u2010-\u2015\u2212-](\d{4,7})/gi,
    'CVE-$1-$2'
  );
}

export function mapCategory(cat: string = ''): NewsCategory {
  const upper = cat.toUpperCase();
  if (upper === 'CVE') return 'CVE';
  if (upper === 'VULNERABILITY') return 'Vulnerability';
  if (upper === 'BREACH') return 'Breach';
  if (upper === 'RANSOMWARE') return 'Ransomware';
  if (upper === 'NATION_STATE') return 'Nation State';
  return 'General';
}

export function extractCves(text: string): string[] {
  const norm = normalizeCveText(text);
  const matches = norm.match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
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

function slugify(title: string): string {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function transformFeed(feed: any[]): NewsBrief[] {
  const cutoffTime = Date.now() - THIRTY_DAYS_MS;

  const sorted = [...feed]
    .filter(art => {
      const t = Date.parse(art.publishedAt || art.pubDate || 0) || 0;
      return t >= cutoffTime;
    })
    .sort((a, b) => {
      const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
      const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
      return timeB - timeA;
    });

  const seenIds = new Set<string>();
  const seenUrls = new Set<string>();
  const seenNormTitles = new Set<string>();
  const deduped: NewsBrief[] = [];

  for (const art of sorted) {
    const rawTitle = (art.title || art.headline || '').trim();
    if (!rawTitle) continue;

    const title = normalizeCveText(rawTitle);
    const summary = normalizeCveText((art.summary || '').trim());
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const existingCves = Array.isArray(art.cves)
      ? art.cves.map((c: string) => normalizeHyphens(c).trim().toUpperCase()).filter(Boolean)
      : [];
    const cves = Array.from(new Set([...existingCves, ...extractCves(title + ' ' + summary)]));
    const category = mapCategory(art.category);
    const rawSev = (art.severity || '').toUpperCase();
    const severity = (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(rawSev) ? rawSev : undefined) as NewsBrief['severity'];

    const normUrl = sourceUrl.toLowerCase();
    const articleId = (art.id || sourceUrl || rawTitle).trim().toLowerCase();
    const normTitle = rawTitle.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);

    // O(1) duplicate filter (exact match on ID, canonical URL, or identical title)
    if (seenIds.has(articleId) || (normUrl && seenUrls.has(normUrl)) || (normTitle && seenNormTitles.has(normTitle))) {
      continue;
    }

    seenIds.add(articleId);
    if (normUrl) seenUrls.add(normUrl);
    if (normTitle) seenNormTitles.add(normTitle);

    let rawSlug = slugify(title);
    if (!rawSlug) rawSlug = 'brief';

    const slug = art.slug || createSlug(title, art.id || art.sourceUrl || art.url || title);
    const baseSlug = (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50).replace(/^-+|-+$/g, '');
    const hex = slug.match(/-([a-f0-9]{8})$/)?.[1] || slug.slice(-8);

    // Compute legacy 6-char hex for backward-compatible routing of historical links
    let legacyHash = 0;
    const idStr = art.id || art.sourceUrl || art.url || title;
    for (let i = 0; i < idStr.length; i++) {
      legacyHash = (legacyHash << 5) - legacyHash + idStr.charCodeAt(i);
      legacyHash |= 0;
    }
    const legacyHex = Math.abs(legacyHash).toString(16).padStart(6, '0').slice(0, 6);

    const aliases = [baseSlug, `article-${hex}`, hex];
    if (baseSlug) aliases.push(`${baseSlug}-${legacyHex}`);
    if (rawSlug && rawSlug !== slug && !aliases.includes(rawSlug)) {
      aliases.push(rawSlug);
    }
    if (art.aliases && Array.isArray(art.aliases)) {
      for (const a of art.aliases) {
        if (!aliases.includes(a)) aliases.push(a);
      }
    }

    const item: NewsBrief = {
      slug,
      title,
      summary,
      category,
      severity,
      source,
      sourceUrl,
      publishedAt,
      cves,
      additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : [],
      aliases
    };

    deduped.push(item);
  }

  return deduped;
}

function reconcileLiveFeed(liveFeed: NewsBrief[], baseNews: NewsBrief[]): NewsBrief[] {
  const baseByUrl = new Map<string, NewsBrief>();

  for (const b of baseNews) {
    if (b.sourceUrl) baseByUrl.set(b.sourceUrl.toLowerCase(), b);
  }

  const reconciled = liveFeed.map((incoming) => {
    const match = incoming.sourceUrl ? baseByUrl.get(incoming.sourceUrl.toLowerCase()) : undefined;

    if (!match) return incoming;

    // Live API data always wins, no exceptions. Anti-downgrade override is completely removed.
    // Preserve legacy aliases and enriched CVE references.
    const finalAliases = Array.from(new Set([...(incoming.aliases || []), ...(match.aliases || [])]));
    if (match.slug && match.slug !== incoming.slug && !finalAliases.includes(match.slug)) {
      finalAliases.push(match.slug);
    }

    const finalCves = Array.from(new Set([...(incoming.cves || []), ...(match.cves || [])]));

    return {
      ...incoming,
      cves: finalCves,
      aliases: finalAliases,
    };
  });

  // Preserve any baseNews items that might not have reached R2 yet
  for (const b of baseNews) {
    const exists = reconciled.some(r =>
      r.sourceUrl && b.sourceUrl && r.sourceUrl.toLowerCase() === b.sourceUrl.toLowerCase()
    );
    if (!exists) {
      reconciled.push(b);
    }
  }

  return reconciled;
}

export function normalizeApiBrief(art: any): NewsBrief {
  const rawTitle = (art.title || art.headline || '').trim();
  const title = normalizeCveText(rawTitle);
  const summary = normalizeCveText((art.summary || '').trim());
  const source = (art.source || art.sourceName || 'SecuBuzz').trim();
  const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
  const publishedAt = art.publishedAt || new Date().toISOString();
  let finalSummary = summary;
  const existingCves = Array.isArray(art.cves)
    ? art.cves.map((c: string) => normalizeHyphens(c).trim().toUpperCase()).filter(Boolean)
    : [];
  const allSearchText = `${title} ${summary} ${sourceUrl} ${art.id || ''}`;
  const cves = Array.from(new Set([...existingCves, ...extractCves(allSearchText)]));

  let category = mapCategory(art.category);
  if (cves.length > 0) {
    if (category === 'General' || !category) category = 'CVE';
    const hasCveInText = cves.some(c => title.includes(c) || finalSummary.includes(c));
    if (!hasCveInText) {
      const tracking = cves.length === 1
        ? `The flaw is tracked as ${cves[0]}.`
        : `The vulnerabilities are tracked as ${cves.slice(0, 3).join(', ')}.`;
      finalSummary = `${finalSummary.replace(/[.\s]+$/, '')}. ${tracking}`;
    }
  } else if (category === 'CVE') {
    category = 'Vulnerability';
  }
  const rawSev = (art.severity || '').toUpperCase();
  const severity = (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(rawSev) ? rawSev : undefined) as NewsBrief['severity'];
  const slug = art.slug || createSlug(rawTitle, art.id || art.sourceUrl || art.url || rawTitle);

  return {
    slug,
    title,
    summary: finalSummary,
    category,
    severity,
    source,
    sourceUrl,
    publishedAt,
    cves,
    additionalSources: Array.isArray(art.additionalSources) ? art.additionalSources : [],
    aliases: Array.isArray(art.aliases) ? art.aliases : [],
  };
}

let cachedNews: NewsBrief[] = initialNews;
let isFetching = false;
let listeners: Array<(items: NewsBrief[]) => void> = [];

export function useLiveNews(): { news: NewsBrief[]; loading: boolean } {
  const [items, setItems] = useState<NewsBrief[]>(cachedNews);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    listeners.push(setItems);

    if (!isFetching) {
      isFetching = true;
      setLoading(true);
      fetch('/api/news')
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data: any) => {
          if (Array.isArray(data) && data.length > 0) {
            const transformed = transformFeed(data);
            const reconciled = reconcileLiveFeed(transformed, initialNews);
            cachedNews = reconciled;
            listeners.forEach(cb => cb(reconciled));
          }
        })
        .catch(err => {
          console.warn('Live news fetch failed, relying on bundled briefs:', err);
        })
        .finally(() => {
          setLoading(false);
          isFetching = false;
        });
    }

    return () => {
      listeners = listeners.filter(cb => cb !== setItems);
    };
  }, []);

  return { news: items, loading };
}
