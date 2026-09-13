import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import { colors, radii, spacing } from '../../theme/theme';
import { categoryLabel } from '../../utils/categoryLabel';
import { formatRelativeTime } from '../../utils/relativeTime';
import { openArticle } from '../../utils/openArticle';

const BLUE = '#4CC9F0';

export default function ArticleDetailScreen() {
  const router = useRouter();

  const params = useLocalSearchParams<{
    id: string;
  }>();

  const { state, load } = useArticles();

  const {
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  const articleId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  useEffect(() => {
    if (state.status === 'loading') {
      void load();
    }
  }, [load, state.status]);

  const article = useMemo(() => {
    if (state.status !== 'ready') {
      return null;
    }

    return (
      state.articles.find(
        (item) => item.id === articleId,
      ) ?? null
    );
  }, [state, articleId]);

  if (state.status === 'loading') {
    return (
      <SafeAreaView
        style={styles.safe}
        edges={['top', 'bottom']}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            style={styles.headerButton}
          >
            <Ionicons
              name="arrow-back"
              size={23}
              color={BLUE}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            SecuBuzz
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.center}>
          <Text style={styles.loadingText}>
            Loading story...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (state.status === 'error') {
    return (
      <SafeAreaView
        style={styles.safe}
        edges={['top', 'bottom']}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            style={styles.headerButton}
          >
            <Ionicons
              name="arrow-back"
              size={23}
              color={BLUE}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            SecuBuzz
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.center}>
          <Text style={styles.errorTitle}>
            Could not load story
          </Text>

          <Text style={styles.errorText}>
            {state.message}
          </Text>

          <Pressable
            onPress={() => {
              void load();
            }}
            style={({ pressed }) => [
              styles.retryButton,
              pressed && styles.retryButtonPressed,
            ]}
          >
            <Text style={styles.retryButtonText}>
              TRY AGAIN
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  if (!article) {
    return (
      <SafeAreaView
        style={styles.safe}
        edges={['top', 'bottom']}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={10}
            style={styles.headerButton}
          >
            <Ionicons
              name="arrow-back"
              size={23}
              color={BLUE}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            SecuBuzz
          </Text>

          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.center}>
          <Text style={styles.errorTitle}>
            Story unavailable
          </Text>

          <Text style={styles.errorText}>
            This story could not be found in the
            current feed.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const saved = isSaved(article.id);

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top', 'bottom']}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={10}
          style={styles.headerButton}
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color={BLUE}
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          SecuBuzz
        </Text>

        <Pressable
          onPress={() => toggleSaved(article.id)}
          hitSlop={10}
          style={styles.headerButton}
          accessibilityRole="button"
          accessibilityLabel={
            saved
              ? 'Remove bookmark'
              : 'Save story'
          }
        >
          <Ionicons
            name={
              saved
                ? 'bookmark'
                : 'bookmark-outline'
            }
            size={23}
            color={BLUE}
          />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.category}>
          <Text style={styles.categoryText}>
            {categoryLabel(article.category)}
          </Text>
        </View>

        <Text style={styles.headline}>
          {article.headline}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.source}>
            {article.sourceName}
          </Text>

          <Text style={styles.dot}>
            ·
          </Text>

          <Text style={styles.date}>
            {formatRelativeTime(
              article.publishedAt,
            )}
          </Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.briefLabel}>
          60-WORD SECURITY BRIEF
        </Text>

        <Text style={styles.summary}>
          {article.summary}
        </Text>

        <View style={styles.originalSection}>
          <Text style={styles.originalLabel}>
            ORIGINAL SOURCE
          </Text>

          <Text style={styles.originalSource}>
            {article.sourceName}
          </Text>

          <Text style={styles.originalDescription}>
            Read the complete article from the
            original publisher.
          </Text>

          <Pressable
            onPress={() => {
              void openArticle(article.sourceUrl);
            }}
            style={({ pressed }) => [
              styles.originalButton,
              pressed &&
                styles.originalButtonPressed,
            ]}
          >
            <Text style={styles.originalButtonText}>
              READ ORIGINAL
            </Text>

            <Ionicons
              name="open-outline"
              size={17}
              color={colors.background}
            />
          </Pressable>
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

  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  headerButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerSpacer: {
    width: 42,
    height: 42,
  },

  headerTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '800',
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 40,
  },

  category: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: BLUE,
    borderRadius: radii.pill,
    backgroundColor: `${BLUE}18`,
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginBottom: spacing.md,
  },

  categoryText: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 29,
    lineHeight: 36,
    fontWeight: '800',
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.md,
  },

  source: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },

  dot: {
    color: colors.textMuted,
    fontSize: 13,
  },

  date: {
    color: colors.textMuted,
    fontSize: 13,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.xl,
  },

  briefLabel: {
    color: BLUE,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: spacing.md,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 18,
    lineHeight: 28,
  },

  originalSection: {
    marginTop: spacing.xl,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.lg,
  },

  originalLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
    marginBottom: 7,
  },

  originalSource: {
    color: colors.textPrimary,
    fontSize: 19,
    fontWeight: '800',
  },

  originalDescription: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: spacing.md,
  },

  originalButton: {
    minHeight: 46,
    borderRadius: radii.md,
    backgroundColor: BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: spacing.md,
  },

  originalButtonPressed: {
    opacity: 0.75,
  },

  originalButtonText: {
    color: colors.background,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.7,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },

  loadingText: {
    color: colors.textMuted,
    fontSize: 15,
  },

  errorTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
    textAlign: 'center',
  },

  errorText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },

  retryButton: {
    minHeight: 44,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderRadius: radii.md,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
  },

  retryButtonPressed: {
    opacity: 0.75,
  },

  retryButtonText: {
    color: colors.background,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.7,
  },
});