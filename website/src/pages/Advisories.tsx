import React, { useMemo, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { AdvisoryTable } from '../components/AdvisoryTable';
import { advisories } from '../data/advisories';
import { daysUntil } from '../utils/date';

type SortKey = 'added' | 'due';

export function Advisories() {
  const [query, setQuery] = useState('');
  const [ransomwareOnly, setRansomwareOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>('added');

  const openCount = advisories.filter((a) => daysUntil(a.dueDate) >= 0).length;
  const overdueCount = advisories.length - openCount;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories.
    filter((a) => ransomwareOnly ? a.ransomware : true).
    filter((a) =>
    q ?
    [a.cve, a.vendor, a.product, a.name, a.description].some((v) => (v || '').toLowerCase().includes(q)) :
    true
    ).
    sort((a, b) =>
    sort === 'added' ? b.dateAdded.localeCompare(a.dateAdded) : a.dueDate.localeCompare(b.dueDate)
    );
  }, [query, ransomwareOnly, sort]);

  return (
    <>
      <PageIntro
        title="CISA Known Exploited Vulnerabilities"
        description="Vulnerabilities CISA has confirmed are being exploited in the wild. Federal agencies must remediate by the due date; everyone else should treat it as a strong signal.">
        
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-xs text-subtle">Tracked here</dt>
            <dd className="mt-1 font-mono text-2xl text-ink">{advisories.length}</dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Open deadlines</dt>
            <dd className="mt-1 font-mono text-2xl text-accent">{openCount}</dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Past due</dt>
            <dd className="mt-1 font-mono text-2xl text-critical">{overdueCount}</dd>
          </div>
        </dl>
      </PageIntro>

      <div className="mx-auto max-w-site px-5 py-8 pb-20 md:px-8">
        <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="relative block md:w-80">
            <span className="sr-only">Search advisories</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="CVE, vendor, product, or keyword"
              className="h-9 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none" />
            
          </label>
          <div className="flex flex-wrap items-center gap-4">
            <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={ransomwareOnly}
                onChange={(e) => setRansomwareOnly(e.target.checked)}
                className="h-4 w-4 rounded border-line bg-surface accent-[rgb(var(--accent))]" />
              
              Known ransomware use
            </label>
            <label className="inline-flex items-center gap-2 text-sm text-muted">
              Sort
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="h-9 rounded-md border border-line bg-surface px-2.5 text-sm text-ink focus:border-accent focus:outline-none">
                
                <option value="added">Newest added</option>
                <option value="due">Soonest due</option>
              </select>
            </label>
          </div>
        </div>

        {results.length > 0 ?
        <AdvisoryTable items={results} /> :

        <div className="rounded-lg border border-line py-16 text-center">
            <p className="font-medium text-ink">No advisories match</p>
            <p className="mt-1.5 text-sm text-muted">Check the CVE format (e.g. CVE-2026-20417) or clear filters.</p>
          </div>
        }

        <p className="mt-6 text-xs text-subtle">
          Source: CISA Known Exploited Vulnerabilities catalog. SecuBuzz adds CVSS severity from NVD for context.
        </p>
      </div>
    </>);

}