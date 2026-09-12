import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '../theme/theme';

export function LoadingState() {
  return (
    <View style={styles.center}>
      <ActivityIndicator color={colors.textPrimary} size="large" />
      <Text style={styles.secondary}>Loading stories…</Text>
    </View>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Nothing here yet</Text>
      <Text style={styles.secondary}>{message}</Text>
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Could not load stories</Text>
      <Text style={styles.secondary}>{message}</Text>
      <Pressable onPress={onRetry} style={styles.retry}>
        <Text style={styles.retryText}>Try again</Text>
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
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondary: {
    color: colors.textSecondary,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 22,
  },
  retry: {
    marginTop: spacing.sm,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radii.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  retryText: {
    color: colors.textPrimary,
    fontWeight: '600',
  },
});
