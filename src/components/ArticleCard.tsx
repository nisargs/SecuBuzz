import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
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

type ArticleCardProps = {
  article: Article;
  isSaved: boolean;
  onToggleSaved: (articleId: string) => void;
};

function formatCategory(
  category: Article['category'],
): string {
  /**
   * Keep CVE uppercase.
   *
   * Keep all article categories uppercase to match
   * the editorial design.
   */
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
  const [linkError, setLinkError] =
    useState<string | null>(null);

  async function openSource() {
    setLinkError(null);

    try {
      const canOpen =
        await Linking.canOpenURL(
          article.sourceUrl,
        );

      if (!canOpen) {
        setLinkError(
          'This link cannot be opened on this device.',
        );
        return;
      }

      await Linking.openURL(
        article.sourceUrl,
      );
    } catch {
      setLinkError(
        'Could not open the original article.',
      );
    }
  }

  return (
    <View style={styles.card}>
      {/* ARTICLE HEADER */}
      <View style={styles.metaTopRow}>
        <Text style={styles.category}>
          {formatCategory(article.category)}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isSaved
              ? 'Remove bookmark'
              : 'Save story'
          }
          hitSlop={10}
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

      {/* PUBLICATION INFORMATION */}
      <Text style={styles.publicationMeta}>
        {formatPublishedAt(article)} ·{' '}
        {article.sourceName}
      </Text>

      {/* HEADLINE */}
      <Text style={styles.headline}>
        {article.headline}
      </Text>

      {/* DESIGN DIVIDER */}
      <View style={styles.divider} />

      {/* SUMMARY */}
      <Text style={styles.summary}>
        {article.summary}
      </Text>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text
          style={styles.footerPreview}
          numberOfLines={2}
        >
          {article.summary}
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Read original article"
          onPress={() => {
            void openSource();
          }}
          style={styles.readMoreRow}
        >
          <Text style={styles.readMoreText}>
            READ MORE ·{' '}
            {article.sourceName.toUpperCase()}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={25}
            color="#FFFFFF"
          />
        </Pressable>
      </View>

      {linkError ? (
        <Text style={styles.linkError}>
          {linkError}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.background,
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
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },

  bookmarkButton: {
    padding: 4,
  },

  publicationMeta: {
    color: colors.textSecondary,
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
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.1,
    flex: 1,
    paddingRight: 10,
  },

  linkError: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 8,
  },
});