import type { Article } from '../models/article';
import type { ArticleRepository } from './ArticleRepository';

const FEED_URL = 'https://raw.githubusercontent.com/nisargs/SecuBuzz/main/feed.json';

export class RemoteArticleRepository implements ArticleRepository {
  async getArticles(): Promise<Article[]> {
    const response = await fetch(FEED_URL);
    if (!response.ok) throw new Error('Failed to fetch feed');
    return response.json();
  }
}