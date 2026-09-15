import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { exoFonts } from '../../theme/fonts';
import { colors, spacing } from '../../theme/theme';

const BLUE = '#4CC9F0';

type SettingsRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
};

function SettingsRow({
  icon,
  title,
  subtitle,
  onPress,
}: SettingsRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.rowPressed,
      ]}
    >
      <View style={styles.rowIcon}>
        <Ionicons
          name={icon}
          size={21}
          color={BLUE}
        />
      </View>

      <View style={styles.rowContent}>
        <Text style={styles.rowTitle}>
          {title}
        </Text>

        <Text style={styles.rowSubtitle}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={19}
        color={colors.textMuted}
      />
    </Pressable>
  );
}

export default function SettingsScreen() {
  return (
    <SafeAreaView
      style={styles.safe}
      edges={['top']}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.scrollContent
        }
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

        {/* LEGAL & PRIVACY */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionLabel}>
            LEGAL & PRIVACY
          </Text>
        </View>

        <View style={styles.legalCard}>
          <SettingsRow
            icon="shield-checkmark-outline"
            title="Privacy Policy"
            subtitle="How SecuBuzz handles information"
            onPress={() =>
              router.push('/privacy')
            }
          />

          <View style={styles.rowDivider} />

          <SettingsRow
            icon="document-text-outline"
            title="Terms of Use"
            subtitle="Terms governing use of SecuBuzz"
            onPress={() =>
              router.push('/terms')
            }
          />

          <View style={styles.rowDivider} />

          <SettingsRow
            icon="lock-closed-outline"
            title="Data & Privacy"
            subtitle="A simple overview of your data"
            onPress={() =>
              router.push('/data-privacy')
            }
          />
        </View>

        {/* ABOUT & SUPPORT */}
        <View
          style={[
            styles.sectionHeader,
            styles.aboutSectionHeader,
          ]}
        >
          <Text style={styles.sectionLabel}>
            ABOUT & SUPPORT
          </Text>
        </View>

        <View style={styles.legalCard}>
          <SettingsRow
            icon="information-outline"
            title="About SecuBuzz"
            subtitle="Version and application information"
            onPress={() =>
              router.push('/about')
            }
          />

          <View style={styles.rowDivider} />

          <SettingsRow
            icon="code-slash-outline"
            title="Open Source Licenses"
            subtitle="Third-party software and licenses"
            onPress={() =>
              router.push('/licenses')
            }
          />

          <View style={styles.rowDivider} />

          <SettingsRow
            icon="mail-outline"
            title="Contact & Support"
            subtitle="Privacy, security and support contact"
            onPress={() =>
              router.push('/contact')
            }
          />
        </View>

        <Text style={styles.version}>
          SecuBuzz · Version 1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor:
      colors.background,
  },

  scrollContent: {
    paddingBottom: 36,
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

  sectionHeader: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.md,
    marginBottom: 9,
  },

  aboutSectionHeader: {
    marginTop: spacing.lg,
  },

  sectionLabel: {
    color: colors.textMuted,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.7,
  },

  legalCard: {
    marginHorizontal: spacing.lg,
    backgroundColor:
      colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    overflow: 'hidden',
  },

  row: {
    minHeight: 72,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: 12,
  },

  rowPressed: {
    opacity: 0.7,
  },

  rowIcon: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowContent: {
    flex: 1,
    marginHorizontal: 10,
  },

  rowTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
  },

  rowSubtitle: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  rowDivider: {
    height: 1,
    backgroundColor:
      colors.border,
    marginLeft: 68,
  },

  version: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 22,
  },
});