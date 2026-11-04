import { useState, useEffect, useCallback, useMemo } from 'react';
import type { NewsBrief } from '../types/news';
import type { Advisory } from '../types/advisory';
import { getVendorFromSource } from '../utils/psirt';

const VENDORS_STORAGE_KEY = 'secubuzz_my_stack_vendors_v1';
const CVES_STORAGE_KEY = 'secubuzz_cve_watchlist_v1';

export const POPULAR_VENDORS = [
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

export function isValidVulnerabilityId(raw: string): boolean {
  const norm = normalizeCve(raw);
  return /^CVE-\d{4}-\d{4,7}$/.test(norm) || /^GHSA-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(norm);
}

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

export function useMyStack() {
  const [selectedVendors, setSelectedVendors] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(VENDORS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [watchedCves, setWatchedCves] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(CVES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync vendors to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(VENDORS_STORAGE_KEY, JSON.stringify(selectedVendors));
    } catch {
      // Ignore storage errors in private browsing
    }
  }, [selectedVendors]);

  // Sync CVEs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CVES_STORAGE_KEY, JSON.stringify(watchedCves));
    } catch {
      // Ignore storage errors in private browsing
    }
  }, [watchedCves]);

  const toggleVendor = useCallback((vendorName: string) => {
    const trimmed = vendorName.trim();
    if (!trimmed) return;
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
    setSelectedVendors((prev) => {
      if (prev.some((v) => v.toLowerCase() === trimmed.toLowerCase())) return prev;
      return [...prev, trimmed];
    });
  }, []);

  const removeVendor = useCallback((vendorName: string) => {
    const trimmed = vendorName.trim().toLowerCase();
    setSelectedVendors((prev) => prev.filter((v) => v.toLowerCase() !== trimmed));
  }, []);

  const toggleWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    if (!isValidVulnerabilityId(normalized)) return;
    setWatchedCves((prev) => {
      if (prev.includes(normalized)) {
        return prev.filter((c) => c !== normalized);
      }
      return [...prev, normalized];
    });
  }, []);

  const addWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    if (!isValidVulnerabilityId(normalized)) return;
    setWatchedCves((prev) => {
      if (prev.includes(normalized)) return prev;
      return [...prev, normalized];
    });
  }, []);

  const removeWatchCve = useCallback((rawCve: string) => {
    const normalized = normalizeCve(rawCve);
    setWatchedCves((prev) => prev.filter((c) => c !== normalized));
  }, []);

  const clearVendors = useCallback(() => {
    setSelectedVendors([]);
  }, []);

  const clearCves = useCallback(() => {
    setWatchedCves([]);
  }, []);

  const clearStack = useCallback(() => {
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

  // Deterministic Matching Function
  const matchesBrief = useCallback(
    (brief: NewsBrief): boolean => {
      if (selectedVendors.length === 0 && watchedCves.length === 0) {
        return false;
      }

      // 1. CVE / Advisory Watchlist match
      if (watchedCves.length > 0) {
        if (brief.cves && brief.cves.length > 0) {
          const hasWatchedCve = brief.cves.some((c) => {
            const norm = normalizeCve(c);
            return watchedCves.includes(norm);
          });
          if (hasWatchedCve) return true;
        }

        const textToSearch = (brief.title + ' ' + brief.summary).toUpperCase();
        if (watchedCves.some((w) => textToSearch.includes(w))) return true;
      }

      // 2. Vendor match
      if (selectedVendors.length > 0) {
        const sourceVendor = getVendorFromSource(brief.source).toLowerCase();
        const titleLower = brief.title.toLowerCase();
        const summaryLower = brief.summary.toLowerCase();

        return selectedVendors.some((v) => {
          const vLower = v.toLowerCase();
          // Check normalized source
          if (sourceVendor.includes(vLower) || vLower.includes(sourceVendor)) return true;
          // Check word boundary in title or summary
          const regex = new RegExp(`\\b${vLower}\\b`, 'i');
          return regex.test(titleLower) || regex.test(summaryLower);
        });
      }

      return false;
    },
    [selectedVendors, watchedCves]
  );


  const matchesAdvisory = useCallback(
    (advisory: Advisory): boolean => {
      if (selectedVendors.length === 0 && watchedCves.length === 0) {
        return false;
      }

      // 1. CVE / Advisory Watchlist match
      if (watchedCves.length > 0) {
        if (advisory.cve) {
          const norm = normalizeCve(advisory.cve);
          if (watchedCves.includes(norm)) return true;
        }

        const textToSearch = ((advisory.name || '') + ' ' + (advisory.description || '')).toUpperCase();
        if (watchedCves.some((w) => textToSearch.includes(w))) return true;
      }

      // 2. Vendor match
      if (selectedVendors.length > 0) {
        const advVendor = (advisory.vendor || '').toLowerCase();
        const advProduct = (advisory.product || '').toLowerCase();
        const advName = (advisory.name || '').toLowerCase();

        return selectedVendors.some((v) => {
          const vLower = v.toLowerCase();
          if (advVendor.includes(vLower) || vLower.includes(advVendor)) return true;
          const regex = new RegExp(`\\b${vLower}\\b`, 'i');
          return regex.test(advProduct) || regex.test(advName);
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

  return {
    selectedVendors,
    watchedCves,
    toggleVendor,
    addVendor,
    removeVendor,
    toggleWatchCve,
    addWatchCve,
    removeWatchCve,
    clearVendors,
    clearCves,
    clearStack,
    isVendorSelected,
    isWatchingCve,
    matchesBrief,
    matchesAdvisory,
    hasConfiguredStack,
    isValidVulnerabilityId,
  };
}
