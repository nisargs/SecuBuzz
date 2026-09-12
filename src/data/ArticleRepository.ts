import type { Article } from '../models/article';

/**
 * How the app asks for news.
 *
 * Screens only talk to this interface. They must not import MockArticleRepository
 * (or RemoteArticleRepository) directly. Swap the implementation in
 * getArticleRepository.ts and the UI stays the same.
 */
export interface ArticleRepository {
  /**
   * Returns the current list of stories.
   * Rejects the Promise if loading fails so the UI can show an error state.
   */
  getArticles(): Promise<Article[]>;

  /**
   * True when the most recent successful getArticles() used a local cache
   * because the live source failed. Direct sources always return false.
   */
  lastResultFromCache(): boolean;
}
