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
import { haptics } from '../utils/haptics';

const SAVED_ARTICLES_KEY = 'secubuzz-saved-articles';
const LEGACY_SAVED_ARTICLES_KEY = 'secubuzz:saved-articles';
const FEED_CACHE_KEY = 'cached-articles';

type SavedArticlesContextValue = {
  savedArticles: Article[];
  savedIds: ReadonlySet<string>;
  isHydrated: boolean;
  isSaved: (articleId: string) => boolean;
  getSavedArticle: (articleId: string) => Article | undefined;
  toggleSaved: (articleOrId: string | Article) => void;
};

const SavedArticlesContext =
  createContext<SavedArticlesContextValue | null>(null);

function normalizeCategory(value: unknown): Article['category'] {
  if (typeof value !== 'string') return 'GENERAL';
  const clean = value.trim().toUpperCase().replace(/[-\s]+/g, '_');
  if (
    clean === 'BREACH' ||
    clean === 'RANSOMWARE' ||
    clean === 'CVE' ||
    clean === 'VULNERABILITY' ||
    clean === 'NATION_STATE' ||
    clean === 'GENERAL'
  ) {
    return clean as Article['category'];
  }
  return 'GENERAL';
}

function normalizeSeverity(value: unknown): Article['severity'] {
  if (typeof value !== 'string') return 'MEDIUM';
  const clean = value.trim().toUpperCase();
  if (
    clean === 'CRITICAL' ||
    clean === 'HIGH' ||
    clean === 'MEDIUM' ||
    clean === 'LOW'
  ) {
    return clean as Article['severity'];
  }
  if (clean === 'IMPORTANT') return 'HIGH';
  if (clean === 'MODERATE') return 'MEDIUM';
  return 'MEDIUM';
}

/**
 * Resiliently converts stored JSON back into the Article shape.
 * Tolerates legacy field names (title vs headline, source vs sourceName,
 * dateAdded vs publishedAt, Title Case vs uppercase categories/severities).
 */
function parseArticle(value: unknown): Article | null {
  if (typeof value !== 'object' || value === null) {
    return null;
  }

  const record = value as Record<string, unknown>;

  const id =
    typeof record.id === 'string'
      ? record.id
      : typeof record.cveID === 'string'
      ? record.cveID
      : typeof record.url === 'string'
      ? record.url
      : null;

  const headline =
    typeof record.headline === 'string'
      ? record.headline
      : typeof record.title === 'string'
      ? record.title
      : typeof record.vulnerabilityName === 'string'
      ? record.vulnerabilityName
      : null;

  if (!id || !headline) {
    return null;
  }

  const rawSummary =
    typeof record.summary === 'string'
      ? record.summary
      : typeof record.shortDescription === 'string'
      ? record.shortDescription
      : typeof record.requiredAction === 'string'
      ? record.requiredAction
      : '';

  const cleanSummary = String(rawSummary)
    .replace(/^#+\s*.*$/gm, '')
    .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  const sourceName =
    typeof record.sourceName === 'string'
      ? record.sourceName
      : typeof record.source === 'string'
      ? record.source
      : 'SecuBuzz';

  const sourceUrl =
    typeof record.sourceUrl === 'string'
      ? record.sourceUrl
      : typeof record.url === 'string'
      ? record.url
      : '';

  const publishedAt =
    typeof record.publishedAt === 'string'
      ? record.publishedAt
      : typeof record.dateAdded === 'string'
      ? record.dateAdded
      : new Date().toISOString();

  return {
    id,
    headline,
    summary: cleanSummary || headline,
    sourceName,
    sourceUrl,
    category: normalizeCategory(record.category),
    publishedAt,
    severity: normalizeSeverity(record.severity),
    requiredAction:
      typeof record.requiredAction === 'string'
        ? record.requiredAction
        : undefined,
    dueDate: typeof record.dueDate === 'string' ? record.dueDate : undefined,
    patchedVersion:
      typeof record.patchedVersion === 'string'
        ? record.patchedVersion
        : undefined,
    vulnerableVersionRange:
      typeof record.vulnerableVersionRange === 'string'
        ? record.vulnerableVersionRange
        : undefined,
    vendorProject:
      typeof record.vendorProject === 'string'
        ? record.vendorProject
        : undefined,
    product: typeof record.product === 'string' ? record.product : undefined,
  };
}

function parseSavedData(raw: string | null): {
  articles: Article[];
  ids: string[];
} {
  if (raw === null) {
    return { articles: [], ids: [] };
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return { articles: [], ids: [] };
    }

    const articles: Article[] = [];
    const ids: string[] = [];

    for (const item of parsed) {
      if (typeof item === 'string') {
        ids.push(item);
      } else {
        const article = parseArticle(item);
        if (article !== null) {
          articles.push(article);
        }
      }
    }

    return { articles, ids };
  } catch {
    return { articles: [], ids: [] };
  }
}

