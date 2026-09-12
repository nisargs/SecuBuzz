import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

const SAVED_ARTICLES_KEY = 'secubuzz:saved-articles';

type SavedArticlesContextValue = {
  savedIds: ReadonlySet<string>;
  isSaved: (articleId: string) => boolean;
  toggleSaved: (articleId: string) => void;
};

const SavedArticlesContext =
  createContext<SavedArticlesContextValue | null>(null);

export function SavedArticlesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function loadSavedArticles() {
      try {
        const stored = await AsyncStorage.getItem(SAVED_ARTICLES_KEY);

        if (!stored) return;

        const ids = JSON.parse(stored);

        if (Array.isArray(ids)) {
          setSavedIds(new Set(ids));
        }
      } catch {
        // Ignore corrupt/missing storage and start empty.
      }
    }

    void loadSavedArticles();
  }, []);

  const isSaved = useCallback(
    (articleId: string) => savedIds.has(articleId),
    [savedIds],
  );

  const toggleSaved = useCallback((articleId: string) => {
    setSavedIds((current) => {
      const next = new Set(current);

      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }

      void AsyncStorage.setItem(
        SAVED_ARTICLES_KEY,
        JSON.stringify(Array.from(next)),
      );

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      savedIds,
      isSaved,
      toggleSaved,
    }),
    [savedIds, isSaved, toggleSaved],
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