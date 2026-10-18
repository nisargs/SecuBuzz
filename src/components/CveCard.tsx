import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
  Modal,
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
import { haptics } from '../utils/haptics';
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
  const { colors, isDark, accentColor, severityColors, fontScaleMultiplier } = useTheme();
  const [opening, setOpening] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showEpssModal, setShowEpssModal] = useState(false);

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
  const [epssScore, setEpssScore] = useState<number | null>(
    advisory.epssScore ?? null,
  );

  useEffect(() => {
    if (epssPercentile !== null && epssScore !== null) return;
    let isMounted = true;
    void fetchEpssScore(advisory.cveID).then((res) => {
      if (isMounted && res) {
        setEpssPercentile(res.percentile);
        setEpssScore(res.epss);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [advisory.cveID, epssPercentile, epssScore]);


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

      const webUrl = `https://secubuzz.com/advisories/${advisory.cveID.toLowerCase()}`;
      messageParts.push(
        '',
        `- Live CISA KEV Radar: ${webUrl}`,
        `- Primary Source: ${advisory.url}`,
        '',
        'Shared via SecuBuzz · Quick 60-Word Cybersecurity News',
        '📱 Google Play: https://play.google.com/store/apps/details?id=com.secubuzz.app',
        '🌐 Web: https://secubuzz.com',
      );

      await Share.share(
        {
          title: `🚨 [CISA Zero-Day Alert] ${advisory.cveID} · SecuBuzz`,
          message: messageParts.join('\n'),
          url: webUrl,
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

          {epssPercentile !== null && (() => {
            const isEpssCritical = epssPercentile >= 0.90;
            const isEpssHigh = epssPercentile >= 0.70 && epssPercentile < 0.90;
            const epssColor = isEpssCritical
              ? severityColors.CRITICAL.primary
              : isEpssHigh
              ? severityColors.HIGH.primary
              : accentColor;
            const epssBg = isEpssCritical
              ? severityColors.CRITICAL.surface
              : isEpssHigh
              ? severityColors.HIGH.surface
              : isDark
              ? 'rgba(255, 255, 255, 0.05)'
              : 'rgba(0, 0, 0, 0.04)';
            const epssBorder = isEpssCritical
              ? severityColors.CRITICAL.border
              : isEpssHigh
              ? severityColors.HIGH.border
              : colors.border;

            return (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`EPSS ${(epssPercentile * 100).toFixed(0)}th percentile. Tap for exploit likelihood breakdown`}
                hitSlop={6}
                onPress={() => {
                  void haptics.selection();
                  setShowEpssModal(true);
                }}
                style={[
                  styles.epssTag,
                  {
                    backgroundColor: epssBg,
                    borderColor: epssBorder,
                  },
                ]}
              >
                <Ionicons
                  name="speedometer-outline"
                  size={11}
                  color={epssColor}
                  style={{ marginRight: 3 }}
                />
                <Text style={[styles.epssLabel, { color: epssColor }]}>
                  EPSS {(epssPercentile * 100).toFixed(0)}%
                  {isEpssCritical ? ' · CRIT' : isEpssHigh ? ' · HIGH' : ''}
                </Text>
              </Pressable>
            );
          })()}
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
        style={[
          styles.headline,
          {
            color: colors.textPrimary,
            fontSize: Math.round(18 * fontScaleMultiplier),
            lineHeight: Math.round(25 * fontScaleMultiplier),
          },
        ]}
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
        <Text
          style={[
            styles.summary,
            {
              color: colors.textSecondary,
              fontSize: Math.round(14 * fontScaleMultiplier),
              lineHeight: Math.round(22 * fontScaleMultiplier),
            },
          ]}
        >
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

      {/* EPSS EXPLOIT INTELLIGENCE MODAL */}
      <Modal
        visible={showEpssModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowEpssModal(false)}
      >
        <Pressable
          style={styles.epssModalOverlay}
          onPress={() => setShowEpssModal(false)}
        >
          <Pressable
            style={[
              styles.epssModalContainer,
              {
                backgroundColor: colors.surface,
                borderColor: colors.border,
              },
            ]}
            onPress={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <View style={styles.epssModalHeader}>
              <View style={styles.epssModalHeaderLeft}>
                <Ionicons
                  name="speedometer-outline"
                  size={20}
                  color={
                    (epssPercentile ?? 0) >= 0.90
                      ? severityColors.CRITICAL.primary
                      : (epssPercentile ?? 0) >= 0.70
                      ? severityColors.HIGH.primary
                      : accentColor
                  }
                />
                <Text style={[styles.epssModalTitle, { color: colors.textPrimary }]}>
                  EPSS Threat Intelligence
                </Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close EPSS breakdown"
                hitSlop={12}
                onPress={() => {
                  void haptics.selection();
                  setShowEpssModal(false);
                }}
              >
                <Ionicons name="close" size={22} color={colors.textMuted} />
              </Pressable>
            </View>

            {/* Score Callout */}
            <View
              style={[
                styles.epssScoreBox,
                {
                  backgroundColor:
                    (epssPercentile ?? 0) >= 0.90
                      ? severityColors.CRITICAL.surface
                      : (epssPercentile ?? 0) >= 0.70
                      ? severityColors.HIGH.surface
                      : colors.surfaceRaised,
                  borderColor:
                    (epssPercentile ?? 0) >= 0.90
                      ? severityColors.CRITICAL.border
                      : (epssPercentile ?? 0) >= 0.70
                      ? severityColors.HIGH.border
                      : colors.border,
                },
              ]}
            >
              <Text
                style={[
                  styles.epssScoreValue,
                  {
                    color:
                      (epssPercentile ?? 0) >= 0.90
                        ? severityColors.CRITICAL.primary
                        : (epssPercentile ?? 0) >= 0.70
                        ? severityColors.HIGH.primary
                        : accentColor,
                  },
                ]}
              >
                {((epssPercentile ?? 0) * 100).toFixed(1)}th
              </Text>
              <View
                style={[
                  styles.epssRiskBadge,
                  {
                    backgroundColor:
                      (epssPercentile ?? 0) >= 0.90
                        ? `${severityColors.CRITICAL.primary}25`
                        : (epssPercentile ?? 0) >= 0.70
                        ? `${severityColors.HIGH.primary}25`
                        : `${accentColor}25`,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.epssRiskBadgeText,
                    {
                      color:
                        (epssPercentile ?? 0) >= 0.90
                          ? severityColors.CRITICAL.primary
                          : (epssPercentile ?? 0) >= 0.70
                          ? severityColors.HIGH.primary
                          : accentColor,
                    },
                  ]}
                >
                  {epssScore !== null
                    ? `${(epssScore * 100).toFixed(2)}% 30-DAY PROBABILITY`
                    : 'FIRST.ORG EPSS PERCENTILE'}
                </Text>
              </View>
            </View>

            {/* Verifiable Metric Sections */}
            <View style={styles.epssSection}>
              <Text style={[styles.epssSectionTitle, { color: accentColor }]}>
                30-DAY IN-THE-WILD PROBABILITY
              </Text>
              <Text style={[styles.epssSectionBody, { color: colors.textSecondary }]}>
                {epssScore !== null
                  ? `FIRST.org EPSS v3 estimates a ${(epssScore * 100).toFixed(2)}% empirical probability that ${advisory.cveID} will be actively exploited in the wild within the next 30 days.`
                  : `FIRST.org EPSS v3 calculates the empirical probability that ${advisory.cveID} will be exploited in the wild within 30 days.`}
              </Text>
            </View>

            <View style={styles.epssSection}>
              <Text style={[styles.epssSectionTitle, { color: accentColor }]}>
                POPULATION PERCENTILE RANK
              </Text>
              <Text style={[styles.epssSectionBody, { color: colors.textSecondary }]}>
                Ranked in the {((epssPercentile ?? 0) * 100).toFixed(1)}th percentile. This flaw has a higher exploitation likelihood than {((epssPercentile ?? 0) * 100).toFixed(1)}% of all scored vulnerabilities in the global CVE catalog.
              </Text>
            </View>


            <View style={styles.epssSection}>
              <Text style={[styles.epssSectionTitle, { color: colors.textMuted }]}>
                EPSS VS CVSS METHODOLOGY
              </Text>
              <Text style={[styles.epssSectionBody, { color: colors.textMuted }]}>
                CVSS measures theoretical severity based on vulnerability attributes if exploited. EPSS models empirical probability of real-world adversary exploitation using live honeypot telemetry, PoC trackers, and dark web activity.
              </Text>
            </View>

            {/* Dismiss Button */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Dismiss EPSS intelligence"
              onPress={() => {
                void haptics.selection();
                setShowEpssModal(false);
              }}
              style={[
                styles.epssCloseButton,
                { backgroundColor: accentColor },
              ]}
            >
              <Text style={[styles.epssCloseButtonText, { color: '#0B0F14' }]}>
                GOT IT
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
  },
  epssLabel: {
    fontSize: 10,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.6,
  },

  /* EPSS Modal Styles */
  epssModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  epssModalContainer: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20,
  },
  epssModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  epssModalHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  epssModalTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
  },
  epssScoreBox: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 14,
  },
  epssScoreValue: {
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 32,
    letterSpacing: 0.5,
  },
  epssRiskBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginTop: 6,
  },
  epssRiskBadgeText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.8,
  },
  epssSection: {
    marginBottom: 10,
  },
  epssSectionTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 11,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  epssSectionBody: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
  },
  epssCloseButton: {
    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  epssCloseButtonText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 13,
    letterSpacing: 0.8,
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
    fontSize: 12.5,
    lineHeight: 18,
    letterSpacing: 0.2,
    marginTop: 6,
    marginBottom: 6,
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
    bottom: 8,
    left: spacing.lg,
    right: spacing.lg,
  },
  readMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  readMoreText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 0.9,
    flex: 1,
    paddingRight: 10,
  },
});
