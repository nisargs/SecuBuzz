import type { ArticleRepository } from './ArticleRepository';
import { MockArticleRepository } from './MockArticleRepository';
import { RemoteArticleRepository } from './RemoteArticleRepository';

/**
 * Single place to choose the live data source.
 *
 * Later you can switch this to a real API class without changing any screen:
 *
 *   return new ApiArticleRepository();
 */
let repository: ArticleRepository | null = null;

export function getArticleRepository(): ArticleRepository {
  if (repository === null) {
    repository = new RemoteArticleRepository();
  }
  return repository;
}
