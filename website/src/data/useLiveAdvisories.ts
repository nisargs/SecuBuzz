import { useState, useEffect } from 'react';
import { advisories as initialAdvisories } from './advisories';
import type { Advisory } from '../types/advisory';

function transformKev(list: any[]): Advisory[] {
  return list.map(item => {
    const cve = item.cveID;
    const isRansomware =
      item.knownRansomwareCampaignUse === 'Known' ||
      item.knownRansomwareCampaignUse === 'known' ||
      item.knownRansomwareCampaignUse === true;

    return {
      cve,
      slug: cve.toLowerCase(),
      vendor: item.vendorProject,
      product: item.product,
      name: item.vulnerabilityName,
      dateAdded: item.dateAdded,
      dueDate: item.dueDate,
      cvss: 9.8,
      severity: 'Critical',
      cwe: item.cwes && Array.isArray(item.cwes) ? `CWE: ${item.cwes.join(', ')}` : '',
      ransomware: isRansomware,
      description: item.shortDescription || item.vulnerabilityName,
      requiredAction: item.requiredAction || 'Apply vendor updates according to instructions.',
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
          if (data && Array.isArray(data.advisories) && data.advisories.length > 0) {
            const transformed = transformKev(data.advisories);
            cachedAdvisories = transformed;
            listeners.forEach(cb => cb(transformed));
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
