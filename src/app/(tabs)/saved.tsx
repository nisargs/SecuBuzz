import { Ionicons } from '@expo/vector-icons';
import { useEffect, useMemo } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState, ErrorState, LoadingState } from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import type { Article } from '../../models/article';
import { colors, spacing } from '../../theme/theme';

function formatCategory(category: Article['category']): string {
  if (category === 'NATION_STATE') {
    return 'NATION-STATE';
  }

  return category.replace(/_/g, ' ');
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
  }).format(date);
}

export default function SavedScreen() {
  const { state, load } = useArticles();
  const {
    savedIds,
    isSaved,
    toggleSaved,
  } = useSavedArticles();

  useEffect(() => {
    void load();
  }, [load]);

  const savedArticles = useMemo(() => {
    if (state.status !== 'ready') {
      return [];
    }

    return state.articles.filter((article) =>
      savedIds.has(article.id),
    );
  }, [savedIds, state]);

  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Saved
        </Text>

        <Text style={styles.subtitle}>
          {savedArticles.length} briefs kept for later
        </Text>
      </View>

      {state.status === 'loading' ? (
        <LoadingState />
      ) : null}

      {state.status === 'error' ? (
        <ErrorState
          message={state.message}
          onRetry={() => void load()}
        />
      ) : null}

      {state.status === 'ready' &&
      savedArticles.length === 0 ? (
        <EmptyState
          message="Tap the bookmark on a brief and it will appear here."
        />
      ) : null}

      {state.status === 'ready' &&
      savedArticles.length > 0 ? (
        <FlatList
          data={savedArticles}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <View style={styles.rowContent}>
                <Text style={styles.category}>
                  {formatCategory(item.category)}
                </Text>

                <Text
                  numberOfLines={2}
                  style={styles.headline}
                >
                  {item.headline}
                </Text>

                <Text style={styles.meta}>
                  {item.sourceName}
                  {' · '}
                  {formatDate(item.publishedAt)}
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Remove ${item.headline} from saved`}
                onPress={() =>
                  toggleSaved(item.id)
                }
                style={styles.removeButton}
              >
                <Ionicons
                  name="close"
                  size={18}
                  color={colors.textMuted}
                />
              </Pressable>
            </View>
          )}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: 5,
    paddingBottom: 14,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
  },

  subtitle: {
    marginTop: 5,
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },

  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  separator: {
    height: 1,
    backgroundColor: colors.border,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 15,
  },

  rowContent: {
    flex: 1,
    paddingRight: 12,
  },

  category: {
    color: '#4CC9F0',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1.5,
  },

  headline: {
    marginTop: 6,
    color: colors.textPrimary,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '700',
  },

  meta: {
    marginTop: 6,
    color: colors.textMuted,
    fontSize: 10.5,
  },

  removeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});