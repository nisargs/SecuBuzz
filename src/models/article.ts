/**
 * Shared types for news stories shown in SecuBuzz.
 *
 * Every screen should import these types instead of inventing its own
 * shape. That keeps the Feed, Saved tab, and future data sources in sync.
 */

export const ARTICLE_CATEGORIES = [
  'BREACH',
  'RANSOMWARE',
  'CVE',
  'VULNERABILITY',
  'NATION_STATE',
  'GENERAL',
] as const;

export type ArticleCategory =
  (typeof ARTICLE_CATEGORIES)[number];

/**
 * How serious the story is.
 */
export type ArticleSeverity =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'CRITICAL';

/**
 * One cybersecurity news item.
 *
 * SecuBuzz stores only:
 * - headline
 * - short summary
 * - source
 * - source URL
 * - category
 * - publication time
 * - severity
 *
 */
export type Article = {
  id: string;
  headline: string;
  summary: string;
  sourceName: string;
  sourceUrl: string;
  category: ArticleCategory;
  publishedAt: string;
  severity: ArticleSeverity;
};

/**
 * Filter chip values.
 */
export type CategoryFilter =
  | 'ALL'
  | ArticleCategory;