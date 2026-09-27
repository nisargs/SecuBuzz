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

const PACKAGES = [
  { name: 'expo', license: 'MIT License' },
  { name: 'expo-router', license: 'MIT License' },
  { name: 'react', license: 'MIT License' },
  { name: 'react-native', license: 'MIT License' },
  { name: '@expo-google-fonts/exo', license: 'SIL Open Font License' },
  { name: '@expo/vector-icons', license: 'MIT License' },
  { name: 'expo-constants', license: 'MIT License' },
  { name: 'expo-device', license: 'MIT License' },
  { name: 'expo-font', license: 'MIT License' },
  { name: 'expo-linking', license: 'MIT License' },
  { name: 'expo-notifications', license: 'MIT License' },
  { name: 'expo-splash-screen', license: 'MIT License' },
  { name: 'expo-status-bar', license: 'MIT License' },
  { name: 'react-native-safe-area-context', license: 'MIT License' },
  { name: 'react-native-screens', license: 'MIT License' },
  { name: '@react-native-async-storage/async-storage', license: 'MIT License' },
];

export default function LicensesScreen() {
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
          Open Source Licenses
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <Text style={[styles.eyebrow, { color: accentColor }]}>
          OPEN SOURCE
        </Text>

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Software licenses
        </Text>

        <Text style={[styles.paragraph, { color: colors.textSecondary }]}>
          SecuBuzz is built using open-source software
          and third-party packages. Each dependency
          remains subject to its applicable license.
        </Text>

        {PACKAGES.map((pkg) => (
          <View
            key={pkg.name}
            style={[styles.license, { borderTopColor: colors.border }]}
          >
            <View style={styles.licenseBody}>
              <Text style={[styles.licenseName, { color: colors.textPrimary }]}>
                {pkg.name}
              </Text>

              <Text style={[styles.licenseType, { color: colors.textMuted }]}>
                {pkg.license}
              </Text>
            </View>

            <Ionicons
              name="shield-checkmark-outline"
              size={18}
              color={accentColor}
            />
          </View>
        ))}

        <Text style={[styles.note, { color: colors.textMuted }]}>
          All third-party trademarks and trade names
          belong to their respective owners.
        </Text>
      </ScrollView>
    </SafeAreaView>
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
    marginBottom: 12,
  },

  paragraph: {
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },

  license: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingVertical: 16,
  },

  licenseBody: {
    flex: 1,
  },

  licenseName: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
  },

  licenseType: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    marginTop: 4,
  },

  note: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 19,
    marginTop: spacing.xl,
  },
});