import type {
    Article,
    ArticleCategory,
    ArticleSeverity,
  } from '../models/article';
  import type { ArticleRepository } from './ArticleRepository';
  
  const FEED_URL =
    'https://raw.githubusercontent.com/nisargs/SecuBuzz/main/feed.json';
  
  function isSeverity(
    value: unknown,
  ): value is ArticleSeverity {
    return (
      value === 'LOW' ||
      value === 'MEDIUM' ||
      value === 'HIGH' ||
      value === 'CRITICAL'
    );
  }
  
  function normalizeSeverity(
    value: unknown,
  ): ArticleSeverity {
    const severity = String(value ?? '').toUpperCase();
  
    if (isSeverity(severity)) {
      return severity;
    }
  
    return 'LOW';
  }
  
  function isCategory(
    value: unknown,
  ): value is ArticleCategory {
    return (
      value === 'BREACH' ||
      value === 'RANSOMWARE' ||
      value === 'CVE' ||
      value === 'VULNERABILITY' ||
      value === 'NATION_STATE' ||
      value === 'GENERAL'
    );
  }
  
  function normalizeArticle(
    value: unknown,
  ): Article | null {
    if (
      typeof value !== 'object' ||
      value === null
    ) {
      return null;
    }
  
    const record = value as Record<string, unknown>;
  
    if (
      typeof record.id !== 'string' ||
      typeof record.headline !== 'string' ||
      typeof record.summary !== 'string' ||
      typeof record.sourceName !== 'string' ||
      typeof record.sourceUrl !== 'string' ||
      !isCategory(record.category) ||
      typeof record.publishedAt !== 'string'
    ) {
      return null;
    }
  
    /*
     * Only fields required by the Article model are copied.
     *
     * This intentionally ignores any unknown fields that might exist
     * in an older or newer feed, including:
     *
     * - imageUrl
     * - publishedAtRaw
     *
     * This keeps the app's Article model stable even if the remote
     * feed contains legacy fields.
     */
    return {
      id: record.id,
      headline: record.headline,
      summary: record.summary,
      sourceName: record.sourceName,
      sourceUrl: record.sourceUrl,
      category: record.category,
      publishedAt: record.publishedAt,
      severity: normalizeSeverity(record.severity),
    };
  }
  
  export class RemoteArticleRepository
    implements ArticleRepository
  {
    async getArticles(): Promise<Article[]> {
      const response = await fetch(FEED_URL);
  
      if (!response.ok) {
        throw new Error('Failed to fetch feed');
      }
  
      const raw: unknown = await response.json();
  
      if (!Array.isArray(raw)) {
        throw new Error('Invalid feed format');
      }
  
      return raw
        .map(normalizeArticle)
        .filter(
          (article): article is Article =>
            article !== null,
        );
    }
  
    lastResultFromCache(): boolean {
      return false;
    }
  }