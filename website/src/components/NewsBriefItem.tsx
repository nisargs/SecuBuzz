import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import type { NewsBrief } from '../types/news';
import { timeAgo } from '../utils/date';

interface NewsBriefItemProps {
  brief: NewsBrief;
}

const severityStyles: Record<string, { dot: string; badge: string }> = {
  CRITICAL: {
    dot: 'bg-critical',
    badge: 'border-critical/40 bg-critical/10 text-critical',
  },
  HIGH: {
    dot: 'bg-high',
    badge: 'border-high/40 bg-high/10 text-high',
  },
  MEDIUM: {
    dot: 'bg-medium',
    badge: 'border-medium/40 bg-medium/10 text-medium',
  },
  LOW: {
    dot: 'bg-low',
    badge: 'border-low/40 bg-low/10 text-low',
  },
};

export function NewsBriefItem({ brief }: NewsBriefItemProps) {
  const isCritical = brief.severity === 'CRITICAL';

  return (
    <article className={`grid gap-3 py-7 md:grid-cols-[140px_1fr] md:gap-8 ${isCritical ? 'relative before:absolute before:-left-3 before:top-6 before:bottom-6 before:w-0.5 before:bg-critical before:rounded-full md:before:-left-4' : ''}`}>
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs md:flex-col md:items-start md:gap-1.5 md:pt-1">
        <span className="text-accent">{brief.category}</span>
        {brief.severity && severityStyles[brief.severity] && (
          <span
            className={`inline-flex items-center gap-1.5 rounded border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${severityStyles[brief.severity].badge}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${severityStyles[brief.severity].dot}`}
            />
            {brief.severity}
          </span>
        )}
        <time dateTime={brief.publishedAt} className="text-subtle">
          {timeAgo(brief.publishedAt)}
        </time>
      </div>
      <div>
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink">
          <Link
            to={`/news/${brief.slug}`}
            className="transition-colors duration-150 ease-out hover:text-accent">
            {brief.title}
          </Link>
        </h3>
        <p className="mt-2.5 max-w-[68ch] text-[15px] leading-relaxed text-muted">{brief.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
          <a
            href={brief.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-muted transition-colors duration-150 ease-out hover:text-accent">
            
            {brief.source}
            <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          {brief.additionalSources && brief.additionalSources.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-subtle">
              <span>Also reported by:</span>
              {brief.additionalSources.map((s) => (
                <a
                  key={s.sourceUrl}
                  href={s.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-muted transition-colors duration-150 ease-out hover:text-accent">
                  {s.source}
                  <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
          {brief.cves.map((cve) =>
          <Link
            key={cve}
            to={`/advisories/${cve.toLowerCase()}`}
            className="rounded border border-line px-1.5 py-0.5 font-mono text-[11px] text-muted transition-colors duration-150 ease-out hover:border-accent/60 hover:text-ink">
            
              {cve}
            </Link>
          )}
        </div>
      </div>
    </article>);

}