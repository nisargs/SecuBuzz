import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
import { exoFonts } from '../../theme/fonts';
import { colors, spacing } from '../../theme/theme';

const BLUE = '#4CC9F0';

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

function formatHeaderDateTime(
  date: Date,
): string {
  const datePart = date.toLocaleDateString(
    'en-GB',
    {
      day: 'numeric',
      month: 'short',
    },
  );

  const timePart = date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    .toLowerCase();

  return `${datePart}, ${timePart}`;
}

export default function FeedScreen() {
  const [fontsLoaded] = useFonts({
    Exo_400Regular: exoFonts.regular,
    Exo_500Medium: exoFonts.medium,
    Exo_600SemiBold: exoFonts.semiBold,
    Exo_700Bold: exoFonts.bold,
    Exo_800ExtraBold: exoFonts.extraBold,
  });

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

  const [now, setNow] =
    useState(() => new Date());

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState('');

  const listRef =
    useRef<FlatList<Article>>(null);

  /*
   * Load articles.
   */
  useEffect(() => {
    void load();
  }, [load]);

  /*
   * Update the header clock every second.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /*
   * Sort newest → oldest.
   */
  const articles = useMemo(() => {
    if (state.status !== 'ready') {
      return [];
    }

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

  /*
   * Category filtering.
   */
  const categoryArticles = useMemo(() => {
    if (filter === 'ALL') {
      return articles;
    }

    return articles.filter(
      (article) =>
        article.category === filter,
    );
  }, [articles, filter]);

  /*
   * Search filtering.
   *
   * Searches:
   * - headline
   * - summary
   * - source
   * - category
   */
  const filteredArticles = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    if (!query) {
      return categoryArticles;
    }

    return categoryArticles.filter(
      (article) => {
        const searchableText = [
          article.headline,
          article.summary,
          article.sourceName,
          article.category,
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(
          query,
        );
      },
    );
  }, [
    categoryArticles,
    searchQuery,
  ]);

  /*
   * Progressive loading.
   */
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

  /*
   * Reset feed position when the category
   * or search changes.
   */
  useEffect(() => {
    setCurrentIndex(0);
    setLoadedCount(INITIAL_ARTICLES);

    listRef.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  }, [
    filter,
    searchQuery,
  ]);

  /*
   * Pull to refresh.
   */
  const onRefresh = useCallback(
    async () => {
      setRefreshing(true);

      try {
        await load();

        setCurrentIndex(0);
        setLoadedCount(INITIAL_ARTICLES);

        listRef.current?.scrollToOffset({
          offset: 0,
          animated: false,
        });
      } finally {
        setRefreshing(false);
      }
    },
    [load],
  );

  /*
   * Article swipe finished.
   */
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

      /*
       * Load another batch before reaching
       * the end.
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

  /*
   * FlatList safety net.
   */
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

  /*
   * Toggle search mode.
   */
  const toggleSearch = () => {
    if (searchOpen) {
      setSearchQuery('');
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  };

  if (!fontsLoaded) {
    return (
      <View style={styles.fontLoading}>
        <ActivityIndicator
          size="small"
          color={BLUE}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>
              SecuBuzz
            </Text>

            <Text style={styles.date}>
              {formatHeaderDateTime(now)}
            </Text>
          </View>

          <Text style={styles.subtitle}>
            60-WORD SECURITY BRIEFS
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            searchOpen
              ? 'Close search'
              : 'Search articles'
          }
          hitSlop={10}
          onPress={toggleSearch}
          style={styles.searchButton}
        >
          <Ionicons
            name={
              searchOpen
                ? 'close-outline'
                : 'search-outline'
            }
            size={29}
            color={BLUE}
          />
        </Pressable>
      </View>

      {/* SEARCH */}
      {searchOpen ? (
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color={BLUE}
          />

          <TextInput
            autoFocus
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search cybersecurity news..."
            placeholderTextColor={
              colors.textMuted
            }
            style={styles.searchInput}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />

          {searchQuery.length > 0 ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              hitSlop={8}
              onPress={() =>
                setSearchQuery('')
              }
            >
              <Ionicons
                name="close-circle"
                size={20}
                color={BLUE}
              />
            </Pressable>
          ) : null}
        </View>
      ) : null}

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

      {/* PROGRESS */}
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

      {/* FEED */}
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
            message={
              searchQuery
                ? 'No stories match your search.'
                : 'No stories in this category right now.'
            }
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
                tintColor={BLUE}
                colors={[BLUE]}
                progressBackgroundColor={
                  colors.surface
                }
              />
            }
          />
        ) : null}
      </View>

      {/* REFRESH INDICATOR */}
      {refreshing ? (
        <View
          pointerEvents="none"
          style={styles.refreshIndicator}
        >
          <View
            style={styles.refreshCircle}
          >
            <ActivityIndicator
              size="small"
              color={BLUE}
            />
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fontLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      colors.background,
  },

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

  headerLeft: {
    flex: 1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },

  title: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },

  date: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginLeft: 8,
  },

  subtitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 2.4,
    marginTop: 8,
  },

  searchButton: {
    padding: 4,
    marginLeft: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginBottom: 5,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: BLUE,
    borderRadius: 22,
    backgroundColor:
      colors.surface,
  },

  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    marginLeft: 9,
    paddingVertical: 0,
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
    borderColor: BLUE,
    backgroundColor: '#4CC9F018',
  },

  chipText: {
    color: colors.textSecondary,
    fontFamily: 'Exo_500Medium',
    fontSize: 14,
  },

  chipTextSelected: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
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
    backgroundColor: BLUE,
  },

  feedContainer: {
    flex: 1,
  },

  refreshIndicator: {
    position: 'absolute',
    top: 96,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

  refreshCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      colors.surface,
    borderWidth: 1,
    borderColor: BLUE,
  },
});