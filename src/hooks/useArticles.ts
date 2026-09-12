import { useCallback, useState } from 'react';

import { getArticleRepository } from '../data/getArticleRepository';
import type { Article } from '../models/article';

type ArticlesState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; articles: Article[]; fromCache: boolean };

/**
 * Loads stories through the repository so screens stay unaware of mock vs API.
 */
export function useArticles() {
  const [state, setState] = useState<ArticlesState>({ status: 'loading' });

  const load = useCallback(async () => {
    // Keep existing stories on screen during pull-to-refresh.
    setState((current) => (current.status === 'ready' ? current : { status: 'loading' }));
    try {
      const repository = getArticleRepository();
      const articles = await repository.getArticles();
      setState({
        status: 'ready',
        articles,
        fromCache: repository.lastResultFromCache(),
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Could not load stories.';
      setState({ status: 'error', message });
    }
  }, []);

  return { state, load };
}
