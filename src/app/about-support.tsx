import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import Constants from 'expo-constants';
import { useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OnboardingModal } from '../components/OnboardingModal';
import { WhatsNewModal } from '../components/WhatsNewModal';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { requestStoreReview } from '../utils/storeReview';

type SubItemRowProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  customIcon?: React.ReactNode;
  badge?: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  accentColor: string;
  colors: ReturnType<typeof useTheme>['colors'];
  rightIcon?: keyof typeof Ionicons.glyphMap;
};

function SubItemRow({
  icon,
  customIcon,
  badge,
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
        {customIcon ? (
          customIcon
        ) : icon ? (
          <Ionicons
            name={icon}
            size={20}
            color={accentColor}
          />
        ) : null}
      </View>

      <View style={styles.rowContent}>
        <View style={styles.rowTitleWrap}>
          <Text style={[styles.rowTitle, { color: colors.textPrimary }]}>
            {title}
          </Text>
          {badge ? (
            <View
              style={[
                styles.badgeWrap,
                {
                  backgroundColor: `${accentColor}1A`,
                  borderColor: `${accentColor}44`,
                },
              ]}
            >
              <Text style={[styles.badgeText, { color: accentColor }]}>
                {badge}
              </Text>
            </View>
          ) : null}
        </View>
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
  const [whatsNewOpen, setWhatsNewOpen] = useState(false);

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

        {/* WHAT'S NEW IN V1.0.4 PILL BANNER (MATCHING WEBSITE) */}
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="What's New in v1.0.4 · My Stack & CVE Watchlist"
          onPress={() => setWhatsNewOpen(true)}
          style={({ pressed }) => [
            styles.whatsNewPill,
            {
              borderColor: `${accentColor}44`,
              backgroundColor: `${accentColor}12`,
            },
            pressed && styles.whatsNewPillPressed,
          ]}
        >
          <View style={styles.pillDotContainer}>
            <View style={[styles.pillOuterPulse, { backgroundColor: `${accentColor}33`, borderColor: `${accentColor}66` }]} />
            <View style={[styles.pillInnerDot, { backgroundColor: accentColor }]} />
          </View>
          <Text style={[styles.pillTitle, { color: accentColor }]}>
            What's New in v1.0.4
          </Text>
          <Text style={[styles.pillDotSeparator, { color: colors.textMuted }]}>·</Text>
          <Text
            style={[styles.pillTagline, { color: colors.textPrimary }]}
            numberOfLines={1}
          >
            My Stack & CVE Watchlist
          </Text>
          <Ionicons
            name="arrow-forward"
            size={12}
            color={accentColor}
            style={styles.pillArrow}
          />
        </Pressable>

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
            customIcon={
              <View style={styles.dotIconBox}>
                <View style={[styles.dotOuterGlow, { backgroundColor: `${accentColor}33`, borderColor: `${accentColor}60` }]} />
                <View style={[styles.dotSolidCore, { backgroundColor: accentColor }]} />
              </View>
            }
            badge="LATEST"
            title="What's New in v1.0.4"
            subtitle="Release notes, My Stack & CVE Watchlist guide"
            onPress={() => setWhatsNewOpen(true)}
            accentColor={accentColor}
            colors={colors}
          />

          <View style={[styles.divider, { backgroundColor: colors.border }]} />

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
            subtitle={`Version ${Constants.expoConfig?.version ?? '1.0.4'}, data pipeline & mission`}
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

      <WhatsNewModal
        visible={whatsNewOpen}
        onClose={() => setWhatsNewOpen(false)}
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
    marginBottom: 16,
  },

  whatsNewPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 9999,
    borderWidth: 1,
    marginBottom: 20,
    maxWidth: '100%',
  },

  whatsNewPillPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.985 }],
  },

  pillDotContainer: {
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pillOuterPulse: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
  },

  pillInnerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  pillTitle: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 12,
    fontWeight: '700',
  },

  pillDotSeparator: {
    fontSize: 12,
  },

  pillTagline: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 12,
    flexShrink: 1,
  },

  pillArrow: {
    marginLeft: 2,
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

  rowTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },

  badgeWrap: {
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 4,
    borderWidth: 1,
  },

  badgeText: {
    fontFamily: Platform.select({ ios: 'Menlo', default: 'monospace' }),
    fontSize: 9.5,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  dotIconBox: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dotOuterGlow: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
  },

  dotSolidCore: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  rowTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14.5,
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
