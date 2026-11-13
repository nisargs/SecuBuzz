import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { Article } from '../models/article';
import type { CveAdvisory } from '../models/cve';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from './ThemeContext';
import { haptics } from '../utils/haptics';
import { getVendorFromSource } from '../utils/psirt';
import { syncTokenWithBackendAsync } from '../services/notificationService';

const VENDORS_STORAGE_KEY = 'secubuzz_my_stack_vendors_v1';
const CVES_STORAGE_KEY = 'secubuzz_cve_watchlist_v1';

export const POPULAR_VENDORS = [
  'Azure',
  'Cisco',
  'Fortinet',
  'Microsoft',
  'Palo Alto Networks',
  'Ivanti',
  'AWS',
  'Red Hat',
  'Apple',
  'Google',
  'Citrix',
  'GitLab',
  'Oracle',
  'Check Point',
  'SonicWall',
  'Atlassian',
  'VMware',
] as const;

export function normalizeCve(raw: string): string {
  let normalized = (raw || '')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015\u2212]/g, '-')
    .trim()
    .toUpperCase();

  if (/^\d{4}-\d{4,7}$/.test(normalized)) {
    normalized = `CVE-${normalized}`;
  }
  return normalized;
}

function extractCves(text: string): string[] {
  const matches = text.match(/CVE-\d{4}-\d{4,7}/gi);
  return matches ? Array.from(new Set(matches.map((c) => normalizeCve(c)))) : [];
}

export type MyStackContextValue = {
  selectedVendors: string[];
  watchedCves: string[];
  isHydrated: boolean;
  hasConfiguredStack: boolean;
  toggleVendor: (vendor: string) => void;
  addVendor: (vendor: string) => void;
  removeVendor: (vendor: string) => void;
  clearVendors: () => void;
  toggleWatchCve: (cve: string) => void;
  addWatchCve: (cve: string) => void;
  removeWatchCve: (cve: string) => void;
  clearCves: () => void;
  clearStack: () => void;
  isVendorSelected: (vendor: string) => boolean;
  isWatchingCve: (cve: string) => boolean;
  matchesArticle: (article: Article) => boolean;
  matchesAdvisory: (advisory: CveAdvisory) => boolean;
  showToast: (message: string) => void;
  isStackFilterActive: boolean;
  setStackFilterActive: (active: boolean) => void;
};

const MyStackContext = createContext<MyStackContextValue | null>(null);

