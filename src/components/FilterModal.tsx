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
import {
  ARTICLE_CATEGORIES,
  type Article,
  type CategoryFilter,
} from '../models/article';
import { spacing } from '../theme/theme';

export type SeverityFilter = 'ALL' | NonNullable<Article['severity']>;

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
  onReset: () => void;
  totalArticlesCount: number;
  filteredCount: number;
  severityCounts: Record<string, number>;
  categoryCounts: Record<string, number>;
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
  onReset,
  totalArticlesCount,
  filteredCount,
  severityCounts,
  categoryCounts,
}: FilterModalProps) {
  const { colors, isDark, accentColor, severityColors } = useTheme();

  const isAnyFilterActive =
    selectedCategory !== 'ALL' || selectedSeverity !== 'ALL';

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
                Filter Intelligence
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
                    All ({totalArticlesCount})
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
                        {formatCategoryLabel(cat)}
                        {cat !== 'ALL' ? ` (${count})` : ''}
                      </Text>
                    </Pressable>
                  );
                })}
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
