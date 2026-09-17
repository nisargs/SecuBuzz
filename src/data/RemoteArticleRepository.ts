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
   * The feed currently contains both the newer field names
   * and some legacy field names.
   *
   * Supported:
   *
   * headline OR title
   * sourceName OR source
   * sourceUrl OR url
   */

  const headline =
    typeof record.headline === 'string'
      ? record.headline
      : typeof record.title === 'string'
        ? record.title
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

  if (
    typeof record.id !== 'string' ||
    headline === null ||
    typeof record.summary !== 'string' ||
    sourceName === null ||
    sourceUrl === null ||
    !isCategory(record.category) ||
    typeof record.publishedAt !== 'string'
  ) {
    return null;
  }

  return {
    id: record.id,
    headline,
    summary: record.summary,
    sourceName,
    sourceUrl,
    category: record.category,
    publishedAt: record.publishedAt,
    severity: normalizeSeverity(record.severity),
  };
}

export class RemoteArticleRepository
  implements ArticleRepository
{
  async getArticles(): Promise<Article[]> {
    /*
     * Cache-busting query parameter.
     *
     * The feed itself is still the same R2 file, but this prevents
     * an old HTTP/CDN response from being reused by the device.
     */
    const url = `${FEED_URL}?t=${Date.now()}`;

    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch feed (${response.status})`,
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
     * Never treat a feed containing articles as successfully
     * loaded if none of those articles could be understood.
     *
     * This prevents a schema mismatch from overwriting the
     * user's good cached feed with an empty array.
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