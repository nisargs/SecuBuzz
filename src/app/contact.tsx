import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '../theme/theme';

const BLUE = '#4CC9F0';

const SUPPORT_EMAIL = 'support@secubuzz.com';

export default function ContactScreen() {
  function openEmail() {
    void Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
  }

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
          Contact & Support
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.eyebrow}>
          SUPPORT
        </Text>

        <Text style={styles.title}>
          Need help?
        </Text>

        <Text style={styles.description}>
          For privacy questions, policy questions,
          security concerns, or issues with SecuBuzz,
          contact the SecuBuzz team.
        </Text>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Email SecuBuzz support"
          onPress={openEmail}
          style={styles.emailButton}
        >
          <Ionicons
            name="mail-outline"
            size={24}
            color={BLUE}
          />

          <View style={styles.emailBody}>
            <Text style={styles.emailTitle}>
              Email SecuBuzz
            </Text>

            <Text style={styles.emailAddress}>
              support@secubuzz.com
            </Text>
          </View>

          <Ionicons
            name="arrow-forward"
            size={22}
            color={BLUE}
          />
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Visit SecuBuzz official website"
          onPress={() =>
            void Linking.openURL(
              'https://secubuzz.com',
            )
          }
          style={[styles.emailButton, { marginTop: spacing.md }]}
        >
          <Ionicons
            name="globe-outline"
            size={24}
            color={BLUE}
          />

          <View style={styles.emailBody}>
            <Text style={styles.emailTitle}>
              Official Website
            </Text>

            <Text style={styles.emailAddress}>
              secubuzz.com
            </Text>
          </View>

          <Ionicons
            name="open-outline"
            size={20}
            color={colors.textMuted}
          />
        </Pressable>

        <View style={styles.note}>
          <Ionicons
            name="shield-checkmark-outline"
            size={22}
            color={BLUE}
          />

          <Text style={styles.noteText}>
            Security or privacy reports should include
            enough information for us to understand and
            investigate the issue. Please do not include
            passwords, authentication codes, or other
            sensitive information.
          </Text>
        </View>
      </View>
    </SafeAreaView>
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

  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: 38,
  },

  eyebrow: {
    color: BLUE,
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.8,
  },

  title: {
    color: colors.textPrimary,
    fontFamily: 'Exo_800ExtraBold',
    fontSize: 30,
    marginTop: 8,
  },

  description: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 14,
    marginBottom: 28,
  },

  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.lg,
  },

  emailBody: {
    flex: 1,
    marginLeft: 14,
  },

  emailTitle: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
  },

  emailAddress: {
    color: colors.textMuted,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    marginTop: 4,
  },

  note: {
    flexDirection: 'row',
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  noteText: {
    flex: 1,
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
    lineHeight: 20,
    marginLeft: 12,
  },
});