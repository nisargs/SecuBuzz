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
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="article/[id]" />
      </Stack>
    </SavedArticlesProvider>
  );
}