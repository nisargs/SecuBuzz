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
import {
  ARTICLE_CATEGORIES,
  type Article,
  type CategoryFilter,
} from '../models/article';
import { spacing } from '../theme/theme';

export type SeverityFilter = 'ALL' | NonNullable<Article['severity']>;
export type SourceFilter = 'ALL' | 'MY_STACK' | 'PSIRT' | 'MEDIA';

const SEVERITIES: NonNullable<Article['severity']>[] = [
  'CRITICAL',
  'HIGH',
  'MEDIUM',
  'LOW',
];

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
  selectedSeverity: SeverityFilter;
  onSelectSeverity: (severity: SeverityFilter) => void;
  selectedSource?: SourceFilter;
  onSelectSource?: (source: SourceFilter) => void;
  onReset: () => void;
  totalArticlesCount: number;
  filteredCount: number;
  severityCounts: Record<string, number>;
  categoryCounts: Record<string, number>;
  sourceCounts?: Record<string, number>;
};

function formatCategoryLabel(category: CategoryFilter): string {
  if (category === 'ALL') return 'All Categories';
  if (category === 'CVE') return 'CVE';
  if (category === 'NATION_STATE') return 'Nation State';
  return category.charAt(0) + category.slice(1).toLowerCase();
}

export function FilterModal({
  visible,
  onClose,
  selectedCategory,
  onSelectCategory,
  selectedSeverity,
  onSelectSeverity,
  selectedSource = 'ALL',
  onSelectSource,
  onReset,
  totalArticlesCount,
  filteredCount,
  severityCounts,
  categoryCounts,
  sourceCounts,
}: FilterModalProps) {
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
    onSelectSource?.('MY_STACK');
    setCveInput('');
    setCveError('');
  };

  const isAnyFilterActive =
    selectedCategory !== 'ALL' ||
    selectedSeverity !== 'ALL' ||
    selectedSource !== 'ALL';

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
          style={[
            styles.animatedBackdrop,
            { opacity: backdropOpacity },
          ]}
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
                Filter News Briefs
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
                  THREAT SEVERITY
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
                {/* ALL SEVERITIES */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSeverity('ALL')}
                  style={[
                    styles.severityChip,
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
                    All ({severityCounts?.ALL ?? totalArticlesCount})
                  </Text>
                </Pressable>

                {/* INDIVIDUAL SEVERITIES */}
                {SEVERITIES.map((sev) => {
                  const isSelected = selectedSeverity === sev;
                  const cfg = severityColors[sev];
                  const count = severityCounts[sev] || 0;

                  return (
                    <Pressable
                      key={sev}
                      accessibilityRole="button"
                      onPress={() => onSelectSeverity(sev)}
                      style={[
                        styles.severityChip,
                        {
                          borderColor: colors.border,
                          backgroundColor: isSelected
                            ? isDark
                              ? cfg.surface
                              : `${cfg.primary}15`
                            : isDark
                            ? colors.background
                            : colors.surface,
                        },
                        isSelected && {
                          borderColor: cfg.border || cfg.primary,
                        },
                      ]}
                    >
                      <View
                        style={[
                          styles.severityDot,
                          { backgroundColor: cfg.primary },
                        ]}
                      />
                      <Text
                        style={[
                          styles.chipText,
                          { color: colors.textSecondary },
                          isSelected && {
                            color: cfg.primary,
                            fontWeight: '700',
                          },
                        ]}
                      >
                        {sev} ({count})
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* CATEGORY & TOPIC SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                  CATEGORY & TOPIC
                </Text>
                {selectedCategory !== 'ALL' && (
                  <Pressable
                    hitSlop={6}
                    onPress={() => onSelectCategory('ALL')}
                  >
                    <Text style={[styles.resetSectionText, { color: accentColor }]}>
                      Clear
                    </Text>
                  </Pressable>
                )}
              </View>

              <View style={styles.chipsRow}>
                {(['ALL' as const, ...ARTICLE_CATEGORIES]).map((cat) => {
                  const isSelected = selectedCategory === cat;
                  const count = categoryCounts[cat] ?? 0;

                  return (
                    <Pressable
                      key={cat}
                      accessibilityRole="button"
                      onPress={() => onSelectCategory(cat)}
                      style={[
                        styles.categoryChip,
                        {
                          borderColor: colors.border,
                          backgroundColor: isSelected
                            ? isDark
                              ? `${accentColor}20`
                              : `${accentColor}15`
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
                        {formatCategoryLabel(cat)} ({count})
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>

            {/* INTELLIGENCE SOURCE SECTION */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text
                  style={[styles.sectionTitle, { color: colors.textSecondary }]}
                >
                  INTELLIGENCE SOURCE
                </Text>
                {selectedSource !== 'ALL' && onSelectSource && (
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
                  onPress={() => onSelectSource?.('ALL')}
                  style={[
                    styles.severityChip,
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
                    All Sources ({sourceCounts?.ALL ?? totalArticlesCount})
                  </Text>
                </Pressable>

                {/* MY STACK */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource?.('MY_STACK')}
                  style={[
                    styles.severityChip,
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
                    My Stack ({sourceCounts?.MY_STACK ?? 0})
                  </Text>
                </Pressable>

                {/* VENDOR PSIRT */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource?.('PSIRT')}
                  style={[
                    styles.severityChip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'PSIRT'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'PSIRT' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'PSIRT' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Vendor PSIRT ({sourceCounts?.PSIRT ?? 0})
                  </Text>
                </Pressable>

                {/* RESEARCH & MEDIA */}
                <Pressable
                  accessibilityRole="button"
                  onPress={() => onSelectSource?.('MEDIA')}
                  style={[
                    styles.severityChip,
                    {
                      borderColor: colors.border,
                      backgroundColor:
                        selectedSource === 'MEDIA'
                          ? isDark
                            ? `${accentColor}20`
                            : `${accentColor}15`
                          : isDark
                          ? colors.background
                          : colors.surface,
                    },
                    selectedSource === 'MEDIA' && {
                      borderColor: accentColor,
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.chipText,
                      { color: colors.textSecondary },
                      selectedSource === 'MEDIA' && {
                        color: accentColor,
                        fontWeight: '700',
                      },
                    ]}
                  >
                    Media & Research ({sourceCounts?.MEDIA ?? 0})
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
                        onSelectSource?.('ALL');
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
                Select enterprise vendors or pin CVEs to filter dispatches:
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
                          onSelectSource?.('MY_STACK');
                        }
                      }}
                      style={[
                        styles.severityChip,
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
                        if (myStack.selectedVendors.length === 0 && selectedSource === 'MY_STACK') {
                          onSelectSource?.('ALL');
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
                          styles.severityChip,
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
                    No CVEs currently pinned. Add CVEs below or pin them directly from stories & advisories.
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
                      borderRadius: 8,
                      paddingHorizontal: 10,
                      color: colors.textPrimary,
                      backgroundColor: isDark ? colors.background : colors.surface,
                      fontFamily: 'Exo_600SemiBold',
                      fontSize: 13,
                    }}
                  />
                  <Pressable
                    accessibilityRole="button"
                    onPress={handleAddCve}
                    style={{
                      height: 38,
                      paddingHorizontal: 14,
                      borderRadius: 8,
                      borderWidth: 1,
                      borderColor: accentColor,
                      backgroundColor: `${accentColor}20`,
                      alignItems: 'center',
                      justifyContent: 'center',
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
                Show {filteredCount} {filteredCount === 1 ? 'Story' : 'Stories'}
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
  severityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
  severityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  categoryChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
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
