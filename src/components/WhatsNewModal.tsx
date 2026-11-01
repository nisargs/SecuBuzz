import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import { spacing } from '../theme/theme';
import { haptics } from '../utils/haptics';

export const WHATS_NEW_STORAGE_KEY = '@secubuzz_whats_new_version';
export const CURRENT_RELEASE_VERSION = '1.0.4';

interface WhatsNewModalProps {
  visible: boolean;
  onClose: () => void;
}

export function WhatsNewModal({ visible, onClose }: WhatsNewModalProps) {
  const { colors, isDark, accentColor, severityColors } = useTheme();
  const [modalVisible, setModalVisible] = useState(visible);
  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.timing(animValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animValue, {
        toValue: 0,
        duration: 180,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible, animValue]);

  const handleDismiss = async () => {
    haptics.selection();
    try {
      await AsyncStorage.setItem(WHATS_NEW_STORAGE_KEY, CURRENT_RELEASE_VERSION);
    } catch {
      // ignore storage failure
    }
    Animated.timing(animValue, {
      toValue: 0,
      duration: 180,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  if (!modalVisible && !visible) {
    return null;
  }

  const translateY = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  const backdropOpacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="none"
      onRequestClose={handleDismiss}
    >
      <View style={styles.backdropContainer}>
        {/* Animated backdrop */}
        <Animated.View
          style={[
            styles.animatedBackdrop,
            { opacity: backdropOpacity },
          ]}
        >
          <Pressable style={styles.backdropPressable} onPress={handleDismiss} />
        </Animated.View>

        {/* Modal Sheet */}
        <Animated.View
          style={[
            styles.sheetContainer,
            {
              backgroundColor: colors.surface,
              borderColor: colors.border,
              transform: [{ translateY }],
            },
          ]}
        >
          <SafeAreaView edges={['bottom']} style={styles.sheetInner}>
            {/* Header */}
            <View style={[styles.header, { borderBottomColor: colors.border }]}>
              <View style={styles.headerLeft}>
                <Text style={[styles.headerTitle, { color: colors.textPrimary }]}>
                  What's New in Secu
                  <Text style={{ color: accentColor }}>Buzz</Text>
                </Text>
                <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
                  Product release notes & continuous engineering updates
                </Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Close what's new"
                hitSlop={10}
                onPress={handleDismiss}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={22} color={colors.textSecondary} />
              </Pressable>
            </View>

            {/* Scrollable Content */}
            <ScrollView
              showsVerticalScrollIndicator
              style={styles.scrollArea}
              contentContainerStyle={styles.scrollContent}
            >
              {/* Release Timeline Card */}
              <View style={styles.timelineRow}>
                {/* Timeline Node */}
                <View style={styles.timelineNodeColumn}>
                  <View
                    style={[
                      styles.timelineOuterDot,
                      { borderColor: accentColor },
                    ]}
                  >
                    <View
                      style={[
                        styles.timelineInnerDot,
                        { backgroundColor: accentColor },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.timelineLine,
                      { backgroundColor: colors.border },
                    ]}
                  />
                </View>

                {/* Timeline Content */}
                <View style={styles.timelineContent}>
                  {/* Version & Badge */}
                  <View style={styles.versionRow}>
                    <Text style={[styles.versionText, { color: colors.textPrimary }]}>
                      v1.0.4
                    </Text>
                    <View
                      style={[
                        styles.latestBadge,
                        {
                          borderColor: `${accentColor}55`,
                          backgroundColor: `${accentColor}15`,
                        },
                      ]}
                    >
                      <Text style={[styles.latestBadgeText, { color: accentColor }]}>
                        LATEST
                      </Text>
                    </View>
                    <Text style={[styles.dateText, { color: colors.textMuted }]}>
                      · November 2026
                    </Text>
                  </View>

                  <Text style={[styles.taglineText, { color: colors.textSecondary }]}>
                    My Stack Triage Hub, CVE Watchlist & Targeted Push Notifications
                  </Text>

                  {/* Highlights */}
                  <View style={styles.highlightsContainer}>
                    <View style={styles.highlightItem}>
                      <View style={[styles.bullet, { backgroundColor: accentColor }]} />
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.highlightTitle, { color: colors.textPrimary }]}>
                          Enterprise My Stack Hub
                        </Text>
                        <Text style={[styles.highlightDesc, { color: colors.textSecondary }]}>
                          Curate your organization's infrastructure footprint across 16+ enterprise vendors (Cisco, Fortinet, Microsoft, Palo Alto, AWS) to isolate relevant threats in one tap.
                        </Text>
                      </View>
                    </View>

                    <View style={styles.highlightItem}>
                      <View style={[styles.bullet, { backgroundColor: accentColor }]} />
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.highlightTitle, { color: colors.textPrimary }]}>
                          CVE Watchlist & Pinning
                        </Text>
                        <Text style={[styles.highlightDesc, { color: colors.textSecondary }]}>
                          Pin critical vulnerabilities directly from news briefs and threat advisories, or enter custom CVE IDs to track remediation progress across your threat landscape.
                        </Text>
                      </View>
                    </View>

                    <View style={styles.highlightItem}>
                      <View style={[styles.bullet, { backgroundColor: accentColor }]} />
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.highlightTitle, { color: colors.textPrimary }]}>
                          Targeted Push Notifications
                        </Text>
                        <Text style={[styles.highlightDesc, { color: colors.textSecondary }]}>
                          Choose "My Stack & Watchlist Only" under Notifications to receive push notifications for any threats, advisories, or patches matching your configured assets, regardless of severity.
                        </Text>
                      </View>
                    </View>

                    <View style={styles.highlightItem}>
                      <View style={[styles.bullet, { backgroundColor: accentColor }]} />
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.highlightTitle, { color: colors.textPrimary }]}>
                          In-Brief & Advisory Entity Actions
                        </Text>
                        <Text style={[styles.highlightDesc, { color: colors.textSecondary }]}>
                          Underlined vendor names and CVEs in story descriptions and advisory cards are now interactive. Tap any entity to add to watchlist or filter the feed.
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              {/* Quick How-to-Use Guide Card */}
              <View
                style={[
                  styles.guideCard,
                  {
                    backgroundColor: isDark
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(0, 0, 0, 0.02)',
                    borderColor: colors.border,
                  },
                ]}
              >
                <View style={styles.guideHeader}>
                  <Ionicons name="help-buoy-outline" size={17} color={accentColor} />
                  <Text style={[styles.guideTitle, { color: accentColor }]}>
                    HOW TO USE IT
                  </Text>
                </View>

                <View style={styles.guideStep}>
                  <Text style={[styles.stepNumber, { color: accentColor }]}>1</Text>
                  <Text style={[styles.stepText, { color: colors.textSecondary }]}>
                    <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_600SemiBold' }}>
                      Tap Underlined Entities:{' '}
                    </Text>
                    Whenever a vendor (e.g. Microsoft) or CVE (e.g. CVE-2026-111497) is mentioned with an underline in a brief or advisory, tap it to add to your stack or filter stories.
                  </Text>
                </View>

                <View style={styles.guideStep}>
                  <Text style={[styles.stepNumber, { color: accentColor }]}>2</Text>
                  <Text style={[styles.stepText, { color: colors.textSecondary }]}>
                    <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_600SemiBold' }}>
                      Manage in Filter Sheet:{' '}
                    </Text>
                    Tap the filter icon on either the News or Advisories tab. Scroll to "My Stack & Watchlist" to toggle enterprise vendors or add custom CVEs.
                  </Text>
                </View>

                <View style={styles.guideStep}>
                  <Text style={[styles.stepNumber, { color: accentColor }]}>3</Text>
                  <Text style={[styles.stepText, { color: colors.textSecondary }]}>
                    <Text style={{ color: colors.textPrimary, fontFamily: 'Exo_600SemiBold' }}>
                      Stack-Only Push Notifications:{' '}
                    </Text>
                    Go to Settings &gt; Notifications and choose "My Stack & Watchlist Only" to only be alerted for your selected stacks & watched CVEs.
                  </Text>
                </View>
              </View>
            </ScrollView>

            {/* Footer Dismiss Button */}
            <View style={[styles.footer, { borderTopColor: colors.border }]}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Dismiss what's new"
                onPress={handleDismiss}
                style={[
                  styles.dismissButton,
                  { backgroundColor: accentColor },
                ]}
              >
                <Text style={[styles.dismissButtonText, { color: '#0B0F14' }]}>
                  GOT IT
                </Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdropContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  animatedBackdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  backdropPressable: {
    flex: 1,
  },
  sheetContainer: {
    height: '84%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderBottomWidth: 0,
    overflow: 'hidden',
  },
  sheetInner: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
  },
  headerLeft: {
    flex: 1,
    marginRight: 12,
  },
  headerTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    marginTop: 2,
  },
  closeButton: {
    padding: 6,
  },
  scrollArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
    gap: 18,
  },
  timelineRow: {
    flexDirection: 'row',
    gap: 12,
  },
  timelineNodeColumn: {
    alignItems: 'center',
    width: 20,
  },
  timelineOuterDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  timelineInnerDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    marginTop: 6,
  },
  timelineContent: {
    flex: 1,
    paddingBottom: 4,
  },
  versionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  versionText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 16,
  },
  latestBadge: {
    paddingHorizontal: 6,
    paddingVertical: 1.5,
    borderRadius: 4,
    borderWidth: 1,
  },
  latestBadgeText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 9.5,
    letterSpacing: 0.8,
  },
  dateText: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
  },
  taglineText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 13,
    marginTop: 6,
    marginBottom: 14,
    lineHeight: 18,
  },
  highlightsContainer: {
    gap: 12,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  bullet: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginTop: 7,
  },
  highlightTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 13.5,
    marginBottom: 2,
  },
  highlightDesc: {
    fontFamily: 'Exo_400Regular',
    fontSize: 12.5,
    lineHeight: 18,
  },
  guideCard: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
    gap: 12,
    marginTop: 4,
  },
  guideHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  guideTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 11,
    letterSpacing: 1.2,
  },
  guideStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  stepNumber: {
    fontFamily: 'Exo_700Bold',
    fontSize: 12,
    width: 14,
    textAlign: 'center',
  },
  stepText: {
    flex: 1,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 17,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
  },
  dismissButton: {
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dismissButtonText: {
    fontFamily: 'Exo_700Bold',
    fontSize: 13.5,
    letterSpacing: 1,
  },
});
