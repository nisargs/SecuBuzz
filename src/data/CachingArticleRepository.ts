import AsyncStorage from '@react-native-async-storage/async-storage';

import type { Article } from '../models/article';
import type { ArticleRepository } from './ArticleRepository';

const CACHE_KEY = 'cached-articles';

type CachedFeed = {
  savedAt: string;
  articles: Article[];
};

type KeyValueStore = {
  getItem(key: string): Promise<string | null>;
  setItem(key: string, value: string): Promise<void>;
};

/**
 * Decorator: tries a live ArticleRepository first, then AsyncStorage.
 * The Feed still only calls getArticles() — it never talks to storage itself.
 */
export class CachingArticleRepository implements ArticleRepository {
  private fromCache = false;

  constructor(
    private readonly inner: ArticleRepository,
    private readonly storage: KeyValueStore = AsyncStorage,
  ) {}

  lastResultFromCache(): boolean {
    return this.fromCache;
  }

  async getArticles(): Promise<Article[]> {
    try {
      const articles = await this.inner.getArticles();
      this.fromCache = false;
      await this.writeCache(articles);
      return articles;
    } catch (error) {
      const cached = await this.readCache();
      if (cached !== null) {
        this.fromCache = true;
        return cached;
      }
      this.fromCache = false;
      throw error;
    }
  }

  private async writeCache(articles: Article[]): Promise<void> {
    try {
      const payload: CachedFeed = {
        savedAt: new Date().toISOString(),
        articles,
      };
      await this.storage.setItem(CACHE_KEY, JSON.stringify(payload));
    } catch {
      // Fresh data is still returned even if saving the cache fails.
    }
  }

  private async readCache(): Promise<Article[] | null> {
    try {
      const raw = await this.storage.getItem(CACHE_KEY);
      if (raw === null) {
        return null;
      }
      const parsed: unknown = JSON.parse(raw);
      if (!isCachedFeed(parsed)) {
        return null;
      }
      return parsed.articles;
    } catch {
      return null;
    }
  }
}

function isCachedFeed(value: unknown): value is CachedFeed {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const record = value as { savedAt?: unknown; articles?: unknown };
  return typeof record.savedAt === 'string' && Array.isArray(record.articles);
}
