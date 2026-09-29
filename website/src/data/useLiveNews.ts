import { useState, useEffect } from 'react';
import { news as initialNews } from './news';
import type { NewsBrief, NewsCategory } from '../types/news';

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

function slugify(title: string): string {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function transformFeed(feed: any[]): NewsBrief[] {
  const sorted = [...feed].sort((a, b) => {
    const timeA = Date.parse(a.publishedAt || a.pubDate || 0) || 0;
    const timeB = Date.parse(b.publishedAt || b.pubDate || 0) || 0;
    return timeB - timeA;
  });

  const seenSlugs = new Map<string, number>();
  const cveMap = new Map<string, NewsBrief>();
  const titleMap = new Map<string, NewsBrief>();
  const deduped: NewsBrief[] = [];

  for (const art of sorted) {
    const title = (art.title || art.headline || '').trim();
    if (!title) continue;

    const summary = (art.summary || '').trim();
    const source = (art.source || art.sourceName || 'SecuBuzz').trim();
    const sourceUrl = (art.sourceUrl || art.url || art.id || '').trim();
    const publishedAt = art.publishedAt || new Date().toISOString();
    const cves = extractCves(title + ' ' + summary);
    const category = mapCategory(art.category, title + ' ' + summary);

    let rawSlug = slugify(title);
    if (!rawSlug) rawSlug = 'brief';

    let duplicateOf: NewsBrief | null = null;
    if (cves.length > 0) {
      for (const cve of cves) {
        if (cveMap.has(cve)) {
          duplicateOf = cveMap.get(cve)!;
          break;
        }
      }
    }

    if (!duplicateOf && titleMap.has(rawSlug)) {
      duplicateOf = titleMap.get(rawSlug)!;
    }

    if (duplicateOf) {
      if (!duplicateOf.additionalSources) duplicateOf.additionalSources = [];
      if (!duplicateOf.additionalSources.some(s => s.sourceUrl === sourceUrl || s.source === source)) {
        duplicateOf.additionalSources.push({ source, sourceUrl });
      }
      if (!duplicateOf.aliases) duplicateOf.aliases = [];
      if (!duplicateOf.aliases.includes(rawSlug)) {
        duplicateOf.aliases.push(rawSlug);
      }
      continue;
    }

    let slug = rawSlug;
    if (seenSlugs.has(slug)) {
      const count = seenSlugs.get(slug)! + 1;
      seenSlugs.set(slug, count);
      slug = `${slug}-${count}`;
    } else {
      seenSlugs.set(slug, 1);
    }

    const item: NewsBrief = {
      slug,
      title,
      summary,
      category,
      source,
      sourceUrl,
      publishedAt,
      cves,
    };

    deduped.push(item);

    for (const cve of cves) {
      cveMap.set(cve, item);
    }
    titleMap.set(rawSlug, item);
  }

  return deduped;
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
