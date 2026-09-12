import { useEffect, useMemo } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArticleCard } from '../../components/ArticleCard';
import { EmptyState, ErrorState, LoadingState } from '../../components/ScreenStates';
import { ScreenHeader } from '../../components/ScreenHeader';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useArticles } from '../../hooks/useArticles';
import type { Article } from '../../models/article';
import { colors, spacing } from '../../theme/theme';

export default function SavedScreen() {
  const { state, load } = useArticles();
  const { savedIds, isSaved, toggleSaved } = useSavedArticles();

  useEffect(() => {
    void load();
  }, [load]);

  const savedArticles = useMemo(() => {
    if (state.status !== 'ready') {
      return [];
    }
    return state.articles.filter((article) => savedIds.has(article.id));
  }, [savedIds, state]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Saved" subtitle="Stories you bookmarked on this device" />

      {state.status === 'loading' ? <LoadingState /> : null}

      {state.status === 'error' ? (
        <ErrorState message={state.message} onRetry={() => void load()} />
      ) : null}

      {state.status === 'ready' && savedArticles.length === 0 ? (
        <EmptyState message="Tap the bookmark icon on a story in the Feed to keep it here." />
      ) : null}

      {state.status === 'ready' && savedArticles.length > 0 ? (
        <FlatList
          data={savedArticles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: { item: Article }) => (
            <ArticleCard article={item} isSaved={isSaved(item.id)} onToggleSaved={toggleSaved} />
          )}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
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
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  separator: {
    height: spacing.md,
  },
});
