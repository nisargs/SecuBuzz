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

export default function AboutScreen() {
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
          About SecuBuzz
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <View style={styles.logo}>
          <Text style={styles.logoText}>
            SB
          </Text>
        </View>

        <Text style={styles.title}>
          SecuBuzz
        </Text>

        <Text style={styles.tagline}>
          60-WORD SECURITY BRIEFS
        </Text>

        <Text style={styles.description}>
          SecuBuzz is a cybersecurity news application
          designed to make important security
          developments easier to discover and
          understand.
        </Text>

        <InfoRow
          label="Version"
          value="1.0.0"
        />

        <InfoRow
          label="Purpose"
          value="Cybersecurity news and security briefs"
        />

        <InfoRow
          label="Platform"
          value="Android"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Content
          </Text>

          <Text style={styles.sectionText}>
            SecuBuzz aggregates cybersecurity news
            information from external publishers and
            provides concise summaries, categories,
            publication information, and links to the
            original articles.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Important
          </Text>

          <Text style={styles.sectionText}>
            SecuBuzz is an informational news product.
            It is not a substitute for professional
            cybersecurity advice, incident response,
            legal advice, or security testing.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>
        {label}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
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
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: 42,
    paddingBottom: 48,
  },

  logo: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: BLUE,
    marginBottom: 16,
  },

  logoText: {
    color: BLUE,
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 24,
  },

  title: {
    color: colors.textPrimary,
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 32,
  },

  tagline: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10,
    letterSpacing: 1.8,
    marginTop: 7,
  },

  description: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 30,
  },

  infoRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 15,
  },

  infoLabel: {
    color: colors.textMuted,
    fontFamily: 'Exo_500Medium',
    fontSize: 14,
  },

  infoValue: {
    color: colors.textPrimary,
    fontFamily: 'Exo_500Medium',
    fontSize: 14,
    maxWidth: '65%',
    textAlign: 'right',
  },

  section: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.lg,
    marginTop: spacing.lg,
  },

  sectionTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },

  sectionText: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
  },
});