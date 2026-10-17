import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { haptics } from '../utils/haptics';

export const FEEDBACK_DISMISSED_KEY = 'secubuzz_feedback_card_dismissed';

interface FeedbackCardProps {
  onDismiss: () => void;
  context?: 'news' | 'advisories';
}

export function FeedbackCard({ onDismiss, context = 'news' }: FeedbackCardProps) {
  const { colors, accentColor } = useTheme();

  const handleRate = async () => {
    void haptics.notificationSuccess();
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.secubuzz.app';
    try {
      await Linking.openURL(playStoreUrl);
    } catch (err) {
      console.warn('SecuBuzz: Could not open Play Store URL:', err);
    }
  };

  const handleFeedback = async () => {
    void haptics.selection();
    const email = 'feedback@secubuzz.com';
    const subject = encodeURIComponent('[SecuBuzz App] Feature Suggestion / Feedback');
    const body = encodeURIComponent(
      `Hello SecuBuzz team,\n\nI have a suggestion or feedback regarding the ${context === 'news' ? 'news briefs' : 'threat advisories'}:\n\n`
    );
    try {
      await Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    } catch (err) {
      console.warn('SecuBuzz: Could not open mail client:', err);
    }
  };

  const handleBug = async () => {
    void haptics.selection();
    const email = 'support@secubuzz.com';
    const subject = encodeURIComponent('[SecuBuzz App] Bug Report');
    const body = encodeURIComponent(
      `Hello SecuBuzz team,\n\nI noticed an issue or bug in version 1.0.2:\n\nDetails:\n\n`
    );
    try {
      await Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    } catch (err) {
      console.warn('SecuBuzz: Could not open mail client:', err);
    }
  };

  const handleDismiss = () => {
    void haptics.selection();
    onDismiss();
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {/* Top Header Badge */}
      <View style={styles.topRow}>
        <View style={styles.badgeContainer}>
          <View style={[styles.pulseDot, { backgroundColor: accentColor }]} />
          <Text style={[styles.badgeText, { color: accentColor }]}>COMMUNITY & FEEDBACK</Text>
        </View>

        <Pressable
          onPress={handleDismiss}
          hitSlop={12}
          style={({ pressed }) => [styles.closeButton, pressed && { opacity: 0.6 }]}
          accessibilityLabel="Dismiss card"
        >
          <Ionicons name="close" size={18} color={colors.textSecondary} />
        </Pressable>
      </View>

      {/* Main Copy */}
      <Text style={[styles.headline, { color: colors.textPrimary }]}>
        Finding SecuBuzz helpful?
      </Text>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        SecuBuzz is 100% free, private, and ad-free. If you find our 60-word briefs or zero-day alerts valuable, help us grow with a rating on Google Play or send a quick note to the developer.
      </Text>

      {/* Action Buttons */}
      <View style={styles.actionColumn}>
        {/* Rate on Google Play */}
        <Pressable
          onPress={handleRate}
          style={({ pressed }) => [
            styles.primaryButton,
            { backgroundColor: accentColor },
            pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
          ]}
        >
          <Ionicons name="star" size={16} color="#0B0F14" style={styles.buttonIcon} />
          <Text style={styles.primaryButtonText}>Rate 5 Stars on Google Play</Text>
        </Pressable>

        {/* Feature Suggestion */}
        <Pressable
          onPress={handleFeedback}
          style={({ pressed }) => [
            styles.secondaryButton,
            { backgroundColor: colors.background, borderColor: colors.border },
            pressed && { borderColor: accentColor },
          ]}
        >
          <Ionicons name="sparkles-outline" size={16} color={accentColor} style={styles.buttonIcon} />
          <View style={styles.buttonTextRow}>
            <Text style={[styles.secondaryButtonText, { color: colors.textPrimary }]}>
              Suggest a Feature or Idea
            </Text>
            <Text style={[styles.emailTag, { color: colors.textSecondary }]}>feedback@</Text>
          </View>
        </Pressable>

        {/* Report a Bug */}
        <Pressable
          onPress={handleBug}
          style={({ pressed }) => [
            styles.secondaryButton,
            { backgroundColor: colors.background, borderColor: colors.border },
            pressed && { borderColor: accentColor },
          ]}
        >
          <Ionicons name="bug-outline" size={16} color={colors.textSecondary} style={styles.buttonIcon} />
          <View style={styles.buttonTextRow}>
            <Text style={[styles.secondaryButtonText, { color: colors.textPrimary }]}>
              Report an Issue or Bug
            </Text>
            <Text style={[styles.emailTag, { color: colors.textSecondary }]}>support@</Text>
          </View>
        </Pressable>
      </View>

      {/* Footer Info & Dismiss */}
      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Text style={[styles.footerText, { color: colors.textSecondary }]}>
          Zero tracking · Direct developer replies
        </Text>
        <Pressable onPress={handleDismiss} hitSlop={8}>
          <Text style={[styles.dismissText, { color: colors.textSecondary }]}>Don't show again</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    borderRadius: 16,
    borderWidth: 1,
    padding: spacing.lg,
    flex: 1,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: 'monospace',
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  closeButton: {
    padding: 4,
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 28,
    marginTop: spacing.sm,
  },
  description: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: spacing.xs,
  },
  actionColumn: {
    gap: 10,
    marginVertical: spacing.md,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  primaryButtonText: {
    color: '#0B0F14',
    fontSize: 14,
    fontWeight: '700',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonTextRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  secondaryButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  emailTag: {
    fontSize: 11,
    fontFamily: 'monospace',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: spacing.sm,
  },
  footerText: {
    fontSize: 11,
  },
  dismissText: {
    fontSize: 11,
    textDecorationLine: 'underline',
  },
});
