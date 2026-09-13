import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radii, spacing } from '../../theme/theme';

export default function SettingsScreen() {
  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Settings
        </Text>

        <Text style={styles.subtitle}>
          SECUBUZZ
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          About SecuBuzz
        </Text>

        <Text style={styles.body}>
          SecuBuzz turns cybersecurity news into
          short, easy-to-read briefs. Tap any story
          to open the original article from the
          publisher.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Bookmarks
        </Text>

        <Text style={styles.body}>
          Your saved stories are stored locally on
          this device. No SecuBuzz account is
          required.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          AI summaries
        </Text>

        <Text style={styles.body}>
          Summaries are generated from cybersecurity
          news sources. Always open the original
          article for the complete story and context.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Appearance
        </Text>

        <Text style={styles.body}>
          SecuBuzz currently uses a dark theme.
        </Text>
      </View>

      <Text style={styles.version}>
        SecuBuzz · Version 1.0.0
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: 5,
    paddingBottom: 14,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
  },

  subtitle: {
    marginTop: 5,
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 1.4,
  },

  card: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  label: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
  },

  body: {
    marginTop: 7,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
  },

  version: {
    marginTop: 'auto',
    marginBottom: spacing.lg,
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 11,
  },
});