export function MyStackProvider({ children }: { children: ReactNode }) {
  const { colors, accentColor, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [watchedCves, setWatchedCves] = useState<string[]>([]);
  const [isStackFilterActive, setStackFilterActive] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Global acknowledgement toast banner state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastTranslateY = useRef(new Animated.Value(16)).current;
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback(
    (message: string) => {
      if (toastTimerRef.current) {
        clearTimeout(toastTimerRef.current);
      }
      setToastMessage(message);
      toastOpacity.setValue(0);
      toastTranslateY.setValue(16);

      Animated.parallel([
        Animated.timing(toastOpacity, {
          toValue: 1,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(toastTranslateY, {
          toValue: 0,
          duration: 220,
          useNativeDriver: true,
        }),
      ]).start();

      toastTimerRef.current = setTimeout(() => {
        Animated.parallel([
          Animated.timing(toastOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(toastTranslateY, {
            toValue: 12,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start(() => {
          setToastMessage(null);
        });
      }, 2600);
    },
    [toastOpacity, toastTranslateY]
  );

  // 1. Initial hydration from AsyncStorage
  useEffect(() => {
    let isMounted = true;
    async function hydrate() {
      try {
        const [savedVendors, savedCves] = await Promise.all([
          AsyncStorage.getItem(VENDORS_STORAGE_KEY),
          AsyncStorage.getItem(CVES_STORAGE_KEY),
        ]);

        if (isMounted) {
          if (savedVendors) {
            try {
              const parsed = JSON.parse(savedVendors);
              if (Array.isArray(parsed)) setSelectedVendors(parsed);
            } catch {
              // Ignore invalid JSON
            }
          }
          if (savedCves) {
            try {
              const parsed = JSON.parse(savedCves);
              if (Array.isArray(parsed)) setSelectedVendors((prev) => prev);
              if (Array.isArray(parsed)) setWatchedCves(parsed);
            } catch {
              // Ignore invalid JSON
            }
          }
          setIsHydrated(true);
        }
      } catch (err) {
        console.warn('SecuBuzz: Failed to hydrate My Stack from storage:', err);
        if (isMounted) setIsHydrated(true);
      }
    }
    void hydrate();
    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Persist vendors on change (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      void AsyncStorage.setItem(VENDORS_STORAGE_KEY, JSON.stringify(selectedVendors));
    } catch (err) {
      console.warn('SecuBuzz: Failed to save My Stack vendors:', err);
    }
  }, [selectedVendors, isHydrated]);

  // 3. Persist watched CVEs on change (after initial hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      void AsyncStorage.setItem(CVES_STORAGE_KEY, JSON.stringify(watchedCves));
    } catch (err) {
      console.warn('SecuBuzz: Failed to save CVE Watchlist:', err);
    }
  }, [watchedCves, isHydrated]);

  // 4. Automatically sync updated stack to Cloudflare D1 push registry (debounced 500ms)
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!isHydrated) return;
    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(() => {
      void syncTokenWithBackendAsync(null, true, undefined, selectedVendors, watchedCves);
    }, 500);
    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [selectedVendors, watchedCves, isHydrated]);

  const toggleVendor = useCallback((vendorName: string) => {
    const trimmed = vendorName.trim();
    if (!trimmed) return;
    haptics.selection();
    setSelectedVendors((prev) => {
      const exists = prev.some((v) => v.toLowerCase() === trimmed.toLowerCase());
      if (exists) {
        return prev.filter((v) => v.toLowerCase() !== trimmed.toLowerCase());
      }
      return [...prev, trimmed];
    });
  }, []);

  const addVendor = useCallback((vendorName: string) => {
    const trimmed = vendorName.trim();
    if (!trimmed) return;
    haptics.selection();
    setSelectedVendors((prev) => {
      if (prev.some((v) => v.toLowerCase() === trimmed.toLowerCase())) return prev;
      return [...prev, trimmed];
    });
  }, []);

  const removeVendor = useCallback((vendorName: string) => {
    const trimmed = vendorName.trim().toLowerCase();
    haptics.selection();
    setSelectedVendors((prev) => prev.filter((v) => v.toLowerCase() !== trimmed));
  }, []);

  const toggleWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    if (!/^CVE-\d{4}-\d{4,7}$/.test(normalized)) return;
    haptics.selection();
    setWatchedCves((prev) => {
      if (prev.includes(normalized)) {
        return prev.filter((c) => c !== normalized);
      }
      return [...prev, normalized];
    });
  }, []);

  const addWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    if (!/^CVE-\d{4}-\d{4,7}$/.test(normalized)) return;
    haptics.selection();
    setWatchedCves((prev) => {
      if (prev.includes(normalized)) return prev;
      return [...prev, normalized];
    });
  }, []);

  const removeWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    haptics.selection();
    setWatchedCves((prev) => prev.filter((c) => c !== normalized));
  }, []);

  const clearVendors = useCallback(() => {
    haptics.selection();
    setSelectedVendors([]);
  }, []);

  const clearCves = useCallback(() => {
    haptics.selection();
    setWatchedCves([]);
  }, []);

  const clearStack = useCallback(() => {
    haptics.selection();
    setSelectedVendors([]);
    setWatchedCves([]);
  }, []);

  const isVendorSelected = useCallback(
    (vendorName: string) => {
      const lower = vendorName.toLowerCase();
      return selectedVendors.some((v) => v.toLowerCase() === lower);
    },
    [selectedVendors]
  );

  const isWatchingCve = useCallback(
    (rawCve: string) => {
      const normalized = normalizeCve(rawCve);
      return watchedCves.includes(normalized);
    },
    [watchedCves]
  );

  // Deterministic Matching for News Articles
  const matchesArticle = useCallback(
    (article: Article): boolean => {
      if (selectedVendors.length === 0 && watchedCves.length === 0) {
        return false;
      }

      // 1. CVE Watchlist match
      if (watchedCves.length > 0) {
        const articleCves = extractCves(
          `${article.headline} ${article.summary} ${article.vendorProject || ''} ${article.product || ''}`
        );
        if (articleCves.some((c) => watchedCves.includes(c))) {
          return true;
        }
      }

      // 2. Vendor match
      if (selectedVendors.length > 0) {
        const sourceVendor = getVendorFromSource(article.sourceName).toLowerCase();
        const headlineLower = article.headline.toLowerCase();
        const summaryLower = article.summary.toLowerCase();
        const vendorProjectLower = (article.vendorProject || '').toLowerCase();
        const productLower = (article.product || '').toLowerCase();

        return selectedVendors.some((v) => {
          const vLower = v.toLowerCase();
          // Check normalized source
          if (sourceVendor.includes(vLower) || vLower.includes(sourceVendor)) return true;
          // Check explicit vendor project / product
          if (vendorProjectLower.includes(vLower) || productLower.includes(vLower)) return true;
          // Check word boundary in headline or summary
          const regex = new RegExp(`\\b${vLower}\\b`, 'i');
          return regex.test(headlineLower) || regex.test(summaryLower);
        });
      }

      return false;
    },
    [selectedVendors, watchedCves]
  );

  // Deterministic Matching for CveAdvisories
  const matchesAdvisory = useCallback(
    (advisory: CveAdvisory): boolean => {
      if (selectedVendors.length === 0 && watchedCves.length === 0) {
        return false;
      }

      // 1. CVE Watchlist match
      if (watchedCves.length > 0 && advisory.cveID) {
        const norm = normalizeCve(advisory.cveID);
        if (watchedCves.includes(norm)) return true;
      }

      // 2. Vendor match
      if (selectedVendors.length > 0) {
        const advVendor = (advisory.vendorProject || '').toLowerCase();
        const advProduct = (advisory.product || '').toLowerCase();
        const advName = (advisory.vulnerabilityName || '').toLowerCase();
        const advDesc = (advisory.shortDescription || '').toLowerCase();

        return selectedVendors.some((v) => {
          const vLower = v.toLowerCase();
          if (advVendor && (advVendor.includes(vLower) || vLower.includes(advVendor))) return true;
          const regex = new RegExp(`\\b${vLower}\\b`, 'i');
          return regex.test(advProduct) || regex.test(advName) || regex.test(advDesc);
        });
      }

      return false;
    },
    [selectedVendors, watchedCves]
  );

  const hasConfiguredStack = useMemo(
    () => selectedVendors.length > 0 || watchedCves.length > 0,
    [selectedVendors, watchedCves]
  );

  const value = useMemo<MyStackContextValue>(
    () => ({
      selectedVendors,
      watchedCves,
      isHydrated,
      hasConfiguredStack,
      toggleVendor,
      addVendor,
      removeVendor,
      clearVendors,
      toggleWatchCve,
      addWatchCve,
      removeWatchCve,
      clearCves,
      clearStack,
      isVendorSelected,
      isWatchingCve,
      matchesArticle,
      matchesAdvisory,
      showToast,
      isStackFilterActive,
      setStackFilterActive,
    }),
    [
      selectedVendors,
      watchedCves,
      isHydrated,
      hasConfiguredStack,
      toggleVendor,
      addVendor,
      removeVendor,
      clearVendors,
      toggleWatchCve,
      addWatchCve,
      removeWatchCve,
      clearCves,
      clearStack,
      isVendorSelected,
      isWatchingCve,
      matchesArticle,
      matchesAdvisory,
      showToast,
      isStackFilterActive,
      setStackFilterActive,
    ]
  );

  return (
    <MyStackContext.Provider value={value}>
      <View style={{ flex: 1 }}>
        {children}
        {toastMessage ? (
          <Animated.View
            pointerEvents="none"
            style={[
              styles.toastContainer,
              {
                opacity: toastOpacity,
                transform: [{ translateY: toastTranslateY }],
                bottom: Math.max(insets.bottom, 12) + (Platform.OS === 'ios' ? 76 : 66),
              },
            ]}
          >
            <View
              style={[
                styles.toastPill,
                {
                  backgroundColor: isDark ? '#111622' : '#FFFFFF',
                  borderColor: `${accentColor}80`,
                },
              ]}
            >
              <Ionicons name="checkmark-circle" size={18} color={accentColor} />
              <Text
                style={[
                  styles.toastText,
                  {
                    color: colors.textPrimary,
                  },
                ]}
                numberOfLines={2}
              >
                {toastMessage}
              </Text>
            </View>
          </Animated.View>
        ) : null}
      </View>
    </MyStackContext.Provider>
  );
}

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 999999,
    alignItems: 'center',
  },
  toastPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 9999,
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 12,
  },
  toastText: {
    fontFamily: 'Exo_600SemiBold',
    fontSize: 13.5,
    letterSpacing: 0.1,
  },
});

export function useMyStack(): MyStackContextValue {
  const context = useContext(MyStackContext);
  if (!context) {
    throw new Error('useMyStack must be used within a MyStackProvider');
  }
  return context;
}

