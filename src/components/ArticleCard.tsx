import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  Clipboard,
  Linking,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMyStack, normalizeCve, POPULAR_VENDORS } from '../context/MyStackContext';
import type { Article } from '../models/article';
import { colors, severityColors, spacing } from '../theme/theme';

const BLUE = colors.accent;
import { copyArticleToClipboard } from '../utils/copyReport';
import { formatPublishedAt } from '../utils/formatPublishedAt';
import { isVendorPsirt } from '../utils/psirt';
import { haptics } from '../utils/haptics';
import { openArticle } from '../utils/openArticle';
import { shareArticle } from '../utils/shareArticle';
import { wordCount } from '../utils/wordCount';

type ArticleCardProps = {
  article: Article;
  isSaved: boolean;
  onToggleSaved: (articleOrId: string | Article) => void;
  onSelectSeverity?: (severity: NonNullable<Article['severity']>) => void;
  onSelectCategory?: (category: Article['category']) => void;
  onSearchCve?: (cve: string) => void;
  onFilterMyStack?: () => void;
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


// Sorted popular vendors for regex matching (longest names first)
const SORTED_VENDORS = [
  'Palo Alto Networks',
  'Check Point',
  'SonicWall',
  'Atlassian',
  'Fortinet',
  'Microsoft',
  'Citrix',
  'GitLab',
  'Oracle',
  'VMware',
  'Cisco',
  'Ivanti',
  'Apple',
  'Google',
  'Red Hat',
  'AWS',
];

const ENTITY_REGEX = new RegExp(
  `(CVE-\\d{4}-\\d{4,7}|\\b(?:${SORTED_VENDORS.join('|')})\\b)`,
  'gi'
);

type ActiveEntity =
  | { type: 'cve'; value: string }
  | { type: 'vendor'; value: string };

function renderSummaryWithEntities(
  text: string,
  onPressEntity: (entity: ActiveEntity) => void,
  textColor: string
) {
  const parts = text.split(ENTITY_REGEX);
  if (parts.length === 1) return text;

  return parts.map((part, index) => {
    if (/^CVE-\d{4}-\d{4,7}$/i.test(part)) {
      const normalized = normalizeCve(part);
      return (
        <Text
          key={index}
          onPress={() => onPressEntity({ type: 'cve', value: normalized })}
          suppressHighlighting={false}
          style={{
            color: textColor,
            textDecorationLine: 'underline',
          }}
        >
          {part}
        </Text>
      );
    }

    const matchedVendor = POPULAR_VENDORS.find(
      (v) => v.toLowerCase() === part.toLowerCase()
    );
    if (matchedVendor) {
      return (
        <Text
          key={index}
          onPress={() => onPressEntity({ type: 'vendor', value: matchedVendor })}
          suppressHighlighting={false}
          style={{
            color: textColor,
            textDecorationLine: 'underline',
          }}
        >
          {part}
        </Text>
      );
    }

    return part;
  });
}

export function ArticleCard({
  article,
  isSaved,
  onToggleSaved,
  onSelectSeverity,
  onSelectCategory,
  onSearchCve,
  onFilterMyStack,
}: ArticleCardProps) {
  const { colors, isDark, accentColor, severityColors, fontScaleMultiplier } = useTheme();
  const insets = useSafeAreaInsets();
  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);
  const { isWatchingCve, toggleWatchCve, isVendorSelected, toggleVendor, showToast } = useMyStack();
  const [activeEntity, setActiveEntity] = useState<ActiveEntity | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleEntityPress = (entity: ActiveEntity) => {
    haptics.selection();
    setActionFeedback(null);
    setActiveEntity(entity);
  };

  const handleToggleEntity = () => {
    if (!activeEntity || actionFeedback) return;
    const isCve = activeEntity.type === 'cve';
    const isCurrentlyActive = isCve
      ? isWatchingCve(activeEntity.value)
      : isVendorSelected(activeEntity.value);

    const feedbackText = isCve
      ? isCurrentlyActive
        ? `Removed ${activeEntity.value} from Watchlist`
        : `Pinned ${activeEntity.value} to Watchlist • Feed filtered`
      : isCurrentlyActive
        ? `Removed ${activeEntity.value} from My Stack`
        : `Added ${activeEntity.value} to My Stack • Feed filtered`;

    haptics.notificationSuccess();
    setActionFeedback(feedbackText);

    if (isCve) {
      toggleWatchCve(activeEntity.value);
    } else {
      toggleVendor(activeEntity.value);
    }

    if (!isCurrentlyActive) {
      onFilterMyStack?.();
    }
    showToast(feedbackText);

    setTimeout(() => {
      setActiveEntity(null);
      setActionFeedback(null);
    }, 380);
  };

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

          {isVendorPsirt(article.sourceName) ? (
            <View
              style={[
                styles.psirtTag,
                {
                  backgroundColor: isDark
                    ? 'rgba(76, 201, 240, 0.08)'
                    : 'rgba(0, 119, 182, 0.06)',
                  borderColor: isDark
                    ? 'rgba(76, 201, 240, 0.35)'
                    : 'rgba(0, 119, 182, 0.35)',
                },
              ]}
            >
              <Text
                style={[
                  styles.psirtLabel,
                  { color: isDark ? '#4CC9F0' : '#0077B6' },
                ]}
              >
                VENDOR PSIRT
              </Text>
            </View>
          ) : null}

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
              size={20}
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
              size={20}
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
              onToggleSaved(article)
            }
            style={styles.actionButton}
          >
            <Ionicons
              name={
                isSaved
                  ? 'bookmark'
                  : 'bookmark-outline'
              }
              size={21}
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
        {renderSummaryWithEntities(article.headline, handleEntityPress, colors.textPrimary)}
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
          {renderSummaryWithEntities(article.summary, handleEntityPress, colors.textSecondary)}
        </Text>

        {wordCount(article.summary) > 0 ? (
          <Text
            style={[
              styles.wordCount,
              {
                color: colors.textMuted,
                fontSize: Math.round(11 * fontScaleMultiplier),
              },
            ]}
          >
            {wordCount(article.summary)} words
          </Text>
        ) : null}
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
      {/* INTERACTIVE ENTITY ACTION SHEET (2 OPTIONS ONLY) */}
      <Modal
        visible={Boolean(activeEntity)}
        transparent
        animationType="fade"
        onRequestClose={() => setActiveEntity(null)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setActiveEntity(null)}
        >
          <Pressable
            style={[
              styles.modalCard,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
                paddingBottom: Math.max(insets.bottom, 20) + 16,
              },
            ]}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <View style={styles.modalHeader}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.modalEyebrow, { color: accentColor }]}>
                  {activeEntity?.type === 'cve' ? 'CVE TARGET' : 'ENTERPRISE VENDOR'}
                </Text>
                <Text style={[styles.modalCveTitle, { color: colors.textPrimary }]}>
                  {activeEntity?.value}
                </Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close"
                hitSlop={8}
                onPress={() => setActiveEntity(null)}
                style={styles.modalCloseButton}
              >
                <Ionicons name="close" size={20} color={colors.textSecondary} />
              </Pressable>
            </View>

            {/* Option 1: Add to / Remove from Watchlist or Stack */}
            <Pressable
              accessibilityRole="button"
              onPress={handleToggleEntity}
              style={[
                styles.modalActionButton,
                {
                  borderColor: actionFeedback ? accentColor : colors.border,
                  backgroundColor: actionFeedback
                    ? `${accentColor}25`
                    : activeEntity?.type === 'cve'
                      ? isWatchingCve(activeEntity.value)
                        ? `${accentColor}18`
                        : isDark ? colors.background : colors.surface
                      : isVendorSelected(activeEntity?.value || '')
                      ? `${accentColor}18`
                      : isDark ? colors.background : colors.surface,
                },
              ]}
            >
              <Ionicons
                name={
                  actionFeedback
                    ? 'checkmark-circle'
                    : activeEntity?.type === 'cve'
                      ? isWatchingCve(activeEntity.value) ? 'pin' : 'pin-outline'
                      : isVendorSelected(activeEntity?.value || '') ? 'layers' : 'layers-outline'
                }
                size={18}
                color={
                  actionFeedback
                    ? accentColor
                    : activeEntity?.type === 'cve'
                      ? isWatchingCve(activeEntity.value) ? accentColor : colors.textPrimary
                      : isVendorSelected(activeEntity?.value || '') ? accentColor : colors.textPrimary
                }
              />
              <Text
                style={[
                  styles.modalActionText,
                  {
                    color:
                      actionFeedback
                        ? accentColor
                        : activeEntity?.type === 'cve'
                          ? isWatchingCve(activeEntity.value) ? accentColor : colors.textPrimary
                          : isVendorSelected(activeEntity?.value || '') ? accentColor : colors.textPrimary,
                    fontWeight: '700',
                  },
                ]}
              >
                {actionFeedback ||
                  (activeEntity?.type === 'cve'
                    ? isWatchingCve(activeEntity.value)
                      ? 'Remove from CVE Watchlist'
                      : 'Add to CVE Watchlist'
                    : isVendorSelected(activeEntity?.value || '')
                    ? 'Remove from My Stack'
                    : 'Add to My Stack')}
              </Text>
            </Pressable>

            {/* Option 2: Filter Feed by this CVE or Vendor */}
            <Pressable
              accessibilityRole="button"
              onPress={() => {
                if (!activeEntity) return;
                const valueToFilter = activeEntity.value;
                setActiveEntity(null);
                onSearchCve?.(valueToFilter);
              }}
              style={[
                styles.modalActionButton,
                {
                  borderColor: colors.border,
                  backgroundColor: isDark ? colors.background : colors.surface,
                },
              ]}
            >
              <Ionicons name="filter-outline" size={18} color={accentColor} />
              <Text style={[styles.modalActionText, { color: colors.textPrimary }]}>
                {activeEntity?.type === 'cve'
                  ? 'Filter Feed by this CVE'
                  : 'Filter Feed by this Vendor'}
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
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
    gap: 6,
  },

  metaLeftGroup: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  category: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10.5,
    letterSpacing: 1.1,
  },

  psirtTag: {
    paddingHorizontal: 4.5,
    paddingVertical: 1.5,
    borderRadius: 3,
    borderWidth: 1,
  },

  psirtLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 8.5,
    letterSpacing: 0.6,
  },

  severityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 5,
    paddingVertical: 1.5,
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
    fontSize: 9,
    letterSpacing: 0.8,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexShrink: 0,
  },

  actionButton: {
    padding: 2,
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

  wordCount: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 11,
    marginTop: 10,
    letterSpacing: 0.3,
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

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: Platform.OS === 'ios' ? 36 : 24,
    gap: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  modalEyebrow: {
    fontFamily: 'Exo_700Bold',
    fontSize: 10.5,
    letterSpacing: 1.5,
    marginBottom: 2,
  },
  modalCveTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 20,
    letterSpacing: 0.5,
  },
  modalCloseButton: {
    padding: 4,
  },
  modalActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
  },
  modalActionText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14.5,
  },
});