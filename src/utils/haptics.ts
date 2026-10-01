import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * SecuBuzz Haptic Feedback Manager
 * Provides sober, subtle tactile micro-feedback for key interactions:
 * - Bookmark toggle (saved/unsaved)
 * - Incident report clipboard copy
 * - Pull-to-refresh & manual refresh
 * - Selection / filter toggling
 *
 * Silently catches errors and ignores calls on web.
 */
export const haptics = {
  /** Subtle tap feedback for filter chips, tabs, and small button presses */
  selection: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.selectionAsync();
    } catch {
      // Graceful fallback
    }
  },

  /** Light impact for micro-interactions (e.g. un-saving, pull triggers) */
  impactLight: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {
      // Graceful fallback
    }
  },

  /** Medium impact for prominent actions (e.g. bookmark saved) */
  impactMedium: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {
      // Graceful fallback
    }
  },

  /** Heavy impact for critical emergency directives */
  impactHeavy: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    } catch {
      // Graceful fallback
    }
  },

  /** Success notification pattern for clipboard copying & saving */
  notificationSuccess: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch {
      // Graceful fallback
    }
  },

  /** Warning notification pattern */
  notificationWarning: async () => {
    if (Platform.OS === 'web') return;
    try {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } catch {
      // Graceful fallback
    }
  },
};
