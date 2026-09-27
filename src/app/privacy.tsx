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

import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';

export default function PrivacyPolicyScreen() {
  const { colors, accentColor } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
      edges={['top', 'bottom']}
    >
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
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

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Privacy Policy
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.eyebrow, { color: accentColor }]}>
          APPLICATION PRIVACY & DATA POLICY
        </Text>

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          SecuBuzz Privacy Policy
        </Text>

        <Text style={[styles.updated, { color: colors.textMuted }]}>
          Effective date: September 24, 2026
        </Text>

        <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
          This Privacy Policy explains how the SecuBuzz mobile application
          handles information and user privacy.
        </Text>

        <Section title="1. Application Information & Developer" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Application Name: SecuBuzz
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Developer: MiSo Labs (secubuzz.com)
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz is a specialized cybersecurity news and security
            briefing application designed to deliver real-time threat
            intelligence without tracking personal identities.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Privacy and data deletion inquiries:
          </Text>

          <Text style={[styles.contact, { color: accentColor }]}>
            support@secubuzz.com
          </Text>
        </Section>

        <Section title="2. Information Collected by SecuBuzz" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz is built privacy-first and does not require you to
            create an account to use the application.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Based on the current version of SecuBuzz,
            the application does not intentionally
            collect your name, email address, phone
            number, contacts, precise location,
            microphone recordings, camera recordings,
            financial information, health information,
            or authentication credentials.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Articles that you save are stored locally
            on your device so that your Saved section
            can remember your selections.
          </Text>
        </Section>

        <Section title="3. User Accounts and Account Deletion" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz does not support or require user accounts. You do not
            create an account, log in, or provide user credentials to access
            news summaries.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Because there are no user accounts, there are no remote user account
            records, user profile databases, or account passwords to delete.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            If you wish to remove all app data from your device, you can delete
            the application or clear application data in your Android settings.
          </Text>
        </Section>

        <Section title="4. External Links and Third-Party Sites" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz displays summaries of news stories published by
            third-party sources. Each story includes links that allow you
            to view the full article on the original publisher's website.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            When you open an external link, you leave SecuBuzz and are
            subject to the terms, privacy practices, and cookie policies of
            that external site. SecuBuzz is not responsible for the privacy
            practices, content, or policies of third-party publishers.
          </Text>
        </Section>

        <Section title="5. Data Retention and Deletion" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            Any saved stories and local preferences are stored directly on
            your mobile device.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            You can delete saved stories individually within the application,
            or delete all local data by uninstalling SecuBuzz or clearing
            application data in your device settings.
          </Text>
        </Section>

        <Section title="6. Device Permissions" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz only requests permissions that are required for core
            app functionality:
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            • Notifications: To deliver optional push notification alerts for
            breaking cybersecurity news. You can enable or disable this
            permission at any time in Android settings.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            • Internet: To download cybersecurity headlines and summaries from
            our public feed.
          </Text>
        </Section>

        <Section title="7. Children's Privacy" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz is designed for general audiences and professional
            cybersecurity awareness. It is not directed at children under the
            age of 13, and we do not knowingly collect personal information
            from children.
          </Text>
        </Section>

        <Section title="8. Policy Updates" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            We may update this Privacy Policy from time to time. When changes
            occur, the effective date at the top of this policy will be
            updated. Continued use of SecuBuzz indicates acceptance of the
            updated terms.
          </Text>
        </Section>

        <Section title="9. Contact Information" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            If you have questions or concerns about this Privacy Policy or
            SecuBuzz data practices, please contact:
          </Text>

          <Text style={[styles.contact, { color: accentColor }]}>
            MiSo Labs
          </Text>

          <Text style={[styles.contact, { color: accentColor }]}>
            Website: https://secubuzz.com
          </Text>

          <Text style={[styles.contact, { color: accentColor }]}>
            Email: support@secubuzz.com
          </Text>
        </Section>

        <View style={[styles.footer, { borderTopColor: colors.border }]}>
          <Text style={[styles.footerText, { color: colors.textPrimary }]}>
            SecuBuzz by MiSo Labs
          </Text>

          <Text style={[styles.footerSubtext, { color: colors.textMuted }]}>
            Privacy-first cybersecurity intelligence
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
  colors: ReturnType<typeof useTheme>['colors'];
};

function Section({
  title,
  children,
  colors,
}: SectionProps) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
        {title}
      </Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  header: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
  },

  headerTitle: {
    flex: 1,
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
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.8,
    marginBottom: 8,
  },

  title: {
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 30,
    lineHeight: 38,
  },

  updated: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginTop: 8,
    marginBottom: spacing.xl,
  },

  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 10,
  },

  paragraph: {
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },

  contact: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 12,
  },

  footer: {
    borderTopWidth: 1,
    paddingTop: spacing.lg,
    marginTop: spacing.md,
  },

  footerText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
  },

  footerSubtext: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginTop: 4,
  },
});