import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArticleCard } from '../../components/ArticleCard';
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import {
  ARTICLE_CATEGORIES,
  type Article,
  type CategoryFilter,
} from '../../models/article';
import { colors, spacing } from '../../theme/theme';

const PROGRESS_SEGMENTS = 5;
const INITIAL_ARTICLES = 10;
const ARTICLES_PER_BATCH = 10;

function formatCategory(
  category: CategoryFilter,
): string {
  if (category === 'ALL') {
    return 'All';
  }

  if (category === 'CVE') {
    return 'CVE';
  }

  if (category === 'NATION_STATE') {
    return 'Nation State';
  }

  return (
    category.charAt(0) +
    category.slice(1).toLowerCase()
  );
}

export default function FeedScreen() {
  const { state, load } = useArticles();

  const {
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  const [filter, setFilter] =
    useState<CategoryFilter>('ALL');

  const [refreshing, setRefreshing] =
    useState(false);

  const [feedHeight, setFeedHeight] =
    useState(0);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [loadedCount, setLoadedCount] =
    useState(INITIAL_ARTICLES);

  const listRef =
    useRef<FlatList<Article>>(null);

  useEffect(() => {
    void load();
  }, [load]);

  const articles = useMemo(() => {
    if (state.status !== 'ready') {
      return [];
    }

    /**
     * Always sort newest → oldest on the device.
     */
    return [...state.articles].sort(
      (a, b) => {
        const aTime = Date.parse(
          a.publishedAt || '',
        );

        const bTime = Date.parse(
          b.publishedAt || '',
        );

        const safeA = Number.isNaN(aTime)
          ? 0
          : aTime;

        const safeB = Number.isNaN(bTime)
          ? 0
          : bTime;

        return safeB - safeA;
      },
    );
  }, [state]);

  const filteredArticles = useMemo(() => {
    if (filter === 'ALL') {
      return articles;
    }

    return articles.filter(
      (article) =>
        article.category === filter,
    );
  }, [articles, filter]);

  const visibleArticles = useMemo(
    () =>
      filteredArticles.slice(
        0,
        Math.min(
          loadedCount,
          filteredArticles.length,
        ),
      ),
    [filteredArticles, loadedCount],
  );

  useEffect(() => {
    setCurrentIndex(0);
    setLoadedCount(INITIAL_ARTICLES);

    listRef.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  }, [filter]);

  const onRefresh = useCallback(
    async () => {
      setRefreshing(true);

      await load();

      setCurrentIndex(0);
      setLoadedCount(INITIAL_ARTICLES);

      listRef.current?.scrollToOffset({
        offset: 0,
        animated: false,
      });

      setRefreshing(false);
    },
    [load],
  );

  const handleScrollEnd = useCallback(
    (
      event: NativeSyntheticEvent<NativeScrollEvent>,
    ) => {
      if (!feedHeight) {
        return;
      }

      const offset =
        event.nativeEvent.contentOffset.y;

      const index = Math.round(
        offset / feedHeight,
      );

      setCurrentIndex(index);

      /**
       * Start preparing older articles before
       * the reader reaches the end.
       */
      if (
        index >=
        visibleArticles.length - 3
      ) {
        setLoadedCount((current) =>
          Math.min(
            current + ARTICLES_PER_BATCH,
            filteredArticles.length,
          ),
        );
      }
    },
    [
      feedHeight,
      filteredArticles.length,
      visibleArticles.length,
    ],
  );

  const handleEndReached = useCallback(
    () => {
      setLoadedCount((current) =>
        Math.min(
          current + ARTICLES_PER_BATCH,
          filteredArticles.length,
        ),
      );
    },
    [filteredArticles.length],
  );

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              SecuBuzz
            </Text>

            <Text style={styles.date}>
              {new Date().toLocaleDateString(
                'en-GB',
                {
                  day: 'numeric',
                  month: 'short',
                },
              )}
            </Text>
          </View>

          <Text style={styles.subtitle}>
            60-WORD SECURITY BRIEFS
          </Text>
        </View>

        <View style={styles.headerIcons}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Search"
            hitSlop={8}
            style={styles.iconButton}
          >
            <Ionicons
              name="search-outline"
              size={28}
              color={colors.textPrimary}
            />
          </Pressable>
        </View>
      </View>

      {/* CATEGORY FILTERS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.chipsContent
        }
        style={styles.chipsScroll}
      >
        {[
          'ALL' as const,
          ...ARTICLE_CATEGORIES,
        ].map((category) => {
          const selected =
            filter === category;

          return (
            <Pressable
              key={category}
              onPress={() =>
                setFilter(category)
              }
              style={[
                styles.chip,
                selected &&
                  styles.chipSelected,
              ]}
            >
              <Text
                style={[
                  styles.chipText,
                  selected &&
                    styles.chipTextSelected,
                ]}
              >
                {formatCategory(category)}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* FIVE PROGRESS RECTANGLES */}
      <View style={styles.progressRow}>
        {Array.from({
          length: PROGRESS_SEGMENTS,
        }).map((_, index) => {
          const active =
            index ===
            currentIndex %
              PROGRESS_SEGMENTS;

          return (
            <View
              key={index}
              style={[
                styles.progressSegment,
                active &&
                  styles.progressSegmentActive,
              ]}
            />
          );
        })}
      </View>

      {/* CONTENT */}
      <View
        style={styles.feedContainer}
        onLayout={(event) => {
          setFeedHeight(
            event.nativeEvent.layout.height,
          );
        }}
      >
        {state.status === 'loading' &&
        !refreshing ? (
          <LoadingState />
        ) : null}

        {state.status === 'error' ? (
          <ErrorState
            message={state.message}
            onRetry={() => void load()}
          />
        ) : null}

        {state.status === 'ready' &&
        filteredArticles.length === 0 ? (
          <EmptyState
            message="No stories in this category right now."
          />
        ) : null}

        {state.status === 'ready' &&
        visibleArticles.length > 0 &&
        feedHeight > 0 ? (
          <FlatList
            ref={listRef}
            data={visibleArticles}
            keyExtractor={(item) => item.id}
            renderItem={({
              item,
            }: {
              item: Article;
            }) => (
              <View
                style={{
                  height: feedHeight,
                }}
              >
                <ArticleCard
                  article={item}
                  isSaved={isSaved(item.id)}
                  onToggleSaved={
                    toggleSaved
                  }
                />
              </View>
            )}
            pagingEnabled
            snapToInterval={feedHeight}
            snapToAlignment="start"
            decelerationRate="fast"
            disableIntervalMomentum
            showsVerticalScrollIndicator={false}
            onMomentumScrollEnd={
              handleScrollEnd
            }
            onEndReached={
              handleEndReached
            }
            onEndReachedThreshold={0.5}
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            windowSize={5}
            removeClippedSubviews
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  void onRefresh();
                }}
                tintColor={
                  colors.textPrimary
                }
                colors={[
                  colors.textPrimary,
                ]}
              />
            }
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor:
      colors.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  title: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },

  date: {
    color: colors.textSecondary,
    fontSize: 13,
    marginLeft: 8,
  },

  subtitle: {
    color: colors.textPrimary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginTop: 8,
  },

  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconButton: {
    padding: 4,
  },

  chipsScroll: {
    flexGrow: 0,
  },

  chipsContent: {
    paddingHorizontal: spacing.lg,
    paddingVertical: 7,
    gap: 10,
  },

  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 24,
    paddingHorizontal: 19,
    paddingVertical: 9,
  },

  chipSelected: {
    borderColor:
      colors.textPrimary,
    backgroundColor:
      colors.surface,
  },

  chipText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
  },

  chipTextSelected: {
    color: colors.textPrimary,
  },

  progressRow: {
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: spacing.lg,
    paddingTop: 3,
    paddingBottom: 8,
  },

  progressSegment: {
    flex: 1,
    height: 3,
    backgroundColor: colors.border,
  },

  progressSegmentActive: {
    backgroundColor: '#4CC9F0',
  },

  feedContainer: {
    flex: 1,
  },
});