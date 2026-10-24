import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { newsCategories } from '../data/news';
import { useLiveNews } from '../data/useLiveNews';
import type { NewsCategory, NewsSeverity } from '../types/news';
import { Seo } from '../components/Seo';

type Filter = 'All' | NewsCategory;
type SeverityFilter = 'ALL' | NewsSeverity;
const PAGE_SIZE = 20;

export function News() {
  const [filter, setFilter] = useState<Filter>('All');
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('ALL');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { news } = useLiveNews();

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: news.length,
    };
    for (const b of news) {
      if (b.category) {
        counts[b.category] = (counts[b.category] || 0) + 1;
      }
    }
    return counts;
  }, [news]);

  const severityCounts = useMemo(() => {
    const counts: Record<SeverityFilter, number> = {
      ALL: news.length,
      CRITICAL: 0,
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
    };
    for (const b of news) {
      if (b.severity && counts[b.severity] !== undefined) {
        counts[b.severity]++;
      }
    }
    return counts;
  }, [news]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (severityFilter !== 'ALL' && b.severity !== severityFilter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [news, filter, severityFilter, query]);

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
      <PageIntro
        title="News briefs"
        description="Critical threat intelligence that matters to defenders, summarized in concise 60-word briefs and linked to original reporting."
      />

      <div className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="sticky top-16 z-20 -mx-5 flex flex-col gap-3.5 border-b border-line bg-bg/95 px-5 py-4 backdrop-blur md:-mx-8 md:px-8">
          {/* Search bar & Quick controls */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="relative block flex-1 sm:max-w-md">
              <span className="sr-only">Search briefs</span>
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search titles, vendors, or CVE IDs"
                className="h-9 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
              />
            </label>

            {(filter !== 'All' || severityFilter !== 'ALL' || query) && (
              <button
                type="button"
                onClick={() => {
                  setFilter('All');
                  setSeverityFilter('ALL');
                  setQuery('');
                  setPage(1);
                }}
                className="inline-flex items-center gap-1.5 self-start rounded-md border border-line bg-surface px-3 py-1.5 text-xs text-accent hover:border-accent transition-colors duration-150">
                Reset All Filters
              </button>
            )}
          </div>

          {/* Section 1: Threat Severity */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle mr-1">
              Threat Severity:
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
              All ({severityCounts.ALL})
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
              Critical ({severityCounts.CRITICAL})
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
              High ({severityCounts.HIGH})
            </button>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('MEDIUM');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'MEDIUM'
                  ? 'bg-[#4CC9F0]/10 font-medium text-[#4CC9F0] border border-[#4CC9F0]/50'
                  : 'text-muted hover:text-[#4CC9F0] hover:bg-surface border border-line'
              }`}>
              <span className="h-2 w-2 rounded-full bg-[#4CC9F0]" />
              Medium ({severityCounts.MEDIUM})
            </button>
            <button
              type="button"
              onClick={() => {
                setSeverityFilter('LOW');
                setPage(1);
              }}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                severityFilter === 'LOW'
                  ? 'bg-slate-400/10 font-medium text-slate-300 border border-slate-400/50'
                  : 'text-muted hover:text-ink hover:bg-surface border border-line'
              }`}>
              <span className="h-2 w-2 rounded-full bg-slate-400" />
              Low ({severityCounts.LOW})
            </button>
          </div>

          {/* Section 2: Category & Topic */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle shrink-0 mr-1">
              Category & Topic:
            </span>
            <div role="tablist" aria-label="Filter by category" className="flex gap-1.5">
              {filters.map((f) => {
                const label = f === 'All' ? 'All Categories' : f;
                const count = categoryCounts[f] ?? 0;
                return (
                  <button
                    key={f}
                    role="tab"
                    type="button"
                    aria-selected={filter === f}
                    onClick={() => {
                      setFilter(f);
                      setPage(1);
                    }}
                    className={`whitespace-nowrap rounded-md px-2.5 py-1 text-xs transition-colors duration-150 ease-out ${
                      filter === f
                        ? 'bg-raised font-medium text-accent border border-accent/40 shadow-sm'
                        : 'text-muted hover:text-accent hover:bg-surface border border-line'
                    }`}>
                    {label} <span className="text-[11px] opacity-75">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-5 font-mono text-xs text-subtle" aria-live="polite">
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