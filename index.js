import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

/**
 * Custom entry so Metro always gets a real folder string for routes.
 * Expo Router then loads every screen under src/app/.
 */
export function App() {
  const ctx = require.context('./src/app');
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
