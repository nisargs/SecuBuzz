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

export default function DataPrivacyScreen() {
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
          Data & Privacy
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.eyebrow, { color: accentColor }]}>
          SECUBUZZ DATA CONTROL
        </Text>

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          SecuBuzz Privacy & Data Control
        </Text>

        <InfoCard
          icon="person-outline"
          title="SecuBuzz Account Deletion"
          text="SecuBuzz does not require or support user accounts. There are no logins, passwords, or cloud user profiles to delete."
          colors={colors}
          accentColor={accentColor}
        />

        <InfoCard
          icon="phone-portrait-outline"
          title="On-Device Storage Only"
          text="Bookmarks and app preferences are stored exclusively on your device. They are not transmitted to or stored on any server."
          colors={colors}
          accentColor={accentColor}
        />

        <InfoCard
          icon="trash-outline"
          title="How to Remove All App Data"
          text="Uninstalling SecuBuzz immediately and permanently deletes all on-device data, including saved articles and preferences."
          colors={colors}
          accentColor={accentColor}
        />

        <InfoCard
          icon="notifications-outline"
          title="Push Notification Tokens"
          text="If you enable notifications, a push token is registered to deliver breaking news alerts. No personal identifiers are attached to this token."
          colors={colors}
          accentColor={accentColor}
        />

        <View style={[styles.policyBox, { borderTopColor: colors.border }]}>
          <Text style={[styles.policyTitle, { color: colors.textPrimary }]}>
            Full Privacy Policy
          </Text>

          <Text style={[styles.policyText, { color: colors.textSecondary }]}>
            SecuBuzz and developer MiSo Labs are committed
            to minimal data handling and full transparency.
            For full details, read our complete privacy policy.
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Read complete Privacy Policy"
            onPress={() => router.push('/privacy')}
          >
            <Text style={[styles.policyLink, { color: accentColor }]}>
              READ FULL PRIVACY POLICY →
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  text: string;
  colors: ReturnType<typeof useTheme>['colors'];
  accentColor: string;
};

function InfoCard({
  icon,
  title,
  text,
  colors,
  accentColor,
}: InfoCardProps) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.surface,
          borderColor: colors.border,
        },
      ]}
    >
      <Ionicons
        name={icon}
        size={24}
        color={accentColor}
      />

      <View style={styles.cardBody}>
        <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>
          {title}
        </Text>

        <Text style={[styles.cardText, { color: colors.textSecondary }]}>
          {text}
        </Text>
      </View>
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
    fontSize: 28,
    lineHeight: 36,
    marginBottom: spacing.xl,
  },

  card: {
    flexDirection: 'row',
    padding: spacing.lg,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 12,
  },

  cardBody: {
    flex: 1,
    marginLeft: 14,
  },

  cardTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
    marginBottom: 6,
  },

  cardText: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 21,
  },

  policyBox: {
    borderTopWidth: 1,
    marginTop: spacing.lg,
    paddingTop: spacing.xl,
  },

  policyTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    marginBottom: 8,
  },

  policyText: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
  },

  policyLink: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 16,
  },
});