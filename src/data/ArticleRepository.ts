import type { Article } from '../models/article';

/**
 * How the app asks for news.
 *
 * Screens only talk to this interface. They must not import MockArticleRepository
 * (or a future ApiArticleRepository) directly. Swap the implementation in
 * getArticleRepository.ts and the UI stays the same.
 */
export interface ArticleRepository {
  /**
   * Returns the current list of stories.
   * Rejects the Promise if loading fails so the UI can show an error state.
   */
  getArticles(): Promise<Article[]>;
}
