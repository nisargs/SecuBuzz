import type {
  Article,
  ArticleCategory,
  ArticleSeverity,
} from '../models/article';

import type { ArticleRepository } from './ArticleRepository';

const FEED_URL =
  'https://pub-3fb02516aa81498eb34da1b79161b1c8.r2.dev/feed.json';

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

  /*
   * Your feed.json uses:
   *
   *   source
   *
   * while the app's Article model uses:
   *
   *   sourceName
   *
   * So we translate source -> sourceName here.
   */

  const id =
    typeof record.id === 'string'
      ? record.id
      : typeof record.url === 'string'
        ? record.url
        : null;

  const headline =
    typeof record.headline === 'string'
      ? record.headline
      : typeof record.title === 'string'
        ? record.title
        : null;

  const summary =
    typeof record.summary === 'string'
      ? record.summary
      : null;

  const sourceName =
    typeof record.sourceName === 'string'
      ? record.sourceName
      : typeof record.source === 'string'
        ? record.source
        : null;

  const sourceUrl =
    typeof record.sourceUrl === 'string'
      ? record.sourceUrl
      : typeof record.url === 'string'
        ? record.url
        : null;

  const publishedAt =
    typeof record.publishedAt === 'string'
      ? record.publishedAt
      : null;

  const category = record.category;

  /*
   * Reject only if the actual required data is missing.
   */
  if (
    id === null ||
    headline === null ||
    summary === null ||
    sourceName === null ||
    sourceUrl === null ||
    !isCategory(category) ||
    publishedAt === null
  ) {
    return null;
  }

  return {
    id,
    headline,
    summary,
    sourceName,
    sourceUrl,
    category,
    publishedAt,
    severity: normalizeSeverity(record.severity),
  };
}

export class RemoteArticleRepository
  implements ArticleRepository
{
  async getArticles(): Promise<Article[]> {
    /*
     * Add a cache-busting query parameter so the app doesn't
     * accidentally receive an older cached copy of feed.json.
     */
    const url = `${FEED_URL}?t=${Date.now()}`;

    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch feed: ${response.status}`,
      );
    }

    const raw: unknown = await response.json();

    if (!Array.isArray(raw)) {
      throw new Error('Invalid feed format');
    }

    const articles = raw
      .map(normalizeArticle)
      .filter(
        (article): article is Article =>
          article !== null,
      );

    /*
     * This catches a feed/model mismatch instead of silently
     * returning zero articles and making the app fall back
     * to the old cache.
     */
    if (raw.length > 0 && articles.length === 0) {
      throw new Error(
        'Feed contains articles, but none could be parsed.',
      );
    }

    /*
     * Newest articles first.
     */
    articles.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );

    return articles;
  }

  lastResultFromCache(): boolean {
    return false;
  }
}