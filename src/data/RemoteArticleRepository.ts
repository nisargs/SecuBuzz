import type { Article } from '../models/article';
import type { ArticleRepository } from './ArticleRepository';

const FEED_URL =
  'https://raw.githubusercontent.com/nisargs/SecuBuzz/main/feed.json';

function normalizeSeverity(
  value: unknown,
): Article['severity'] {
  const severity = String(value ?? '').toUpperCase();

  if (
    severity === 'LOW' ||
    severity === 'MEDIUM' ||
    severity === 'HIGH' ||
    severity === 'CRITICAL'
  ) {
    return severity;
  }

  return 'LOW';
}

function isCategory(
  value: unknown,
): value is Article['category'] {
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
 * Any unknown fields from the remote feed are ignored.
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