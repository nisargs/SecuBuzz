import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';
import type { AdvisorySeverityFilter, AdvisorySourceFilter } from '../models/cve';
import { spacing } from '../theme/theme';

type AdvisoryFilterModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedSource: AdvisorySourceFilter;
  onSelectSource: (source: AdvisorySourceFilter) => void;
  selectedSeverity: AdvisorySeverityFilter;
  onSelectSeverity: (severity: AdvisorySeverityFilter) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  severityCounts: Record<string, number>;
  sourceCounts: Record<string, number>;
};

export function AdvisoryFilterModal({
  visible,
  onClose,
  selectedSource,
  onSelectSource,
  selectedSeverity,
  onSelectSeverity,
  onReset,
  totalCount,
  filteredCount,
  severityCounts,
  sourceCounts,
}: AdvisoryFilterModalProps) {
  const { colors, isDark, accentColor, severityColors } = useTheme();

  const isAnyFilterActive =
    selectedSource !== 'ALL' || selectedSeverity !== 'ALL';

  const [modalVisible, setModalVisible] = useState(visible);
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.timing(animValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 180,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible, animValue]);

  const handleDismiss = () => {
    Animated.timing(animValue, {
      toValue: 0,
      duration: 180,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  if (!modalVisible && !visible) {
    return null;
  }

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  const backdropOpacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={handleDismiss}
    >
      <View style={styles.backdropContainer}>
        {/* Animated backdrop */}
        <Animated.View
          style={[styles.animatedBackdrop, { opacity: backdropOpacity }]}
        >
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close filter sheet"
            style={StyleSheet.absoluteFill}
            onPress={handleDismiss}
          />
        </Animated.View>

        {/* Bottom Sheet Card */}
        <Animated.View
          style={[
            styles.sheet,
            {
              backgroundColor: isDark ? colors.surface : colors.background,
              borderColor: colors.border,
              transform: [{ translateY }],
            },
          ]}
        >
          {/* Header */}
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <View style={styles.headerLeft}>
              <Ionicons
                name="options-outline"
                size={20}
                color={accentColor}
                style={{ marginRight: 8 }}
              />
              <Text style={[styles.title, { color: colors.textPrimary }]}>
                Filter Vulnerabilities & Threats
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close"
              hitSlop={10}
              onPress={handleDismiss}
              style={styles.closeButton}
            >
              <Ionicons
                name="close-outline"
                size={24}
                color={colors.textSecondary}
              />
            </Pressable>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* THREAT SEVERITY SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                  SEVERITY & IMPACT
                </Text>
                {selectedSeverity !== 'ALL' && (
                  <Pressable
                    hitSlop={6}
                    onPress={() => onSelectSeverity('ALL')}
                  >
                    <Text style={[styles.resetSectionText, { color: accentColor }]}>
                      Clear
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.chipsRow}>
                {/* ALL */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('ALL')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'ALL'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'ALL' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'ALL' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    All ({totalCount})
                  </Text>
                </Pressable>

                {/* CRITICAL */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('CRITICAL')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'CRITICAL'
                          ? severityColors.CRITICAL.surface
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'CRITICAL' && {
                      borderColor: severityColors.CRITICAL.border,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: severityColors.CRITICAL.primary },
                    ]}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'CRITICAL' && {
                        color: severityColors.CRITICAL.primary,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Critical ({severityCounts.CRITICAL || 0})
                  </Text>
                </Pressable>

                {/* HIGH */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('HIGH')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'HIGH'
                          ? `${severityColors.HIGH.primary}20`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'HIGH' && {
                      borderColor: severityColors.HIGH.primary,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: severityColors.HIGH.primary },
                    ]}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'HIGH' && {
                        color: severityColors.HIGH.primary,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    High ({severityCounts.HIGH || 0})
                  </Text>
                </Pressable>

                {/* RANSOMWARE */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('RANSOMWARE')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'RANSOMWARE'
                          ? 'rgba(245, 158, 11, 0.18)'
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'RANSOMWARE' && {
                      borderColor: '#F59E0B',
                    },
                  ]}
                >
                  <Ionicons
                    name="skull-outline"
                    size={14}
                    color={
                      selectedSeverity === 'RANSOMWARE'
                        ? '#F59E0B'
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'RANSOMWARE' && {
                        color: '#F59E0B',
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Ransomware ({severityCounts.RANSOMWARE || 0})
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* ADVISORY SOURCE SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                  INTELLIGENCE SOURCE
                </Text>
                {selectedSource !== 'ALL' && (
                  <Pressable
                    hitSlop={6}
                    onPress={() => onSelectSource('ALL')}
                  >
                    <Text style={[styles.resetSectionText, { color: accentColor }]}>
                      Clear
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.chipsRow}>
                {/* ALL SOURCES */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource('ALL')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'ALL'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'ALL' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'ALL' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    All Sources ({totalCount})
                  </Text>
                </Pressable>

                {/* CISA KEV */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource('CISA')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'CISA'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'CISA' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Ionicons
                    name="shield-checkmark-outline"
                    size={14}
                    color={
                      selectedSource === 'CISA'
                        ? accentColor
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'CISA' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    CISA KEV Zero-Days ({sourceCounts.CISA || 0})
                  </Text>
                </Pressable>

                {/* GITHUB SECURITY */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource('GITHUB')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'GITHUB'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'GITHUB' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Ionicons
                    name="code-slash-outline"
                    size={14}
                    color={
                      selectedSource === 'GITHUB'
                        ? accentColor
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'GITHUB' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    GitHub Ecosystem ({sourceCounts.GITHUB || 0})
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>

          {/* Footer Actions */}
          <View
            style={[
              styles.footer,
              {
                borderTopColor: colors.border,
                backgroundColor: isDark ? colors.surface : colors.background,
              },
            ]}
          >
            {isAnyFilterActive ? (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Reset all filters"
                onPress={onReset}
                style={[
                  styles.resetButton,
                  { borderColor: colors.border },
                ]}
              >
                <Ionicons
                  name="refresh"
                  size={16}
                  color={colors.textSecondary}
                  style={{ marginRight: 6 }}
                />
                <Text
                  style={[
                    styles.resetButtonText,
                    { color: colors.textSecondary },
                  ]}
                >
                  Reset All
                </Text>
              </Pressable>
            ) : null}

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Apply filters"
              onPress={handleDismiss}
              style={[
                styles.applyButton,
                { backgroundColor: accentColor },
                !isAnyFilterActive && { flex: 1 },
              ]}
            >
              <Text style={styles.applyButtonText}>
                Show {filteredCount} {filteredCount === 1 ? 'Advisory' : 'Advisories'}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdropContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  animatedBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  sheet: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    maxHeight: '82%',
    paddingBottom: spacing.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Exo_700Bold',
    fontSize: 17,
    letterSpacing: 0.3,
  },
  closeButton: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },
  resetSectionText: {
    fontSize: 12,
    fontWeight: '600',
  },
  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  chipText: {
    fontSize: 13,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
    borderTopWidth: 1,
  },
  resetButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
  },
  resetButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  applyButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  applyButtonText: {
    color: '#0B0F14',
    fontSize: 14,
    fontFamily: 'Exo_700Bold',
    letterSpacing: 0.3,
  },
});
