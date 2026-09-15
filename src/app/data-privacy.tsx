import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
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
        <Ionicons
          name="arrow-back"
          size={24}
          color={colors.textPrimary}
          onPress={() => router.back()}
        />

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
          YOUR DATA
        </Text>

        <Text style={styles.title}>
          Your privacy, simply explained.
        </Text>

        <InfoCard
          icon="bookmark-outline"
          title="Saved articles"
          text="Your saved articles are stored locally on your device so SecuBuzz can remember them."
        />

        <InfoCard
          icon="person-outline"
          title="No account required"
          text="The current version of SecuBuzz does not require you to create an account to read and save briefs."
        />

        <InfoCard
          icon="eye-off-outline"
          title="No personalized tracking"
          text="The current version does not intentionally use advertising or personalized tracking SDKs."
        />

        <InfoCard
          icon="cloud-outline"
          title="News feed"
          text="SecuBuzz retrieves cybersecurity news-feed data from SecuBuzz infrastructure so the app can display current briefs."
        />

        <InfoCard
          icon="open-outline"
          title="External publishers"
          text="When you open an original article, you leave SecuBuzz and the publisher's own privacy practices apply."
        />

        <InfoCard
          icon="trash-outline"
          title="Deleting local data"
          text="You can remove saved articles from the Saved section. Removing the app or its local storage also removes locally stored saved-article data."
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