import { Ionicons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { exoFonts } from '../../theme/fonts';
import { colors, spacing } from '../../theme/theme';

const BLUE = '#4CC9F0';

export default function SettingsScreen() {
  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Settings
        </Text>

        <Text style={styles.subtitle}>
          SECU BUZZ APP SETTINGS
        </Text>
      </View>

      {/* ABOUT */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color={BLUE}
          />

          <Text style={styles.label}>
            About
          </Text>
        </View>

        <Text style={styles.body}>
          SecuBuzz is a short-form
          cybersecurity news reader.
          You see a headline, a brief
          summary, and a link to the
          original source. Full articles
          stay on the publisher's site.
        </Text>
      </View>

      {/* DATA */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons
            name="cloud-outline"
            size={22}
            color={BLUE}
          />

          <Text style={styles.label}>
            Data
          </Text>
        </View>

        <Text style={styles.body}>
          News is retrieved from the
          SecuBuzz cybersecurity feed.
          Bookmarks are stored locally
          on this device.
        </Text>
      </View>

      {/* APPEARANCE */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Ionicons
            name="color-palette-outline"
            size={22}
            color={BLUE}
          />

          <Text style={styles.label}>
            Appearance
          </Text>
        </View>

        <Text style={styles.body}>
          SecuBuzz uses a dark interface
          with blue cybersecurity accents.
          Light mode is not available yet.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor:
      colors.background,
  },

  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },

  title: {
    color: colors.textPrimary,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },

  subtitle: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginTop: 7,
  },

  card: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor:
      colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: spacing.lg,
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },

  label: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
    letterSpacing: 1.2,
    marginLeft: 8,
  },

  body: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
});