import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '../../context/ThemeContext';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { colors, isDark, accentColor } = useTheme();

  const bottomInset = Math.max(
    insets.bottom,
    8,
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.background,
        },

        tabBarActiveTintColor: accentColor,

        tabBarInactiveTintColor:
          colors.textMuted,

        tabBarStyle: {
          backgroundColor:
            isDark ? colors.background : colors.surface,
          borderTopColor: isDark ? `${accentColor}35` : colors.border,
          borderTopWidth: 1,
          height: 58 + bottomInset,
          paddingTop: 6,
          paddingBottom: bottomInset,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          marginTop: 1,
        },

        tabBarItemStyle: {
          height: 50,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Briefs',

          tabBarIcon: ({
            focused,
            color,
          }) => (
            <Ionicons
              name={
                focused
                  ? 'newspaper'
                  : 'newspaper-outline'
              }
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',

          tabBarIcon: ({
            focused,
            color,
          }) => (
            <Ionicons
              name={
                focused
                  ? 'bookmark'
                  : 'bookmark-outline'
              }
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',

          tabBarIcon: ({
            focused,
            color,
          }) => (
            <Ionicons
              name={
                focused
                  ? 'settings'
                  : 'settings-outline'
              }
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}