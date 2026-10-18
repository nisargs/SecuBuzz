import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  AppState,
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ArticleCard } from '../../components/ArticleCard';
import { FeedbackCard, FEEDBACK_DISMISSED_KEY } from '../../components/FeedbackCard';
import {
  FilterModal,
  type SeverityFilter,
} from '../../components/FilterModal';
import { OnboardingModal, WALKTHROUGH_STORAGE_KEY } from '../../components/OnboardingModal';
import {
  EmptyState,
  ErrorState,
  LoadingState,
} from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import { useTheme } from '../../context/ThemeContext';
import {
  ARTICLE_CATEGORIES,
  type Article,
  type CategoryFilter,
} from '../../models/article';
import { colors, spacing } from '../../theme/theme';
import { haptics } from '../../utils/haptics';

const BLUE = colors.accent;

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

function formatHeaderDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });
}

export default function FeedScreen() {
  const { colors, isDark, accentColor } = useTheme();
  const { state, load } = useArticles();

  const {
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  const [filter, setFilter] =
    useState<CategoryFilter>('ALL');

  const [severityFilter, setSeverityFilter] =
    useState<SeverityFilter>('ALL');

  const [filterModalOpen, setFilterModalOpen] =
    useState(false);

  const [walkthroughOpen, setWalkthroughOpen] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      void AsyncStorage.getItem(WALKTHROUGH_STORAGE_KEY).then((seen) => {
        if (!seen) {
          setWalkthroughOpen(true);
        }
      });
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const isAnyFilterActive =
    filter !== 'ALL' || severityFilter !== 'ALL';

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

  const [feedbackDismissed, setFeedbackDismissed] =
    useState(true);

  useEffect(() => {
    void AsyncStorage.getItem(FEEDBACK_DISMISSED_KEY).then((val) => {
      if (val !== '1') {
        setFeedbackDismissed(false);
      }
    });
  }, []);

  const handleDismissFeedback = useCallback(async () => {
    setFeedbackDismissed(true);
    try {
      await AsyncStorage.setItem(FEEDBACK_DISMISSED_KEY, '1');
    } catch {
      // Ignore
    }
  }, []);

  type FeedItem =
    | { type: 'article'; data: Article; key: string }
    | { type: 'feedback'; key: string };

  const listRef =
    useRef<FlatList<FeedItem>>(null);

  /*
   * Load articles.
   */
  useEffect(() => {
    void load();
  }, [load]);

  /*
   * Auto-refresh feed silently when returning to foreground.
   */
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        void load();
      }
    });

    return () => {
      subscription.remove();
    };
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
   * Category and severity counts for filter badges.
   */
  const severityCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: articles.length,
      CRITICAL: 0,
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
    };
    articles.forEach((a) => {
      if (a.severity && counts[a.severity] !== undefined) {
        counts[a.severity]++;
      }
    });
    return counts;
  }, [articles]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: articles.length };
    ARTICLE_CATEGORIES.forEach((c) => {
      counts[c] = 0;
    });
    articles.forEach((a) => {
      if (counts[a.category] !== undefined) {
        counts[a.category]++;
      }
    });
    return counts;
  }, [articles]);

  /*
   * Multi-dimensional filtering:
   * Category + Threat Severity + Search query.
   */
  const filteredArticles = useMemo(() => {
    let result = articles;

    if (filter !== 'ALL') {
      result = result.filter(
        (article) => article.category === filter,
      );
    }

    if (severityFilter !== 'ALL') {
      result = result.filter(
        (article) => article.severity === severityFilter,
      );
    }

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return result;
    }

    return result.filter((article) => {
      const searchableText = [
        article.headline,
        article.summary,
        article.sourceName,
        article.category,
        article.severity || '',
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [
    articles,
    filter,
    severityFilter,
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
   * Inject interactive Feedback / Rating card at index 4 (5th card)
   * if user hasn't dismissed it yet and there are enough articles.
   */
  const feedItems = useMemo<FeedItem[]>(() => {
    const items: FeedItem[] = visibleArticles.map((a) => ({
      type: 'article',
      data: a,
      key: a.id,
    }));

    if (!feedbackDismissed && items.length >= 4) {
      items.splice(4, 0, {
        type: 'feedback',
        key: 'interstitial-feedback-card',
      });
    }

    return items;
  }, [visibleArticles, feedbackDismissed]);

  /*
   * Reset feed position when the category, severity,
   * or search changes.
   */
  useEffect(() => {
    setCurrentIndex(0);
    setShowBackToTop(false);
    setLoadedCount(INITIAL_ARTICLES);

    listRef.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  }, [
    filter,
    severityFilter,
    searchQuery,
  ]);

  /*
   * Smoothly scroll back to the very first top story.
   */
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);

  const scrollToTop = useCallback(() => {
    void haptics.impactLight();
    setShowBackToTop(false);
    listRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    setCurrentIndex(0);
  }, []);

  /*
   * Animated 'Back to Top' floating button.
   * Only visible when the user starts scrolling UP (returning towards the top).
   * Automatically hidden when scrolling down through the feed or when at the top.
   */
  const backToTopAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(backToTopAnim, {
      toValue: showBackToTop ? 1 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 50,
    }).start();
  }, [showBackToTop, backToTopAnim]);

  /*
   * Animated 'Feed is up to date' toast banner.
   */
  const bannerOpacity = useRef(new Animated.Value(0)).current;
  const bannerTranslateY = useRef(new Animated.Value(-10)).current;
  const [bannerVisible, setBannerVisible] = useState(false);
  const bannerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerUpToDateBanner = useCallback(() => {
    if (bannerTimerRef.current) {
      clearTimeout(bannerTimerRef.current);
    }
    setBannerVisible(true);
    bannerOpacity.setValue(0);
    bannerTranslateY.setValue(-10);

    Animated.parallel([
      Animated.timing(bannerOpacity, {
        toValue: 1,
        duration: 260,
        useNativeDriver: true,
      }),
      Animated.timing(bannerTranslateY, {
        toValue: 0,
        duration: 260,
        useNativeDriver: true,
      }),
    ]).start();

    bannerTimerRef.current = setTimeout(() => {
      Animated.parallel([
        Animated.timing(bannerOpacity, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(bannerTranslateY, {
          toValue: -8,
          duration: 700,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setBannerVisible(false);
      });
    }, 2200);
  }, [bannerOpacity, bannerTranslateY]);

  useEffect(() => {
    return () => {
      if (bannerTimerRef.current) {
        clearTimeout(bannerTimerRef.current);
      }
    };
  }, []);

  /*
   * Manual refresh trigger (button tap or pull-to-refresh).
   * Pulls latest news; if no new articles were found, shows 'Feed is up to date' banner.
   */
  const handleManualRefresh = useCallback(async () => {
    void haptics.impactLight();
    setRefreshing(true);
    try {
      const previousTopId = articles[0]?.id;
      const newArticles = await load();
      if (newArticles && newArticles.length > 0) {
        if (newArticles[0]?.id === previousTopId) {
          triggerUpToDateBanner();
        } else {
          void haptics.notificationSuccess();
        }
      } else if (newArticles) {
        triggerUpToDateBanner();
      }
    } finally {
      setRefreshing(false);
    }
  }, [articles, load, triggerUpToDateBanner]);

  /*
   * Directional scroll listener:
   * Only show 'Back to Top' when scrolling UP (returning towards the top).
   * Hide immediately when scrolling DOWN (advancing through the feed) or at the top.
   */
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentY = event.nativeEvent.contentOffset.y;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 20) {
        setShowBackToTop(false);
      } else if (diff < -15) {
        // Scrolling UP towards the top
        setShowBackToTop(true);
      } else if (diff > 15) {
        // Scrolling DOWN towards newer stories
        setShowBackToTop(false);
      }

      lastScrollY.current = currentY;
    },
    [],
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

      if (index === 0) {
        setShowBackToTop(false);
      }

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

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Scroll to top story"
          hitSlop={8}
          onPress={scrollToTop}
          style={styles.headerLeft}
        >
          <View style={styles.titleRow}>
            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Secu
              <Text style={[styles.titleAccent, { color: accentColor }]}>
                Buzz
              </Text>
            </Text>

            <Text style={[styles.date, { color: colors.textSecondary }]}>
              {formatHeaderDate(now)}
            </Text>
          </View>

          <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
            60-WORD SECURITY BRIEFS
          </Text>
        </Pressable>

        <View style={styles.headerActions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Filter feed by severity and category"
            hitSlop={10}
            onPress={() => setFilterModalOpen(true)}
            style={styles.headerButton}
          >
            <View style={{ position: 'relative' }}>
              <Ionicons
                name={isAnyFilterActive ? 'options' : 'options-outline'}
                size={26}
                color={isAnyFilterActive ? accentColor : colors.textSecondary}
              />
              {isAnyFilterActive && (
                <View
                  style={[
                    styles.filterActiveDot,
                    { backgroundColor: accentColor },
                  ]}
                />
              )}
            </View>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Refresh feed"
            hitSlop={10}
            onPress={handleManualRefresh}
            style={styles.headerButton}
          >
            <Ionicons
              name="refresh-outline"
              size={26}
              color={colors.textSecondary}
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              searchOpen
                ? 'Close search'
                : 'Search articles'
            }
            hitSlop={10}
            onPress={toggleSearch}
            style={styles.headerButton}
          >
            <Ionicons
              name={
                searchOpen
                  ? 'close-outline'
                  : 'search-outline'
              }
              size={28}
              color={searchOpen ? accentColor : colors.textSecondary}
            />
          </Pressable>
        </View>
      </View>

      {/* ACTIVE FILTER BANNER */}
      {isAnyFilterActive ? (
        <View
          style={[
            styles.activeFilterBanner,
            {
              backgroundColor: isDark
                ? 'rgba(76, 201, 240, 0.08)'
                : 'rgba(2, 132, 199, 0.06)',
              borderBottomColor: colors.border,
            },
          ]}
        >
          <View style={styles.activeFilterLeft}>
            <Text
              style={[
                styles.activeFilterText,
                { color: colors.textSecondary },
              ]}
              numberOfLines={1}
            >
              FILTER:{' '}
              <Text
                style={{
                  color: colors.textPrimary,
                  fontFamily: 'Exo_700Bold',
                }}
              >
                {severityFilter !== 'ALL' ? severityFilter : ''}
                {severityFilter !== 'ALL' && filter !== 'ALL' ? ' · ' : ''}
                {filter !== 'ALL' ? formatCategory(filter) : ''}
              </Text>
              {' '}({filteredArticles.length})
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Reset all filters"
            hitSlop={8}
            onPress={() => {
              setFilter('ALL');
              setSeverityFilter('ALL');
            }}
            style={styles.clearFilterButton}
          >
            <Ionicons name="close-circle" size={17} color={accentColor} />
            <Text style={[styles.clearFilterText, { color: accentColor }]}>
              Clear
            </Text>
          </Pressable>
        </View>
      ) : null}

      {/* SEARCH */}
      {searchOpen ? (
        <View
          style={[
            styles.searchContainer,
            {
              borderColor: accentColor,
              backgroundColor: colors.surface,
            },
          ]}
        >
          <Ionicons
            name="search-outline"
            size={20}
            color={accentColor}
          />

          <TextInput
            autoFocus
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search cybersecurity news..."
            placeholderTextColor={
              colors.textMuted
            }
            style={[
              styles.searchInput,
              { color: colors.textPrimary },
            ]}
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
                color={accentColor}
              />
            </Pressable>
          ) : null}
        </View>
      ) : null}



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
                { backgroundColor: colors.border },
                active && { backgroundColor: accentColor },
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
            data={feedItems}
            keyExtractor={(item) => item.key}
            renderItem={({
              item,
            }: {
              item: FeedItem;
            }) => (
              <View
                style={{
                  height: feedHeight,
                }}
              >
                {item.type === 'feedback' ? (
                  <FeedbackCard
                    onDismiss={handleDismissFeedback}
                    context="news"
                  />
                ) : (
                  <ArticleCard
                    article={item.data}
                    isSaved={isSaved(item.data.id)}
                    onToggleSaved={
                      toggleSaved
                    }
                    onSelectSeverity={(sev) => {
                      setSeverityFilter(sev);
                    }}
                    onSelectCategory={(cat) => {
                      setFilter(cat);
                    }}
                  />
                )}
              </View>
            )}
            pagingEnabled
            snapToInterval={feedHeight}
            snapToAlignment="start"
            decelerationRate="fast"
            disableIntervalMomentum
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
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
                onRefresh={handleManualRefresh}
                tintColor={accentColor}
                colors={[accentColor]}
                progressBackgroundColor={
                  colors.surface
                }
              />
            }
          />
        ) : null}

        {/* FLOATING BACK TO TOP BUTTON */}
        <Animated.View
          style={[
            styles.backToTopContainer,
            {
              opacity: backToTopAnim,
              transform: [
                {
                  scale: backToTopAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
                {
                  translateY: backToTopAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 0],
                  }),
                },
              ],
            },
          ]}
          pointerEvents={showBackToTop ? 'auto' : 'none'}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Back to top story"
            hitSlop={8}
            onPress={scrollToTop}
            style={({ pressed }) => [
              styles.backToTopButton,
              {
                backgroundColor: `${colors.background}E6`,
                borderColor: `${accentColor}99`,
                shadowColor: accentColor,
              },
              pressed && styles.backToTopButtonPressed,
            ]}
          >
            <Ionicons
              name="arrow-up"
              size={14}
              color={accentColor}
            />
            <Text style={[styles.backToTopText, { color: accentColor }]}>
              TOP
            </Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* REFRESH INDICATOR */}
      {refreshing ? (
        <View
          pointerEvents="none"
          style={styles.refreshIndicator}
        >
          <View
            style={[
              styles.refreshCircle,
              {
                backgroundColor: colors.surface,
                borderColor: accentColor,
              },
            ]}
          >
            <ActivityIndicator
              size="small"
              color={accentColor}
            />
          </View>
        </View>
      ) : null}

      {/* UP TO DATE TOAST BANNER */}
      {bannerVisible ? (
        <Animated.View
          pointerEvents="none"
          style={[
            styles.upToDateBanner,
            {
              backgroundColor: isDark ? '#111822EE' : '#FFFFFFFA',
              borderColor: isDark ? `${accentColor}44` : colors.border,
              opacity: bannerOpacity,
              transform: [{ translateY: bannerTranslateY }],
            },
          ]}
        >
          <Ionicons
            name="checkmark-circle"
            size={16}
            color={accentColor}
            style={styles.upToDateIcon}
          />
          <Text style={[styles.upToDateText, { color: colors.textPrimary }]}>
            Feed is up to date
          </Text>
        </Animated.View>
      ) : null}

      {/* FILTER SHEET MODAL */}
      <FilterModal
        visible={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        selectedCategory={filter}
        onSelectCategory={(cat) => {
          setFilter(cat);
        }}
        selectedSeverity={severityFilter}
        onSelectSeverity={(sev) => {
          setSeverityFilter(sev);
        }}
        onReset={() => {
          setFilter('ALL');
          setSeverityFilter('ALL');
        }}
        totalArticlesCount={articles.length}
        filteredCount={filteredArticles.length}
        severityCounts={severityCounts}
        categoryCounts={categoryCounts}
      />

      <OnboardingModal
        visible={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />
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
    marginRight: 6,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },

  titleAccent: {
    color: BLUE,
  },

  date: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
  },

  subtitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 4,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingTop: 3,
  },

  headerButton: {
    padding: 4,
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

  upToDateBanner: {
    position: 'absolute',
    top: 66,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111822EE',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4CC9F044',
    paddingHorizontal: 16,
    paddingVertical: 7,
    zIndex: 999,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },

  upToDateIcon: {
    marginRight: 7,
  },

  upToDateText: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 13,
    letterSpacing: 0.3,
  },

  backToTopContainer: {
    position: 'absolute',
    bottom: 54,
    alignSelf: 'center',
    zIndex: 20,
    elevation: 8,
  },

  backToTopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#0B0F14E6',
    borderWidth: 1.2,
    borderColor: '#4CC9F099',
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: '#4CC9F0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 6,
  },

  backToTopButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },

  backToTopText: {
    color: BLUE,
    fontFamily: 'Exo_700Bold',
    fontSize: 12,
    letterSpacing: 1.2,
  },

  filterActiveDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  activeFilterBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },

  activeFilterLeft: {
    flex: 1,
    marginRight: 8,
  },

  activeFilterText: {
    fontSize: 12,
    letterSpacing: 0.3,
  },

  clearFilterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },

  clearFilterText: {
    fontSize: 12,
    fontFamily: 'Exo_600SemiBold',
  },
});