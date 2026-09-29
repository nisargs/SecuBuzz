import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ErrorState,
  LoadingState,
} from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useTheme } from '../../context/ThemeContext';
import { useArticles } from '../../hooks/useArticles';
import type { Article } from '../../models/article';
import type { CveAdvisory } from '../../models/cve';
import { colors, severityColors, spacing } from '../../theme/theme';

const BLUE = colors.accent;
import { copyAdvisoryToClipboard, copyArticleToClipboard } from '../../utils/copyReport';
import { formatPublishedAt } from '../../utils/formatPublishedAt';
import { openArticle } from '../../utils/openArticle';
import { shareArticle } from '../../utils/shareArticle';

function formatCategory(
  category: Article['category'],
): string {
  if (category === 'CVE') {
    return 'CVE';
  }

  if (category === 'NATION_STATE') {
    return 'NATION STATE';
  }

  return category;
}

function formatAdvisoryDate(dateStr?: string): string {
  if (!dateStr) return 'RECENT';
  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function normalizeUrlForMatch(url?: string | null): string {
  if (!url) return '';
  let str = url.trim();
  try {
    str = decodeURIComponent(str);
  } catch {
    // Keep str if malformed percent encoding
  }
  return str
    .replace(/^https?:\/+/i, '')
    .replace(/\/+$/, '')
    .toLowerCase();
}

export default function ArticleDetailScreen() {
  const router = useRouter();
  const { colors, isDark, accentColor, severityColors } = useTheme();

  const params = useLocalSearchParams<{
    id?: string | string[];
    url?: string;
    headline?: string;
    summary?: string;
    category?: string;
    severity?: string;
    source?: string;
    publishedAt?: string;
  }>();

  // If url is passed in query params, it is intact and untouched by path segment parsing.
  let rawTarget = '';
  if (typeof params.url === 'string' && params.url.trim().length > 0) {
    rawTarget = params.url.trim();
  } else if (Array.isArray(params.id)) {
    rawTarget = params.id.join('/');
  } else if (typeof params.id === 'string') {
    rawTarget = params.id.trim();
  }

  let decodedId = rawTarget;
  try {
    decodedId = decodeURIComponent(rawTarget);
  } catch {
    // Keep rawTarget if malformed percent encoding
  }

  // Restore double slash in protocol if Expo router collapsed it during catch-all path segment join
  if (/^https?:\/+[^\/]/.test(decodedId)) {
    decodedId = decodedId.replace(/^(https?):\/+([^\/])/i, '$1://$2');
  }

  const normalizedTarget = normalizeUrlForMatch(decodedId);

  const { state, load } = useArticles();

  const {
    savedArticles,
    isHydrated,
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  const [isRefreshingFeed, setIsRefreshingFeed] = useState(false);
  const hasAttemptedReloadRef = useRef(false);

  useEffect(() => {
    if (state.status === 'loading') {
      void load();
    }
  }, [load, state.status]);

  const matchesTarget = (item: Article) => {
    if (item.id === decodedId || item.sourceUrl === decodedId) {
      return true;
    }
    if (normalizedTarget.length > 0) {
      const normId = normalizeUrlForMatch(item.id);
      const normSource = normalizeUrlForMatch(item.sourceUrl);
      if (normId === normalizedTarget || normSource === normalizedTarget) {
        return true;
      }
      const targetSlug = normalizedTarget.split('?')[0].replace(/\/+$/, '');
      const itemSlug = normSource.split('?')[0].replace(/\/+$/, '');
      if (
        targetSlug.length > 12 &&
        itemSlug.length > 12 &&
        (itemSlug.endsWith(targetSlug) || targetSlug.endsWith(itemSlug))
      ) {
        return true;
      }
    }
    if (params.headline && item.headline) {
      if (item.headline.trim().toLowerCase() === params.headline.trim().toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const liveArticle =
    state.status === 'ready'
      ? state.articles.find(matchesTarget)
      : undefined;

  /*
   * If the article has disappeared from feed.json,
   * use the permanent saved snapshot instead.
   */
  const savedArticle = savedArticles.find(matchesTarget);

  /*
   * Reconstruct article from notification payload if feed has rolled over.
   */
  const notificationFallbackArticle: Article | undefined =
    params.headline && (params.url || decodedId)
      ? {
          id: params.url || decodedId,
          sourceUrl: params.url || decodedId,
          headline: params.headline,
          summary: params.summary || '',
          category: (params.category as Article['category']) || 'GENERAL',
          severity: (params.severity as Article['severity']) || 'HIGH',
          sourceName: params.source || 'SecuBuzz Alert',
          publishedAt: params.publishedAt || new Date().toISOString(),
        }
      : undefined;

  const article = liveArticle ?? savedArticle ?? notificationFallbackArticle;

  // If opened from a push notification for a fresh story, ensure latest feed is loaded
  useEffect(() => {
    if (
      state.status === 'ready' &&
      !liveArticle &&
      !savedArticle &&
      !hasAttemptedReloadRef.current
    ) {
      hasAttemptedReloadRef.current = true;
      setIsRefreshingFeed(true);
      void load().finally(() => {
        setIsRefreshingFeed(false);
      });
    }
  }, [state.status, liveArticle, savedArticle, load]);

  if (!isHydrated) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
        edges={['top']}
      >
        <View style={styles.loading}>
          <ActivityIndicator
            size="small"
            color={accentColor}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (
    article === undefined &&
    (state.status === 'loading' || isRefreshingFeed)
  ) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
        edges={['top']}
      >
        <LoadingState />
      </SafeAreaView>
    );
  }

  if (
    article === undefined &&
    state.status === 'error'
  ) {
    return (
      <SafeAreaView
        style={[styles.safe, { backgroundColor: colors.background }]}
        edges={['top']}
      >
        <ErrorState
          message={state.message}
          onRetry={() => void load()}
        />
      </SafeAreaView>
    );
  }

  if (article === undefined) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
        <View style={styles.notFound}>
          <Text style={[styles.notFoundTitle, { color: colors.textPrimary }]}>
            Article unavailable
          </Text>

          <Text style={[styles.notFoundText, { color: colors.textSecondary }]}>
            This security brief is no longer available.
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Go back to feed"
            hitSlop={12}
            onPress={() => router.back()}
            style={[styles.backButton, { borderColor: accentColor }]}
          >
            <Text style={[styles.backButtonText, { color: accentColor }]}>
              GO BACK
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const saved = isSaved(article.id);
  const severityConfig = article.severity ? severityColors[article.severity] : null;

  const isAdvisory =
    article.sourceName === 'CISA KEV' ||
    article.sourceName === 'GITHUB' ||
    article.sourceName === 'NVD' ||
    article.id.startsWith('CVE-') ||
    article.id.startsWith('GHSA-');

  const [advisoryDetails, setAdvisoryDetails] = useState<CveAdvisory | null>(null);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (isAdvisory && advisoryDetails) {
      copyAdvisoryToClipboard(advisoryDetails);
    } else if (article) {
      copyArticleToClipboard(article);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  useEffect(() => {
    if (!isAdvisory) return;
    async function loadDetails() {
      try {
        let raw = await AsyncStorage.getItem('@secubuzz_advisories_v3');
        if (!raw) raw = await AsyncStorage.getItem('@secubuzz_advisories_v2');
        if (raw) {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) {
            const found = list.find(
              (item: any) =>
                item.id === article?.id ||
                item.cveID === article?.id ||
                (article?.sourceUrl && item.url === article.sourceUrl),
            );
            if (found) {
              setAdvisoryDetails(found);
            }
          }
        }
      } catch {
        // Fallback to article properties
      }
    }
    void loadDetails();
  }, [isAdvisory, article?.id, article?.sourceUrl]);

  const remediationDueDate = article.dueDate || advisoryDetails?.dueDate;
  const remediationFix = article.patchedVersion || advisoryDetails?.patchedVersion;
  const remediationAction = article.requiredAction || advisoryDetails?.requiredAction;
  const remediationRange = article.vulnerableVersionRange || advisoryDetails?.vulnerableVersionRange;
  const affectedVendor = article.vendorProject || advisoryDetails?.vendorProject;
  const affectedProduct = article.product || advisoryDetails?.product;

  const cleanSummary = (article.summary || '')
    .replace(/^#+\s*.*$/gm, '')
    .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      />

      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => router.back()}
          style={styles.headerButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          SecuBuzz
        </Text>

        <View style={styles.headerRight}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Copy markdown report for Slack or Teams"
            hitSlop={12}
            onPress={handleCopy}
            style={styles.headerButton}
          >
            <Ionicons
              name={copied ? 'checkmark-circle' : 'copy-outline'}
              size={21}
              color={copied ? accentColor : colors.textPrimary}
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Share article"
            hitSlop={12}
            onPress={() => {
              void shareArticle(article);
            }}
            style={styles.headerButton}
          >
            <Ionicons
              name="arrow-redo-outline"
              size={22}
              color={colors.textPrimary}
            />
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={
              saved
                ? 'Remove bookmark'
                : 'Save article'
            }
            hitSlop={12}
            onPress={() =>
              toggleSaved(article.id)
            }
            style={styles.headerButton}
          >
            <Ionicons
              name={
                saved
                  ? 'bookmark'
                  : 'bookmark-outline'
              }
              size={24}
              color={
                saved
                  ? accentColor
                  : colors.textPrimary
              }
            />
          </Pressable>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.content
        }
      >
        <View style={styles.categoryRow}>
          <Text style={[styles.category, { color: accentColor }]}>
            {formatCategory(article.category)}
          </Text>

          {article.severity && severityConfig ? (
            <View
              style={[
                styles.severityTag,
                {
                  backgroundColor: isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                },
                article.severity === 'CRITICAL' && {
                  backgroundColor: severityConfig.surface,
                  borderWidth: 1,
                  borderColor: severityConfig.border,
                },
              ]}
            >
              <View
                style={[
                  styles.severityDot,
                  {
                    backgroundColor: severityConfig.primary,
                  },
                ]}
              />
              <Text
                style={[
                  styles.severityLabel,
                  {
                    color: severityConfig.primary,
                  },
                ]}
              >
                {article.severity}
              </Text>
            </View>
          ) : null}
        </View>

        <Text style={[styles.meta, { color: colors.textMuted }]}>
          {formatPublishedAt(article)} ·{' '}
          {article.sourceName}
        </Text>

        <Text style={[styles.headline, { color: colors.textPrimary }]}>
          {article.headline}
        </Text>

        <View
          style={[
            styles.accent,
            {
              backgroundColor:
                article.severity === 'CRITICAL'
                  ? severityColors.CRITICAL.primary
                  : accentColor,
            },
          ]}
        />

        {/* Affected Component Banner (For Threat Advisories - Directly under Title) */}
        {isAdvisory && (affectedVendor || affectedProduct) ? (
          <View
            style={[
              styles.targetBanner,
              {
                backgroundColor: isDark
                  ? 'rgba(255, 255, 255, 0.04)'
                  : 'rgba(0, 0, 0, 0.03)',
                borderColor: colors.border,
              },
            ]}
          >
            <Ionicons
              name="cube-outline"
              size={14}
              color={accentColor}
              style={{ marginRight: 6 }}
            />
            <Text
              style={[styles.targetText, { color: colors.textSecondary }]}
              numberOfLines={2}
            >
              AFFECTED:{' '}
              {affectedVendor ? (
                <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_700Bold' }}>
                  {affectedVendor}
                </Text>
              ) : null}
              {affectedVendor && affectedProduct ? ' · ' : ''}
              {affectedProduct ? (
                <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_600SemiBold' }}>
                  {affectedProduct}
                </Text>
              ) : null}
            </Text>
          </View>
        ) : null}

        {!isAdvisory ? (
          <Text style={[styles.briefLabel, { color: colors.textPrimary }]}>
            60-WORD SECURITY BRIEF
          </Text>
        ) : null}

        <Text style={[styles.summary, { color: colors.textSecondary }]}>
          {cleanSummary}
        </Text>

        {/* Remediation & Guidance Card (For Threat Advisories) */}
        {isAdvisory && (remediationDueDate || remediationFix || remediationAction) ? (
          <View
            style={[
              styles.remediationCard,
              {
                backgroundColor: isDark
                  ? colors.surface
                  : colors.surfaceRaised,
                borderColor:
                  article.severity === 'CRITICAL'
                    ? `${severityColors.CRITICAL.primary}44`
                    : colors.border,
              },
            ]}
          >
            <View style={styles.remediationHeader}>
              <Ionicons
                name={remediationDueDate ? 'calendar-outline' : 'shield-checkmark-outline'}
                size={15}
                color={
                  remediationDueDate
                    ? severityColors.CRITICAL.primary
                    : accentColor
                }
                style={{ marginRight: 6 }}
              />
              <Text
                style={[
                  styles.remediationTitle,
                  {
                    color: remediationDueDate
                      ? severityColors.CRITICAL.primary
                      : accentColor,
                  },
                ]}
              >
                {remediationDueDate
                  ? `REMEDIATION DEADLINE: ${formatAdvisoryDate(remediationDueDate)}`
                  : remediationFix
                  ? `FIX AVAILABLE: ${remediationFix}`
                  : 'REMEDIATION GUIDANCE'}
              </Text>
            </View>

            {remediationAction ? (
              <Text
                style={[styles.remediationAction, { color: colors.textPrimary }]}
              >
                {remediationAction.replace(/\s*\(see URL in Notes\)/gi, '').trim()}
              </Text>
            ) : null}

            {remediationRange ? (
              <Text
                style={[styles.versionRange, { color: colors.textSecondary }]}
                numberOfLines={2}
              >
                Vulnerable versions: {remediationRange}
              </Text>
            ) : null}
          </View>
        ) : null}

        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isAdvisory ? 'Inspect original advisory' : 'Read original article'}
          onPress={() => {
            void openArticle(
              article.sourceUrl,
            );
          }}
          style={({ pressed }) => [
            styles.originalButton,
            pressed &&
              styles.originalButtonPressed,
          ]}
        >
          <View>
            <Text style={[styles.originalLabel, { color: accentColor }]}>
              {isAdvisory ? 'INSPECT ADVISORY' : 'READ ORIGINAL'}
            </Text>

            <Text style={[styles.originalSource, { color: colors.textMuted }]}>
              {article.sourceName}
            </Text>
          </View>

          <Ionicons
            name="open-outline"
            size={20}
            color={accentColor}
          />
        </Pressable>

        {article.additionalSources && article.additionalSources.length > 0 && (
          <View style={styles.additionalSourcesContainer}>
            <Text style={[styles.additionalSourcesLabel, { color: colors.textMuted }]}>
              ALSO REPORTED BY
            </Text>
            <View style={styles.additionalSourcesList}>
              {article.additionalSources.map((src, idx) => (
                <Pressable
                  key={idx}
                  accessibilityRole="link"
                  accessibilityLabel={`Read coverage on ${src.sourceName}`}
                  onPress={() => {
                    void openArticle(src.sourceUrl);
                  }}
                  style={({ pressed }) => [
                    styles.additionalSourceChip,
                    {
                      borderColor: colors.border,
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.04)'
                        : 'rgba(0, 0, 0, 0.03)',
                    },
                    pressed && { opacity: 0.7 },
                  ]}
                >
                  <Text style={[styles.additionalSourceText, { color: colors.textPrimary }]}>
                    {src.sourceName}
                  </Text>
                  <Ionicons
                    name="arrow-forward"
                    size={11}
                    color={accentColor}
                    style={{ marginLeft: 4 }}
                  />
                </Pressable>
              ))}
            </View>
          </View>
        )}

        <View style={styles.timeZoneNoteContainer}>

          <Ionicons
            name="time-outline"
            size={13}
            color={colors.textMuted}
          />
          <Text style={[styles.timeZoneNote, { color: colors.textMuted }]}>
            Publication times are automatically converted to your device's local time zone.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  headerButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 40,
  },

  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  category: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
  },

  severityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  severityTagCritical: {
    backgroundColor: severityColors.CRITICAL.surface,
    borderWidth: 1,
    borderColor: severityColors.CRITICAL.border,
  },

  severityDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  severityLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 9.5,
    letterSpacing: 1.1,
  },

  meta: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 7,
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    marginTop: 14,
  },

  accent: {
    width: 36,
    height: 2,
    backgroundColor: BLUE,
    marginTop: 14,
  },

  briefLabel: {
    color: colors.textPrimary,
    fontSize: 10.5,
    fontWeight: '700',
    letterSpacing: 1.6,
    marginTop: 20,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 23,
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 28,
  },

  originalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
  },

  originalButtonPressed: {
    opacity: 0.7,
  },

  originalLabel: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  originalSource: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 4,
  },

  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },

  notFoundTitle: {
    color: colors.textPrimary,
    fontSize: 22,
    fontWeight: '800',
  },

  notFoundText: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },

  backButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: BLUE,
  },

  backButtonText: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },

  timeZoneNoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    paddingHorizontal: 4,
  },

  timeZoneNote: {
    color: colors.textMuted,
    fontSize: 11,
    fontFamily: 'Exo_400Regular',
    flex: 1,
  },

  targetBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    marginBottom: 14,
  },

  targetText: {
    fontSize: 12.5,
    flex: 1,
    letterSpacing: 0.2,
    lineHeight: 18,
  },

  remediationCard: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 14,
    marginTop: 12,
    marginBottom: 4,
  },

  remediationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  remediationTitle: {
    fontSize: 11.5,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.6,
  },

  remediationAction: {
    fontSize: 13,
    lineHeight: 19,
    fontFamily: 'Exo_500Medium',
  },

  versionRange: {
    fontSize: 12,
    marginTop: 8,
    fontStyle: 'italic',
  },
  additionalSourcesContainer: {
    marginTop: 16,
    marginBottom: 6,
  },
  additionalSourcesLabel: {
    fontSize: 11,
    fontFamily: 'Exo_600SemiBold',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  additionalSourcesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  additionalSourceChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  additionalSourceText: {
    fontSize: 12,
    fontFamily: 'Exo_500Medium',
  },
});

