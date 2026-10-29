import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { AdvisoryTable } from '../components/AdvisoryTable';
import { VendorSelect } from '../components/VendorSelect';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { daysUntil } from '../utils/date';
import { getCvssSeverity } from '../utils/advisory';
import { Seo } from '../components/Seo';
import type { Advisory } from '../types/advisory';

type AdvisorySourceFilter = 'ALL' | 'CISA' | 'GITHUB';
type AdvisorySeverityFilter = 'ALL' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'RANSOMWARE';
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
  const isCisa = (a: Advisory) =>
    a.source === 'CISA KEV' || !!a.dueDate || !!a.references?.some((r: { label: string; url: string }) => r.label.includes('CISA'));

  const isGithub = (a: Advisory) =>
    a.source === 'GITHUB' || (!a.dueDate && !!a.references?.some((r: { label: string; url: string }) => r.label.includes('GitHub')));

  const matchesSource = (a: Advisory, source: AdvisorySourceFilter) => {
    if (source === 'CISA') return isCisa(a);
    if (source === 'GITHUB') return isGithub(a);
    return true;
  };

  const matchesSeverity = (a: Advisory, severity: AdvisorySeverityFilter) => {
    if (severity === 'RANSOMWARE') return !!a.ransomware;
    if (severity === 'CRITICAL') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'CRITICAL';
    if (severity === 'HIGH') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'HIGH';
    if (severity === 'MEDIUM') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'MEDIUM';
    if (severity === 'LOW') return getCvssSeverity(a.cvss, a.severity).toUpperCase() === 'LOW';
    return true;
  };

  const matchesBase = (a: Advisory, q: string) => {
    if (dueThisWeekOnly) {
      const d = daysUntil(a.dueDate);
      if (d < 0 || d > 7) return false;
    }
    if (vendorFilter !== 'ALL' && a.vendor.toLowerCase() !== vendorFilter.toLowerCase()) {
      return false;
    }
    if (!q) return true;
    return [a.cve, a.vendor, a.product, a.name, a.description].some((v) =>
      (v || '').toLowerCase().includes(q)
    );
  };

  // 1. Severity & Impact counts: scoped to active Advisory Source, vendor, due date, and query
  const severityCandidates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories.filter((a) => matchesBase(a, q) && matchesSource(a, sourceFilter));
  }, [advisories, vendorFilter, dueThisWeekOnly, query, sourceFilter]);

  const severityCounts = useMemo(() => {
    return {
      all: severityCandidates.length,
      critical: severityCandidates.filter((a) => matchesSeverity(a, 'CRITICAL')).length,
      high: severityCandidates.filter((a) => matchesSeverity(a, 'HIGH')).length,
      medium: severityCandidates.filter((a) => matchesSeverity(a, 'MEDIUM')).length,
      low: severityCandidates.filter((a) => matchesSeverity(a, 'LOW')).length,
      ransomware: severityCandidates.filter((a) => matchesSeverity(a, 'RANSOMWARE')).length,
    };
  }, [severityCandidates]);

  // 2. Advisory Source counts: scoped to active Severity, vendor, due date, and query
  const sourceCandidates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories.filter((a) => matchesBase(a, q) && matchesSeverity(a, severityFilter));
  }, [advisories, vendorFilter, dueThisWeekOnly, query, severityFilter]);

  const sourceCounts = useMemo(() => {
    return {
      all: sourceCandidates.length,
      cisa: sourceCandidates.filter((a) => matchesSource(a, 'CISA')).length,
      github: sourceCandidates.filter((a) => matchesSource(a, 'GITHUB')).length,
    };
  }, [sourceCandidates]);

  // 3. Vendor counts: scoped to active Advisory Source, Severity, due date, and query
  const vendorCandidates = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories.filter((a) => {
      if (dueThisWeekOnly) {
        const d = daysUntil(a.dueDate);
        if (d < 0 || d > 7) return false;
      }
      if (!matchesSource(a, sourceFilter)) return false;
      if (!matchesSeverity(a, severityFilter)) return false;
      if (!q) return true;
      return [a.cve, a.vendor, a.product, a.name, a.description].some((v) =>
        (v || '').toLowerCase().includes(q)
      );
    });
  }, [advisories, sourceFilter, severityFilter, dueThisWeekOnly, query]);

  const sortedVendors = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const a of vendorCandidates) {
      const v = a.vendor?.trim();
      if (v) {
        counts[v] = (counts[v] || 0) + 1;
      }
    }
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }, [vendorCandidates]);

  // 4. Due this week count: scoped to active Source, Severity, vendor, and query
  const dueThisWeekCount = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories.filter((a) => {
      if (!a.dueDate || !/^\d{4}-\d{2}-\d{2}$/.test(a.dueDate)) return false;
      const d = daysUntil(a.dueDate);
      if (d < 0 || d > 7) return false;
      if (vendorFilter !== 'ALL' && a.vendor.toLowerCase() !== vendorFilter.toLowerCase()) return false;
      if (!matchesSource(a, sourceFilter)) return false;
      if (!matchesSeverity(a, severityFilter)) return false;
      if (!q) return true;
      return [a.cve, a.vendor, a.product, a.name, a.description].some((v) =>
        (v || '').toLowerCase().includes(q)
      );
    }).length;
  }, [advisories, vendorFilter, sourceFilter, severityFilter, query]);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advisories
      .filter((a) => matchesBase(a, q) && matchesSource(a, sourceFilter) && matchesSeverity(a, severityFilter))
      .sort((a, b) => {
        if (sort === 'added') {
          return b.dateAdded.localeCompare(a.dateAdded);
        }

        // Soonest due sorting:
        const daysA = daysUntil(a.dueDate);
        const daysB = daysUntil(b.dueDate);
        const hasDateA = !Number.isNaN(daysA);
        const hasDateB = !Number.isNaN(daysB);

        // Entries without a due date are placed at the bottom, ordered by newest added
        if (!hasDateA && !hasDateB) {
          return b.dateAdded.localeCompare(a.dateAdded);
        }
        if (!hasDateA) return 1;
        if (!hasDateB) return -1;

        const isUpcomingA = daysA >= 0;
        const isUpcomingB = daysB >= 0;

        // Upcoming/open deadlines come before past-due deadlines
        if (isUpcomingA && !isUpcomingB) return -1;
        if (!isUpcomingA && isUpcomingB) return 1;

        if (isUpcomingA && isUpcomingB) {
          // Soonest deadline first (ascending by dueDate)
          return a.dueDate.localeCompare(b.dueDate);
        }

        // Past-due deadlines: most recently due first (descending by dueDate)
        return b.dueDate.localeCompare(a.dueDate);
      });
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
      {/* Compact Utility Header */}
      <div className="border-b border-line bg-surface/20">
        <div className="mx-auto max-w-site px-5 py-3 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
          <div className="flex items-baseline gap-3">
            <h1 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
              Security Advisories
            </h1>
            <p className="hidden md:inline font-mono text-xs text-subtle">
              · Actively exploited zero-days & CISA remediation mandates
            </p>
          </div>
          <div className="flex items-center gap-2.5 text-xs font-mono text-subtle">
            <span>{advisories.length.toLocaleString()} tracked</span>
            <span>·</span>
            <span className="text-accent">{openCount.toLocaleString()} open deadlines</span>
            <span>·</span>
            <span>{overdueCount.toLocaleString()} past due</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="sticky top-16 z-20 -mx-5 flex flex-col gap-2.5 border-b border-line bg-bg/95 px-5 py-2.5 backdrop-blur md:-mx-8 md:px-8">
          {/* Row 1: Search, Vendor, Due This Week, Sort & Reset */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2.5">
              <label className="relative block flex-1 sm:max-w-xs md:w-72">
                <span className="sr-only">Search advisories</span>
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="CVE, vendor, product, or keyword..."
                  className="h-8 w-full rounded-md border border-line bg-surface pl-8 pr-3 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none" />
              </label>

              <div className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <span>Vendor:</span>
                <VendorSelect
                  value={vendorFilter}
                  onChange={(v) => {
                    setVendorFilter(v);
                    setPage(1);
                  }}
                  vendors={sortedVendors}
                  totalCount={vendorCandidates.length}
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

            <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
              <label className="inline-flex items-center gap-1.5 text-xs text-muted">
                <span>Sort:</span>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value as SortKey);
                    setPage(1);
                  }}
                  className="h-7.5 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none">
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
                  className="rounded border border-line bg-surface px-2 py-0.5 text-xs text-accent hover:border-accent transition-colors duration-150">
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Severity & Impact (Left) + Advisory Source (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            {/* Severity & Impact Chips */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('ALL');
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'ALL'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent hover:bg-surface border border-line'
                }`}>
                All ({severityCounts.all})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('CRITICAL');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'CRITICAL'
                    ? 'bg-critical/10 font-medium text-critical border border-critical/50'
                    : 'text-muted hover:text-critical hover:bg-surface border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-critical" />
                Critical ({severityCounts.critical})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('HIGH');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'HIGH'
                    ? 'bg-amber-500/10 font-medium text-amber-500 border border-amber-500/50'
                    : 'text-muted hover:text-amber-500 hover:bg-surface border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                High ({severityCounts.high})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('MEDIUM');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'MEDIUM'
                    ? 'bg-[#4CC9F0]/10 font-medium text-[#4CC9F0] border border-[#4CC9F0]/50'
                    : 'text-muted hover:text-[#4CC9F0] hover:bg-surface border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#4CC9F0]" />
                Medium ({severityCounts.medium})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('LOW');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'LOW'
                    ? 'bg-slate-400/10 font-medium text-slate-300 border border-slate-400/50'
                    : 'text-muted hover:text-ink hover:bg-surface border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                Low ({severityCounts.low})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('RANSOMWARE');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  severityFilter === 'RANSOMWARE'
                    ? 'bg-rose-500/15 font-medium text-rose-400 border border-rose-500/60'
                    : 'text-muted hover:text-rose-400 hover:bg-surface border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                Ransomware ({severityCounts.ransomware})
              </button>
            </div>

            {/* Advisory Source Segment */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('ALL');
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  sourceFilter === 'ALL'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent hover:bg-surface border border-line'
                }`}>
                All Sources ({sourceCounts.all})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('CISA');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  sourceFilter === 'CISA'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent hover:bg-surface border border-line'
                }`}>
                CISA KEV Zero-Days ({sourceCounts.cisa})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('GITHUB');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors duration-150 ease-out ${
                  sourceFilter === 'GITHUB'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent hover:bg-surface border border-line'
                }`}>
                GitHub Ecosystem ({sourceCounts.github})
              </button>
            </div>
          </div>
        </div>

        <div className="py-2 flex items-center justify-between text-xs font-mono text-subtle" aria-live="polite">
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