import { Ionicons } from '@expo/vector-icons';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../theme/theme';

const BLUE = '#4CC9F0';

export type TestingNoticeModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function TestingNoticeModal({
  visible,
  onClose,
}: TestingNoticeModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={onClose}
          accessibilityLabel="Dismiss modal"
          accessibilityRole="button"
        />

        <View style={styles.dialog}>
          <View style={styles.iconCircle}>
            <Ionicons
              name="time-outline"
              size={32}
              color={BLUE}
            />
          </View>

          <Text style={styles.title}>
            Testing Phase Notice
          </Text>

          <Text style={styles.description}>
            SecuBuzz is currently in testing. News is automatically refreshed every 6 hours, and manual refresh is temporarily unavailable during the testing phase.
          </Text>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Got it"
            onPress={onClose}
            style={({ pressed }) => [
              styles.actionButton,
              pressed && styles.actionButtonPressed,
            ]}
          >
            <Text style={styles.actionButtonText}>
              Got it
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(5, 8, 12, 0.82)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  dialog: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: colors.surfaceRaised,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4CC9F033',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 22,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
  },

  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4CC9F01A',
    borderWidth: 1,
    borderColor: '#4CC9F044',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  title: {
    color: colors.textPrimary,
    fontFamily: 'Exo_700Bold',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 12,
  },

  description: {
    color: colors.textSecondary,
    fontFamily: 'Exo_400Regular',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
  },

  actionButton: {
    width: '100%',
    backgroundColor: BLUE,
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionButtonPressed: {
    opacity: 0.85,
  },

  actionButtonText: {
    color: '#0B0F14',
    fontFamily: 'Exo_600SemiBold',
    fontSize: 14,
    letterSpacing: 0.5,
  },
});
