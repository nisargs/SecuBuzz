import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenHeader } from '../../components/ScreenHeader';
import { colors, radii, spacing } from '../../theme/theme';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScreenHeader title="Settings" subtitle="App details for this demo build" />

      <View style={styles.card}>
        <Text style={styles.label}>About</Text>
        <Text style={styles.body}>
          Secubuzz is a short-form cybersecurity news reader. You see a headline, a brief
          summary, and a link to the original source. Full articles stay on the publisher’s
          site.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Data</Text>
        <Text style={styles.body}>
          SecuBuzz aggregates cybersecurity news from trusted public sources
          and uses AI to create short summaries. Always open the original
          article for full details and verification.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Appearance</Text>
        <Text style={styles.body}>Dark theme only. A light mode is not available yet.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  card: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  label: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  body: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
});
