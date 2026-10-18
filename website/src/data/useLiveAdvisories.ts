import { useState, useEffect } from 'react';
import { advisories as initialAdvisories } from './advisories';
import type { Advisory } from '../types/advisory';
import { getCvssSeverity, CVE_SCORE_OVERRIDES } from '../utils/advisory';

function transformKev(list: any[]): Advisory[] {
  return list.map(item => {
    const cve = item.cveID;
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

    return {
      cve,
      slug: cve.toLowerCase(),
      vendor: item.vendorProject || 'Enterprise Vendor',
      product: item.product || 'Software System',
      name: item.vulnerabilityName || cve,
      dateAdded: item.dateAdded || '',
      dueDate: item.dueDate || 'Immediate',
      cvss,
      severity,
      cwe: cleanCwe || '—',
      ransomware: isRansomware,
      description: item.shortDescription || item.vulnerabilityName || '',
      requiredAction: (item.requiredAction || 'Apply vendor updates according to instructions.').replace(/\s*\(see URL in Notes\)/gi, '').trim(),
      references: [
        { label: 'NVD CVE entry', url: `https://nvd.nist.gov/vuln/detail/${cve}` },
        { label: 'CISA KEV catalog', url: 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog' }
      ]
    };
  });
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
            // Preserve unique GitHub advisories bundled in initialAdvisories so total matches app
            const cisaCveSet = new Set(transformed.map(a => a.cve.toUpperCase()));
            const githubAdvisories = initialAdvisories.filter(a => !cisaCveSet.has(a.cve.toUpperCase()));
            const combined = [...transformed, ...githubAdvisories];
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