async function findArticleForSaving(
  articleId: string,
): Promise<Article | null> {
  // 1. Try feed cache
  try {
    const cachedRaw = await AsyncStorage.getItem(FEED_CACHE_KEY);

    if (cachedRaw !== null) {
      const cached: unknown = JSON.parse(cachedRaw);

      if (
        typeof cached === 'object' &&
        cached !== null &&
        Array.isArray((cached as { articles?: unknown }).articles)
      ) {
        const articles = (cached as { articles: unknown[] }).articles;

        for (const item of articles) {
          const article = parseArticle(item);
          if (
            article?.id === articleId ||
            article?.sourceUrl === articleId
          ) {
            return article;
          }
        }
      }
    }
  } catch {
    // Continue to advisories check.
  }

  // 2. Check advisories caches (v3 and legacy v2)
  try {
    let rawAdvisories = await AsyncStorage.getItem('@secubuzz_advisories_v3');
    if (!rawAdvisories) {
      rawAdvisories = await AsyncStorage.getItem('@secubuzz_advisories_v2');
    }
    if (rawAdvisories !== null) {
      const advisories: unknown = JSON.parse(rawAdvisories);
      if (Array.isArray(advisories)) {
        const found = advisories.find(
          (item: any) =>
            item?.id === articleId ||
            item?.cveID === articleId ||
            item?.url === articleId,
        );
        if (found) {
          const rawDesc =
            found.shortDescription ||
            found.requiredAction ||
            'Known Exploited Threat Advisory';
          const cleanSummary = String(rawDesc)
            .replace(/^#+\s*.*$/gm, '')
            .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
            .replace(/\s+/g, ' ')
            .trim();

          const advisoryArticle: Article = {
            id: found.id || found.cveID,
            headline: `${found.cveID}: ${found.vulnerabilityName || found.product}`,
            summary: cleanSummary,
            sourceUrl:
              found.url ||
              `https://nvd.nist.gov/vuln/detail/${found.cveID}`,
            sourceName: found.source || 'CISA KEV',
            publishedAt: found.dateAdded || new Date().toISOString(),
            category: 'CVE',
            severity: normalizeSeverity(found.severity),
            requiredAction: found.requiredAction,
            dueDate: found.dueDate,
            patchedVersion: found.patchedVersion,
            vulnerableVersionRange: found.vulnerableVersionRange,
            vendorProject: found.vendorProject,
            product: found.product,
          };
          return advisoryArticle;
        }
      }
    }
  } catch {
    // Continue to repository fallback.
  }

  // 3. Fallback to repository
  try {
    const repository = getArticleRepository();
    const articles = await repository.getArticles();

    return (
      articles.find(
        (article) =>
          article.id === articleId || article.sourceUrl === articleId,
      ) ?? null
    );
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

  const savedArticlesRef = useRef<Article[]>([]);

  useEffect(() => {
    savedArticlesRef.current = savedArticles;
  }, [savedArticles]);

  /*
   * Hydrate saved article snapshots on mount with automatic legacy recovery.
   */
  useEffect(() => {
    let cancelled = false;

    async function hydrate() {
      try {
        const [rawPrimary, rawLegacy] = await Promise.all([
          AsyncStorage.getItem(SAVED_ARTICLES_KEY),
          AsyncStorage.getItem(LEGACY_SAVED_ARTICLES_KEY),
        ]);

        const primary = parseSavedData(rawPrimary);
        const legacy = parseSavedData(rawLegacy);

        // Merge without duplicates
        const merged: Article[] = [...primary.articles];
        for (const item of legacy.articles) {
          if (!merged.some((a) => a.id === item.id)) {
            merged.push(item);
          }
        }

        // Resolve any string IDs from legacy storage
        const pendingIds = [...primary.ids, ...legacy.ids].filter(
          (id) => !merged.some((a) => a.id === id),
        );

        for (const id of pendingIds) {
          try {
            const found = await findArticleForSaving(id);
            if (found && !merged.some((a) => a.id === found.id)) {
              merged.push(found);
            }
          } catch {
            // Ignore individual resolution failure
          }
        }

        if (cancelled) {
          return;
        }

        savedArticlesRef.current = merged;
        setSavedArticles(merged);

        // If legacy data was found or primary was migrated, persist clean state
        if (rawLegacy || (rawPrimary && primary.ids.length > 0)) {
          await AsyncStorage.setItem(
            SAVED_ARTICLES_KEY,
            JSON.stringify(merged),
          );
        }
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
        // Keep in-memory state if write fails
      }
    },
    [],
  );

  const isSaved = useCallback(
    (articleId: string) => {
      return savedArticles.some(
        (article) =>
          article.id === articleId ||
          (article.sourceUrl && article.sourceUrl === articleId),
      );
    },
    [savedArticles],
  );

  const getSavedArticle = useCallback(
    (articleId: string) => {
      return savedArticles.find(
        (article) =>
          article.id === articleId ||
          (article.sourceUrl && article.sourceUrl === articleId),
      );
    },
    [savedArticles],
  );

  const toggleSaved = useCallback(
    (articleOrId: string | Article) => {
      const current = savedArticlesRef.current;
      const targetId =
        typeof articleOrId === 'string' ? articleOrId : articleOrId.id;

      // 1. If already saved -> remove immediately
      const existing = current.some(
        (article) =>
          article.id === targetId ||
          (typeof articleOrId !== 'string' &&
            article.sourceUrl &&
            article.sourceUrl === articleOrId.sourceUrl),
      );

      if (existing) {
        void haptics.impactLight();
        const next = current.filter(
          (article) =>
            article.id !== targetId &&
            (typeof articleOrId === 'string' ||
              !article.sourceUrl ||
              article.sourceUrl !== articleOrId.sourceUrl),
        );

        void persistSavedArticles(next);
        return;
      }

      // 2. Not saved yet: if full Article object was passed, save immediately!
      if (typeof articleOrId !== 'string') {
        void haptics.notificationSuccess();
        const cleanArticle: Article = {
          ...articleOrId,
          category: normalizeCategory(articleOrId.category),
          severity: normalizeSeverity(articleOrId.severity),
        };
        void persistSavedArticles([...current, cleanArticle]);
        return;
      }

      // 3. If only ID was passed, find snapshot and save
      void (async () => {
        void haptics.notificationSuccess();
        const article = await findArticleForSaving(targetId);

        if (article === null) {
          return;
        }

        const latest = savedArticlesRef.current;
        if (latest.some((a) => a.id === article.id)) {
          return;
        }

        await persistSavedArticles([...latest, article]);
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
