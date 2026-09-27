import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import { EmptyState } from '../../components/ScreenStates';
import { useSavedArticles } from '../../context/SavedArticlesContext';
import { useTheme } from '../../context/ThemeContext';
import type { Article } from '../../models/article';
import { colors, spacing } from '../../theme/theme';

const BLUE = colors.accent;
import { formatPublishedAt } from '../../utils/formatPublishedAt';

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

export default function SavedScreen() {
  const router = useRouter();
  const { colors, accentColor } = useTheme();

  const {
    savedArticles,
    isHydrated,
    toggleSaved,
  } = useSavedArticles();

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState('');

  const filteredArticles = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    const sorted = [...savedArticles].sort(
      (a, b) => {
        const aTime = Date.parse(
          a.publishedAt || '',
        );

        const bTime = Date.parse(
          b.publishedAt || '',
        );

        return (
          (Number.isNaN(bTime) ? 0 : bTime) -
          (Number.isNaN(aTime) ? 0 : aTime)
        );
      },
    );

    if (!query) {
      return sorted;
    }

    return sorted.filter((article) => {
      const searchableText = [
        article.headline,
        article.summary,
        article.sourceName,
        article.category,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [savedArticles, searchQuery]);

  function openArticle(article: Article) {
    router.push({
      pathname: '/article/[...id]',
      params: {
        id: [article.id],
        url: article.sourceUrl,
      },
    });
  }

  function toggleSearch() {
    if (searchOpen) {
      setSearchQuery('');
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  }

  if (!isHydrated) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator
          size="small"
          color={accentColor}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top']}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: colors.textPrimary }]}>
            Saved
          </Text>

          <Text style={[styles.subtitle, { color: colors.textPrimary }]}>
            BOOKMARKED SECURITY BRIEFS
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            searchOpen
              ? 'Close saved search'
              : 'Search saved articles'
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
            size={28}
            color={accentColor}
          />
        </Pressable>
      </View>

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
            placeholder="Search saved stories..."
            placeholderTextColor={
              colors.textMuted
            }
            style={[
              styles.searchInput,
              { color: colors.textPrimary },
            ]}
            autoCapitalize="none"
            autoCorrect={false}
          />

          {searchQuery.length > 0 ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Clear saved search"
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

      {savedArticles.length === 0 ? (
        <EmptyState
          message="Tap the bookmark icon on a story in Briefs to keep it here."
        />
      ) : null}

      {savedArticles.length > 0 &&
      filteredArticles.length === 0 ? (
        <EmptyState
          message="No saved stories match your search."
        />
      ) : null}

      {filteredArticles.length > 0 ? (
        <FlatList
          data={filteredArticles}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({
            item,
          }: {
            item: Article;
          }) => (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Open ${item.headline}`}
              onPress={() => openArticle(item)}
              style={({ pressed }) => [
                styles.article,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
                pressed && [
                  styles.articlePressed,
                  { borderColor: accentColor },
                ],
              ]}
            >
              <View style={styles.articleTop}>
                <View style={styles.articleMeta}>
                  <Text style={[styles.category, { color: accentColor }]}>
                    {formatCategory(
                      item.category,
                    )}
                  </Text>

                  <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                    {formatPublishedAt(item)} ·{' '}
                    {item.sourceName}
                  </Text>
                </View>

                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Remove saved article"
                  hitSlop={10}
                  onPress={(event) => {
                    event.stopPropagation();
                    toggleSaved(item.id);
                  }}
                >
                  <Ionicons
                    name="bookmark"
                    size={22}
                    color={accentColor}
                  />
                </Pressable>
              </View>

              <Text
                style={[styles.headline, { color: colors.textPrimary }]}
                numberOfLines={3}
              >
                {item.headline}
              </Text>
            </Pressable>
          )}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },

  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },

  subtitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 7,
  },

  searchButton: {
    padding: 4,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: spacing.lg,
    marginBottom: 10,
    paddingHorizontal: 12,
    height: 44,
    borderWidth: 1,
    borderColor: BLUE,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },

  searchInput: {
    flex: 1,
    color: colors.textPrimary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    marginLeft: 9,
    paddingVertical: 0,
  },

  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    gap: 12,
  },

  article: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: spacing.md,
  },

  articlePressed: {
    borderColor: BLUE,
    opacity: 0.9,
  },

  articleTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  articleMeta: {
    flex: 1,
    paddingRight: 10,
  },

  category: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.5,
  },

  metaText: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    marginTop: 10,
  },
});