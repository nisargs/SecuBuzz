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

export default function TermsScreen() {
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
          Terms of Use
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.eyebrow, { color: accentColor }]}>
          SECUBUZZ
        </Text>

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Terms of Use
        </Text>

        <Text style={[styles.updated, { color: colors.textMuted }]}>
          Effective date: September 24, 2026
        </Text>

        <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
          Please read these Terms of Use ("Terms") carefully
          before using the SecuBuzz mobile application.
        </Text>

        <Section title="1. Acceptance of Terms" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            By downloading, installing, or using SecuBuzz,
            you agree to be bound by these Terms. If you do
            not agree, do not use the application.
          </Text>
        </Section>

        <Section title="2. Informational Purpose Only" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz provides cybersecurity news summaries,
            headlines, and links for informational and educational
            awareness purposes only.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz does not provide legal, cybersecurity,
            incident response, forensic, compliance, or technical
            advice. You should consult qualified cybersecurity
            professionals for incident investigation or operational
            defense.
          </Text>
        </Section>

        <Section title="3. Third-Party Content & Links" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz summarizes content from external third-party
            publishers. We do not own, control, or endorse third-party
            sites or their reporting.
          </Text>

          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            When you open links within SecuBuzz, you leave the application
            and are subject to the terms, conditions, and privacy policies
            of those external publishers.
          </Text>
        </Section>

        <Section title="4. Prohibited Uses" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            You agree not to misuse SecuBuzz, reverse-engineer,
            tamper with, disrupt, or access our servers, APIs, or
            content through unauthorized automated means without
            prior written permission.
          </Text>
        </Section>

        <Section title="5. Disclaimer of Warranties" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            SecuBuzz is provided on an "AS IS" and "AS AVAILABLE"
            basis without warranties of any kind, whether express
            or implied. We do not guarantee that the application
            will be error-free, uninterrupted, or that news summaries
            will be complete or timely.
          </Text>
        </Section>

        <Section title="6. Limitation of Liability" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            To the maximum extent permitted by applicable law,
            MiSo Labs and SecuBuzz shall not be liable for any
            indirect, incidental, special, consequential, or punitive
            damages arising from your use of or inability to use the
            application.
          </Text>
        </Section>

        <Section title="7. Contact" colors={colors}>
          <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
            For questions regarding these Terms, contact:
          </Text>

          <Text style={[styles.contact, { color: accentColor }]}>
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
  },
});