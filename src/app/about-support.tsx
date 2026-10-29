import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import Constants from 'expo-constants';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingModal } from '../components/OnboardingModal';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { requestStoreReview } from '../utils/storeReview';

type SubItemRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
  accentColor: string;
  colors: ReturnType<typeof useTheme>['colors'];
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

function SubItemRow({
  icon,
  title,
  subtitle,
  onPress,
  accentColor,
  colors,
  rightIcon = 'chevron-forward',
}: SubItemRowProps) {
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
        name={rightIcon}
        size={rightIcon === 'open-outline' ? 18 : 19}
        color={colors.textMuted}
      />
    </Pressable>
  );
}

export default function AboutSupportScreen() {
  const { colors, accentColor } = useTheme();
  const [walkthroughOpen, setWalkthroughOpen] = useState(false);

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
          About & Support
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={[styles.sectionEyebrow, { color: accentColor }]}>
          COMMUNITY & INFORMATION
        </Text>
        <Text style={[styles.title, { color: colors.textPrimary }]}>
          SecuBuzz Intelligence
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Find documentation, provide product feedback, review third-party open-source components, and reach the engineering team.
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
          <SubItemRow
            icon="compass-outline"
            title="Quick Start Walkthrough"
            subtitle="Replay the 4-step feature introduction"
            onPress={() => setWalkthroughOpen(true)}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <SubItemRow
            icon="star-outline"
            title="Rate SecuBuzz on Google Play"
            subtitle="Opens directly here. No need to switch apps."
            onPress={() => void requestStoreReview({ forceStoreFallbackIfPrompted: true })}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <SubItemRow
            icon="chatbubbles-outline"
            title="Contact & Feedback"
            subtitle="Share suggestions, report bugs, or get support"
            onPress={() => router.push('/contact')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <SubItemRow
            icon="information-circle-outline"
            title="About SecuBuzz"
            subtitle={`Version ${Constants.expoConfig?.version ?? '1.0.3'}, data pipeline & mission`}
            onPress={() => router.push('/about')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <SubItemRow
            icon="list-outline"
            title="Monitored Sources & Feeds"
            subtitle="All 48 indexed feeds, vendor PSIRTs & databases"
            rightIcon="open-outline"
            onPress={() => void Linking.openURL('https://secubuzz.com/sources')}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

          <SubItemRow
            icon="code-slash-outline"
            title="Open Source Licenses"
            subtitle="Software packages, notices & dependencies"
            onPress={() => router.push('/licenses')}
            accentColor={accentColor}
            colors={colors}
          />
        </View>

        {/* EXTERNAL LINK */}
        <Pressable
          accessibilityRole="link"
          accessibilityLabel="Visit MiSo Labs Website"
          onPress={() => void Linking.openURL('https://secubuzz.com')}
          style={[
            styles.linkCard,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
            },
          ]}
        >
          <Ionicons
            name="globe-outline"
            size={20}
            color={accentColor}
          />
          <View style={styles.linkTextWrap}>
            <Text style={[styles.linkTitle, { color: colors.textPrimary }]}>
              Visit SecuBuzz Online
            </Text>
            <Text style={[styles.linkSubtitle, { color: colors.textMuted }]}>
              secubuzz.com · MiSo Labs
            </Text>
          </View>
          <Ionicons
            name="open-outline"
            size={18}
            color={colors.textMuted}
          />
        </Pressable>
      </ScrollView>

      <OnboardingModal
        visible={walkthroughOpen}
        onClose={() => setWalkthroughOpen(false)}
      />
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

  linkCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 20,
    gap: 12,
  },

  linkTextWrap: {
    flex: 1,
  },

  linkTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
  },

  linkSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    marginTop: 2,
  },
});
