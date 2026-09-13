import type { Article } from '../models/article';
import type { ArticleRepository } from './ArticleRepository';

const FEED_URL =
  'https://raw.githubusercontent.com/nisargs/SecuBuzz/main/feed.json';

export class RemoteArticleRepository implements ArticleRepository {
  async getArticles(): Promise<Article[]> {
    /**
     * Cache-busting query parameter.
     *
     * This prevents the device/network from repeatedly
     * serving an older copy of feed.json.
     */
    const url = `${FEED_URL}?t=${Date.now()}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch feed (${response.status})`
      );
    }

    const articles = (await response.json()) as Article[];

    /**
     * Sort again on the device.
     *
     * Even if feed.json is correctly sorted, the app
     * protects itself against incorrectly ordered data.
     */
    return [...articles].sort((a, b) => {
      const aTime = Date.parse(a.publishedAt || '');
      const bTime = Date.parse(b.publishedAt || '');

      const safeA = Number.isNaN(aTime) ? 0 : aTime;
      const safeB = Number.isNaN(bTime) ? 0 : bTime;

      return safeB - safeA;
    });
  }

  lastResultFromCache(): boolean {
    return false;
  }
}