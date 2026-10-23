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

import { AdvisoryFilterModal } from '../../components/AdvisoryFilterModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CveCard } from '../../components/CveCard';
import { FeedbackCard, FEEDBACK_DISMISSED_KEY } from '../../components/FeedbackCard';
import {
  EmptyState,
  LoadingState,
} from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useTheme } from '../../context/ThemeContext';
import type {
  AdvisoryEpssFilter,
  AdvisorySeverityFilter,
  AdvisorySourceFilter,
  CveAdvisory,
} from '../../models/cve';
import { getCveAdvisories } from '../../services/cveService';
import { fetchEpssBatch, getEpssPercentile } from '../../services/epssService';
import { spacing } from '../../theme/theme';
import { haptics } from '../../utils/haptics';

const INITIAL_ADVISORIES = 10;
const ADVISORIES_PER_BATCH = 10;

function formatHeaderDate(date: Date): string {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
  });
}

export default function AdvisoriesScreen() {
  const { colors, isDark, accentColor, severityColors } = useTheme();
  const { isSaved, toggleSaved } = useSavedArticles();

  const [advisories, setAdvisories] = useState<CveAdvisory[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Filters
  const [sourceFilter, setSourceFilter] =
    useState<AdvisorySourceFilter>('ALL');
  const [severityFilter, setSeverityFilter] =
    useState<AdvisorySeverityFilter>('ALL');
  const [epssFilter, setEpssFilter] =
    useState<AdvisoryEpssFilter>('ALL');
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const isAnyFilterActive =
    sourceFilter !== 'ALL' ||
    severityFilter !== 'ALL' ||
    epssFilter !== 'ALL';

  // Search
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Paging & Viewport Layout
  const [feedHeight, setFeedHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const [loadedCount, setLoadedCount] = useState(INITIAL_ADVISORIES);
  const [now, setNow] = useState(() => new Date());

  const [feedbackDismissed, setFeedbackDismissed] = useState(true);

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

  type AdvisoryFeedItem =
    | { type: 'advisory'; data: CveAdvisory; key: string }
    | { type: 'feedback'; key: string };

  const listRef = useRef<FlatList<AdvisoryFeedItem>>(null);

  // Clock timer
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load Advisories
  const loadAdvisories = useCallback(async (): Promise<CveAdvisory[]> => {
    try {
      const data = await getCveAdvisories();
      setAdvisories(data);

      // Non-blocking background EPSS batch enrichment for top recent advisories
      if (data && data.length > 0) {
        const topCves = data.slice(0, 70).map((a) => a.cveID).filter(Boolean);
        void fetchEpssBatch(topCves).then((epssMap) => {
          if (epssMap && epssMap.size > 0) {
            setAdvisories((prev) =>
              prev.map((item) => {
                const score = epssMap.get(item.cveID.toUpperCase());
                if (score && item.epssPercentile === undefined) {
                  return {
                    ...item,
                    epssScore: score.epss,
                    epssPercentile: score.percentile,
                  };
                }
                return item;
              }),
            );
          }
        });
      }

      return data;
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadAdvisories();
  }, [loadAdvisories]);

  // Silently reload when returning to foreground
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        void loadAdvisories();
      }
    });
    return () => subscription.remove();
  }, [loadAdvisories]);

  // Back to Top button logic
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lastScrollY = useRef(0);
  const backToTopAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(backToTopAnim, {
      toValue: showBackToTop ? 1 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 50,
    }).start();
  }, [showBackToTop, backToTopAnim]);

  const scrollToTop = useCallback(() => {
    void haptics.impactLight();
    setShowBackToTop(false);
    listRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
    currentIndexRef.current = 0;
    setCurrentIndex(0);
  }, []);

  // Up to date toast banner
  const bannerOpacity = useRef(new Animated.Value(0)).current;
  const bannerTranslateY = useRef(new Animated.Value(-10)).current;
  const [bannerVisible, setBannerVisible] = useState(false);
  const bannerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerUpToDateBanner = useCallback(() => {
    if (bannerTimerRef.current) clearTimeout(bannerTimerRef.current);
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
      ]).start(() => setBannerVisible(false));
    }, 2200);
  }, [bannerOpacity, bannerTranslateY]);

  // Manual Refresh
  const handleManualRefresh = useCallback(async () => {
    void haptics.impactLight();
    setRefreshing(true);
    try {
      const prevTopId = advisories[0]?.id;
      const fresh = await loadAdvisories();
      if (fresh && fresh.length > 0) {
        if (fresh[0]?.id === prevTopId) {
          triggerUpToDateBanner();
        } else {
          void haptics.notificationSuccess();
        }
      } else {
        triggerUpToDateBanner();
      }
    } finally {
      setRefreshing(false);
    }
  }, [advisories, loadAdvisories, triggerUpToDateBanner]);

  // Counts for filters
  const severityCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: advisories.length,
      CRITICAL: 0,
      HIGH: 0,
      RANSOMWARE: 0,
    };
    advisories.forEach((item) => {
      if (item.knownRansomwareCampaignUse?.toLowerCase() === 'known') {
        counts.RANSOMWARE++;
      }
      if (item.severity === 'CRITICAL') counts.CRITICAL++;
      if (item.severity === 'HIGH') counts.HIGH++;
    });
    return counts;
  }, [advisories]);

  const sourceCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: advisories.length,
      CISA: 0,
      GITHUB: 0,
    };
    advisories.forEach((item) => {
      if (item.source === 'CISA KEV') counts.CISA++;
      if (item.source === 'GITHUB') counts.GITHUB++;
    });
    return counts;
  }, [advisories]);

  // EPSS likelihood counts
  const epssCounts = useMemo(() => {
    const counts: Record<string, number> = {
      ALL: advisories.length,
      CRITICAL_90: 0,
      HIGH_50: 0,
      LOW_50: 0,
    };
    advisories.forEach((item) => {
      const p = item.epssPercentile ?? getEpssPercentile(item.cveID);
      if (p !== undefined) {
        if (p >= 0.90) counts.CRITICAL_90++;
        if (p >= 0.50) counts.HIGH_50++;
        if (p < 0.50) counts.LOW_50++;
      }
    });
    return counts;
  }, [advisories]);

  // Filtered Advisories
  const filteredAdvisories = useMemo(() => {
    let result = advisories;

    // Filter by Source
    if (sourceFilter === 'CISA') {
      result = result.filter((item) => item.source === 'CISA KEV');
    } else if (sourceFilter === 'GITHUB') {
      result = result.filter((item) => item.source === 'GITHUB');
    }

    // Filter by Severity
    if (severityFilter === 'RANSOMWARE') {
      result = result.filter(
        (item) => item.knownRansomwareCampaignUse?.toLowerCase() === 'known',
      );
    } else if (severityFilter === 'CRITICAL') {
      result = result.filter((item) => item.severity === 'CRITICAL');
    } else if (severityFilter === 'HIGH') {
      result = result.filter((item) => item.severity === 'HIGH');
    }

    // Filter by EPSS Exploit Likelihood
    if (epssFilter === 'CRITICAL_90') {
      result = result.filter(
        (item) =>
          (item.epssPercentile ?? getEpssPercentile(item.cveID) ?? 0) >= 0.90,
      );
    } else if (epssFilter === 'HIGH_50') {
      result = result.filter(
        (item) =>
          (item.epssPercentile ?? getEpssPercentile(item.cveID) ?? 0) >= 0.50,
      );
    } else if (epssFilter === 'LOW_50') {
      result = result.filter((item) => {
        const p = item.epssPercentile ?? getEpssPercentile(item.cveID);
        return p !== undefined && p < 0.50;
      });
    }

    // Search query
    const query = searchQuery.trim().toLowerCase();
    if (!query) return result;

    return result.filter((item) => {
      const text = [
        item.cveID,
        item.vendorProject,
        item.product,
        item.vulnerabilityName,
        item.shortDescription,
        item.source,
      ]
        .join(' ')
        .toLowerCase();
      return text.includes(query);
    });
  }, [advisories, sourceFilter, severityFilter, epssFilter, searchQuery]);

  // Progressive batch loading
  const visibleAdvisories = useMemo(
    () =>
      filteredAdvisories.slice(
        0,
        Math.min(loadedCount, filteredAdvisories.length),
      ),
    [filteredAdvisories, loadedCount],
  );

  /*
   * Inject interactive Feedback / Rating card at index 4 (5th card)
   * if user hasn't dismissed it yet and there are enough advisories.
   */
  const feedItems = useMemo<AdvisoryFeedItem[]>(() => {
    const items: AdvisoryFeedItem[] = visibleAdvisories.map((a) => ({
      type: 'advisory',
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
  }, [visibleAdvisories, feedbackDismissed]);

  /*
   * Today's Fresh Zero-Day Horizon (24-Hour Horizon):
   * Option C: Strictly calculates zero-days / advisories added in the last 24 hours.
   * If CISA/GitHub added 0 CVEs in the last 24 hours, the app indicates "0 NEW TODAY"
   * and immediately considers the daily horizon complete (100%).
   */
  const todayTargetCount = useMemo(() => {
    if (filteredAdvisories.length === 0) return 0;
    const nowMs = Date.now();
    return filteredAdvisories.filter((a) => {
      const t = Date.parse(a.dateAdded || '');
      return !Number.isNaN(t) && nowMs - t <= 24 * 60 * 60 * 1000;
    }).length;
  }, [filteredAdvisories]);

  /*
   * Exclude interstitial feedback/rating card at position #5 from advisory counts.
   * Index 0..3: Advisories 1..4
   * Index 4: Feedback Card (displays "FEEDBACK", freezes count at 4)
   * Index 5+: Advisories 5+ (displayAdvisoryNum = index)
   */
  const isViewingFeedback = !feedbackDismissed && feedItems[currentIndex]?.type === 'feedback';
  const hasFeedbackBefore = !feedbackDismissed && feedItems.length > 4 && currentIndex >= 4;
  const displayAdvisoryIndex = hasFeedbackBefore
    ? (isViewingFeedback ? 3 : currentIndex - 1)
    : currentIndex;
  const displayAdvisoryNum = Math.min(filteredAdvisories.length, displayAdvisoryIndex + 1);

  // When 0 zero-days today, any scrolling past the first item is archive browsing
  const isArchiveMode = todayTargetCount === 0
    ? displayAdvisoryIndex > 0
    : displayAdvisoryNum > todayTargetCount;

  /*
   * Reading progress calibrated to 24-Hour Zero-Day Horizon:
   * If 0 added today: 100% (All clear!).
   * If >0 added today: advances from 0% -> 100% as user triages today's zero-days.
   */
  const readProgressPct = useMemo(() => {
    if (filteredAdvisories.length === 0) return 0;
    if (todayTargetCount === 0 || displayAdvisoryNum >= todayTargetCount) return 100;
    return Math.min(
      100,
      Math.max(
        1,
        Number(((displayAdvisoryNum / todayTargetCount) * 100).toFixed(1)),
      ),
    );
  }, [displayAdvisoryNum, filteredAdvisories.length, todayTargetCount]);

  // Reset paging when filters change
  useEffect(() => {
    currentIndexRef.current = 0;
    setCurrentIndex(0);
    setShowBackToTop(false);
    setLoadedCount(INITIAL_ADVISORIES);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, [sourceFilter, severityFilter, searchQuery]);

  // Directional scroll listener with real-time index tracking
  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentY = event.nativeEvent.contentOffset.y;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 20) {
        setShowBackToTop(false);
      } else if (diff < -15) {
        setShowBackToTop(true);
      } else if (diff > 15) {
        setShowBackToTop(false);
      }

      if (feedHeight > 0 && feedItems.length > 0) {
        const nextIndex = Math.min(
          feedItems.length - 1,
          Math.max(0, Math.round(currentY / feedHeight)),
        );
        if (nextIndex !== currentIndexRef.current) {
          currentIndexRef.current = nextIndex;
          setCurrentIndex(nextIndex);
        }

        if (nextIndex >= visibleAdvisories.length - 3) {
          setLoadedCount((cur) =>
            Math.min(cur + ADVISORIES_PER_BATCH, filteredAdvisories.length),
          );
        }
      }

      lastScrollY.current = currentY;
    },
    [feedHeight, feedItems.length, filteredAdvisories.length, visibleAdvisories.length],
  );

  // Swipe snapping handler (onMomentumScrollEnd / onScrollEndDrag)
  const handleScrollEnd = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (!feedHeight) return;

      const offset = event.nativeEvent.contentOffset.y;
      const index = Math.min(
        feedItems.length - 1,
        Math.max(0, Math.round(offset / feedHeight)),
      );
      currentIndexRef.current = index;
      setCurrentIndex(index);

      if (index === 0) setShowBackToTop(false);

      if (index >= visibleAdvisories.length - 3) {
        setLoadedCount((cur) =>
          Math.min(cur + ADVISORIES_PER_BATCH, filteredAdvisories.length),
        );
      }
    },
    [feedHeight, feedItems.length, filteredAdvisories.length, visibleAdvisories.length],
  );

  const handleEndReached = useCallback(() => {
    setLoadedCount((cur) =>
      Math.min(cur + ADVISORIES_PER_BATCH, filteredAdvisories.length),
    );
  }, [filteredAdvisories.length]);

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
          accessibilityLabel="Scroll to top advisory"
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

            <Text
              style={[styles.date, { color: colors.textSecondary }]}
              numberOfLines={1}
            >
              {formatHeaderDate(now)}
            </Text>
          </View>

          <View style={styles.subtitleRow}>
            <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
              EXPLOITED ZERO-DAYS & THREATS
            </Text>
            {advisories.length > 0 ? (
              <View
                style={[
                  styles.telemetryBadge,
                  {
                    backgroundColor: isViewingFeedback
                      ? (isDark ? 'rgba(245, 158, 11, 0.12)' : 'rgba(245, 158, 11, 0.08)')
                      : todayTargetCount === 0 && displayAdvisoryIndex === 0
                      ? (isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(16, 185, 129, 0.08)')
                      : isArchiveMode
                      ? (isDark ? 'rgba(148, 163, 184, 0.12)' : 'rgba(100, 116, 139, 0.08)')
                      : `${severityColors.CRITICAL.primary}18`,
                    borderColor: isViewingFeedback
                      ? (isDark ? 'rgba(245, 158, 11, 0.30)' : 'rgba(245, 158, 11, 0.25)')
                      : todayTargetCount === 0 && displayAdvisoryIndex === 0
                      ? (isDark ? 'rgba(16, 185, 129, 0.30)' : 'rgba(16, 185, 129, 0.25)')
                      : isArchiveMode
                      ? (isDark ? 'rgba(148, 163, 184, 0.25)' : 'rgba(100, 116, 139, 0.20)')
                      : `${severityColors.CRITICAL.primary}35`,
                  },
                ]}
              >
                <View
                  style={[
                    styles.telemetryDot,
                    {
                      backgroundColor: isViewingFeedback
                        ? '#F59E0B'
                        : todayTargetCount === 0 && displayAdvisoryIndex === 0
                        ? '#10B981'
                        : isArchiveMode
                        ? colors.textSecondary
                        : severityColors.CRITICAL.primary,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.telemetryBadgeText,
                    {
                      color: isViewingFeedback
                        ? '#F59E0B'
                        : todayTargetCount === 0 && displayAdvisoryIndex === 0
                        ? '#10B981'
                        : isArchiveMode
                        ? colors.textSecondary
                        : severityColors.CRITICAL.primary,
                    },
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {isViewingFeedback
                    ? 'FEEDBACK'
                    : todayTargetCount === 0
                    ? displayAdvisoryIndex === 0
                      ? '0 NEW TODAY'
                      : `ARCHIVE: ${displayAdvisoryNum} OF ${filteredAdvisories.length.toLocaleString()}`
                    : displayAdvisoryNum === todayTargetCount
                    ? `CAUGHT UP (${todayTargetCount}/${todayTargetCount})`
                    : isArchiveMode
                    ? `ARCHIVE: ${displayAdvisoryNum} OF ${filteredAdvisories.length.toLocaleString()}`
                    : `TODAY: ${displayAdvisoryNum} OF ${todayTargetCount}`}
                </Text>
              </View>
            ) : null}
          </View>
        </Pressable>

        <View style={styles.headerActions}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Filter advisories"
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
            accessibilityLabel="Refresh advisories"
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
            accessibilityLabel={searchOpen ? 'Close search' : 'Search advisories'}
            hitSlop={10}
            onPress={toggleSearch}
            style={styles.headerButton}
          >
            <Ionicons
              name={searchOpen ? 'close-outline' : 'search-outline'}
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
                {severityFilter !== 'ALL' && (sourceFilter !== 'ALL' || epssFilter !== 'ALL') ? ' · ' : ''}
                {sourceFilter === 'CISA'
                  ? 'CISA KEV'
                  : sourceFilter === 'GITHUB'
                  ? 'GitHub Ecosystem'
                  : ''}
                {sourceFilter !== 'ALL' && epssFilter !== 'ALL' ? ' · ' : ''}
                {epssFilter === 'CRITICAL_90'
                  ? 'EPSS >90%'
                  : epssFilter === 'HIGH_50'
                  ? 'EPSS >50%'
                  : epssFilter === 'LOW_50'
                  ? 'EPSS <50%'
                  : ''}
              </Text>
              {' '}({filteredAdvisories.length})
            </Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Reset all filters"
            hitSlop={8}
            onPress={() => {
              setSourceFilter('ALL');
              setSeverityFilter('ALL');
              setEpssFilter('ALL');
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

      {/* SEARCH INPUT BAR */}
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
            placeholder="Search CVE, vendor, or product..."
            placeholderTextColor={colors.textMuted}
            style={[styles.searchInput, { color: colors.textPrimary }]}
            returnKeyType="search"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              hitSlop={8}
              onPress={() => setSearchQuery('')}
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

      {/* READING PROGRESS */}
      <View
        style={[
          styles.progressTrack,
          {
            backgroundColor: isDark
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(0, 0, 0, 0.06)',
          },
        ]}
      >
        <View
          style={[
            styles.progressBar,
            {
              width: `${readProgressPct}%`,
              backgroundColor: accentColor,
            },
          ]}
        />
      </View>

      {/* FEED VIEWPORT */}
      <View
        style={styles.feedContainer}
        onLayout={(event) => {
          setFeedHeight(event.nativeEvent.layout.height);
        }}
      >
        {loading && !refreshing ? <LoadingState /> : null}

        {!loading && filteredAdvisories.length === 0 ? (
          <EmptyState
            message={
              searchQuery
                ? 'No advisories match your search query.'
                : 'No advisories match the selected filters.'
            }
          />
        ) : null}

        {!loading &&
        visibleAdvisories.length > 0 &&
        feedHeight > 0 ? (
          <FlatList
            ref={listRef}
            data={feedItems}
            keyExtractor={(item) => item.key}
            renderItem={({ item }: { item: AdvisoryFeedItem }) => (
              <View style={{ height: feedHeight }}>
                {item.type === 'feedback' ? (
                  <FeedbackCard
                    onDismiss={handleDismissFeedback}
                    context="advisories"
                  />
                ) : (
                  <CveCard
                    advisory={item.data}
                    isSaved={isSaved(item.data.id)}
                    onToggleSaved={toggleSaved}
                    onSelectSeverity={(sev) => setSeverityFilter(sev)}
                    onSelectSource={(src) =>
                      setSourceFilter(src === 'CISA KEV' ? 'CISA' : 'GITHUB')
                    }
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
            onMomentumScrollEnd={handleScrollEnd}
            onScrollEndDrag={handleScrollEnd}
            onEndReached={handleEndReached}
            onEndReachedThreshold={0.5}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleManualRefresh}
                tintColor={accentColor}
                colors={[accentColor]}
                progressBackgroundColor={
                  isDark ? colors.surface : colors.background
                }
              />
            }
          />
        ) : null}
      </View>

      {/* BACK TO TOP FLOATING BUTTON */}
      <Animated.View
        pointerEvents={showBackToTop ? 'auto' : 'none'}
        style={[
          styles.backToTopButton,
          {
            backgroundColor: `${colors.background}F0`,
            borderColor: accentColor,
            opacity: backToTopAnim,
            transform: [
              {
                translateY: backToTopAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [24, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back to top advisory"
          onPress={scrollToTop}
          style={styles.backToTopPressable}
        >
          <Ionicons name="chevron-up" size={16} color={accentColor} />
          <Text style={[styles.backToTopText, { color: accentColor }]}>
            TOP ADVISORY
          </Text>
        </Pressable>
      </Animated.View>

      {/* UP TO DATE TOAST */}
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
            style={{ marginRight: 8 }}
          />
          <Text
            style={[styles.upToDateText, { color: colors.textPrimary }]}
          >
            Advisories are up to date
          </Text>
        </Animated.View>
      ) : null}

      {/* FILTER MODAL */}
      <AdvisoryFilterModal
        visible={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        selectedSource={sourceFilter}
        onSelectSource={setSourceFilter}
        selectedSeverity={severityFilter}
        onSelectSeverity={setSeverityFilter}
        selectedEpss={epssFilter}
        onSelectEpss={setEpssFilter}
        onReset={() => {
          setSourceFilter('ALL');
          setSeverityFilter('ALL');
          setEpssFilter('ALL');
        }}
        totalCount={advisories.length}
        filteredCount={filteredAdvisories.length}
        severityCounts={severityCounts}
        sourceCounts={sourceCounts}
        epssCounts={epssCounts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
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
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 26,
    lineHeight: 32,
    letterSpacing: -0.4,
  },
  titleAccent: {
    fontFamily: 'Exo_800ExtraBold',
  },
  date: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    flexShrink: 1,
  },
  subtitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10,
    letterSpacing: 1.1,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 3,
  },
  telemetryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 4,
    borderWidth: 1,
  },
  telemetryDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  telemetryBadgeText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 9,
    letterSpacing: 0.6,
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

  filterActiveDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeFilterBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: 7,
    borderBottomWidth: 1,
  },
  activeFilterLeft: {
    flex: 1,
    marginRight: 8,
  },
  activeFilterText: {
    fontSize: 11,
    letterSpacing: 0.5,
  },
  clearFilterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  clearFilterText: {
    fontSize: 11,
    fontFamily: 'Exo_700Bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xs,
    paddingHorizontal: spacing.md,
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Exo_500Medium',
  },
  progressTrack: {
    height: 2.5,
    width: '100%',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 1.5,
  },
  feedContainer: {
    flex: 1,
  },
  backToTopButton: {
    position: 'absolute',
    bottom: 24,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
    zIndex: 99,
  },
  backToTopPressable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    gap: 6,
  },
  backToTopText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 11,
    letterSpacing: 1.1,
  },
  upToDateBanner: {
    position: 'absolute',
    top: 76,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 100,
  },
  upToDateText: {
    fontSize: 12,
    fontFamily: 'Exo_600SemiBold',
    letterSpacing: 0.3,
  },
});
