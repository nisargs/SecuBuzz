import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
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

type LegalItemRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
  accentColor: string;
  colors: ReturnType<typeof useTheme>['colors'];
};

function LegalItemRow({
  icon,
  title,
  subtitle,
  onPress,
  accentColor,
  colors,
}: LegalItemRowProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        pressed && styles.rowPressed,
      ]}
    >
      <View
        style={[
          styles.iconWrap,
          {
            backgroundColor: `${accentColor}18`,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={20}
          color={accentColor}
        />
      </View>

      <View style={styles.rowContent}>
        <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
          {title}
        </Text>
        <Text style={[styles.rowSubtitle, { color: colors.textMuted }]}>
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={19}
        color={colors.textMuted}
      />
    </Pressable>
  );
}

export default function LegalPrivacyScreen() {
  const { colors, accentColor } = useTheme();

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: colors.background }]}
      edges={['top', 'bottom']}
    >
      {/* HEADER */}
      <View style={[styles.header, { borderBottomColor: colors.border }]}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Go back"
          hitSlop={12}
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={colors.textPrimary}
          />
        </Pressable>

        <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
          Legal & Privacy
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionEyebrow, { color: accentColor }]}>
          GOVERNANCE & COMPLIANCE
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          Privacy & Trust
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          SecuBuzz by MiSo Labs requires zero accounts and zero intrusive tracking. Review our complete legal policies, terms, and data handling practices below.
        </Text>

        {/* CHILD OPTIONS CARD */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <LegalItemRow
            icon="shield-checkmark-outline"
            title="Privacy Policy"
            subtitle="How SecuBuzz handles information"
            onPress={() => router.push('/privacy')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <LegalItemRow
            icon="document-text-outline"
            title="Terms of Use"
            subtitle="Terms and conditions governing app usage"
            onPress={() => router.push('/terms')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <LegalItemRow
            icon="lock-closed-outline"
            title="Data & Privacy"
            subtitle="Plain English summary of telemetry & device storage"
            onPress={() => router.push('/data-privacy')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <LegalItemRow
            icon="trash-bin-outline"
            title="Account Deletion Info"
            subtitle="SecuBuzz is zero-account; verify deletion policy"
            onPress={() => void Linking.openURL('https://secubuzz.com/account-deletion')}
            accentColor={accentColor}
            colors={colors}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },

  header: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    flex: 1,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    textAlign: 'center',
  },

  headerSpacer: {
    width: 32,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 24,
    paddingBottom: 48,
  },

  sectionEyebrow: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    fontFamily: 'Exo_700Bold',
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 8,
  },

  description: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 24,
  },

  card: {
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 12,
  },

  rowPressed: {
    opacity: 0.7,
  },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowContent: {
    flex: 1,
  },

  rowTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14.5,
    marginBottom: 3,
  },

  rowSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 16,
  },

  divider: {
    height: 1,
    marginLeft: 64,
  },
});
