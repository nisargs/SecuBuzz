import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useColorScheme } from 'react-native';

import type { ArticleCategory } from '../models/article';
import {
  accentPresets,
  categoryColorsDark,
  categoryColorsLight,
  darkColors,
  lightColors,
  severityColorsDark,
  severityColorsLight,
  type AccentPresetKey,
  type ThemeColors,
} from '../theme/theme';
import { haptics } from '../utils/haptics';

export type ThemeMode = 'system' | 'dark' | 'light';

export type SeverityColorConfig = {
  primary: string;
  surface: string;
  border: string;
};

export type SeverityColorMap = Record<
  'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW',
  SeverityColorConfig
>;

const THEME_MODE_STORAGE_KEY = 'secubuzz-theme-mode';
const ACCENT_STORAGE_KEY = 'secubuzz-theme-accent';

type ThemeContextValue = {
  themeMode: ThemeMode;
  isDark: boolean;
  accentKey: AccentPresetKey;
  accentColor: string;
  colors: ThemeColors;
  categoryColors: Record<ArticleCategory, { background: string; text: string }>;
  severityColors: SeverityColorMap;
  setThemeMode: (mode: ThemeMode) => Promise<void>;
  setAccentKey: (key: AccentPresetKey) => Promise<void>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('dark');
  const [accentKey, setAccentKeyState] = useState<AccentPresetKey>('cyan');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function loadPreferences() {
      try {
        const [savedMode, savedAccent] = await Promise.all([
          AsyncStorage.getItem(THEME_MODE_STORAGE_KEY),
          AsyncStorage.getItem(ACCENT_STORAGE_KEY),
        ]);

        if (isMounted) {
          if (
            savedMode === 'system' ||
            savedMode === 'dark' ||
            savedMode === 'light'
          ) {
            setThemeModeState(savedMode);
          }
          if (savedAccent && savedAccent in accentPresets) {
            setAccentKeyState(savedAccent as AccentPresetKey);
          }
        }
      } catch (err) {
        console.warn('SecuBuzz: Failed to load theme preferences from storage:', err);
      } finally {
        if (isMounted) {
          setIsHydrated(true);
        }
      }
    }

    void loadPreferences();
    return () => {
      isMounted = false;
    };
  }, []);

  const setThemeMode = useCallback(async (mode: ThemeMode) => {
    void haptics.selection();
    setThemeModeState(mode);
    try {
      await AsyncStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
    } catch (err) {
      console.warn('SecuBuzz: Failed to persist theme mode:', err);
    }
  }, []);

  const setAccentKey = useCallback(async (key: AccentPresetKey) => {
    if (key in accentPresets) {
      void haptics.selection();
      setAccentKeyState(key);
      try {
        await AsyncStorage.setItem(ACCENT_STORAGE_KEY, key);
      } catch (err) {
        console.warn('SecuBuzz: Failed to persist theme accent:', err);
      }
    }
  }, []);

  const isDark = useMemo(() => {
    if (themeMode === 'system') {
      return systemColorScheme !== 'light';
    }
    return themeMode === 'dark';
  }, [themeMode, systemColorScheme]);

  const accentColor = accentPresets[accentKey] ?? accentPresets.cyan;

  const currentColors: ThemeColors = useMemo(() => {
    const base = isDark ? darkColors : lightColors;
    return {
      ...base,
      accent: accentColor,
    };
  }, [isDark, accentColor]);

  const currentCategoryColors = useMemo(() => {
    return isDark ? categoryColorsDark : categoryColorsLight;
  }, [isDark]);

  const currentSeverityColors: SeverityColorMap = useMemo(() => {
    return isDark ? severityColorsDark : severityColorsLight;
  }, [isDark]);

  const value: ThemeContextValue = useMemo(
    () => ({
      themeMode,
      isDark,
      accentKey,
      accentColor,
      colors: currentColors,
      categoryColors: currentCategoryColors,
      severityColors: currentSeverityColors,
      setThemeMode,
      setAccentKey,
    }),
    [
      themeMode,
      isDark,
      accentKey,
      accentColor,
      currentColors,
      currentCategoryColors,
      currentSeverityColors,
      setThemeMode,
      setAccentKey,
    ],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    // Graceful fallback for components rendered outside provider
    return {
      themeMode: 'dark',
      isDark: true,
      accentKey: 'cyan',
      accentColor: accentPresets.cyan,
      colors: {
        ...darkColors,
        accent: accentPresets.cyan,
      },
      categoryColors: categoryColorsDark,
      severityColors: severityColorsDark,
      setThemeMode: async () => {},
      setAccentKey: async () => {},
    };
  }
  return context;
}
