import { useState, useEffect } from 'react';
import { news as initialNews } from './news';
import type { NewsBrief, NewsCategory } from '../types/news';

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

function mapCategory(cat: string = ''): NewsCategory {
  const upper = cat.toUpperCase();
  if (upper === 'CVE') return 'CVE';
  if (upper === 'VULNERABILITY') return 'Vulnerability';
  if (upper === 'BREACH') return 'Breach';
  if (upper === 'RANSOMWARE') return 'Ransomware';
  if (upper === 'NATION_STATE') return 'Nation State';
  return 'General';
}

function extractCves(text: string): string[] {
  const matches = text.match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map(c => c.toUpperCase()))) : [];
}

export function createSlug(headline: string = '', id: string = ''): string {
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  let hash = 0;
  const idStr = id || headline || '';
  for (let i = 0; i < idStr.length; i++) {
    hash = (hash << 5) - hash + idStr.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(6, '0').slice(0, 6);
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
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const cves = extractCves(title + ' ' + summary);
    const category = mapCategory(art.category);
    const rawSev = (art.severity || '').toUpperCase();
    const severity = (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(rawSev) ? rawSev : undefined) as NewsBrief['severity'];

    const normUrl = sourceUrl.toLowerCase();
    const articleId = (art.id || sourceUrl || title).trim().toLowerCase();
    const normTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 60);

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
    const hex = slug.slice(-6);

    const aliases = [baseSlug, `article-${hex}`, hex];
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

const SEVERITY_WEIGHT: Record<string, number> = {
  CRITICAL: 4,
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1,
};

function reconcileLiveFeed(liveFeed: NewsBrief[], baseNews: NewsBrief[]): NewsBrief[] {
  const baseByHex = new Map<string, NewsBrief>();
  const baseByUrl = new Map<string, NewsBrief>();

  for (const b of baseNews) {
    const hex = b.slug.match(/([a-f0-9]{6})$/)?.[1];
    if (hex) baseByHex.set(hex.toLowerCase(), b);
    if (b.sourceUrl) baseByUrl.set(b.sourceUrl.toLowerCase(), b);
  }

  const reconciled = liveFeed.map((incoming) => {
    const hex = incoming.slug.match(/([a-f0-9]{6})$/)?.[1];
    const match = (hex && baseByHex.get(hex.toLowerCase())) ||
                  (incoming.sourceUrl && baseByUrl.get(incoming.sourceUrl.toLowerCase()));

    if (!match) return incoming;

    // 1. Anti-downgrade: Never downgrade severity (e.g. CRITICAL to HIGH during feed lag)
    const incomingWeight = (incoming.severity && SEVERITY_WEIGHT[incoming.severity]) || 0;
    const matchWeight = (match.severity && SEVERITY_WEIGHT[match.severity]) || 0;
    const finalSeverity = matchWeight > incomingWeight ? match.severity : incoming.severity;

    // 2. Canonical slug preservation: Keep CVE-enriched canonical slug
    let finalSlug = incoming.slug;
    const finalAliases = Array.from(new Set([...(incoming.aliases || []), ...(match.aliases || [])]));
    if (match.slug && match.slug !== incoming.slug) {
      const matchHasCve = /cve-\d{4}-\d+/i.test(match.slug);
      const incomingHasCve = /cve-\d{4}-\d+/i.test(incoming.slug);
      if (matchHasCve && !incomingHasCve) {
        finalSlug = match.slug;
        if (!finalAliases.includes(incoming.slug)) finalAliases.push(incoming.slug);
      } else {
        if (!finalAliases.includes(match.slug)) finalAliases.push(match.slug);
      }
    }

    // 3. Preserve enriched CVEs
    const finalCves = Array.from(new Set([...(incoming.cves || []), ...(match.cves || [])]));

    return {
      ...incoming,
      slug: finalSlug,
      severity: finalSeverity,
      cves: finalCves,
      aliases: finalAliases,
      title: matchWeight > incomingWeight ? match.title : incoming.title,
      summary: matchWeight > incomingWeight ? match.summary : incoming.summary,
    };
  });

  // Preserve any baseNews items that might not have reached R2 yet
  for (const b of baseNews) {
    const hex = b.slug.match(/([a-f0-9]{6})$/)?.[1];
    const exists = reconciled.some(r => {
      const rHex = r.slug.match(/([a-f0-9]{6})$/)?.[1];
      return (hex && rHex && hex.toLowerCase() === rHex.toLowerCase()) ||
             (r.sourceUrl && b.sourceUrl && r.sourceUrl.toLowerCase() === b.sourceUrl.toLowerCase());
    });
    if (!exists) {
      reconciled.push(b);
    }
  }

  return reconciled;
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
