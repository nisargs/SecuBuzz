import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';
import type { Article } from '../models/article';
import { colors, severityColors, spacing } from '../theme/theme';

const BLUE = colors.accent;
import { copyArticleToClipboard } from '../utils/copyReport';
import { formatPublishedAt } from '../utils/formatPublishedAt';
import { openArticle } from '../utils/openArticle';
import { shareArticle } from '../utils/shareArticle';

type ArticleCardProps = {
  article: Article;
  isSaved: boolean;
  onToggleSaved: (articleId: string) => void;
  onSelectSeverity?: (severity: NonNullable<Article['severity']>) => void;
  onSelectCategory?: (category: Article['category']) => void;
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
  onSelectSeverity,
  onSelectCategory,
}: ArticleCardProps) {
  const { colors, isDark, accentColor, severityColors, fontScaleMultiplier } = useTheme();
  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    copyArticleToClipboard(article);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

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

  const isCritical = article.severity === 'CRITICAL';
  const severityConfig = article.severity ? severityColors[article.severity] : null;

  return (
    <View style={[styles.card, { backgroundColor: colors.background }]}>
      {/* CATEGORY + SEVERITY + ACTIONS */}
      <View style={styles.metaTopRow}>
        <View style={styles.metaLeftGroup}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Filter by ${formatCategory(article.category)} category`}
            hitSlop={8}
            disabled={!onSelectCategory}
            onPress={() => onSelectCategory?.(article.category)}
          >
            <Text style={[styles.category, { color: accentColor }]}>
              {formatCategory(article.category)}
            </Text>
          </Pressable>

          {article.severity && severityConfig ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Filter by ${article.severity} severity`}
              hitSlop={8}
              disabled={!onSelectSeverity}
              onPress={() => onSelectSeverity?.(article.severity!)}
              style={[
                styles.severityTag,
                {
                  backgroundColor: isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                },
                isCritical && {
                  backgroundColor: severityConfig.surface,
                  borderWidth: 1,
                  borderColor: severityConfig.border,
                },
              ]}
            >
              <View
                style={[
                  styles.severityDot,
                  {
                    backgroundColor: severityConfig.primary,
                  },
                ]}
              />
              <Text
                style={[
                  styles.severityLabel,
                  {
                    color: severityConfig.primary,
                  },
                ]}
              >
                {article.severity}
              </Text>
            </Pressable>
          ) : null}
        </View>

        <View style={styles.actionsRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Copy markdown incident report"
            hitSlop={12}
            onPress={handleCopy}
            style={styles.actionButton}
          >
            <Ionicons
              name={copied ? 'checkmark-circle' : 'copy-outline'}
              size={21}
              color={copied ? accentColor : colors.textSecondary}
            />
          </Pressable>

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
                  ? accentColor
                  : colors.textSecondary
              }
            />
          </Pressable>
        </View>
      </View>

      {/* DATE + SOURCE */}
      <Text style={[styles.publicationMeta, { color: colors.textSecondary }]}>
        {formatPublishedAt(article)} ·{' '}
        {article.sourceName}
      </Text>

      {/* HEADLINE */}
      <Text
        style={[
          styles.headline,
          {
            color: colors.textPrimary,
            fontSize: Math.round(21 * fontScaleMultiplier),
            lineHeight: Math.round(28 * fontScaleMultiplier),
          },
        ]}
        numberOfLines={4}
      >
        {article.headline}
      </Text>

      {/* DIVIDER */}
      <View
        style={[
          styles.divider,
          {
            backgroundColor: isCritical
              ? severityColors.CRITICAL.primary
              : accentColor,
          },
        ]}
      />

      {/* FULL SUMMARY */}
      <View style={styles.summaryContainer}>
        <Text
          style={[
            styles.summary,
            {
              color: colors.textSecondary,
              fontSize: Math.round(14.5 * fontScaleMultiplier),
              lineHeight: Math.round(22.5 * fontScaleMultiplier),
            },
          ]}
        >
          {article.summary}
        </Text>
      </View>

      {/* READ MORE */}
      <View style={[styles.footer, { backgroundColor: colors.background }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Open original article"
          disabled={opening}
          onPress={() => {
            void handleOpenArticle();
          }}
          style={[styles.readMoreRow, { borderTopColor: colors.border }]}
        >
          <Text style={[styles.readMoreText, { color: accentColor }]}>
            {opening
              ? 'OPENING...'
              : `READ MORE · ${article.sourceName.toUpperCase()}`}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={24}
            color={accentColor}
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
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: 68,
  },

  metaTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  metaLeftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  category: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.7,
  },

  severityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },

  severityTagCritical: {
    backgroundColor: severityColors.CRITICAL.surface,
    borderWidth: 1,
    borderColor: severityColors.CRITICAL.border,
  },

  severityDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },

  severityLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 9.5,
    letterSpacing: 1.1,
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
    fontSize: 12.5,
    lineHeight: 18,
    marginTop: 6,
  },

  headline: {
    color: colors.textPrimary,
    fontSize: 21,
    lineHeight: 28,
    fontWeight: '700',
    marginTop: spacing.md,
  },

  divider: {
    width: 48,
    height: 2.5,
    backgroundColor: BLUE,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },

  summaryContainer: {
    flex: 1,
  },

  summary: {
    color: colors.textSecondary,
    fontSize: 14.5,
    lineHeight: 22.5,
  },

  footer: {
    position: 'absolute',
    left: spacing.lg,
    right: spacing.lg,
    bottom: 8,
    backgroundColor:
      colors.background,
  },

  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 12,
  },

  readMoreText: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.9,
    flex: 1,
    paddingRight: 10,
  },
});