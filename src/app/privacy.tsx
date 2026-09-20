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

export default function PrivacyPolicyScreen() {
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
          Privacy Policy
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>
          SECUBUZZ
        </Text>

        <Text style={styles.title}>
          Privacy Policy
        </Text>

        <Text style={styles.updated}>
          Effective date: September 14, 2026
        </Text>

        <Text style={styles.paragraph}>
          This Privacy Policy explains how SecuBuzz
          handles information when you use the
          SecuBuzz mobile application.
        </Text>

        <Section title="1. Who We Are">
          <Text style={styles.paragraph}>
            SecuBuzz is a cybersecurity news and
            security briefing application operated by
            MiSo Labs.
          </Text>

          <Text style={styles.paragraph}>
            Privacy questions can be sent to:
          </Text>

          <Text style={styles.contact}>
            support@secubuzz.com
          </Text>
        </Section>

        <Section title="2. Information We Collect">
          <Text style={styles.paragraph}>
            SecuBuzz is designed to provide
            cybersecurity news and does not require
            you to create an account to use the core
            application.
          </Text>

          <Text style={styles.paragraph}>
            Based on the current version of SecuBuzz,
            the application does not intentionally
            collect your name, email address, phone
            number, contacts, precise location,
            microphone recordings, camera recordings,
            financial information, health information,
            or authentication credentials.
          </Text>

          <Text style={styles.paragraph}>
            Articles that you save are stored locally
            on your device so that your Saved section
            can remember your selections.
          </Text>

          <Text style={styles.paragraph}>
            If you choose to enable news notifications,
            an Expo push notification token is generated for
            your device and processed to deliver alerts when
            new cybersecurity briefs are published. This
            token is strictly used for notification delivery
            and notification permissions can be revoked at
            any time through your operating system settings.
          </Text>
        </Section>

        <Section title="3. Information Stored on Your Device">
          <Text style={styles.paragraph}>
            SecuBuzz stores application data locally
            on your device. This includes information
            necessary to remember which articles you
            have saved.
          </Text>

          <Text style={styles.paragraph}>
            This locally stored information is used
            only to provide the corresponding
            application functionality.
          </Text>
        </Section>

        <Section title="4. News and Content Data">
          <Text style={styles.paragraph}>
            SecuBuzz retrieves cybersecurity news
            feed data from SecuBuzz infrastructure.
            The feed contains article information such
            as headlines, summaries, categories,
            publication times, source names, and source
            URLs.
          </Text>

          <Text style={styles.paragraph}>
            SecuBuzz may direct you to an external
            publisher when you choose to read the
            original article. Once you leave SecuBuzz,
            the external publisher's privacy practices
            apply.
          </Text>
        </Section>

        <Section title="5. Hosting and Infrastructure">
          <Text style={styles.paragraph}>
            SecuBuzz uses third-party infrastructure
            providers to host and deliver its
            cybersecurity news feed.
          </Text>

          <Text style={styles.paragraph}>
            The current feed infrastructure uses
            Cloudflare R2 for public delivery of
            SecuBuzz feed data.
          </Text>

          <Text style={styles.paragraph}>
            The SecuBuzz mobile application does not
            send your saved articles to Cloudflare R2.
          </Text>
        </Section>

        <Section title="6. AI-Assisted Feed Generation">
          <Text style={styles.paragraph}>
            SecuBuzz's backend ingestion process may
            use third-party AI infrastructure to help
            generate structured summaries and
            classifications from publicly available
            cybersecurity news sources.
          </Text>

          <Text style={styles.paragraph}>
            This backend process is separate from the
            mobile application's local saved-article
            functionality. The current application is
            not designed to send your personal
            information to the AI service as part of
            normal article browsing.
          </Text>
        </Section>

        <Section title="7. Information Sharing">
          <Text style={styles.paragraph}>
            SecuBuzz does not intentionally sell your
            personal information.
          </Text>

          <Text style={styles.paragraph}>
            The current version of the application is
            not designed to share your saved articles
            or personal information with advertisers.
          </Text>

          <Text style={styles.paragraph}>
            Information may be processed by service
            providers that support the operation of
            SecuBuzz, such as hosting and infrastructure
            providers, where necessary to provide the
            service.
          </Text>
        </Section>

        <Section title="8. Analytics and Advertising">
          <Text style={styles.paragraph}>
            The current version of SecuBuzz does not
            intentionally include third-party
            advertising SDKs or personalized
            advertising.
          </Text>

          <Text style={styles.paragraph}>
            If analytics, advertising, crash-reporting,
            or other data-collection services are added
            in a future version, this Privacy Policy and
            applicable Google Play disclosures will be
            updated as required.
          </Text>
        </Section>

        <Section title="9. Security">
          <Text style={styles.paragraph}>
            SecuBuzz uses reasonable technical and
            organizational measures appropriate to the
            nature of the information handled by the
            application.
          </Text>

          <Text style={styles.paragraph}>
            Network communication with SecuBuzz
            infrastructure is performed using HTTPS
            where supported by the service endpoint.
          </Text>
        </Section>

        <Section title="10. Data Retention and Deletion">
          <Text style={styles.paragraph}>
            Saved article selections are retained
            locally on your device until you remove
            them through the SecuBuzz application or
            remove the application's local data.
          </Text>

          <Text style={styles.paragraph}>
            Because the current version of SecuBuzz
            does not require an account, there is no
            SecuBuzz user account that you need to
            delete.
          </Text>
        </Section>

        <Section title="11. Children's Privacy">
          <Text style={styles.paragraph}>
            SecuBuzz is not directed specifically at
            children and is not designed to knowingly
            collect personal information from children.
          </Text>
        </Section>

        <Section title="12. External Websites">
          <Text style={styles.paragraph}>
            SecuBuzz links to cybersecurity news
            publishers and other external websites.
            Those websites operate independently of
            SecuBuzz and may collect information under
            their own privacy policies.
          </Text>
        </Section>

        <Section title="13. Changes to This Policy">
          <Text style={styles.paragraph}>
            We may update this Privacy Policy when
            SecuBuzz's functionality, data practices,
            infrastructure, or legal requirements
            change.
          </Text>

          <Text style={styles.paragraph}>
            The effective date at the top of this page
            indicates when this version became
            effective.
          </Text>
        </Section>

        <Section title="14. Contact Us">
          <Text style={styles.paragraph}>
            If you have questions, concerns, or
            requests regarding privacy or data
            practices, contact:
          </Text>

          <Text style={styles.contact}>
            support@secubuzz.com
          </Text>
        </Section>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            SecuBuzz
          </Text>

          <Text style={styles.footerSubtext}>
            Cybersecurity news and security briefs.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({
  title,
  children,
}: SectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      {children}
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
    fontSize: 30,
    lineHeight: 38,
  },

  updated: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginTop: 8,
    marginBottom: spacing.xl,
  },

  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    lineHeight: 25,
    marginBottom: 10,
  },

  paragraph: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 12,
  },

  contact: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 12,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.lg,
    marginTop: spacing.md,
  },

  footerText: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
  },

  footerSubtext: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginTop: 4,
  },
});