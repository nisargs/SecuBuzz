import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArticleCard } from '../../components/ArticleCard';
import { CategoryFilterChips } from '../../components/CategoryFilterChips';
import { EmptyState, ErrorState, LoadingState } from '../../components/ScreenStates';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import type { Article, CategoryFilter } from '../../models/article';
import { colors, spacing } from '../../theme/theme';

export default function FeedScreen() {
  const { state, load } = useArticles();
  const { isSaved, toggleSaved } = useSavedArticles();
  const [filter, setFilter] = useState<CategoryFilter>('ALL');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    void load();
  }, [load]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  }, [load]);

  const articles = state.status === 'ready' ? state.articles : [];
  const visibleArticles = useMemo(() => {
    if (filter === 'ALL') {
      return articles;
    }
    return articles.filter((article) => article.category === filter);
  }, [articles, filter]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Secubuzz" subtitle="Cybersecurity news, in brief" />
      <CategoryFilterChips selected={filter} onSelect={setFilter} />

      {state.status === 'ready' && state.fromCache ? (
        <Text style={styles.cacheHint}>Showing saved articles — pull to refresh</Text>
      ) : null}

      {state.status === 'loading' && !refreshing ? <LoadingState /> : null}

      {state.status === 'error' ? (
        <ErrorState message={state.message} onRetry={() => void load()} />
      ) : null}

      {state.status === 'ready' && visibleArticles.length === 0 ? (
        <EmptyState message="No stories in this category right now. Try All or another filter." />
      ) : null}

      {state.status === 'ready' && visibleArticles.length > 0 ? (
        <FlatList
          data={visibleArticles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Article }) => (
            <ArticleCard article={item} isSaved={isSaved(item.id)} onToggleSaved={toggleSaved} />
          )}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                void onRefresh();
              }}
              tintColor={colors.textPrimary}
              colors={[colors.textPrimary]}
            />
          }
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
  cacheHint: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.sm,
    color: colors.textMuted,
    fontSize: 13,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  separator: {
    height: spacing.md,
  },
});
