import { useState, useEffect } from 'react';
import { news as initialNews } from './news';
import type { NewsBrief, NewsCategory } from '../types/news';

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const ENTITY_TERMS = [
  'bitget', 'kiteworks', 'netscaler', 'citrix', 'wireshark', 'snowflake',
  'chatgpt', 'elementor', 'sharepoint', 'fortinet', 'palo alto', 'ivanti',
  'sonicwall', 'cisco', 'crowdstrike', 'vmware', 'salesforce', 'qualys',
  'telegram', 'ransomhub', 'lockbit', 'akira', 'qilin', 'blacksuit'
];

const STOP_WORDS = new Set([
  'the', 'a', 'an', 'in', 'on', 'for', 'to', 'of', 'and', 'is', 'with', 'after', 'from',
  'targets', 'fixes', 'flaw', 'vulnerability', 'vulnerabilities', 'security', 'cyber',
  'attack', 'attacks', 'new', 'release', 'addresses', 'update', 'updates', 'by', 'as',
  'at', 'about', 'over', 'into', 'warns', 'alert', 'patch', 'patches', 'zero-day', 'exploit',
  'exploited', 'users', 'critical', 'high', 'active', 'actively', 'amid', 'amidst', 'via'
]);

function getKeywords(title: string): string[] {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w));
}

function mapCategory(cat: string = '', text: string = ''): NewsCategory {
  const upper = cat.toUpperCase();
  if (upper === 'BREACH') return 'Breach';
  if (upper === 'RANSOMWARE') return 'Ransomware';
  if (upper === 'CVE' || upper === 'VULNERABILITY') return 'Vulnerability';
  if (upper === 'NATION_STATE') return 'Malware';
  const lowerText = text.toLowerCase();
  if (lowerText.includes('cloud') || lowerText.includes('aws') || lowerText.includes('azure') || lowerText.includes('container')) {
    return 'Cloud';
  }
  if (lowerText.includes('malware') || lowerText.includes('trojan') || lowerText.includes('rat ') || lowerText.includes('spyware')) {
    return 'Malware';
  }
  return 'Policy';
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

interface InternalBrief extends NewsBrief {
  keywords?: string[];
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

  const seenSlugs = new Map<string, number>();
  const deduped: InternalBrief[] = [];

  for (const art of sorted) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const fullText = (title + ' ' + summary).toLowerCase();
    const cves = extractCves(title + ' ' + summary);
    const keywords = getKeywords(title);
    const category = mapCategory(art.category, title + ' ' + summary);
    const rawSev = (art.severity || '').toUpperCase();
    const severity = (['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].includes(rawSev) ? rawSev : undefined) as NewsBrief['severity'];
    const time = Date.parse(publishedAt) || 0;

    let rawSlug = slugify(title);
    if (!rawSlug) rawSlug = 'brief';

    let duplicateOf: InternalBrief | null = null;
    for (const existing of deduped) {
      const existingTime = Date.parse(existing.publishedAt) || 0;
      const timeDiffDays = Math.abs(time - existingTime) / (1000 * 3600 * 24);
      if (timeDiffDays > 7) continue;

      if (cves.length > 0 && existing.cves.some(c => cves.includes(c))) {
        duplicateOf = existing;
        break;
      }

      const existingFull = (existing.title + ' ' + existing.summary).toLowerCase();
      for (const ent of ENTITY_TERMS) {
        if (fullText.includes(ent) && existingFull.includes(ent)) {
          duplicateOf = existing;
          break;
        }
      }
      if (duplicateOf) break;

      if (fullText.includes('soldier') && existingFull.includes('soldier')) {
        duplicateOf = existing;
        break;
      }

      const existingKw = new Set(existing.keywords || []);
      const overlap = keywords.filter(k => existingKw.has(k));
      if (overlap.length >= 2 && timeDiffDays <= 3) {
        duplicateOf = existing;
        break;
      }
    }

    if (duplicateOf) {
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some(s => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }
      if (!duplicateOf.aliases) duplicateOf.aliases = [];
      const dupSlug = art.slug || createSlug(title, art.id || art.sourceUrl || art.url || title);
      if (!duplicateOf.aliases.includes(dupSlug)) duplicateOf.aliases.push(dupSlug);
      if (rawSlug && !duplicateOf.aliases.includes(rawSlug)) duplicateOf.aliases.push(rawSlug);
      continue;
    }

    const articleId = art.id || art.sourceUrl || art.url || title;
    const slug = art.slug || createSlug(title, articleId);
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

    const item: InternalBrief = {
      slug,
      title,
      summary,
      category,
      severity,
      source,
      sourceUrl,
      publishedAt,
      cves,
      keywords,
      additionalSources: [],
      aliases
    };

    deduped.push(item);
  }

  return deduped.map(({ keywords, ...rest }) => rest);
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
            cachedNews = transformed;
            listeners.forEach(cb => cb(transformed));
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
