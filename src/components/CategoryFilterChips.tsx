import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import type { CategoryFilter } from '../models/article';
import { ARTICLE_CATEGORIES } from '../models/article';
import { colors, radii, spacing } from '../theme/theme';
import { categoryLabel } from '../utils/categoryLabel';

const FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: 'ALL', label: 'All' },
  ...ARTICLE_CATEGORIES.map((category) => ({
    value: category,
    label: categoryLabel(category),
  })),
];

const CHIP_FONT_SIZE = 14;
const CHIP_LINE_HEIGHT = Math.ceil(CHIP_FONT_SIZE * 1.3);

type CategoryFilterChipsProps = {
  selected: CategoryFilter;
  onSelect: (filter: CategoryFilter) => void;
};

/**
 * Horizontal category filters on the Feed screen.
 * Not the colored tag on ArticleCard (see ArticleCard.tsx styles.pill).
 */
export function CategoryFilterChips({ selected, onSelect }: CategoryFilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={false}
      style={styles.scroller}
      contentContainerStyle={styles.scrollerContent}
    >
      <View style={styles.row}>
        {FILTERS.map((filter) => {
          const isActive = filter.value === selected;
          return (
            <Pressable
              key={filter.value}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              onPress={() => onSelect(filter.value)}
              style={[styles.chip, isActive && styles.chipActive]}
            >
              <Text style={[styles.chipLabel, isActive && styles.chipLabelActive]} allowFontScaling={false}>
                {filter.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    flexGrow: 0,
    overflow: 'visible',
  },
  scrollerContent: {
    overflow: 'visible',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    gap: 8,
  },
  chip: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radii.pill,
    minHeight: 36,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'visible',
    flexShrink: 0,
  },
  chipActive: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
  },
  chipLabel: {
    color: colors.textSecondary,
    fontSize: CHIP_FONT_SIZE,
    lineHeight: CHIP_LINE_HEIGHT,
    fontWeight: '600',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  chipLabelActive: {
    color: colors.background,
  },
});
