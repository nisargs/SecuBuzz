import React, { useMemo, useState } from 'react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { newsCategories } from '../data/news';
import { useLiveNews } from '../data/useLiveNews';
import type { NewsCategory } from '../types/news';
import { Seo } from '../components/Seo';

type Filter = 'All' | NewsCategory;
const PAGE_SIZE = 20;

export function News() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { news } = useLiveNews();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q))
      );
    });
  }, [news, filter, query]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedBriefs = results.slice(startIndex, startIndex + PAGE_SIZE);

  const filters: Filter[] = ['All', ...newsCategories];

  return (
    <>
      <Seo
        title="Cybersecurity News Briefs · SecuBuzz"
        description="Concise 60-word cybersecurity briefs covering active vulnerabilities, ransomware campaigns, and zero-day threats."
        canonicalPath="/news"
      />
      <PageIntro
        title="News briefs"
        description="Critical threat intelligence that matters to defenders, summarized in concise 60-word briefs and linked to original reporting."
      />

      <div className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="sticky top-16 z-20 -mx-5 flex flex-col gap-3 border-b border-line bg-bg/95 px-5 py-4 backdrop-blur md:-mx-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div role="tablist" aria-label="Filter by category" className="-mx-1 flex gap-1 overflow-x-auto px-1">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                type="button"
                aria-selected={filter === f}
                onClick={() => {
                  setFilter(f);
                  setPage(1);
                }}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors duration-150 ease-out ${
                  filter === f ? 'bg-raised text-ink' : 'text-muted hover:text-ink'
                }`}>
                {f}
              </button>
            ))}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search briefs</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search titles or CVE IDs"
              className="h-9 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
            />
          </label>
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
                <NewsBriefItem key={b.slug} brief={b} />
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
          <div className="py-20 text-center">
            <p className="text-lg font-medium text-ink">No briefs match that search</p>
            <p className="mt-2 text-muted">Try a different keyword, or clear the filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setFilter('All');
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