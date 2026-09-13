/**
 * Shared types for news stories shown in SecuBuzz.
 */

export const ARTICLE_CATEGORIES = [
  'BREACH',
  'RANSOMWARE',
  'CVE',
  'VULNERABILITY',
  'NATION_STATE',
  'GENERAL',
] as const;

export type ArticleCategory = (typeof ARTICLE_CATEGORIES)[number];

export type ArticleSeverity =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'CRITICAL';

export type Article = {
  id: string;
  headline: string;
  summary: string;

  sourceName: string;
  sourceUrl: string;

  category: ArticleCategory;

  /**
   * Normalized ISO-8601 timestamp used for sorting.
   */
  publishedAt: string;

  /**
   * Original publication date string supplied by the RSS feed.
   *
   * This lets the app preserve the source's original time/date
   * and explicitly supplied timezone information.
   */
  publishedAtRaw?: string | null;

  imageUrl: string | null;

  severity: ArticleSeverity;
};

export type CategoryFilter = 'ALL' | ArticleCategory;