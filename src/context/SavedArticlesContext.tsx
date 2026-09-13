import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

import { getArticleRepository } from '../data/getArticleRepository';
import type { Article } from '../models/article';

const SAVED_ARTICLES_KEY = 'secubuzz-saved-articles';
const FEED_CACHE_KEY = 'cached-articles';

type SavedArticlesContextValue = {
  savedArticles: Article[];
  savedIds: ReadonlySet<string>;
  isHydrated: boolean;
  isSaved: (articleId: string) => boolean;
  getSavedArticle: (articleId: string) => Article | undefined;
  toggleSaved: (articleId: string) => void;
};

const SavedArticlesContext =
  createContext<SavedArticlesContextValue | null>(null);

function isArticleCategory(value: unknown): value is Article['category'] {
  return (
    value === 'BREACH' ||
    value === 'RANSOMWARE' ||
    value === 'CVE' ||
    value === 'VULNERABILITY' ||
    value === 'NATION_STATE' ||
    value === 'GENERAL'
  );
}

function isArticleSeverity(value: unknown): value is Article['severity'] {
  return (
    value === 'LOW' ||
    value === 'MEDIUM' ||
    value === 'HIGH' ||
    value === 'CRITICAL' ||
    value === 'low' ||
    value === 'medium' ||
    value === 'high' ||
    value === 'critical'
  );
}

/**
 * Converts stored JSON back into the Article shape.
 *
 * Only the fields required by the Article model are restored.
 * Unknown legacy fields are ignored automatically.
 */
function parseArticle(value: unknown): Article | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const record = value as Record<string, unknown>;

  if (
    typeof record.id !== 'string' ||
    typeof record.headline !== 'string' ||
    typeof record.summary !== 'string' ||
    typeof record.sourceName !== 'string' ||
    typeof record.sourceUrl !== 'string' ||
    !isArticleCategory(record.category) ||
    typeof record.publishedAt !== 'string' ||
    !isArticleSeverity(record.severity)
  ) {
    return null;
  }

  return {
    id: record.id,
    headline: record.headline,
    summary: record.summary,
    sourceName: record.sourceName,
    sourceUrl: record.sourceUrl,
    category: record.category,
    publishedAt: record.publishedAt,
    severity: String(record.severity).toUpperCase() as Article['severity'],
  };
}

function parseSavedArticles(raw: string | null): Article[] {
  if (raw === null) {
    return [];
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return [];
    }

    const articles: Article[] = [];

    for (const item of parsed) {
      const article = parseArticle(item);

      if (article !== null) {
        articles.push(article);
      }
    }

    return articles;
  } catch {
    return [];
  }
}

async function findArticleForSaving(
  articleId: string,
): Promise<Article | null> {
  /*
   * First try the feed cache.
   *
   * The Feed already writes its successful response to
   * "cached-articles", so normally this gives us the exact
   * article that the user just bookmarked without another
   * network request.
   */
  try {
    const cachedRaw = await AsyncStorage.getItem(FEED_CACHE_KEY);

    if (cachedRaw !== null) {
      const cached: unknown = JSON.parse(cachedRaw);

      if (
        typeof cached === 'object' &&
        cached !== null &&
        Array.isArray((cached as { articles?: unknown }).articles)
      ) {
        const articles = (
          cached as { articles: unknown[] }
        ).articles;

        for (const item of articles) {
          const article = parseArticle(item);

          if (article?.id === articleId) {
            return article;
          }
        }
      }
    }
  } catch {
    // Continue to repository fallback.
  }

  /*
   * If the cache is unavailable, ask the existing repository.
   * CachingArticleRepository will itself fall back to its cache
   * if the network is unavailable.
   */
  try {
    const repository = getArticleRepository();
    const articles = await repository.getArticles();

    return articles.find((article) => article.id === articleId) ?? null;
  } catch {
    return null;
  }
}

export function SavedArticlesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [savedArticles, setSavedArticles] = useState<Article[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  /*
   * Ref keeps the latest state available inside async functions
   * without creating stale-closure problems.
   */
  const savedArticlesRef = useRef<Article[]>([]);

  useEffect(() => {
    savedArticlesRef.current = savedArticles;
  }, [savedArticles]);

  /*
   * Load saved article snapshots once when the provider starts.
   */
  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      try {
        const raw = await AsyncStorage.getItem(SAVED_ARTICLES_KEY);
        const articles = parseSavedArticles(raw);

        if (cancelled) {
          return;
        }

        savedArticlesRef.current = articles;
        setSavedArticles(articles);

        /*
        * Rewrite stored records using only the current Article shape.
        */
        await AsyncStorage.setItem(
          SAVED_ARTICLES_KEY,
          JSON.stringify(articles),
        );
      } catch {
        if (!cancelled) {
          savedArticlesRef.current = [];
          setSavedArticles([]);
        }
      } finally {
        if (!cancelled) {
          setIsHydrated(true);
        }
      }
    }

    void hydrate();

    return () => {
      cancelled = true;
    };
  }, []);

  const persistSavedArticles = useCallback(
    async (articles: Article[]) => {
      savedArticlesRef.current = articles;
      setSavedArticles(articles);

      try {
        await AsyncStorage.setItem(
          SAVED_ARTICLES_KEY,
          JSON.stringify(articles),
        );
      } catch {
        /*
         * Keep the in-memory state even if storage temporarily fails.
         * The next app launch will retry hydration.
         */
      }
    },
    [],
  );

  const isSaved = useCallback(
    (articleId: string) => {
      return savedArticles.some((article) => article.id === articleId);
    },
    [savedArticles],
  );

  const getSavedArticle = useCallback(
    (articleId: string) => {
      return savedArticles.find((article) => article.id === articleId);
    },
    [savedArticles],
  );

  const toggleSaved = useCallback(
    (articleId: string) => {
      const current = savedArticlesRef.current;

      /*
       * Already saved → remove immediately.
       */
      const existing = current.some(
        (article) => article.id === articleId,
      );

      if (existing) {
        const next = current.filter(
          (article) => article.id !== articleId,
        );

        void persistSavedArticles(next);
        return;
      }

      /*
       * Not saved yet → retrieve the full article snapshot and
       * permanently store it.
       */
      void (async () => {
        const article = await findArticleForSaving(articleId);

        if (article === null) {
          return;
        }

        /*
         * Check again in case another async operation saved it
         * while we were loading the snapshot.
         */
        const latest = savedArticlesRef.current;

        if (
          latest.some(
            (savedArticle) => savedArticle.id === article.id,
          )
        ) {
          return;
        }

        await persistSavedArticles([
          ...latest,
          article,
        ]);
      })();
    },
    [persistSavedArticles],
  );

  const savedIds = useMemo(
    () => new Set(savedArticles.map((article) => article.id)),
    [savedArticles],
  );

  const value = useMemo(
    () => ({
      savedArticles,
      savedIds,
      isHydrated,
      isSaved,
      getSavedArticle,
      toggleSaved,
    }),
    [
      savedArticles,
      savedIds,
      isHydrated,
      isSaved,
      getSavedArticle,
      toggleSaved,
    ],
  );

  return (
    <SavedArticlesContext.Provider value={value}>
      {children}
    </SavedArticlesContext.Provider>
  );
}

export function useSavedArticles(): SavedArticlesContextValue {
  const value = useContext(SavedArticlesContext);

  if (value === null) {
    throw new Error(
      'useSavedArticles must be used inside SavedArticlesProvider',
    );
  }

  return value;
}