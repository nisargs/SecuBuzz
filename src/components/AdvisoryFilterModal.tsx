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
  TextInput,
  View,
} from 'react-native';

import { useTheme } from '../context/ThemeContext';
import { useMyStack, POPULAR_VENDORS, normalizeCve } from '../context/MyStackContext';
import type {
  AdvisoryEpssFilter,
  AdvisorySeverityFilter,
  AdvisorySourceFilter,
} from '../models/cve';
import { spacing } from '../theme/theme';

type AdvisoryFilterModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedSource: AdvisorySourceFilter;
  onSelectSource: (source: AdvisorySourceFilter) => void;
  selectedSeverity: AdvisorySeverityFilter;
  onSelectSeverity: (severity: AdvisorySeverityFilter) => void;
  selectedEpss: AdvisoryEpssFilter;
  onSelectEpss: (epss: AdvisoryEpssFilter) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
  severityCounts: Record<string, number>;
  sourceCounts: Record<string, number>;
  epssCounts: Record<string, number>;
};

export function AdvisoryFilterModal({
  visible,
  onClose,
  selectedSource,
  onSelectSource,
  selectedSeverity,
  onSelectSeverity,
  selectedEpss,
  onSelectEpss,
  onReset,
  totalCount,
  filteredCount,
  severityCounts,
  sourceCounts,
  epssCounts,
}: AdvisoryFilterModalProps) {
  const { colors, isDark, accentColor, severityColors } = useTheme();
  const myStack = useMyStack();
  const [cveInput, setCveInput] = useState('');
  const [cveError, setCveError] = useState('');

  const handleAddCve = () => {
    const trimmed = cveInput.trim();
    if (!trimmed) return;
    const normalized = normalizeCve(trimmed);
    if (!/^CVE-\d{4}-\d{4,7}$/.test(normalized)) {
      setCveError('Format: CVE-YYYY-NNNN');
      return;
    }
    myStack.addWatchCve(normalized);
    onSelectSource('MY_STACK');
    setCveInput('');
    setCveError('');
  };

  const isAnyFilterActive =
    selectedSource !== 'ALL' ||
    selectedSeverity !== 'ALL' ||
    selectedEpss !== 'ALL';

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
                Filter Advisories
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
                    All ({severityCounts.ALL ?? 0})
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

                {/* MEDIUM */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('MEDIUM')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'MEDIUM'
                          ? `${severityColors.MEDIUM.primary}20`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'MEDIUM' && {
                      borderColor: severityColors.MEDIUM.primary,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: severityColors.MEDIUM.primary },
                    ]}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'MEDIUM' && {
                        color: severityColors.MEDIUM.primary,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Medium ({severityCounts.MEDIUM || 0})
                  </Text>
                </Pressable>

                {/* LOW */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('LOW')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSeverity === 'LOW'
                          ? `${severityColors.LOW.primary}20`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSeverity === 'LOW' && {
                      borderColor: severityColors.LOW.primary,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: severityColors.LOW.primary },
                    ]}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSeverity === 'LOW' && {
                        color: severityColors.LOW.primary,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Low ({severityCounts.LOW || 0})
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
                  ADVISORY SOURCE
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
                    All Sources ({sourceCounts.ALL ?? 0})
                  </Text>
                </Pressable>

                {/* MY STACK */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource('MY_STACK')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'MY_STACK'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'MY_STACK' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Ionicons
                    name="layers-outline"
                    size={14}
                    color={
                      selectedSource === 'MY_STACK'
                        ? accentColor
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'MY_STACK' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    My Stack ({sourceCounts.MY_STACK || 0})
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

                        {/* EXPLOIT PREDICTION (EPSS) SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                  EXPLOIT LIKELIHOOD (EPSS)
                </Text>
                {selectedEpss !== 'ALL' && (
                  <Pressable
                    hitSlop={6}
                    onPress={() => onSelectEpss('ALL')}
                  >
                    <Text style={[styles.resetSectionText, { color: accentColor }]}>
                      Clear
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.chipsRow}>
                {/* ALL EPSS */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectEpss('ALL')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedEpss === 'ALL'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedEpss === 'ALL' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedEpss === 'ALL' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    All Likelihoods ({epssCounts.ALL ?? 0})
                  </Text>
                </Pressable>

                {/* CRITICAL RISK (>90%) */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectEpss('CRITICAL_90')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedEpss === 'CRITICAL_90'
                          ? 'rgba(239, 68, 68, 0.18)'
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedEpss === 'CRITICAL_90' && {
                      borderColor: '#EF4444',
                    },
                  ]}
                >
                  <Ionicons
                    name="flash-outline"
                    size={14}
                    color={
                      selectedEpss === 'CRITICAL_90'
                        ? '#EF4444'
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedEpss === 'CRITICAL_90' && {
                        color: '#EF4444',
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Critical Risk &gt;90% ({epssCounts.CRITICAL_90 || 0})
                  </Text>
                </Pressable>

                {/* ELEVATED RISK (>50%) */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectEpss('HIGH_50')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedEpss === 'HIGH_50'
                          ? 'rgba(245, 158, 11, 0.18)'
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedEpss === 'HIGH_50' && {
                      borderColor: '#F59E0B',
                    },
                  ]}
                >
                  <Ionicons
                    name="trending-up-outline"
                    size={14}
                    color={
                      selectedEpss === 'HIGH_50'
                        ? '#F59E0B'
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedEpss === 'HIGH_50' && {
                        color: '#F59E0B',
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Elevated Risk &gt;50% ({epssCounts.HIGH_50 || 0})
                  </Text>
                </Pressable>

                {/* LOWER RISK (<50%) */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectEpss('LOW_50')}
                  style={[
                    styles.chip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedEpss === 'LOW_50'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedEpss === 'LOW_50' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Ionicons
                    name="shield-outline"
                    size={14}
                    color={
                      selectedEpss === 'LOW_50'
                        ? accentColor
                        : colors.textSecondary
                    }
                    style={{ marginRight: 4 }}
                  />
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedEpss === 'LOW_50' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Lower Risk &lt;50% ({epssCounts.LOW_50 || 0})
                  </Text>
                </Pressable>
              </View>
            </View>

            {/* MY STACK & WATCHLIST SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                  <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
                    MY STACK & WATCHLIST
                  </Text>
                  {myStack.selectedVendors.length > 0 || myStack.watchedCves.length > 0 ? (
                    <View
                      style={{
                        paddingHorizontal: 6,
                        paddingVertical: 1,
                        borderRadius: 999,
                        backgroundColor: `${accentColor}20`,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '700',
                          color: accentColor,
                        }}
                      >
                        {myStack.selectedVendors.length + myStack.watchedCves.length}
                      </Text>
                    </View>
                  ) : null}
                </View>
                {(myStack.selectedVendors.length > 0 || myStack.watchedCves.length > 0) && (
                  <Pressable
                    hitSlop={6}
                    onPress={() => {
                      myStack.clearStack();
                      if (selectedSource === 'MY_STACK') {
                        onSelectSource('ALL');
                      }
                    }}
                  >
                    <Text style={[styles.resetSectionText, { color: accentColor }]}>
                      Clear Stack
                    </Text>
                  </Pressable>
                )}
              </View>

              <Text style={{ fontSize: 12, color: colors.textMuted, marginBottom: 10 }}>
                Select enterprise vendors or pin CVEs to filter advisories:
              </Text>

              {/* Vendors Wrap */}
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
                {POPULAR_VENDORS.map((v) => {
                  const isSelected = myStack.isVendorSelected(v);
                  return (
                    <Pressable
                      key={v}
                      accessibilityRole="button"
                      onPress={() => {
                        const willBeSelected = !isSelected;
                        myStack.toggleVendor(v);
                        if (willBeSelected) {
                          onSelectSource('MY_STACK');
                        }
                      }}
                      style={[
                        styles.chip,
                        {
                          borderColor: colors.border,
                          backgroundColor: isSelected
                            ? isDark
                              ? `${accentColor}25`
                              : `${accentColor}18`
                            : isDark
                            ? colors.background
                            : colors.surface,
                        },
                        isSelected && {
                          borderColor: accentColor,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.chipText,
                          { color: colors.textSecondary },
                          isSelected && {
                            color: accentColor,
                            fontWeight: '700',
                          },
                        ]}
                      >
                        {isSelected ? v : `+ ${v}`}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>

              {/* CVE WATCHLIST SECTION (Always visible) */}
              <View style={{ marginTop: 16, paddingTop: 14, borderTopWidth: 1, borderTopColor: colors.border }}>
                <View style={styles.sectionHeader}>
                  <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
                    CVE WATCHLIST ({myStack.watchedCves.length})
                  </Text>
                  {myStack.watchedCves.length > 0 && (
                    <Pressable
                      hitSlop={6}
                      onPress={() => {
                        myStack.clearCves();
                        if (selectedSource === 'MY_STACK' && myStack.selectedVendors.length === 0) {
                          onSelectSource('ALL');
                        }
                      }}
                    >
                      <Text style={[styles.resetSectionText, { color: accentColor }]}>
                        Clear
                      </Text>
                    </Pressable>
                  )}
                </View>

                {myStack.watchedCves.length > 0 ? (
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
                    {myStack.watchedCves.map((cve) => (
                      <Pressable
                        key={cve}
                        accessibilityRole="button"
                        onPress={() => myStack.removeWatchCve(cve)}
                        style={[
                          styles.chip,
                          {
                            borderColor: `${accentColor}66`,
                            backgroundColor: `${accentColor}15`,
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 4,
                          },
                        ]}
                      >
                        <Ionicons name="pin" size={11} color={accentColor} />
                        <Text style={[styles.chipText, { color: accentColor, fontWeight: '700' }]}>
                          {cve}
                        </Text>
                        <Ionicons name="close" size={12} color={accentColor} />
                      </Pressable>
                    ))}
                  </View>
                ) : (
                  <Text style={{ fontSize: 12, color: colors.textMuted, marginBottom: 10 }}>
                    No CVEs currently pinned. Add CVEs below or pin them directly from advisories.
                  </Text>
                )}

                {/* Quick Add CVE Input */}
                <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                  <TextInput
                    value={cveInput}
                    onChangeText={(val: string) => {
                      setCveInput(val);
                      if (cveError) setCveError('');
                    }}
                    placeholder="e.g. CVE-2026-111497"
                    placeholderTextColor={colors.textMuted}
                    autoCapitalize="characters"
                    autoCorrect={false}
                    style={{
                      flex: 1,
                      height: 38,
                      borderWidth: 1,
                      borderColor: cveError ? '#EF4444' : colors.border,
                      borderRadius: 6,
                      paddingHorizontal: 10,
                      color: colors.textPrimary,
                      fontSize: 13,
                      fontFamily: 'SpaceMono_400Regular',
                      backgroundColor: isDark ? colors.background : colors.surface,
                    }}
                  />
                  <Pressable
                    accessibilityRole="button"
                    onPress={handleAddCve}
                    style={{
                      height: 38,
                      paddingHorizontal: 14,
                      backgroundColor: `${accentColor}20`,
                      borderColor: accentColor,
                      borderWidth: 1,
                      borderRadius: 6,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{ color: accentColor, fontWeight: '700', fontSize: 13 }}>
                      Watch
                    </Text>
                  </Pressable>
                </View>
                {cveError ? (
                  <Text style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>
                    {cveError}
                  </Text>
                ) : null}
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
