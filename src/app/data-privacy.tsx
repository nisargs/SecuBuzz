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

import { colors, spacing } from '../theme/theme';

const BLUE = '#4CC9F0';

export default function DataPrivacyScreen() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom']}
    >
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <Text style={styles.headerTitle}>
          Data & Privacy
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>
          SECUBUZZ DATA CONTROL
        </Text>

        <Text style={styles.title}>
          SecuBuzz Privacy & Data Control
        </Text>

        <InfoCard
          icon="person-outline"
          title="SecuBuzz Account Deletion"
          text="SecuBuzz does not require or support user accounts. There are no logins, passwords, or cloud user profiles to delete."
        />

        <InfoCard
          icon="bookmark-outline"
          title="SecuBuzz Saved Articles"
          text="Your saved articles are stored strictly on your local device so SecuBuzz can display them offline."
        />

        <InfoCard
          icon="trash-outline"
          title="Deleting SecuBuzz Local Data"
          text="You can remove saved articles inside SecuBuzz anytime. Clearing app data in Android Settings (Settings > Apps > SecuBuzz > Storage > Clear Data) or uninstalling SecuBuzz deletes all local data."
        />

        <InfoCard
          icon="notifications-outline"
          title="SecuBuzz Push Notification Tokens"
          text="SecuBuzz uses pseudonymous push tokens solely to alert you to breaking security briefs. Disable anytime in Android Settings > Apps > SecuBuzz > Notifications or email support@secubuzz.com to delete your token."
        />

        <InfoCard
          icon="eye-off-outline"
          title="No Personalized Tracking"
          text="SecuBuzz does not use tracking or advertising SDKs. Your reading habits are never profiled or sold."
        />

        <InfoCard
          icon="cloud-outline"
          title="SecuBuzz News Feed"
          text="SecuBuzz retrieves verified cybersecurity threat briefings from SecuBuzz cloud infrastructure over TLS encryption."
        />

        <InfoCard
          icon="open-outline"
          title="External Publishers"
          text="When opening external sources, you leave SecuBuzz and the respective publisher's privacy practices apply."
        />

        <View style={styles.policyBox}>
          <Text style={styles.policyTitle}>
            Want the full details?
          </Text>

          <Text style={styles.policyText}>
            Read the complete Privacy Policy for
            information about data handling,
            infrastructure, security, retention,
            third-party services, and your privacy
            rights.
          </Text>

          <Text
            style={styles.policyLink}
            onPress={() => router.push('/privacy')}
          >
            VIEW PRIVACY POLICY →
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
};

function InfoCard({
  icon,
  title,
  text,
}: InfoCardProps) {
  return (
    <View style={styles.card}>
      <Ionicons
        name={icon}
        size={24}
        color={BLUE}
      />

      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>
          {title}
        </Text>

        <Text style={styles.cardText}>
          {text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  headerTitle: {
    flex: 1,
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  headerSpacer: {
    width: 24,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: 48,
  },

  eyebrow: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.8,
    marginBottom: 8,
  },

  title: {
    color: colors.textPrimary,
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 28,
    lineHeight: 36,
    marginBottom: spacing.xl,
  },

  card: {
    flexDirection: 'row',
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    marginBottom: 12,
  },

  cardBody: {
    flex: 1,
    marginLeft: 14,
  },

  cardTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
    marginBottom: 6,
  },

  cardText: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 21,
  },

  policyBox: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginTop: spacing.lg,
    paddingTop: spacing.xl,
  },

  policyTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },

  policyText: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
  },

  policyLink: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 16,
  },
});