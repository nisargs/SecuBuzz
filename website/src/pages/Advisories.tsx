import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { AdvisoryTable } from '../components/AdvisoryTable';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { daysUntil } from '../utils/date';
import { getCvssSeverity } from '../utils/advisory';
import { Seo } from '../components/Seo';

type SortKey = 'added' | 'due';
const PAGE_SIZE = 25;

export function Advisories() {
  const [query, setQuery] = useState('');
  const [ransomwareOnly, setRansomwareOnly] = useState(false);
  const [dueThisWeekOnly, setDueThisWeekOnly] = useState(false);
  const [vendorFilter, setVendorFilter] = useState('ALL');
  const [severityFilter, setSeverityFilter] = useState('ALL');
  const [sort, setSort] = useState<SortKey>('added');
  const [page, setPage] = useState(1);
  const { advisories } = useLiveAdvisories();

  const openCount = advisories.filter((a) => daysUntil(a.dueDate) >= 0).length;
  const overdueCount = advisories.length - openCount;
  const dueThisWeekCount = advisories.filter((a) => {
    const d = daysUntil(a.dueDate);
    return d >= 0 && d <= 7;
  }).length;

  const topVendors = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of advisories) {
      if (a.vendor) {
        counts[a.vendor] = (counts[a.vendor] || 0) + 1;
      }
    }
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30)
      .map(([v]) => v);
  }, [advisories]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories
      .filter((a) => (ransomwareOnly ? a.ransomware : true))
      .filter((a) => {
        if (!dueThisWeekOnly) return true;
        const d = daysUntil(a.dueDate);
        return d >= 0 && d <= 7;
      })
      .filter((a) => (vendorFilter === 'ALL' ? true : a.vendor.toLowerCase() === vendorFilter.toLowerCase()))
      .filter((a) => {
        if (severityFilter === 'ALL') return true;
        const effectiveSev = getCvssSeverity(a.cvss, a.severity).toUpperCase();
        return effectiveSev === severityFilter.toUpperCase();
      })
      .filter((a) =>
        q
          ? [a.cve, a.vendor, a.product, a.name, a.description].some((v) =>
              (v || '').toLowerCase().includes(q)
            )
          : true
      )
      .sort((a, b) =>
        sort === 'added' ? b.dateAdded.localeCompare(a.dateAdded) : a.dueDate.localeCompare(b.dueDate)
      );
  }, [advisories, query, ransomwareOnly, dueThisWeekOnly, vendorFilter, severityFilter, sort]);

  const ransomwareCount = advisories.filter((a) => a.ransomware).length;
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedAdvisories = results.slice(startIndex, startIndex + PAGE_SIZE);


  return (
    <>
      <Seo
        title="CISA Known Exploited Vulnerabilities · SecuBuzz"
        description="Track active zero-days and vulnerabilities cataloged in CISA Known Exploited Vulnerabilities (KEV) with binding federal due dates."
        canonicalPath="/advisories"
      />
      <PageIntro
        title="CISA Known Exploited Vulnerabilities"
        description="Vulnerabilities CISA has confirmed are being exploited in the wild. Federal agencies must remediate by the due date; everyone else should treat it as a strong signal.">
        
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-xs text-subtle">Tracked in catalog</dt>
            <dd className="mt-1 font-mono text-2xl text-ink">{advisories.length.toLocaleString()}</dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Open deadlines</dt>
            <dd className="mt-1 font-mono text-2xl text-accent">{openCount.toLocaleString()}</dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Past due</dt>
            <dd className="mt-1 font-mono text-2xl text-muted">{overdueCount.toLocaleString()}</dd>
          </div>
        </dl>

      </PageIntro>

      <div className="mx-auto max-w-site px-5 py-8 pb-20 md:px-8">
        <div className="mb-5 flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <label className="relative block md:w-80">
              <span className="sr-only">Search advisories</span>
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="CVE, vendor, product, or keyword"
                className="h-9 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none" />
            </label>
            <div className="flex flex-wrap items-center gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={dueThisWeekOnly}
                  onChange={(e) => {
                    setDueThisWeekOnly(e.target.checked);
                    setPage(1);
                  }}
                  className="h-4 w-4 rounded border-line bg-surface accent-[rgb(var(--accent))]" />
                Due this week {dueThisWeekCount > 0 ? `(${dueThisWeekCount})` : ''}
              </label>

              <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
                <input
                  type="checkbox"
                  checked={ransomwareOnly}
                  onChange={(e) => {
                    setRansomwareOnly(e.target.checked);
                    setPage(1);
                  }}
                  className="h-4 w-4 rounded border-line bg-surface accent-[rgb(var(--accent))]" />
                Known ransomware use {ransomwareCount > 0 ? `(${ransomwareCount})` : ''}
              </label>

              <label className="inline-flex items-center gap-2 text-sm text-muted">
                Sort
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value as SortKey);
                    setPage(1);
                  }}
                  className="h-9 rounded-md border border-line bg-surface px-2.5 text-sm text-ink focus:border-accent focus:outline-none">
                  <option value="added">Newest added</option>
                  <option value="due">Soonest due</option>
                </select>
              </label>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-line/50 pt-3">
            <label className="inline-flex items-center gap-2 text-xs text-subtle">
              Vendor:
              <select
                value={vendorFilter}
                onChange={(e) => {
                  setVendorFilter(e.target.value);
                  setPage(1);
                }}
                className="h-8 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none">
                <option value="ALL">All Vendors ({advisories.length})</option>
                {topVendors.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </label>

            <label className="inline-flex items-center gap-2 text-xs text-subtle">
              Severity:
              <select
                value={severityFilter}
                onChange={(e) => {
                  setSeverityFilter(e.target.value);
                  setPage(1);
                }}
                className="h-8 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none">
                <option value="ALL">All Severities</option>
                <option value="CRITICAL">Critical (CVSS 9.0–10.0)</option>
                <option value="HIGH">High (CVSS 7.0–8.9)</option>
                <option value="MEDIUM">Medium (CVSS 4.0–6.9)</option>
                <option value="LOW">Low (CVSS &lt; 4.0)</option>
              </select>
            </label>

            {(vendorFilter !== 'ALL' || severityFilter !== 'ALL' || ransomwareOnly || dueThisWeekOnly || query) && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setVendorFilter('ALL');
                  setSeverityFilter('ALL');
                  setRansomwareOnly(false);
                  setDueThisWeekOnly(false);
                  setPage(1);
                }}
                className="text-xs text-accent hover:underline">
                Reset filters
              </button>
            )}
          </div>

        </div>

        <div className="mb-3 flex items-center justify-between text-xs font-mono text-subtle" aria-live="polite">
          <p>
            {results.length === 0
              ? '0 advisories'
              : `Showing ${startIndex + 1}–${Math.min(startIndex + PAGE_SIZE, results.length)} of ${results.length} advisories`}
          </p>
          {results.length > PAGE_SIZE && (
            <p>
              Page {safePage} of {totalPages}
            </p>
          )}
        </div>

        {results.length > 0 ? (
          <>
            <AdvisoryTable items={paginatedAdvisories} />

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-8 flex items-center justify-between border-t border-line pt-5">
                <button
                  type="button"
                  disabled={safePage <= 1}
                  onClick={() => {
                    setPage((p) => Math.max(1, p - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3.5 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40">
                  <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>

                <div className="hidden sm:flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                    if (
                      totalPages > 7 &&
                      p > 1 &&
                      p < totalPages &&
                      Math.abs(p - safePage) > 1
                    ) {
                      if (p === 2 || p === totalPages - 1) {
                        return (
                          <span key={p} className="px-2 text-subtle font-mono text-xs">
                            …
                          </span>
                        );
                      }
                      return null;
                    }

                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setPage(p);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        aria-current={safePage === p ? 'page' : undefined}
                        className={`h-9 w-9 rounded-md font-mono text-xs transition-colors duration-150 ease-out ${
                          safePage === p
                            ? 'bg-raised font-semibold text-ink'
                            : 'text-muted hover:bg-surface hover:text-ink'
                        }`}>
                        {p}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={safePage >= totalPages}
                  onClick={() => {
                    setPage((p) => Math.min(totalPages, p + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3.5 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40">
                  Next
                  <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="rounded-lg border border-line py-16 text-center">
            <p className="font-medium text-ink">No advisories match</p>
            <p className="mt-1.5 text-sm text-muted">Check the CVE format (e.g. CVE-2026-20417) or clear filters.</p>
          </div>
        )}

        <p className="mt-6 text-xs text-subtle">
          Source: CISA Known Exploited Vulnerabilities catalog. SecuBuzz tracks all cataloged vulnerabilities with remediation deadlines.
        </p>
      </div>
    </>);

}