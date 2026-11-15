import 'expo/build/Expo.fx';
import { TurboModuleRegistry } from 'react-native';

// Ensure Expo native JSI bindings (globalThis.expo) are installed in the runtime
if (!globalThis.expo) {
  try {
    const ExpoModulesCore = TurboModuleRegistry.get('ExpoModulesCore');
    ExpoModulesCore?.installModules?.();
  } catch (e) {
    // Graceful fallback
  }
}

import 'expo-router/entry';
