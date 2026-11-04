import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { MyStackSidebar } from '../components/MyStackSidebar';
import { useMyStack } from '../data/useMyStack';
import { VendorSelect } from '../components/VendorSelect';
import { newsCategories } from '../data/news';
import { useLiveNews } from '../data/useLiveNews';
import type { NewsBrief, NewsCategory, NewsSeverity } from '../types/news';
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
  const [archiveResults, setArchiveResults] = useState<NewsBrief[]>([]);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [archiveSearched, setArchiveSearched] = useState(false);

  useEffect(() => {
    setArchiveResults([]);
    setArchiveSearched(false);
  }, [query]);

  const handleSearchArchive = useCallback(() => {
    if (!query.trim()) return;
    setArchiveLoading(true);
    setArchiveSearched(true);
    fetch(`/api/news/search?q=${encodeURIComponent(query.trim())}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.results) {
          setArchiveResults(data.results);
        }
      })
      .catch((err) => console.error('Archive search failed:', err))
      .finally(() => setArchiveLoading(false));
  }, [query]);
  const [stackFilterActive, setStackFilterActive] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('secubuzz_news_stack_filter_active_v1');
      return saved === 'true';
    } catch {
      return false;
    }
  });
  const { news } = useLiveNews();
  const myStack = useMyStack();

  useEffect(() => {
    try {
      localStorage.setItem('secubuzz_news_stack_filter_active_v1', String(stackFilterActive));
    } catch {
      // Ignore in private browsing
    }
  }, [stackFilterActive]);

  useEffect(() => {
    if (!myStack.hasConfiguredStack && stackFilterActive) {
      setStackFilterActive(false);
    }
  }, [myStack.hasConfiguredStack, stackFilterActive]);

  const handleToggleVendor = useCallback((vendor: string) => {
    const isSelected = myStack.selectedVendors.some(
      (v) => v.toLowerCase() === vendor.toLowerCase()
    );
    myStack.toggleVendor(vendor);
    if (!isSelected) {
      setStackFilterActive(true);
      setSourceFilter('ALL');
      setVendorFilter('ALL');
      setPage(1);
    } else {
      if (myStack.selectedVendors.length <= 1 && myStack.watchedCves.length === 0) {
        setStackFilterActive(false);
        setPage(1);
      }
    }
  }, [myStack]);

  const handleRemoveVendor = useCallback((vendor: string) => {
    myStack.removeVendor(vendor);
    if (myStack.selectedVendors.length <= 1 && myStack.watchedCves.length === 0) {
      setStackFilterActive(false);
      setPage(1);
    }
  }, [myStack]);

  const handleClearVendors = useCallback(() => {
    myStack.clearVendors();
    if (myStack.watchedCves.length === 0) {
      setStackFilterActive(false);
      setPage(1);
    }
  }, [myStack]);

  const handleToggleWatchCve = useCallback((cve: string) => {
    const isPinned = myStack.isWatchingCve(cve);
    myStack.toggleWatchCve(cve);
    if (!isPinned) {
      setStackFilterActive(true);
      setSourceFilter('ALL');
      setVendorFilter('ALL');
      setPage(1);
    } else {
      if (myStack.watchedCves.length <= 1 && myStack.selectedVendors.length === 0) {
        setStackFilterActive(false);
        setPage(1);
      }
    }
  }, [myStack]);

  const handleRemoveWatchCve = useCallback((cve: string) => {
    myStack.removeWatchCve(cve);
    if (myStack.watchedCves.length <= 1 && myStack.selectedVendors.length === 0) {
      setStackFilterActive(false);
      setPage(1);
    }
  }, [myStack]);

  const handleClearCves = useCallback(() => {
    myStack.clearCves();
    if (myStack.selectedVendors.length === 0) {
      setStackFilterActive(false);
      setPage(1);
    }
  }, [myStack]);

  const handleClearStack = useCallback(() => {
    myStack.clearStack();
    setStackFilterActive(false);
    setPage(1);
  }, [myStack]);

  const stackMatchCount = useMemo(() => {
    return news.filter((b) => myStack.matchesBrief(b)).length;
  }, [news, myStack]);

  const severityCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (stackFilterActive && !myStack.matchesBrief(b)) return false;
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
  }, [news, filter, sourceFilter, vendorFilter, stackFilterActive, myStack, query]);

  const categoryCounts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const candidateNews = news.filter((b) => {
      if (stackFilterActive && !myStack.matchesBrief(b)) return false;
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
  }, [news, severityFilter, sourceFilter, vendorFilter, stackFilterActive, myStack, query]);

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
      if (stackFilterActive && !myStack.matchesBrief(b)) return false;
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
  }, [news, filter, severityFilter, sourceFilter, stackFilterActive, myStack, query]);

  const sortedVendors = useMemo(() => {
    const pool = sourceFilter === 'PSIRT'
      ? news.filter((b) => isVendorPsirt(b.source))
      : news;
    const vendorSet = new Set<string>();
    for (const b of pool) {
      const v = getVendorFromSource(b.source);
      if (v && v !== 'Other') vendorSet.add(v);
    }
    return Array.from(vendorSet)
      .map((name) => ({
        name,
        count: vendorCounts[name] ?? 0,
      }))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }, [news, sourceFilter, vendorCounts]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((b) => {
      if (stackFilterActive && !myStack.matchesBrief(b)) return false;
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
  }, [news, filter, severityFilter, sourceFilter, vendorFilter, stackFilterActive, myStack, query]);

  const sortedCategories = useMemo(() => {
    return [...newsCategories].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }, []);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBriefs = results.slice(startIndex, startIndex + PAGE_SIZE);

  const filters: Filter[] = ['All', ...sortedCategories];

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
                  className="h-8 rounded-md border border-line bg-surface px-2.5 font-sans text-xs text-ink focus:border-accent focus:outline-none cursor-pointer">
                  <option value="All">All Categories ({categoryCounts.All ?? news.length})</option>
                  {sortedCategories.map((c) => (
                    <option key={c} value={c}>
                      {c} ({categoryCounts[c] ?? 0})
                    </option>
                  ))}
                </select>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-subtle">
                <span>Vendor:</span>
                <VendorSelect
                  value={vendorFilter}
                  onChange={(v) => {
                    setVendorFilter(v);
                    setPage(1);
                  }}
                  vendors={sortedVendors}
                  totalCount={vendorCounts.ALL ?? news.length}
                />
              </div>


            </div>

            {(filter !== 'All' || severityFilter !== 'ALL' || sourceFilter !== 'ALL' || vendorFilter !== 'ALL' || stackFilterActive || query) && (
              <button
                type="button"
                onClick={() => {
                  setFilter('All');
                  setSeverityFilter('ALL');
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setStackFilterActive(false);
                  setQuery('');
                  setPage(1);
                }}
                className="self-end sm:self-auto rounded border border-line bg-surface px-2.5 py-1 text-xs text-accent hover:border-accent transition-colors">
                Reset Filters
              </button>
            )}
          </div>

          {/* Row 2: Threat Severity + Sources + My Stack (Tight Left-Aligned Layout) */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {/* Threat Severity Chips */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
              <button
                type="button"
                onClick={() => {
                  setSeverityFilter('ALL');
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
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
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
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
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
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
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
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
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
                  severityFilter === 'LOW'
                    ? 'bg-slate-400/10 font-medium text-slate-300 border border-slate-400/50'
                    : 'text-muted hover:text-ink border border-line'
                }`}>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                Low ({severityCounts.LOW})
              </button>
            </div>

            {/* Subtle Vertical Divider */}
            <div className="hidden sm:block h-3.5 w-px bg-line/80 shrink-0" aria-hidden="true" />

            {/* Feed Source Segment + My Stack (Beside Vendor PSIRT, Zero Emojis) */}
            <div className="flex items-center gap-1 overflow-x-auto pb-0.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setStackFilterActive(false);
                  setPage(1);
                }}
                className={`rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
                  sourceFilter === 'ALL' && !stackFilterActive
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent border border-line'
                }`}>
                All Sources ({sourceCounts.ALL})
              </button>

              <button
                type="button"
                onClick={() => {
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setStackFilterActive(!stackFilterActive);
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
                  stackFilterActive
                    ? 'bg-accent/20 font-medium text-accent border border-accent/60'
                    : 'text-muted hover:text-accent border border-line'
                }`}
                title="Filter feed to your monitored enterprise stack & watched CVEs">
                <span>My Stack</span>
                <span className="font-mono text-[10px] opacity-80">({stackMatchCount})</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSourceFilter('PSIRT');
                  setVendorFilter('ALL');
                  setStackFilterActive(false);
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
                  sourceFilter === 'PSIRT' && !stackFilterActive
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
                  setStackFilterActive(false);
                  setPage(1);
                }}
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs transition-colors cursor-pointer ${
                  sourceFilter === 'MEDIA' && !stackFilterActive
                    ? 'bg-raised font-medium text-accent border border-accent/40'
                    : 'text-muted hover:text-accent border border-line'
                }`}>
                Media & Research ({sourceCounts.MEDIA})
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0">
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
                  isWatchingCve={myStack.isWatchingCve}
                  onToggleWatchCve={handleToggleWatchCve}
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
            <p className="text-lg font-medium text-ink">
              {stackFilterActive && !myStack.hasConfiguredStack
                ? 'Your stack is unconfigured'
                : 'No briefs match that search'}
            </p>
            <p className="mt-2 text-muted">
              {stackFilterActive && !myStack.hasConfiguredStack
                ? 'Select your enterprise vendors or pin CVEs in the sidebar on the right.'
                : 'Try a different keyword, clear the filters, or search the historical archive.'}
            </p>

            {query.trim().length >= 2 && !stackFilterActive && (
              <div className="mt-6 flex flex-col items-center w-full">
                {!archiveSearched ? (
                  <button
                    type="button"
                    onClick={handleSearchArchive}
                    disabled={archiveLoading}
                    className="inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/20 transition-colors cursor-pointer">
                    {archiveLoading ? 'Searching archive...' : `Search Historical Archive for "${query}"`}
                  </button>
                ) : archiveLoading ? (
                  <p className="text-sm font-mono text-muted">Searching historical archive...</p>
                ) : archiveResults.length > 0 ? (
                  <div className="w-full text-left mt-8">
                    <div className="flex items-center gap-2 mb-4 border-b border-line pb-2">
                      <span className="inline-flex items-center rounded border border-line bg-surface-elevated/40 px-2 py-0.5 text-xs font-mono font-medium text-accent">
                        HISTORICAL ARCHIVE ({archiveResults.length})
                      </span>
                      <span className="text-xs text-subtle">Permanent Threat Intelligence Archive</span>
                    </div>
                    <div className="space-y-3">
                      {archiveResults.map((brief) => (
                        <NewsBriefItem
                          key={brief.slug}
                          brief={brief}
                          isWatchingCve={myStack.isWatchingCve}
                          onToggleWatchCve={handleToggleWatchCve}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-subtle mt-2">No archived stories found matching "${query}".</p>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter('All');
                setSeverityFilter('ALL');
                setStackFilterActive(false);
                setPage(1);
              }}
              className="mt-6 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:bg-surface cursor-pointer">
              Clear filters
            </button>
          </div>
        )}
      
          </div>

          <aside aria-label="My Stack and Watchlist" className="hidden lg:block pt-2">
            <div className="lg:sticky lg:top-36">
              <MyStackSidebar
                selectedVendors={myStack.selectedVendors}
                watchedCves={myStack.watchedCves}
                toggleVendor={handleToggleVendor}
                removeVendor={handleRemoveVendor}
                clearVendors={handleClearVendors}
                toggleWatchCve={handleToggleWatchCve}
                removeWatchCve={handleRemoveWatchCve}
                clearCves={handleClearCves}
                clearStack={handleClearStack}
                matchCount={stackMatchCount}
                isStackFilterActive={stackFilterActive}
                onToggleStackFilter={() => {
                  setSourceFilter('ALL');
                  setVendorFilter('ALL');
                  setStackFilterActive(!stackFilterActive);
                  setPage(1);
                }}
              />
            </div>
          </aside>
        </div></div>
    </>
  );
}