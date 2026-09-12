import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../theme/theme';

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  subtitle: {
    marginTop: 4,
    color: colors.textSecondary,
    fontSize: 14,
  },
});
