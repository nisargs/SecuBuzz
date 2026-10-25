import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { haptics } from '../utils/haptics';

import { requestStoreReview } from '../utils/storeReview';

export const FEEDBACK_DISMISSED_KEY = 'secubuzz_feedback_card_dismissed';

interface FeedbackCardProps {
  onDismiss: () => void;
  onAdvanceToNext?: () => void;
  context?: 'news' | 'advisories';
}

export function FeedbackCard({ onDismiss, onAdvanceToNext, context = 'news' }: FeedbackCardProps) {
  const { colors, accentColor } = useTheme();
  const [hasRated, setHasRated] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleRate = async () => {
    void haptics.notificationSuccess();
    setHasRated(true);
    await requestStoreReview();
    if (onAdvanceToNext) {
      onAdvanceToNext();
    } else {
      onDismiss();
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
      `Hello SecuBuzz team,\n\nI noticed an issue or bug in version ${Constants.expoConfig?.version ?? '1.0.3'}:\n\nDetails:\n\n`
    );
    try {
      await Linking.openURL(`mailto:${email}?subject=${subject}&body=${body}`);
    } catch (err) {
      console.warn('SecuBuzz: Could not open mail client:', err);
    }
  };

  const handleDismiss = () => {
    void haptics.selection();
    setIsDismissed(true);
    if (onAdvanceToNext) {
      onAdvanceToNext();
    } else {
      onDismiss();
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
      {/* Top Header Badge */}
      <View style={styles.topRow}>
        <View style={styles.badgeContainer}>
          <View style={[styles.pulseDot, { backgroundColor: accentColor }]} />
          <Text style={[styles.badgeText, { color: accentColor }]}>
            {hasRated ? 'RATING RECORDED' : isDismissed ? 'DISMISSED' : 'COMMUNITY & FEEDBACK'}
          </Text>
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
        {hasRated
          ? 'Thank you for your rating!'
          : isDismissed
          ? 'Card Dismissed'
          : 'Finding SecuBuzz helpful?'}
      </Text>

      <Text style={[styles.description, { color: colors.textSecondary }]}>
        {hasRated
          ? 'Your support helps SecuBuzz grow and keeps our 60 word briefs free for everyone.'
          : isDismissed
          ? 'SecuBuzz will keep your feed focused purely on intelligence.'
          : 'SecuBuzz is built for the security community. If our news briefs or advisory tracking save you time, help us grow with a rating or send a quick suggestion.'}
      </Text>

      {/* Action Buttons */}
      {hasRated ? (
        <View style={styles.actionColumn}>
          {/* Confirmed Status Box */}
          <View
            style={[
              styles.confirmedBox,
              { backgroundColor: colors.background, borderColor: colors.border },
            ]}
          >
            <Ionicons name="checkmark-circle" size={20} color={accentColor} style={styles.buttonIcon} />
            <View style={styles.buttonTextColumn}>
              <Text style={[styles.confirmedTitle, { color: colors.textPrimary }]}>
                Rating Acknowledged
              </Text>
              <Text style={[styles.confirmedSubtitle, { color: colors.textSecondary }]}>
                Thank you for supporting independent threat intelligence.
              </Text>
            </View>
          </View>

          {/* Continue Reading Button */}
          <Pressable
            onPress={handleDismiss}
            style={({ pressed }) => [
              styles.primaryButton,
              { backgroundColor: accentColor },
              pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
            ]}
          >
            <Ionicons name="arrow-down" size={16} color="#0B0F14" style={styles.buttonIcon} />
            <Text style={styles.primaryButtonText}>Continue Reading</Text>
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
            <Ionicons name="bulb-outline" size={18} color={colors.textSecondary} style={styles.buttonIcon} />
            <View style={styles.buttonTextColumn}>
              <Text style={[styles.secondaryButtonText, { color: colors.textPrimary }]}>
                Suggest a Feature or Idea
              </Text>
              <Text style={[styles.emailTag, { color: colors.textSecondary }]}>feedback@secubuzz.com</Text>
            </View>
            <Ionicons name="mail-outline" size={16} color={colors.textSecondary} style={styles.rightIcon} />
          </Pressable>
        </View>
      ) : isDismissed ? (
        <View style={styles.actionColumn}>
          <Pressable
            onPress={handleDismiss}
            style={({ pressed }) => [
              styles.primaryButton,
              { backgroundColor: accentColor },
              pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
            ]}
          >
            <Ionicons name="arrow-down" size={16} color="#0B0F14" style={styles.buttonIcon} />
            <Text style={styles.primaryButtonText}>Continue Reading</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.actionColumn}>
          {/* Rate on Google Play */}
          <View style={styles.rateButtonWrapper}>
            <Pressable
              onPress={handleRate}
              style={({ pressed }) => [
                styles.primaryButton,
                { backgroundColor: accentColor },
                pressed && { opacity: 0.88, transform: [{ scale: 0.98 }] },
              ]}
            >
              <Ionicons name="star" size={16} color="#0B0F14" style={styles.buttonIcon} />
              <Text style={styles.primaryButtonText}>Give Us a Rating on Google Play</Text>
            </Pressable>
            <Text style={[styles.rateConvenienceText, { color: colors.textSecondary }]}>
              Opens directly here. No need to switch apps.
            </Text>
          </View>

          {/* Feature Suggestion */}
          <Pressable
            onPress={handleFeedback}
            style={({ pressed }) => [
              styles.secondaryButton,
              { backgroundColor: colors.background, borderColor: colors.border },
              pressed && { borderColor: accentColor },
            ]}
          >
            <Ionicons name="bulb-outline" size={18} color={colors.textSecondary} style={styles.buttonIcon} />
            <View style={styles.buttonTextColumn}>
              <Text style={[styles.secondaryButtonText, { color: colors.textPrimary }]}>
                Suggest a Feature or Idea
              </Text>
              <Text style={[styles.emailTag, { color: colors.textSecondary }]}>feedback@secubuzz.com</Text>
            </View>
            <Ionicons name="mail-outline" size={16} color={colors.textSecondary} style={styles.rightIcon} />
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
            <Ionicons name="bug-outline" size={18} color={colors.textSecondary} style={styles.buttonIcon} />
            <View style={styles.buttonTextColumn}>
              <Text style={[styles.secondaryButtonText, { color: colors.textPrimary }]}>
                Report an Issue or Bug
              </Text>
              <Text style={[styles.emailTag, { color: colors.textSecondary }]}>support@secubuzz.com</Text>
            </View>
            <Ionicons name="mail-outline" size={16} color={colors.textSecondary} style={styles.rightIcon} />
          </Pressable>
        </View>
      )}

      {/* Footer Info & Dismiss */}
      <View style={[styles.footer, { borderTopColor: colors.border }]}>
        <Pressable onPress={handleDismiss} hitSlop={8}>
          <Text style={[styles.dismissText, { color: colors.textSecondary }]}>
            {hasRated || isDismissed ? 'Dismiss' : "Don't show again"}
          </Text>
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
  rateButtonWrapper: {
    gap: 4,
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
  rateConvenienceText: {
    fontSize: 11.5,
    textAlign: 'center',
    opacity: 0.8,
    marginTop: 2,
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
  buttonTextColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  emailTag: {
    fontSize: 11,
    fontFamily: 'monospace',
    marginTop: 2,
  },
  rightIcon: {
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: spacing.sm,
  },
  dismissText: {
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  confirmedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
  },
  confirmedTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
  confirmedSubtitle: {
    fontSize: 11.5,
    marginTop: 2,
    lineHeight: 16,
  },
});
