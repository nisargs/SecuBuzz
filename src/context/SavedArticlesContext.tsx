import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';

type SavedArticlesContextValue = {
  savedIds: ReadonlySet<string>;
  isSaved: (articleId: string) => boolean;
  toggleSaved: (articleId: string) => void;
};

const SavedArticlesContext = createContext<SavedArticlesContextValue | null>(null);

/**
 * Remembers which stories the reader bookmarked.
 * This lives in memory for now (no login, no cloud sync).
 */
export function SavedArticlesProvider({ children }: { children: ReactNode }) {
  const [savedIds, setSavedIds] = useState<Set<string>>(() => new Set());

  const isSaved = useCallback((articleId: string) => savedIds.has(articleId), [savedIds]);

  const toggleSaved = useCallback((articleId: string) => {
    setSavedIds((current) => {
      const next = new Set(current);
      if (next.has(articleId)) {
        next.delete(articleId);
      } else {
        next.add(articleId);
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ savedIds, isSaved, toggleSaved }),
    [savedIds, isSaved, toggleSaved],
  );

  return <SavedArticlesContext.Provider value={value}>{children}</SavedArticlesContext.Provider>;
}

export function useSavedArticles(): SavedArticlesContextValue {
  const value = useContext(SavedArticlesContext);
  if (value === null) {
    throw new Error('useSavedArticles must be used inside SavedArticlesProvider');
  }
  return value;
}
