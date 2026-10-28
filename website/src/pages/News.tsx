import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { newsCategories } from '../data/news';
import { useLiveNews } from '../data/useLiveNews';
import type { NewsCategory, NewsSeverity } from '../types/news';
import { Seo } from '../components/Seo';
import { isVendorPsirt, getVendorFromSource } from '../utils/psirt';

type Filter = 'All' | NewsCategory;
type SeverityFilter = 'ALL' | NewsSeverity;
type SourceFilter = 'ALL' | 'PSIRT' | 'MEDIA';
const PAGE_SIZE = 20;

export function News() {
  const [filter, setFilter] = useState<Filter>('All');
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('ALL');
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>('ALL');
  const [vendorFilter, setVendorFilter] = useState<string>('ALL');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { news } = useLiveNews();

  const severityCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (sourceFilter === 'PSIRT' && !isVendorPsirt(b.source)) return false;
      if (sourceFilter === 'MEDIA' && isVendorPsirt(b.source)) return false;
      if (vendorFilter !== 'ALL' && getVendorFromSource(b.source) !== vendorFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });

    const counts: Record<SeverityFilter, number> = {
      ALL: candidateNews.length,
      CRITICAL: 0,
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
    };
    for (const b of candidateNews) {
      if (b.severity && counts[b.severity] !== undefined) {
        counts[b.severity]++;
      }
    }
    return counts;
  }, [news, filter, sourceFilter, vendorFilter, query]);

  const categoryCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
      if (sourceFilter === 'PSIRT' && !isVendorPsirt(b.source)) return false;
      if (sourceFilter === 'MEDIA' && isVendorPsirt(b.source)) return false;
      if (vendorFilter !== 'ALL' && getVendorFromSource(b.source) !== vendorFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });

    const counts: Record<string, number> = {
      All: candidateNews.length,
    };
    for (const b of candidateNews) {
      if (b.category) {
        counts[b.category] = (counts[b.category] || 0) + 1;
      }
    }
    return counts;
  }, [news, severityFilter, sourceFilter, vendorFilter, query]);

  const sourceCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
      if (vendorFilter !== 'ALL' && getVendorFromSource(b.source) !== vendorFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });

    const counts: Record<SourceFilter, number> = {
      ALL: candidateNews.length,
      PSIRT: 0,
      MEDIA: 0,
    };
    for (const b of candidateNews) {
      if (isVendorPsirt(b.source)) {
        counts.PSIRT++;
      } else {
        counts.MEDIA++;
      }
    }
    return counts;
  }, [news, filter, severityFilter, vendorFilter, query]);

  const vendorCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
      if (sourceFilter === 'PSIRT' && !isVendorPsirt(b.source)) return false;
      if (sourceFilter === 'MEDIA' && isVendorPsirt(b.source)) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });

    const counts: Record<string, number> = {
      ALL: candidateNews.length,
    };
    for (const b of candidateNews) {
      const v = getVendorFromSource(b.source);
      counts[v] = (counts[v] || 0) + 1;
    }
    return counts;
  }, [news, filter, severityFilter, sourceFilter, query]);

  const availableVendors = useMemo(() => {
    const pool = sourceFilter === 'PSIRT'
      ? news.filter((b) => isVendorPsirt(b.source))
      : news;
    const vendorSet = new Set<string>();
    for (const b of pool) {
      const v = getVendorFromSource(b.source);
      if (v && v !== 'Other') vendorSet.add(v);
    }
    return Array.from(vendorSet).sort((a, b) => (vendorCounts[b] || 0) - (vendorCounts[a] || 0));
  }, [news, sourceFilter, vendorCounts]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
      if (sourceFilter === 'PSIRT' && !isVendorPsirt(b.source)) return false;
      if (sourceFilter === 'MEDIA' && isVendorPsirt(b.source)) return false;
      if (vendorFilter !== 'ALL' && getVendorFromSource(b.source) !== vendorFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [news, filter, severityFilter, sourceFilter, vendorFilter, query]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBriefs = results.slice(startIndex, startIndex + PAGE_SIZE);

  const filters: Filter[] = ['All', ...newsCategories];

  return (
    <>
      <Seo
        title="Quick Cybersecurity News in 60 Words · SecuBuzz"
        description="Quick, concise 60-word cybersecurity news briefs covering active zero-days, enterprise ransomware campaigns, and security advisories."
        canonicalPath="/news"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Quick Cybersecurity News in 60 Words',
          url: 'https://secubuzz.com/news',
          description: 'Quick, concise 60-word cybersecurity news briefs covering active zero-days, enterprise ransomware campaigns, and security advisories.',
        }}
      />
      {/* Compact Utility Header */}
      <div className="border-b border-line bg-surface/20">
        <div className="mx-auto max-w-site px-5 py-3 md:px-8 flex items-baseline gap-3">
          <h1 className="text-xl font-bold tracking-tight text-ink md:text-2xl">
            News briefs
          </h1>
          <p className="hidden sm:inline font-mono text-xs text-subtle">
            · 60-word verified threat intelligence linked to primary sources
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-site px-5 pb-20 md:px-8">
        {/* Sticky Compact 2-Row Filter Toolbar (Matched to Advisories) */}
        <div className="sticky top-16 z-20 -mx-5 flex flex-col gap-2.5 border-b border-line bg-bg/95 px-5 py-2.5 backdrop-blur md:-mx-8 md:px-8">
          {/* Row 1: Search + Category Select + Reset */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2.5">
              <label className="relative block flex-1 sm:max-w-xs md:w-80">
                <span className="sr-only">Search briefs</span>
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-subtle" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search titles, vendors, or CVE IDs..."
                  className="h-8 w-full rounded-md border border-line bg-surface pl-8 pr-3 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
                />
              </label>

              <div className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <span>Category:</span>
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value as Filter);
                    setPage(1);
                  }}
                  className="h-7.5 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none cursor-pointer">
                  <option value="All">All Categories ({categoryCounts.All ?? news.length})</option>
                  {newsCategories.map((c) => (
                    <option key={c} value={c}>
                      {c} ({categoryCounts[c] ?? 0})
                    </option>
                  ))}
                </select>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <span>Vendor:</span>
                <select
                  value={vendorFilter}
                  onChange={(e) => {
                    setVendorFilter(e.target.value);
                    setPage(1);
                  }}
                  className="h-7.5 rounded-md border border-line bg-surface px-2 text-xs text-ink focus:border-accent focus:outline-none cursor-pointer">
                  <option value="ALL">All Vendors ({vendorCounts.ALL ?? 0})</option>
                  {availableVendors.map((v) => (
                    <option key={v} value={v}>
                      {v} ({vendorCounts[v] ?? 0})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {(filter !== 'All' || severityFilter !== 'ALL' || sourceFilter !== 'ALL' || vendorFilter !== 'ALL' || query) && (
              <button
                type="button"
                onClick={() => {
                  setFilter('All');
                  setSeverityFilter('ALL');
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setQuery('');
                  setPage(1);
                }}
                className="self-end sm:self-auto rounded border border-line bg-surface px-2.5 py-1 text-xs text-accent hover:border-accent transition-colors">
                Reset Filters
              </button>
            )}
          </div>

          {/* Row 2: Threat Severity (Left) + Feed Source (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
            {/* Threat Severity Chips */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('ALL');
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors ${
                  severityFilter === 'ALL'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent border border-line'
                }`}>
                All ({severityCounts.ALL})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('CRITICAL');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  severityFilter === 'CRITICAL'
                    ? 'bg-critical/10 font-medium text-critical border border-critical/50'
                    : 'text-muted hover:text-critical border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-critical" />
                Critical ({severityCounts.CRITICAL})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('HIGH');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  severityFilter === 'HIGH'
                    ? 'bg-amber-500/10 font-medium text-amber-500 border border-amber-500/50'
                    : 'text-muted hover:text-amber-500 border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                High ({severityCounts.HIGH})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('MEDIUM');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  severityFilter === 'MEDIUM'
                    ? 'bg-[#4CC9F0]/10 font-medium text-[#4CC9F0] border border-[#4CC9F0]/50'
                    : 'text-muted hover:text-[#4CC9F0] border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#4CC9F0]" />
                Medium ({severityCounts.MEDIUM})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('LOW');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  severityFilter === 'LOW'
                    ? 'bg-slate-400/10 font-medium text-slate-300 border border-slate-400/50'
                    : 'text-muted hover:text-ink border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                Low ({severityCounts.LOW})
              </button>
            </div>

            {/* Feed Source Segment */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors ${
                  sourceFilter === 'ALL'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent border border-line'
                }`}>
                All Sources ({sourceCounts.ALL})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('PSIRT');
                  setVendorFilter('ALL');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  sourceFilter === 'PSIRT'
                    ? 'bg-cyan-500/20 font-medium text-cyan-400 border border-cyan-500/50'
                    : 'text-muted hover:text-cyan-400 border border-line'
                }`}>
                Vendor PSIRT ({sourceCounts.PSIRT})
              </button>
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('MEDIA');
                  setVendorFilter('ALL');
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors ${
                  sourceFilter === 'MEDIA'
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent border border-line'
                }`}>
                Media & Research ({sourceCounts.MEDIA})
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 font-mono text-xs text-subtle" aria-live="polite">
          <p>
            {results.length === 0
              ? '0 briefs'
              : `Showing ${startIndex + 1}–${Math.min(startIndex + PAGE_SIZE, results.length)} of ${results.length} briefs`}
          </p>
          {results.length > PAGE_SIZE && (
            <p>
              Page {safePage} of {totalPages}
            </p>
          )}
        </div>

        {results.length > 0 ? (
          <>
            <div className="divide-y divide-line">
              {paginatedBriefs.map((b) => (
                <NewsBriefItem
                  key={b.slug}
                  brief={b}
                  onSelectSeverity={(sev) => {
                    setSeverityFilter(sev);
                    setPage(1);
                  }}
                  onSelectCategory={(cat) => {
                    setFilter(cat);
                    setPage(1);
                  }}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Pagination" className="mt-10 flex items-center justify-between border-t border-line pt-6">
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
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-ink">No briefs match that search</p>
            <p className="mt-2 text-muted">Try a different keyword, or clear the filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter('All');
                setSeverityFilter('ALL');
                setPage(1);
              }}
              className="mt-6 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:bg-surface">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}