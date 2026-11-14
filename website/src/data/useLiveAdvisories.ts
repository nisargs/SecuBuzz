import { useState, useEffect } from 'react';
import { advisories as initialAdvisories } from './advisories';
import type { Advisory } from '../types/advisory';
import { getCvssSeverity, CVE_SCORE_OVERRIDES } from '../utils/advisory';

function transformKev(list: any[]): Advisory[] {
  const result: Advisory[] = [];
  for (const item of list) {
    const cve = item.cveID || item.cve || '';
    if (!cve) continue;

    // If it's already a formatted GitHub Advisory, preserve it
    if (item.source === 'GITHUB' || item.source === 'GitHub Ecosystem') {
      result.push({
        cve,
        slug: item.slug || cve.toLowerCase(),
        vendor: item.vendor || 'Open Source',
        product: item.product || 'Software System',
        name: item.name || cve,
        dateAdded: item.dateAdded || '',
        dueDate: item.dueDate || '',
        cvss: item.cvss,
        severity: item.severity || 'Medium',
        cwe: item.cwe || '—',
        ransomware: !!item.ransomware,
        description: item.description || '',
        requiredAction: item.requiredAction || 'Apply vendor updates according to instructions.',
        references: item.references || [
          { label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${cve}` }
        ],
        source: 'GITHUB'
      });
      continue;
    }

    const isRansomware =
      item.knownRansomwareCampaignUse === 'Known' ||
      item.knownRansomwareCampaignUse === 'known' ||
      item.knownRansomwareCampaignUse === true ||
      item.ransomware === true;

    const rawCwe = item.cwes && Array.isArray(item.cwes) && item.cwes.length > 0
      ? item.cwes.join(', ')
      : (item.cwe || '');
    const cleanCwe = rawCwe ? rawCwe.replace(/^(CWE[:\s-]+)+/i, 'CWE-').trim() : '—';

    const cvss = CVE_SCORE_OVERRIDES[cve] ?? (typeof item.cvss === 'number' ? item.cvss : undefined);
    const severity = cvss !== undefined
      ? getCvssSeverity(cvss)
      : (isRansomware ? 'Critical' : 'High');

    result.push({
      cve,
      slug: cve.toLowerCase(),
      vendor: item.vendorProject || item.vendor || 'Enterprise Vendor',
      product: item.product || 'Software System',
      name: item.vulnerabilityName || item.name || cve,
      dateAdded: item.dateAdded || '',
      dueDate: item.dueDate || '',
      cvss,
      severity,
      cwe: cleanCwe || '—',
      ransomware: isRansomware,
      description: item.shortDescription || item.description || item.vulnerabilityName || '',
      requiredAction: (item.requiredAction || 'Apply vendor updates according to instructions.').replace(/\s*\(see URL in Notes\)/gi, '').trim(),
      references: item.references || [
        { label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${cve}` },
        { label: 'CISA KEV catalog', url: `https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=${cve}` }
      ],
      source: 'CISA KEV'
    });
  }
  return result;
}

let cachedAdvisories: Advisory[] = initialAdvisories;
let isFetching = false;
let listeners: Array<(items: Advisory[]) => void> = [];

export function useLiveAdvisories(): { advisories: Advisory[]; loading: boolean } {
  const [items, setItems] = useState<Advisory[]>(cachedAdvisories);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    listeners.push(setItems);

    if (!isFetching) {
      isFetching = true;
      setLoading(true);
      fetch('/api/advisories')
        .then(res => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data: any) => {
          if (data && Array.isArray(data.advisories) && data.advisories.length >= 1000) {
            const transformed = transformKev(data.advisories);
            const liveCveSet = new Set(transformed.map(a => a.cve.toUpperCase()));
            const missingBundled = initialAdvisories.filter(a => !liveCveSet.has(a.cve.toUpperCase()));
            const combined = [...transformed, ...missingBundled].sort((a, b) => {
              const timeA = Date.parse(a.dateAdded) || 0;
              const timeB = Date.parse(b.dateAdded) || 0;
              return timeB - timeA;
            });
            cachedAdvisories = combined;
            listeners.forEach(cb => cb(combined));
          }
        })
        .catch(err => {
          console.warn('Live advisories fetch failed, relying on bundled list:', err);
        })
        .finally(() => {
          setLoading(false);
          isFetching = false;
        });
    }

    return () => {
      listeners = listeners.filter(cb => cb !== setItems);
    };
  }, []);

  return { advisories: items, loading };
}
