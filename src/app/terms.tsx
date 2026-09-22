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

export default function TermsScreen() {
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
          Terms of Use
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
          Terms of Use
        </Text>

        <Text style={styles.updated}>
          Effective date: September 14, 2026
        </Text>

        <Section title="1. Acceptance">
          <Text style={styles.paragraph}>
            By using SecuBuzz, you agree to these Terms
            of Use. If you do not agree with these terms,
            please do not use the application.
          </Text>
        </Section>

        <Section title="2. About SecuBuzz">
          <Text style={styles.paragraph}>
            SecuBuzz provides cybersecurity news
            summaries, security briefs, classifications,
            and links to original publisher content.
          </Text>

          <Text style={styles.paragraph}>
            SecuBuzz is an informational service and
            does not provide professional cybersecurity,
            legal, financial, or other professional
            advice.
          </Text>
        </Section>

        <Section title="3. Accuracy of Information">
          <Text style={styles.paragraph}>
            We aim to provide useful and accurate
            cybersecurity information, but SecuBuzz
            cannot guarantee that every headline,
            summary, classification, publication time,
            or other piece of information is complete,
            current, or error-free.
          </Text>

          <Text style={styles.paragraph}>
            Users should consult the original publisher
            and appropriate authoritative sources before
            making decisions based on cybersecurity
            information.
          </Text>
        </Section>

        <Section title="4. Third-Party Content">
          <Text style={styles.paragraph}>
            Article content belongs to its respective
            publishers and rights holders.
          </Text>

          <Text style={styles.paragraph}>
            SecuBuzz may provide headlines, summaries,
            metadata, and links to third-party content.
            Your use of external publisher websites is
            subject to their terms and policies.
          </Text>
        </Section>

        <Section title="5. Acceptable Use">
          <Text style={styles.paragraph}>
            You agree not to misuse SecuBuzz, interfere
            with its operation, attempt unauthorized
            access to its infrastructure, or use the
            service to violate applicable laws.
          </Text>
        </Section>

        <Section title="6. Intellectual Property">
          <Text style={styles.paragraph}>
            The SecuBuzz name, application interface,
            original software, branding, and original
            materials are owned by or licensed to
            MiSo Labs, except for third-party
            materials and content identified as belonging
            to their respective owners.
          </Text>
        </Section>

        <Section title="7. Availability">
          <Text style={styles.paragraph}>
            SecuBuzz may be changed, interrupted,
            suspended, or discontinued at any time.
            We do not guarantee uninterrupted
            availability of the service or third-party
            content.
          </Text>
        </Section>

        <Section title="8. Limitation of Liability">
          <Text style={styles.paragraph}>
            To the maximum extent permitted by applicable
            law, MiSo Labs will not be liable for
            losses arising from reliance on cybersecurity
            information provided through SecuBuzz,
            interruptions to the service, or changes to
            third-party websites or content.
          </Text>
        </Section>

        <Section title="9. Changes to These Terms">
          <Text style={styles.paragraph}>
            We may update these Terms of Use when the
            application or applicable requirements change.
            Continued use of SecuBuzz after an update
            means you accept the updated terms.
          </Text>
        </Section>

        <Section title="10. Contact">
          <Text style={styles.paragraph}>
            Questions about these Terms of Use can be
            sent to:
          </Text>

          <Text style={styles.contact}>
            support@secubuzz.com
          </Text>
        </Section>
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
  },
});