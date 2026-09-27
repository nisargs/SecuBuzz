import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from '../context/ThemeContext';
import { colors, spacing } from '../theme/theme';

const SUPPORT_EMAIL = 'support@secubuzz.com';

type FeedbackCategory = 'FEATURE' | 'BUG' | 'FEED' | 'GENERAL';

const CATEGORIES: { id: FeedbackCategory; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { id: 'FEATURE', label: 'Feature Request', icon: 'sparkles-outline' },
  { id: 'BUG', label: 'Bug Report', icon: 'bug-outline' },
  { id: 'FEED', label: 'Feed Suggestion', icon: 'newspaper-outline' },
  { id: 'GENERAL', label: 'General Feedback', icon: 'chatbubble-ellipses-outline' },
];

export default function ContactScreen() {
  const { colors, isDark, accentColor } = useTheme();

  const [category, setCategory] = useState<FeedbackCategory>('FEATURE');
  const [message, setMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSendFeedback() {
    if (!message.trim()) {
      Alert.alert('Message Required', 'Please enter a few words describing your feedback before submitting.');
      return;
    }

    const categoryObj = CATEGORIES.find((c) => c.id === category);
    const categoryLabel = categoryObj?.label || 'General Feedback';
    const appVersion = Constants.expoConfig?.version ?? '1.0.1';
    const systemInfo = `${Platform.OS.toUpperCase()} (SDK ${Platform.Version})`;

    const emailSubject = `[SecuBuzz Feedback] ${categoryLabel}`;
    const emailBody = [
      `Category: ${categoryLabel}`,
      userEmail.trim() ? `User Contact: ${userEmail.trim()}` : null,
      `App Version: ${appVersion}`,
      `Platform: ${systemInfo}`,
      '',
      '--- MESSAGE ---',
      message.trim(),
      '',
    ]
      .filter((line) => line !== null)
      .join('\n');

    const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    void Linking.openURL(mailtoUrl);
    setSubmitted(true);
  }

  function openDirectEmail() {
    void Linking.openURL(`mailto:${SUPPORT_EMAIL}`);
  }

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: colors.background }]}
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
          Contact & Feedback
        </Text>

        <View style={styles.headerSpacer} />
      </View>

      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* FEEDBACK FORM SECTION */}
          <View style={styles.section}>
            <Text style={[styles.eyebrow, { color: accentColor }]}>
              COMMUNITY INPUT
            </Text>

            <Text style={[styles.title, { color: colors.textPrimary }]}>
              Share Your Feedback
            </Text>

            <Text style={[styles.description, { color: colors.textSecondary }]}>
              SecuBuzz is built for cybersecurity practitioners. Tell us what features you want, report any bugs, or suggest high-value threat intelligence sources.
            </Text>

            {/* CATEGORY CHIPS */}
            <Text style={[styles.inputLabel, { color: colors.textMuted }]}>
              FEEDBACK TOPIC
            </Text>
            <View style={styles.chipGrid}>
              {CATEGORIES.map((cat) => {
                const isSelected = category === cat.id;
                return (
                  <Pressable
                    key={cat.id}
                    onPress={() => setCategory(cat.id)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: isSelected
                          ? isDark
                            ? 'rgba(255, 255, 255, 0.08)'
                            : 'rgba(0, 0, 0, 0.04)'
                          : colors.surface,
                        borderColor: isSelected ? accentColor : colors.border,
                      },
                    ]}
                  >
                    <Ionicons
                      name={cat.icon}
                      size={15}
                      color={isSelected ? accentColor : colors.textMuted}
                    />
                    <Text
                      style={[
                        styles.chipText,
                        { color: isSelected ? colors.textPrimary : colors.textSecondary },
                        isSelected && { fontWeight: '700' },
                      ]}
                    >
                      {cat.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* MESSAGE INPUT */}
            <Text style={[styles.inputLabel, { color: colors.textMuted, marginTop: 16 }]}>
              YOUR MESSAGE
            </Text>
            <View
              style={[
                styles.textAreaWrap,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <TextInput
                style={[styles.textArea, { color: colors.textPrimary }]}
                placeholder="What can we improve, add, or fix?"
                placeholderTextColor={colors.textMuted}
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                value={message}
                onChangeText={setMessage}
                maxLength={1000}
              />
              <Text style={[styles.charCount, { color: colors.textMuted }]}>
                {message.length}/1000
              </Text>
            </View>

            {/* OPTIONAL EMAIL INPUT */}
            <Text style={[styles.inputLabel, { color: colors.textMuted, marginTop: 14 }]}>
              REPLY EMAIL (OPTIONAL)
            </Text>
            <View
              style={[
                styles.inputWrap,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <Ionicons
                name="at-outline"
                size={18}
                color={colors.textMuted}
              />
              <TextInput
                style={[styles.input, { color: colors.textPrimary }]}
                placeholder="name@example.com"
                placeholderTextColor={colors.textMuted}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={userEmail}
                onChangeText={setUserEmail}
              />
            </View>

            {/* SUBMIT BUTTON */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Submit feedback"
              onPress={handleSendFeedback}
              style={[
                styles.submitButton,
                {
                  backgroundColor: accentColor,
                },
              ]}
            >
              <Ionicons
                name="paper-plane-outline"
                size={18}
                color="#FFFFFF"
              />
              <Text style={styles.submitButtonText}>
                SEND FEEDBACK
              </Text>
            </Pressable>

            {submitted ? (
              <View style={[styles.submittedBanner, { borderColor: accentColor }]}>
                <Ionicons name="checkmark-circle" size={18} color={accentColor} />
                <Text style={[styles.submittedText, { color: colors.textPrimary }]}>
                  Thank you! Your feedback email was prepared.
                </Text>
              </View>
            ) : null}
          </View>

          {/* DIRECT SUPPORT CARD */}
          <View style={[styles.directSection, { borderTopColor: colors.border }]}>
            <Text style={[styles.eyebrow, { color: accentColor }]}>
              DIRECT INQUIRIES
            </Text>

            <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
              Contact MiSo Labs
            </Text>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Send email to ${SUPPORT_EMAIL}`}
              onPress={openDirectEmail}
              style={[
                styles.emailButton,
                {
                  backgroundColor: colors.surface,
                  borderColor: colors.border,
                },
              ]}
            >
              <Ionicons
                name="mail-outline"
                size={22}
                color={accentColor}
              />

              <View style={styles.emailBody}>
                <Text style={[styles.emailTitle, { color: colors.textPrimary }]}>
                  Direct Support Email
                </Text>

                <Text style={[styles.emailAddress, { color: colors.textMuted }]}>
                  {SUPPORT_EMAIL}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={18}
                color={colors.textMuted}
              />
            </Pressable>

            <View style={[styles.note, { borderTopColor: colors.border }]}>
              <Ionicons
                name="shield-checkmark-outline"
                size={18}
                color={accentColor}
              />

              <Text style={[styles.noteText, { color: colors.textSecondary }]}>
                For responsible disclosure of security vulnerabilities in SecuBuzz infrastructure, please use PGP encryption or coordinate via standard security headers.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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

  keyboardContainer: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 24,
    paddingBottom: 48,
  },

  section: {
    marginBottom: 28,
  },

  eyebrow: {
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
    marginBottom: 18,
  },

  inputLabel: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 11,
    letterSpacing: 1.4,
    marginBottom: 8,
  },

  chipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },

  chipText: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12,
  },

  textAreaWrap: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
  },

  textArea: {
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 20,
    minHeight: 100,
  },

  charCount: {
    fontFamily: 'Exo_400Regular',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
  },

  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 44,
    gap: 8,
  },

  input: {
    flex: 1,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
  },

  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 46,
    borderRadius: 10,
    marginTop: 18,
  },

  submitButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Exo_700Bold',
    fontSize: 13,
    letterSpacing: 1.2,
  },

  submittedBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 14,
    backgroundColor: 'rgba(20, 184, 166, 0.08)',
  },

  submittedText: {
    fontFamily: 'Exo_500Medium',
    fontSize: 12.5,
  },

  directSection: {
    borderTopWidth: 1,
    paddingTop: 24,
  },

  sectionTitle: {
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    marginBottom: 14,
  },

  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
  },

  emailBody: {
    flex: 1,
  },

  emailTitle: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
    marginBottom: 2,
  },

  emailAddress: {
    fontFamily: 'Exo_400Regular',
    fontSize: 13,
  },

  note: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
  },

  noteText: {
    flex: 1,
    fontFamily: 'Exo_400Regular',
    fontSize: 12,
    lineHeight: 18,
  },
});