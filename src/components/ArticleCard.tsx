import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Article } from '../models/article';
import { categoryColors, colors, radii, spacing } from '../theme/theme';
import { categoryLabel } from '../utils/categoryLabel';
import { formatRelativeTime } from '../utils/relativeTime';

type ArticleCardProps = {
  article: Article;
  isSaved: boolean;
  onToggleSaved: (articleId: string) => void;
};

export function ArticleCard({ article, isSaved, onToggleSaved }: ArticleCardProps) {
  const [linkError, setLinkError] = useState<string | null>(null);
  const pill = categoryColors[article.category];

  async function openSource() {
    setLinkError(null);
    try {
      const canOpen = await Linking.canOpenURL(article.sourceUrl);
      if (!canOpen) {
        setLinkError('This link cannot be opened on this device.');
        return;
      }
      await Linking.openURL(article.sourceUrl);
    } catch {
      setLinkError('Could not open the original article.');
    }
  }

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={[styles.pill, { backgroundColor: pill.background }]}>
          <Text style={[styles.pillText, { color: pill.text }]}>
            {categoryLabel(article.category)}
          </Text>
        </View>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isSaved ? 'Remove bookmark' : 'Save story'}
          hitSlop={8}
          onPress={() => onToggleSaved(article.id)}
          style={styles.bookmarkButton}
        >
          <Ionicons
            name={isSaved ? 'bookmark' : 'bookmark-outline'}
            size={22}
            color={isSaved ? colors.textPrimary : colors.textSecondary}
          />
        </Pressable>
      </View>

      <Text style={styles.headline}>{article.headline}</Text>
      <Text style={styles.summary}>{article.summary}</Text>

      <View style={styles.metaRow}>
        <Text style={styles.meta}>{article.sourceName}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.meta}>{formatRelativeTime(article.publishedAt)}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Read full article in browser"
        onPress={() => {
          void openSource();
        }}
        style={({ pressed }) => [styles.readButton, pressed && styles.readButtonPressed]}
      >
        <Text style={styles.readButtonText}>Read full article</Text>
        <Ionicons name="open-outline" size={16} color={colors.background} />
      </Pressable>

      {linkError ? <Text style={styles.linkError}>{linkError}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.sm,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pill: {
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  bookmarkButton: {
    padding: 4,
  },
  headline: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },
  summary: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 13,
  },
  metaDot: {
    color: colors.textMuted,
    fontSize: 13,
  },
  readButton: {
    marginTop: 8,
    backgroundColor: colors.textPrimary,
    borderRadius: radii.md,
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  readButtonPressed: {
    opacity: 0.85,
  },
  readButtonText: {
    color: colors.background,
    fontSize: 15,
    fontWeight: '600',
  },
  linkError: {
    color: colors.danger,
    fontSize: 13,
  },
});
