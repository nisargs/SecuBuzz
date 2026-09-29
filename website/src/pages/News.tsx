import React, { useMemo, useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { news, newsCategories } from '../data/news';
import type { NewsCategory } from '../types/news';

import { Seo } from '../components/Seo';

type Filter = 'All' | NewsCategory;

export function News() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return news.filter((b) => {
      if (filter !== 'All' && b.category !== filter) return false;
      if (!q) return true;
      return (
        b.title.toLowerCase().includes(q) ||
        b.summary.toLowerCase().includes(q) ||
        b.cves.some((c) => c.toLowerCase().includes(q)));

    });
  }, [filter, query]);

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
        description="Critical threat intelligence that matters to defenders, summarized in concise 60-word briefs and linked to original reporting." />
      
      <div className="mx-auto max-w-site px-5 pb-20 md:px-8">
        <div className="sticky top-16 z-20 -mx-5 flex flex-col gap-3 border-b border-line bg-bg/95 px-5 py-4 backdrop-blur md:-mx-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div role="tablist" aria-label="Filter by category" className="-mx-1 flex gap-1 overflow-x-auto px-1">
            {filters.map((f) =>
            <button
              key={f}
              role="tab"
              type="button"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm transition-colors duration-150 ease-out ${
              filter === f ? 'bg-raised text-ink' : 'text-muted hover:text-ink'}`
              }>
              
                {f}
              </button>
            )}
          </div>
          <label className="relative block md:w-72">
            <span className="sr-only">Search briefs</span>
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-subtle" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles or CVE IDs"
              className="h-9 w-full rounded-md border border-line bg-surface pl-9 pr-3 text-sm text-ink placeholder:text-subtle focus:border-accent focus:outline-none" />
            
          </label>
        </div>

        <p className="pt-5 font-mono text-xs text-subtle" aria-live="polite">
          {results.length} {results.length === 1 ? 'brief' : 'briefs'}
        </p>

        {results.length > 0 ?
        <div className="divide-y divide-line">
            {results.map((b) =>
          <NewsBriefItem key={b.slug} brief={b} />
          )}
          </div> :

        <div className="py-20 text-center">
            <p className="text-lg font-medium text-ink">No briefs match that search</p>
            <p className="mt-2 text-muted">Try a different keyword, or clear the filters.</p>
            <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilter('All');
            }}
            className="mt-6 rounded-md border border-line px-4 py-2 text-sm text-ink transition-colors duration-150 ease-out hover:bg-surface">
            
              Clear filters
            </button>
          </div>
        }
      </div>
    </>);

}