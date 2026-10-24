import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { AdvisoryTable } from '../components/AdvisoryTable';
import { VendorSelect } from '../components/VendorSelect';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { daysUntil } from '../utils/date';
import { getCvssSeverity } from '../utils/advisory';
import { Seo } from '../components/Seo';

type AdvisorySourceFilter = 'ALL' | 'CISA' | 'GITHUB';
type AdvisorySeverityFilter = 'ALL' | 'CRITICAL' | 'HIGH' | 'RANSOMWARE';
type SortKey = 'added' | 'due';
const PAGE_SIZE = 25;

export function Advisories() {
  const [query, setQuery] = useState('');
  const [sourceFilter, setSourceFilter] = useState<AdvisorySourceFilter>('ALL');
  const [severityFilter, setSeverityFilter] = useState<AdvisorySeverityFilter>('ALL');
  const [dueThisWeekOnly, setDueThisWeekOnly] = useState(false);
  const [vendorFilter, setVendorFilter] = useState('ALL');
  const [sort, setSort] = useState<SortKey>('added');
  const [page, setPage] = useState(1);
  const { advisories } = useLiveAdvisories();

  const openCount = advisories.filter(
    (a) => a.dueDate && /^\d{4}-\d{2}-\d{2}$/.test(a.dueDate) && daysUntil(a.dueDate) >= 0
  ).length;
  const overdueCount = advisories.filter(
    (a) => a.dueDate && /^\d{4}-\d{2}-\d{2}$/.test(a.dueDate) && daysUntil(a.dueDate) < 0
  ).length;
  const dueThisWeekCount = advisories.filter((a) => {
    if (!a.dueDate || !/^\d{4}-\d{2}-\d{2}$/.test(a.dueDate)) return false;
    const d = daysUntil(a.dueDate);
    return d >= 0 && d <= 7;
  }).length;

  const sortedVendors = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of advisories) {
      const v = a.vendor?.trim();
      if (v) {
        counts[v] = (counts[v] || 0) + 1;
      }
    }
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }, [advisories]);

  // Telemetry counts matching mobile app 1:1
  const cisaCount = useMemo(
    () => advisories.filter((a) => a.source === 'CISA KEV' || a.dueDate || a.references?.some(r => r.label.includes('CISA'))).length,
    [advisories]
  );
  const githubCount = useMemo(
    () => advisories.filter((a) => a.source === 'GITHUB' || (!a.dueDate && a.references?.some(r => r.label.includes('GitHub')))).length,
    [advisories]
  );
  const ransomwareCount = useMemo(
    () => advisories.filter((a) => a.ransomware).length,
    [advisories]
  );
  const criticalCount = useMemo(
    () => advisories.filter((a) => getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'CRITICAL').length,
    [advisories]
  );
  const highCount = useMemo(
    () => advisories.filter((a) => getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'HIGH').length,
    [advisories]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories
      .filter((a) => {
        if (sourceFilter === 'CISA') {
          return a.source === 'CISA KEV' || a.dueDate || a.references?.some(r => r.label.includes('CISA'));
        }
        if (sourceFilter === 'GITHUB') {
          return a.source === 'GITHUB' || (!a.dueDate && a.references?.some(r => r.label.includes('GitHub')));
        }
        return true;
      })
      .filter((a) => {
        if (severityFilter === 'RANSOMWARE') return a.ransomware;
        if (severityFilter === 'CRITICAL') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'CRITICAL';
        if (severityFilter === 'HIGH') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'HIGH';
        return true;
      })
      .filter((a) => {
        if (!dueThisWeekOnly) return true;
        const d = daysUntil(a.dueDate);
        return d >= 0 && d <= 7;
      })
      .filter((a) => (vendorFilter === 'ALL' ? true : a.vendor.toLowerCase() === vendorFilter.toLowerCase()))
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
  }, [advisories, query, sourceFilter, severityFilter, dueThisWeekOnly, vendorFilter, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedAdvisories = results.slice(startIndex, startIndex + PAGE_SIZE);


  return (
    <>
      <Seo
        title="Security Advisories & CISA KEV Radar · SecuBuzz"
        description="Track active zero-days, CISA Known Exploited Vulnerabilities (KEV) with federal remediation deadlines, EPSS exploit likelihood scores, and vendor patch actions."
        canonicalPath="/advisories"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Security Advisories & CISA KEV Radar',
          url: 'https://secubuzz.com/advisories',
          description: 'Track active zero-days, CISA Known Exploited Vulnerabilities (KEV) with federal remediation deadlines, EPSS exploit likelihood scores, and vendor patch actions.',
        }}
      />
      <PageIntro
        title="Security Advisories"
        description="Actionable intelligence on actively exploited zero-days, CISA federal remediation mandates, and critical ecosystem security advisories.">
        
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-xs text-subtle">Tracked in catalog</dt>
            <dd className="mt-1 font-mono text-2xl text-ink">{advisories.length.toLocaleString()}</dd>
          </div>
          <div>
            <dt className="text-xs text-subtle">Open CISA deadlines</dt>
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
          {/* Search, Vendor, Due This Week & Sort Controls */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-3">
              <label className="relative block flex-1 sm:max-w-xs md:w-80">
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

              <div className="inline-flex items-center gap-2 text-xs text-subtle">
                <span>Vendor:</span>
                <VendorSelect
                  value={vendorFilter}
                  onChange={(v) => {
                    setVendorFilter(v);
                    setPage(1);
                  }}
                  vendors={sortedVendors}
                  totalCount={advisories.length}
                />
              </div>

              <label className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-muted">
                <input
                  type="checkbox"
                  checked={dueThisWeekOnly}
                  onChange={(e) => {
                    setDueThisWeekOnly(e.target.checked);
                    setPage(1);
                  }}
                  className="h-3.5 w-3.5 rounded border-line bg-surface accent-[rgb(var(--accent))]" />
                Due this week {dueThisWeekCount > 0 ? `(${dueThisWeekCount})` : ''}
              </label>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-auto">
              <label className="inline-flex items-center gap-1.5 text-xs text-muted">
                <span>Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value as SortKey);
                    setPage(1);
                  }}
                  className="h-8 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none">
                  <option value="added">Newest added</option>
                  <option value="due">Soonest due</option>
                </select>
              </label>

              {(vendorFilter !== 'ALL' || severityFilter !== 'ALL' || sourceFilter !== 'ALL' || dueThisWeekOnly || query) && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setVendorFilter('ALL');
                    setSeverityFilter('ALL');
                    setSourceFilter('ALL');
                    setDueThisWeekOnly(false);
                    setPage(1);
                  }}
                  className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-accent hover:border-accent transition-colors duration-150">
                  Reset Filters
                </button>
              )}
            </div>
          </div>

          {/* Section 1: Severity & Impact (Matching Mobile App 1:1) */}
          <div className="flex flex-wrap items-center gap-2 border-t border-line/60 pt-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle mr-1">
              Severity & Impact:
            </span>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('ALL');
                setPage(1);
              }}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'ALL'
                  ? 'bg-raised font-medium text-accent border border-accent/40'
                  : 'text-muted hover:text-accent hover:bg-surface border border-line'
              }`}>
              All ({advisories.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('CRITICAL');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'CRITICAL'
                  ? 'bg-critical/10 font-medium text-critical border border-critical/50'
                  : 'text-muted hover:text-critical hover:bg-surface border border-line'
              }`}>
              <span className="h-2 w-2 rounded-full bg-critical" />
              Critical ({criticalCount})
            </button>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('HIGH');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'HIGH'
                  ? 'bg-amber-500/10 font-medium text-amber-500 border border-amber-500/50'
                  : 'text-muted hover:text-amber-500 hover:bg-surface border border-line'
              }`}>
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              High ({highCount})
            </button>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('RANSOMWARE');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'RANSOMWARE'
                  ? 'bg-amber-500/15 font-medium text-amber-400 border border-amber-500/60'
                  : 'text-muted hover:text-amber-400 hover:bg-surface border border-line'
              }`}>
              <span>💀</span>
              Ransomware ({ransomwareCount})
            </button>
          </div>

          {/* Section 2: Advisory Source (Matching Mobile App 1:1) */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle mr-1">
              Advisory Source:
            </span>
            <button
              type="button"
              onClick={() => {
                setSourceFilter('ALL');
                setPage(1);
              }}
              className={`rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                sourceFilter === 'ALL'
                  ? 'bg-raised font-medium text-accent border border-accent/40'
                  : 'text-muted hover:text-accent hover:bg-surface border border-line'
              }`}>
              All Sources ({advisories.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setSourceFilter('CISA');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                sourceFilter === 'CISA'
                  ? 'bg-raised font-medium text-accent border border-accent/40'
                  : 'text-muted hover:text-accent hover:bg-surface border border-line'
              }`}>
              <span>🛡️</span>
              CISA KEV Zero-Days ({cisaCount})
            </button>
            <button
              type="button"
              onClick={() => {
                setSourceFilter('GITHUB');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                sourceFilter === 'GITHUB'
                  ? 'bg-raised font-medium text-accent border border-accent/40'
                  : 'text-muted hover:text-accent hover:bg-surface border border-line'
              }`}>
              <span>&lt;&gt;</span>
              GitHub Ecosystem ({githubCount})
            </button>
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
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3.5 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink">
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
                        className={`h-9 w-9 rounded-md font-mono text-xs border transition-colors duration-150 ease-out ${
                          safePage === p
                            ? 'border-accent/50 bg-accent/15 font-semibold text-accent'
                            : 'border-transparent text-muted hover:border-accent/60 hover:bg-surface hover:text-accent'
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
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3.5 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink">
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
          Sources: CISA Known Exploited Vulnerabilities (KEV) catalog and the GitHub Security Advisory Database. Exploit probability percentiles powered by FIRST.org EPSS.
        </p>
      </div>
    </>);

}