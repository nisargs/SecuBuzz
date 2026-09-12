import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SavedArticlesProvider } from '../context/SavedArticlesContext';
import { colors } from '../theme/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SavedArticlesProvider>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SavedArticlesProvider>
    </SafeAreaProvider>
  );
}
