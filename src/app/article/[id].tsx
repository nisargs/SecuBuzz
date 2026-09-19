import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
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
import { useArticles } from '../../hooks/useArticles';
import type { Article } from '../../models/article';
import { colors, spacing } from '../../theme/theme';
import { formatPublishedAt } from '../../utils/formatPublishedAt';
import { openArticle } from '../../utils/openArticle';

const BLUE = '#4CC9F0';

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

export default function ArticleDetailScreen() {
  const router = useRouter();

  const { id } =
    useLocalSearchParams<{
      id: string;
    }>();

  const { state, load } = useArticles();

  const {
    savedArticles,
    isHydrated,
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  useEffect(() => {
    if (state.status === 'loading') {
      void load();
    }
  }, [load, state.status]);

  const liveArticle =
    state.status === 'ready'
      ? state.articles.find(
          (article) => article.id === id,
        )
      : undefined;

  /*
   * IMPORTANT:
   *
   * If the article has disappeared from feed.json,
   * use the permanent saved snapshot instead.
   */
  const savedArticle = savedArticles.find(
    (article) => article.id === id,
  );

  const article = liveArticle ?? savedArticle;

  // If opened from a push notification for a fresh story, ensure latest feed is loaded
  useEffect(() => {
    if (state.status === 'ready' && !liveArticle && !savedArticle) {
      void load();
    }
  }, [state.status, liveArticle, savedArticle, load]);

  if (!isHydrated) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.loading}>
          <ActivityIndicator
            size="small"
            color={BLUE}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (
    article === undefined &&
    state.status === 'loading'
  ) {
    return (
      <SafeAreaView style={styles.safe}>
        <LoadingState />
      </SafeAreaView>
    );
  }

  if (
    article === undefined &&
    state.status === 'error'
  ) {
    return (
      <SafeAreaView style={styles.safe}>
        <ErrorState
          message={state.message}
          onRetry={() => void load()}
        />
      </SafeAreaView>
    );
  }

  if (article === undefined) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundTitle}>
            Article unavailable
          </Text>

          <Text style={styles.notFoundText}>
            This security brief is no longer available.
          </Text>

          <Pressable
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>
              GO BACK
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  const saved = isSaved(article.id);

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={10}
          onPress={() => router.back()}
          style={styles.headerButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          SecuBuzz
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            saved
              ? 'Remove bookmark'
              : 'Save article'
          }
          hitSlop={10}
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
                ? BLUE
                : colors.textPrimary
            }
          />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.content
        }
      >
        <Text style={styles.category}>
          {formatCategory(article.category)}
        </Text>

        <Text style={styles.meta}>
          {formatPublishedAt(article)} ·{' '}
          {article.sourceName}
        </Text>

        <Text style={styles.headline}>
          {article.headline}
        </Text>

        <View style={styles.accent} />

        <Text style={styles.briefLabel}>
          60-WORD SECURITY BRIEF
        </Text>

        <Text style={styles.summary}>
          {article.summary}
        </Text>

        <View style={styles.divider} />

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Read original article"
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
            <Text style={styles.originalLabel}>
              READ ORIGINAL
            </Text>

            <Text style={styles.originalSource}>
              {article.sourceName}
            </Text>
          </View>

          <Ionicons
            name="open-outline"
            size={20}
            color={BLUE}
          />
        </Pressable>

        <View style={styles.timeZoneNoteContainer}>
          <Ionicons
            name="time-outline"
            size={13}
            color={colors.textMuted}
          />
          <Text style={styles.timeZoneNote}>
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

  headerButton: {
    width: 36,
    height: 36,
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

  category: {
    color: BLUE,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
  },

  meta: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 7,
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 38,
    fontWeight: '800',
    marginTop: 18,
  },

  accent: {
    width: 42,
    height: 2,
    backgroundColor: BLUE,
    marginTop: 18,
  },

  briefLabel: {
    color: colors.textPrimary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.7,
    marginTop: 26,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 25,
    marginTop: 10,
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
});