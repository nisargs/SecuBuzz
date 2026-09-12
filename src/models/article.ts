/**
 * Shared types for news stories shown in Secubuzz.
 *
 * Every screen should import these types instead of inventing its own
 * shape. That keeps the Feed, Saved tab, and a future real API in sync.
 */

/**
 * Allowed story categories. The value stored in data is the ALL_CAPS key.
 * The UI turns that key into a friendly label (for example NATION_STATE → "Nation-State").
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

/** How serious the story is. Stored on the model for later use (alerts, sorting). */
export type ArticleSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

/**
 * One cybersecurity news item.
 *
 * We only keep a short summary plus a link. Never store or display
 * the full original article text.
 */
export type Article = {
  id: string;
  headline: string;
  /** Short plain-language summary, about 40–70 words. */
  summary: string;
  sourceName: string;
  /** Opens in the device's external browser. */
  sourceUrl: string;
  category: ArticleCategory;
  /** ISO-8601 date string, for example "2026-09-11T14:00:00.000Z". */
  publishedAt: string;
  /** Optional image. The Feed cards in this pass do not show it yet. */
  imageUrl: string | null;
  severity: ArticleSeverity;
};

/** Filter chip values: every category plus "show everything". */
export type CategoryFilter = 'ALL' | ArticleCategory;
