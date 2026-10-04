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

import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';

export default function AboutScreen() {
  const { colors, accentColor } = useTheme();
  const version = Constants.expoConfig?.version || '1.0.0';
  const buildNumber = Constants.expoConfig?.android?.versionCode || '1';

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
          style={[styles.logoImage, { borderColor: accentColor }]}
          resizeMode="contain"
        />

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          SecuBuzz
        </Text>

        <Text style={[styles.tagline, { color: accentColor }]}>
          60-WORD SECURITY BRIEFS
        </Text>

        <Text style={[styles.description, { color: colors.textSecondary }]}>
          SecuBuzz is a cybersecurity news application
          designed to make important security
          developments easier to discover and
          understand.
        </Text>

        <InfoRow
          label="Version"
          value={`v${version} (Build ${buildNumber})`}
          colors={colors}
        />

        <View style={[styles.infoRow, { borderTopColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.textMuted }]}>
            Developer
          </Text>

          <Pressable
            accessibilityRole="link"
            accessibilityLabel="MiSo Labs Website"
            onPress={() =>
              void Linking.openURL(
                'https://secubuzz.com',
              )
            }
            style={styles.developerRow}
          >
            <Text style={[styles.developerName, { color: accentColor }]}>
              MiSo Labs
            </Text>

            <Ionicons
              name="open-outline"
              size={13}
              color={accentColor}
              style={styles.openIcon}
            />
          </Pressable>
        </View>

        <View style={[styles.infoRow, { borderTopColor: colors.border }]}>
          <Text style={[styles.infoLabel, { color: colors.textMuted }]}>
            Website
          </Text>

          <Pressable
            accessibilityRole="link"
            accessibilityLabel="SecuBuzz Website"
            onPress={() =>
              void Linking.openURL(
                'https://secubuzz.com',
              )
            }
            style={styles.developerRow}
          >
            <Text style={[styles.developerName, { color: accentColor }]}>
              secubuzz.com
            </Text>

            <Ionicons
              name="open-outline"
              size={13}
              color={accentColor}
              style={styles.openIcon}
            />
          </Pressable>
        </View>

        <InfoRow
          label="Purpose"
          value="Cybersecurity news and security briefs"
          colors={colors}
        />

        <InfoRow
          label="Platform"
          value="Android"
          colors={colors}
        />

        <View style={[styles.section, { borderTopColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Content
          </Text>

          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            SecuBuzz aggregates cybersecurity news
            information from external publishers and
            provides concise summaries, categories,
            publication information, and links to the
            original articles.
          </Text>
        </View>

        <View style={[styles.section, { borderTopColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Publisher Transparency & Content Rights
          </Text>

          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            SecuBuzz respects publisher rights and indexes public news under fair informational reporting. If an original publisher requests removal of content or RSS feeds, requests are executed within 48 business hours via publishers@secubuzz.com.
          </Text>

          <Pressable
            accessibilityRole="link"
            accessibilityLabel="Visit Publishers Policy"
            onPress={() => void Linking.openURL('https://secubuzz.com/publishers')}
            style={{ marginTop: 10 }}
          >
            <Text style={{ fontFamily: 'Exo_600SemiBold', fontSize: 13, color: accentColor }}>
              PUBLISHER TERMS & 48-HR REMOVAL SLA →
            </Text>
          </Pressable>
        </View>

        <View style={[styles.section, { borderTopColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Important
          </Text>

          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            SecuBuzz is an informational news product.
            It is not a substitute for professional
            cybersecurity advice, incident response,
            legal advice, or security testing.
          </Text>
        </View>

        <View style={[styles.section, { borderTopColor: colors.border }]}>
          <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
            Trademarks
          </Text>

          <Text style={[styles.sectionText, { color: colors.textSecondary }]}>
            All product names and trademarks are property of their respective owners, used for identification only.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
  colors: ReturnType<typeof useTheme>['colors'];
};

function InfoRow({
  label,
  value,
  colors,
}: InfoRowProps) {
  return (
    <View style={[styles.infoRow, { borderTopColor: colors.border }]}>
      <Text style={[styles.infoLabel, { color: colors.textMuted }]}>
        {label}
      </Text>

      <Text style={[styles.infoValue, { color: colors.textPrimary }]}>
        {value}
      </Text>
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
    marginBottom: 16,
  },

  developerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '65%',
  },

  developerName: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
  },

  openIcon: {
    marginLeft: 6,
  },

  title: {
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 32,
  },

  tagline: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 10,
    letterSpacing: 1.8,
    marginTop: 7,
  },

  description: {
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
    paddingVertical: 15,
  },

  infoLabel: {
    fontFamily: 'Exo_500Medium',
    fontSize: 14,
  },

  infoValue: {
    fontFamily: 'Exo_500Medium',
    fontSize: 14,
    maxWidth: '65%',
    textAlign: 'right',
  },

  section: {
    width: '100%',
    borderTopWidth: 1,
    paddingTop: spacing.lg,
    marginTop: spacing.lg,
  },

  sectionTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },

  sectionText: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
  },
});