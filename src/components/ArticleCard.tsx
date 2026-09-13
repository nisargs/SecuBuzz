import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { Article } from '../models/article';
import { colors, spacing } from '../theme/theme';
import { formatPublishedAt } from '../utils/formatPublishedAt';
import { openArticle } from '../utils/openArticle';

type ArticleCardProps = {
  article: Article;
  isSaved: boolean;
  onToggleSaved: (articleId: string) => void;
};

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

export function ArticleCard({
  article,
  isSaved,
  onToggleSaved,
}: ArticleCardProps) {
  const [opening, setOpening] =
    useState(false);

  async function handleOpenArticle() {
    if (opening) {
      return;
    }

    setOpening(true);

    await openArticle(
      article.sourceUrl,
    );

    setOpening(false);
  }

  return (
    <View style={styles.card}>
      {/* =================================
          CATEGORY + BOOKMARK
          ================================= */}
      <View style={styles.metaTopRow}>
        <Text style={styles.category}>
          {formatCategory(article.category)}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isSaved
              ? 'Remove bookmark'
              : 'Save article'
          }
          hitSlop={12}
          onPress={() =>
            onToggleSaved(article.id)
          }
          style={styles.bookmarkButton}
        >
          <Ionicons
            name={
              isSaved
                ? 'bookmark'
                : 'bookmark-outline'
            }
            size={24}
            color={
              isSaved
                ? colors.textPrimary
                : colors.textSecondary
            }
          />
        </Pressable>
      </View>

      {/* =================================
          PUBLICATION DATE + SOURCE
          ================================= */}
      <Text style={styles.publicationMeta}>
        {formatPublishedAt(article)} ·{' '}
        {article.sourceName}
      </Text>

      {/* =================================
          HEADLINE
          ================================= */}
      <Text style={styles.headline}>
        {article.headline}
      </Text>

      {/* =================================
          CYAN DIVIDER
          ================================= */}
      <View style={styles.divider} />

      {/* =================================
          SUMMARY
          ================================= */}
      <Text style={styles.summary}>
        {article.summary}
      </Text>

      {/* =================================
          ORIGINAL ARTICLE LINK
          ================================= */}
      <View style={styles.footer}>
        <Text
          style={styles.footerPreview}
          numberOfLines={2}
        >
          {article.summary}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open original article"
          disabled={opening}
          onPress={() => {
            void handleOpenArticle();
          }}
          style={styles.readMoreRow}
        >
          <Text style={styles.readMoreText}>
            {opening
              ? 'OPENING...'
              : `READ MORE · ${article.sourceName.toUpperCase()}`}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={25}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor:
      colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },

  metaTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  category: {
    color: '#4CC9F0',
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.7,
  },

  bookmarkButton: {
    padding: 4,
  },

  publicationMeta: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
    marginTop: spacing.lg,
  },

  divider: {
    width: 64,
    height: 3,
    backgroundColor: '#4CC9F0',
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 17,
    lineHeight: 27,
  },

  footer: {
    marginTop: 'auto',
    paddingTop: spacing.lg,
  },

  footerPreview: {
    color: colors.textPrimary,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 10,
  },

  readMoreText: {
    color: '#4CC9F0',
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.1,
    flex: 1,
    paddingRight: 10,
  },
});