import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../context/ThemeContext';
import { radii, spacing } from '../theme/theme';

export function LoadingState() {
  const { colors, accentColor } = useTheme();

  return (
    <View style={styles.center}>
      <ActivityIndicator color={accentColor} size="large" />
      <Text style={[styles.secondary, { color: colors.textSecondary }]}>
        Loading stories…
      </Text>
    </View>
  );
}

export function EmptyState({ message }: { message: string }) {
  const { colors } = useTheme();

  return (
    <View style={styles.center}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Nothing here yet
      </Text>
      <Text style={[styles.secondary, { color: colors.textSecondary }]}>
        {message}
      </Text>
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  const { colors } = useTheme();

  return (
    <View style={styles.center}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Could not load stories
      </Text>
      <Text style={[styles.secondary, { color: colors.textSecondary }]}>
        {message}
      </Text>
      <Pressable
        onPress={onRetry}
        style={[
          styles.retry,
          {
            backgroundColor: colors.surfaceRaised,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.retryText, { color: colors.textPrimary }]}>
          Try again
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
    gap: spacing.sm,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondary: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  retry: {
    marginTop: spacing.sm,
    borderRadius: radii.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    borderWidth: 1,
  },
  retryText: {
    fontWeight: '600',
  },
});
