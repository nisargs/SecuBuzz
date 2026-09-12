import type { ArticleRepository } from './ArticleRepository';
import { CachingArticleRepository } from './CachingArticleRepository';
import { RemoteArticleRepository } from './RemoteArticleRepository';

/**
 * Single place to choose the live data source.
 *
 * The caching decorator sits in front of the remote feed so screens never
 * change when we swap Mock vs Remote vs a future API.
 */
let repository: ArticleRepository | null = null;

export function getArticleRepository(): ArticleRepository {
  if (repository === null) {
    repository = new CachingArticleRepository(new RemoteArticleRepository());
  }
  return repository;
}
export function isShowingCachedArticles(): boolean {
  return repository instanceof CachingArticleRepository
    ? repository.lastResultFromCache()
    : false;
}