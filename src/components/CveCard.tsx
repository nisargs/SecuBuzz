import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';
import type { AdvisorySeverity, AdvisorySource, CveAdvisory } from '../models/cve';
import { fetchEpssScore } from '../services/epssService';
import { spacing } from '../theme/theme';

import { copyAdvisoryToClipboard } from '../utils/copyReport';
import { openArticle } from '../utils/openArticle';

type CveCardProps = {
  advisory: CveAdvisory;
  isSaved?: boolean;
  onToggleSaved?: (id: string) => void;
  onSelectSeverity?: (severity: AdvisorySeverity) => void;
  onSelectSource?: (source: AdvisorySource) => void;
};

function formatAdvisoryDate(dateStr?: string): string {
  if (!dateStr) return 'RECENT';
  const parsed = new Date(dateStr);
  if (isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function CveCard({
  advisory,
  isSaved = false,
  onToggleSaved,
  onSelectSeverity,
  onSelectSource,
}: CveCardProps) {
  const { colors, isDark, accentColor, severityColors } = useTheme();
  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    copyAdvisoryToClipboard(advisory);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  const isRansomware =
    advisory.knownRansomwareCampaignUse?.toLowerCase() === 'known';
  const isCritical = advisory.severity === 'CRITICAL' || isRansomware;

  const [epssPercentile, setEpssPercentile] = useState<number | null>(
    advisory.epssPercentile ?? null,
  );

  useEffect(() => {
    if (epssPercentile !== null) return;
    let isMounted = true;
    void fetchEpssScore(advisory.cveID).then((res) => {
      if (isMounted && res) {
        setEpssPercentile(res.percentile);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [advisory.cveID, epssPercentile]);


  const severityConfig =
    severityColors[advisory.severity] || severityColors.HIGH;

  // Clean description and remove markdown remnants defensively
  const cleanDescription = (advisory.shortDescription || '')
    .replace(/^#+\s*.*$/gm, '')
    .replace(/#+\s*(?:Summary|Details|Impact|Workarounds|PoC)\b:?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  const cleanRequiredAction = advisory.requiredAction
    ?.replace(/\s*\(see URL in Notes\)/gi, '')
    .trim();

  async function handleOpenAdvisory() {
    if (opening) return;
    setOpening(true);
    await openArticle(advisory.url);
    setOpening(false);
  }

  async function handleShare() {
    try {
      const extraInfo = advisory.dueDate
        ? `Remediation Due: ${formatAdvisoryDate(advisory.dueDate)}`
        : advisory.patchedVersion
        ? `Fix Available: ${advisory.patchedVersion}`
        : '';

      const messageParts = [
        `${advisory.cveID}: ${advisory.vulnerabilityName}`,
        '',
        `Affected: ${advisory.vendorProject} · ${advisory.product}`,
      ];

      if (extraInfo) {
        messageParts.push(extraInfo);
      }

      if (cleanDescription) {
        messageParts.push('', cleanDescription);
      }

      messageParts.push(
        '',
        'Source:',
        advisory.url,
        '',
        'Shared via SecuBuzz',
      );

      await Share.share(
        {
          title: `${advisory.cveID} · SecuBuzz`,
          message: messageParts.join('\n'),
          url: advisory.url,
        },
        {
          dialogTitle: `Share: ${advisory.cveID}`,
        },
      );
    } catch {
      // User cancelled share
    }
  }

  return (
    <View style={[styles.card, { backgroundColor: colors.background }]}>
      {/* CATEGORY / SOURCE + SEVERITY + ACTIONS */}
      <View style={styles.metaTopRow}>
        <View style={styles.metaLeftGroup}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Filter by ${advisory.source} source`}
            hitSlop={8}
            disabled={!onSelectSource}
            onPress={() => onSelectSource?.(advisory.source)}
          >
            <Text style={[styles.sourceTag, { color: accentColor }]}>
              {advisory.source}
            </Text>
          </Pressable>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Filter by ${advisory.severity} severity`}
            hitSlop={8}
            disabled={!onSelectSeverity}
            onPress={() => onSelectSeverity?.(advisory.severity)}
            style={[
              styles.severityTag,
              {
                backgroundColor: isDark
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.04)',
              },
              isCritical && {
                backgroundColor: severityColors.CRITICAL.surface,
                borderWidth: 1,
                borderColor: severityColors.CRITICAL.border,
              },
            ]}
          >
            <View
              style={[
                styles.severityDot,
                {
                  backgroundColor: isCritical
                    ? severityColors.CRITICAL.primary
                    : severityConfig.primary,
                },
              ]}
            />
            <Text
              style={[
                styles.severityLabel,
                {
                  color: isCritical
                    ? severityColors.CRITICAL.primary
                    : severityConfig.primary,
                },
              ]}
            >
              {isRansomware ? 'RANSOMWARE' : advisory.severity}
            </Text>
          </Pressable>

          {epssPercentile !== null && (
            <View
              style={[
                styles.epssTag,
                {
                  backgroundColor: isDark
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(0, 0, 0, 0.04)',
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={[styles.epssLabel, { color: accentColor }]}>
                EPSS {(epssPercentile * 100).toFixed(0)}%
              </Text>
            </View>
          )}
        </View>


        <View style={styles.actionsRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Copy markdown report for Slack or Teams"
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
            accessibilityLabel="Share advisory"
            hitSlop={12}
            onPress={() => {
              void handleShare();
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
            accessibilityLabel={isSaved ? 'Remove bookmark' : 'Save advisory'}
            hitSlop={12}
            onPress={() => onToggleSaved?.(advisory.id)}
            style={styles.actionButton}
          >
            <Ionicons
              name={isSaved ? 'bookmark' : 'bookmark-outline'}
              size={24}
              color={isSaved ? accentColor : colors.textSecondary}
            />
          </Pressable>
        </View>
      </View>

      {/* DATE + SOURCE (No redundant vendor repetition) */}
      <Text style={[styles.publicationMeta, { color: colors.textSecondary }]}>
        {formatAdvisoryDate(advisory.dateAdded)} · {advisory.source}
      </Text>

      {/* HEADLINE: CVE ID & VULNERABILITY NAME */}
      <Text
        style={[styles.headline, { color: colors.textPrimary }]}
        numberOfLines={4}
      >
        {advisory.cveID}: {advisory.vulnerabilityName}
      </Text>

      {/* DIVIDER LINE (Crimson for Critical/Ransomware) */}
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

      {/* SCROLLABLE BODY */}
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Affected Component Banner (Consistent textPrimary for vendor & product) */}
        <View
          style={[
            styles.targetBanner,
            {
              backgroundColor: isDark
                ? 'rgba(255, 255, 255, 0.04)'
                : 'rgba(0, 0, 0, 0.03)',
              borderColor: colors.border,
            },
          ]}
        >
          <Ionicons
            name="cube-outline"
            size={14}
            color={accentColor}
            style={{ marginRight: 6 }}
          />
          <Text
            style={[styles.targetText, { color: colors.textSecondary }]}
            numberOfLines={2}
          >
            AFFECTED:{' '}
            <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_700Bold' }}>
              {advisory.vendorProject}
            </Text>
            {' · '}
            <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_600SemiBold' }}>
              {advisory.product}
            </Text>
          </Text>
        </View>

        {/* Clean Description */}
        <Text style={[styles.summary, { color: colors.textSecondary }]}>
          {cleanDescription}
        </Text>

        {/* Remediation & Due Date Box (Full text without truncation or clutter) */}
        <View
          style={[
            styles.remediationCard,
            {
              backgroundColor: isDark
                ? colors.surface
                : colors.surfaceRaised,
              borderColor: isCritical
                ? `${severityColors.CRITICAL.primary}44`
                : colors.border,
            },
          ]}
        >
          <View style={styles.remediationHeader}>
            <Ionicons
              name={advisory.dueDate ? 'calendar-outline' : 'shield-checkmark-outline'}
              size={15}
              color={
                advisory.dueDate
                  ? severityColors.CRITICAL.primary
                  : accentColor
              }
              style={{ marginRight: 6 }}
            />
            <Text
              style={[
                styles.remediationTitle,
                {
                  color: advisory.dueDate
                    ? severityColors.CRITICAL.primary
                    : accentColor,
                },
              ]}
            >
              {advisory.dueDate
                ? `REMEDIATION DEADLINE: ${formatAdvisoryDate(advisory.dueDate)}`
                : advisory.patchedVersion
                ? `FIX AVAILABLE: ${advisory.patchedVersion}`
                : 'REMEDIATION GUIDANCE'}
            </Text>
          </View>

          {cleanRequiredAction ? (
            <Text
              style={[styles.remediationAction, { color: colors.textPrimary }]}
            >
              {cleanRequiredAction}
            </Text>
          ) : null}

          {advisory.vulnerableVersionRange ? (
            <Text
              style={[styles.versionRange, { color: colors.textSecondary }]}
              numberOfLines={2}
            >
              Vulnerable versions: {advisory.vulnerableVersionRange}
            </Text>
          ) : null}
        </View>
      </ScrollView>

      {/* FOOTER */}
      <View style={[styles.footer, { backgroundColor: colors.background }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Inspect original technical advisory"
          disabled={opening}
          onPress={() => {
            void handleOpenAdvisory();
          }}
          style={[styles.readMoreRow, { borderTopColor: colors.border }]}
        >
          <Text style={[styles.readMoreText, { color: accentColor }]}>
            {opening
              ? 'OPENING ADVISORY...'
              : `INSPECT ADVISORY · ${advisory.source.toUpperCase()}`}
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
  sourceTag: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 0.8,
  },
  severityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 4,
    gap: 5,
  },
  severityDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
  },
  severityLabel: {
    fontSize: 10,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.8,
  },
  epssTag: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  epssLabel: {
    fontSize: 10,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.6,
  },

  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionButton: {
    padding: 4,
  },
  publicationMeta: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    letterSpacing: 0.3,
    marginTop: 8,
    marginBottom: 8,
  },
  headline: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.2,
    marginBottom: 10,
  },
  divider: {
    width: 42,
    height: 2,
    borderRadius: 1,
    marginBottom: 12,
  },
  scrollWrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 28,
  },
  targetBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    marginBottom: 10,
  },
  targetText: {
    fontSize: 12,
    flex: 1,
    letterSpacing: 0.2,
    lineHeight: 16,
  },
  summary: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.1,
    marginBottom: 12,
  },
  remediationCard: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginTop: 2,
    marginBottom: 8,
  },
  remediationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  remediationTitle: {
    fontSize: 11,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.6,
  },
  remediationAction: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Exo_500Medium',
  },
  versionRange: {
    fontSize: 11.5,
    marginTop: 6,
    fontStyle: 'italic',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: spacing.lg,
    right: spacing.lg,
  },
  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  readMoreText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 13,
    letterSpacing: 0.8,
  },
});
