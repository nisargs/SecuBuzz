import { Stack } from 'expo-router';

import { SavedArticlesProvider } from '../context/SavedArticlesContext';
import { colors } from '../theme/theme';

export default function RootLayout() {
  return (
    <SavedArticlesProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor:
              colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="article/[id]" />

        <Stack.Screen name="privacy" />
        <Stack.Screen name="terms" />
        <Stack.Screen name="data-privacy" />
        <Stack.Screen name="about" />
        <Stack.Screen name="licenses" />
        <Stack.Screen name="contact" />
      </Stack>
    </SavedArticlesProvider>
  );
}