import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '../theme/theme';

const BLUE = '#4CC9F0';

export default function AboutScreen() {
  const version = Constants.expoConfig?.version || '1.0.0';
  const buildNumber = Constants.expoConfig?.android?.versionCode || '1';

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
        <Image
          source={require('../../assets/icon.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />

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
          value={`v${version} (Build ${buildNumber})`}
        />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>
            Developer
          </Text>

          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Nisarg Soni on LinkedIn"
            onPress={() =>
              void Linking.openURL(
                'https://www.linkedin.com/in/soni-nisarg/',
              )
            }
            style={styles.developerRow}
          >
            <Text style={styles.developerName}>
              Nisarg Soni
            </Text>

            <Ionicons
              name="logo-linkedin"
              size={16}
              color="#0A66C2"
              style={styles.linkedinIcon}
            />
          </Pressable>
        </View>

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

  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: BLUE,
    marginBottom: 16,
  },

  developerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '65%',
  },

  developerName: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationColor: '#0A66C2',
  },

  linkedinIcon: {
    marginLeft: 6,
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