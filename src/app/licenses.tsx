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

export default function LicensesScreen() {
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
          Open Source Licenses
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.eyebrow}>
          OPEN SOURCE
        </Text>

        <Text style={styles.title}>
          Software licenses
        </Text>

        <Text style={styles.paragraph}>
          SecuBuzz is built using open-source software
          and third-party packages. Each dependency
          remains subject to its applicable license.
        </Text>

        <License
          name="React Native"
          license="MIT"
        />

        <License
          name="React"
          license="MIT"
        />

        <License
          name="Expo"
          license="MIT"
        />

        <License
          name="Expo Router"
          license="MIT"
        />

        <License
          name="@expo/vector-icons"
          license="MIT"
        />

        <License
          name="AsyncStorage"
          license="MIT"
        />

        <Text style={styles.note}>
          The complete dependency and license inventory
          should be regenerated from the project's
          package lockfile before a production release.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

type LicenseProps = {
  name: string;
  license: string;
};

function License({
  name,
  license,
}: LicenseProps) {
  return (
    <View style={styles.license}>
      <View style={styles.licenseBody}>
        <Text style={styles.licenseName}>
          {name}
        </Text>

        <Text style={styles.licenseType}>
          {license}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color={colors.textMuted}
      />
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
    marginBottom: 12,
  },

  paragraph: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },

  license: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 16,
  },

  licenseBody: {
    flex: 1,
  },

  licenseName: {
    color: colors.textPrimary,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 15,
  },

  licenseType: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    marginTop: 4,
  },

  note: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 19,
    marginTop: spacing.xl,
  },
});