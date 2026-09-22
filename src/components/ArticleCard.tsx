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
import { shareArticle } from '../utils/shareArticle';

const BLUE = '#4CC9F0';

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
      {/* CATEGORY + ACTIONS */}
      <View style={styles.metaTopRow}>
        <Text style={styles.category}>
          {formatCategory(article.category)}
        </Text>

        <View style={styles.actionsRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Share article"
            hitSlop={12}
            onPress={() => {
              void shareArticle(article);
            }}
            style={styles.actionButton}
          >
            <Ionicons
              name="arrow-redo-outline"
              size={22}
              color={colors.textSecondary}
            />
          </Pressable>

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
            style={styles.actionButton}
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
                  ? BLUE
                  : colors.textSecondary
              }
            />
          </Pressable>
        </View>
      </View>

      {/* DATE + SOURCE */}
      <Text style={styles.publicationMeta}>
        {formatPublishedAt(article)} ·{' '}
        {article.sourceName}
      </Text>

      {/* HEADLINE */}
      <Text
        style={styles.headline}
        numberOfLines={4}
      >
        {article.headline}
      </Text>

      {/* DIVIDER */}
      <View style={styles.divider} />

      {/* FULL SUMMARY */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>
          {article.summary}
        </Text>
      </View>

      {/* READ MORE */}
      <View style={styles.footer}>
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
            size={24}
            color={BLUE}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: 'relative',
    backgroundColor:
      colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 68,
  },

  metaTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  category: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.7,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  actionButton: {
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
    fontSize: 25,
    lineHeight: 32,
    fontWeight: '800',
    marginTop: spacing.lg,
  },

  divider: {
    width: 64,
    height: 3,
    backgroundColor: BLUE,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
  },

  summaryContainer: {
    flex: 1,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 25,
  },

  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: 10,
    backgroundColor:
      colors.background,
  },

  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 9,
  },

  readMoreText: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.05,
    flex: 1,
    paddingRight: 10,
  },
});