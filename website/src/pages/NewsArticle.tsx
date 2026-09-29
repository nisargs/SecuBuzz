import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowUpRightIcon, CopyIcon, CheckIcon, Share2Icon } from 'lucide-react';
import { useLiveNews } from '../data/useLiveNews';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { SeverityBadge } from '../components/SeverityBadge';
import { DueStatus } from '../components/DueStatus';
import { AppCta } from '../components/AppCta';
import { Seo } from '../components/Seo';
import { NotFound } from './NotFound';
import { clockTime, shortDate, timeAgo } from '../utils/date';
import { wordCount } from '../utils/text';

export function NewsArticle() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const { news, loading } = useLiveNews();
  const { advisories } = useLiveAdvisories();

  // Match current slug or alias from deduplicated stories
  const brief = news.find((b) => {
    if (!slug) return false;
    const target = slug.toLowerCase();
    const s = b.slug.toLowerCase();
    return s === target || b.aliases?.some(a => a.toLowerCase() === target) || s.startsWith(target) || target.startsWith(s);
  });

  if (!brief) {
    if (loading) {
      return (
        <div className="mx-auto max-w-site px-5 py-24 text-center">
          <p className="text-sm font-mono text-muted">Retrieving intelligence brief...</p>
        </div>
      );
    }
    return <NotFound />;
  }

  const linked = advisories.filter((a) => brief.cves.includes(a.cve));
  const related = news.filter((b) => b.category === brief.category && b.slug !== brief.slug).slice(0, 3);

  const canonicalUrl = `https://secubuzz.com/news/${brief.slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(brief.title)}&url=${encodeURIComponent(canonicalUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;

  return (
    <>
      <Seo
        title={`${brief.title} · SecuBuzz`}
        description={brief.summary}
        canonicalPath={`/news/${brief.slug}`}
        type="article"
      />

      <article className="mx-auto max-w-site px-5 pb-16 pt-10 md:px-8">
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 ease-out hover:text-ink">
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All briefs
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-[720px]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
              <span className="text-accent">{brief.category}</span>
              <span className="text-subtle">·</span>
              <time dateTime={brief.publishedAt} className="text-muted">
                {`${shortDate(brief.publishedAt)}, ${clockTime(brief.publishedAt)} UTC`}
              </time>
              <span className="text-subtle">({timeAgo(brief.publishedAt)})</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ink md:text-[44px]">
              {brief.title}
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-ink/90 md:text-[22px]">{brief.summary}</p>
            <p className="mt-4 font-mono text-xs text-subtle">{wordCount(brief.summary)} words</p>

            {/* Share bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-line py-3.5 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                <Share2Icon className="h-3.5 w-3.5 text-subtle" aria-hidden="true" /> Share:
              </span>
              <a
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-surface px-2.5 py-1 text-ink transition-colors hover:border-accent hover:text-accent">
                X / Twitter
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-surface px-2.5 py-1 text-ink transition-colors hover:border-accent hover:text-accent">
                LinkedIn
              </a>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 rounded border border-line bg-surface px-2.5 py-1 text-ink transition-colors hover:border-accent hover:text-accent">
                {copied ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" /> Copied link
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5 text-subtle" aria-hidden="true" /> Copy link
                  </>
                )}
              </button>
            </div>

            {/* Primary Source box */}
            <div className="mt-8 flex flex-col gap-4 rounded-lg border border-line bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs text-subtle">Original reporting</p>
                <p className="mt-0.5 font-medium text-ink">{brief.source}</p>
              </div>
              <a
                href={brief.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-accent px-4 text-sm font-semibold text-accent-ink transition-colors duration-150 ease-out hover:bg-accent/90">
                Read original reporting <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Additional sources (Deduplicated multi-publisher coverage) */}
            {brief.additionalSources && brief.additionalSources.length > 0 && (
              <div className="mt-6 rounded-lg border border-line p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                  Also reported by
                </p>
                <ul className="mt-3 divide-y divide-line">
                  {brief.additionalSources.map((s) => (
                    <li key={s.sourceUrl} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                      <span className="text-sm font-medium text-ink">{s.source}</span>
                      <a
                        href={s.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                        View source <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="space-y-10">
            {linked.length > 0 && (
              <section aria-labelledby="linked-kev">
                <h2 id="linked-kev" className="text-sm font-semibold text-ink">
                  In CISA KEV
                </h2>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {linked.map((a) => (
                    <li key={a.cve}>
                      <Link to={`/advisories/${a.slug}`} className="group block py-4">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-sm font-medium text-ink group-hover:text-accent">
                            {a.cve}
                          </span>
                          <SeverityBadge severity={a.severity} cvss={a.cvss} />
                        </div>
                        <div className="mt-2 flex items-center justify-between font-mono text-xs text-subtle">
                          <span>Due {a.dueDate}</span>
                          <DueStatus dueDate={a.dueDate} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {brief.cves.length > 0 && linked.length === 0 && (
              <section>
                <h2 className="text-sm font-semibold text-ink">Referenced CVEs</h2>
                <p className="mt-2 font-mono text-sm text-muted">{brief.cves.join(', ')}</p>
              </section>
            )}
            {related.length > 0 && (
              <section aria-labelledby="related">
                <h2 id="related" className="text-sm font-semibold text-ink">
                  More in {brief.category}
                </h2>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to={`/news/${r.slug}`} className="block py-4">
                        <p className="text-[15px] font-medium leading-snug text-ink transition-colors duration-150 ease-out hover:text-accent">
                          {r.title}
                        </p>
                        <p className="mt-1.5 font-mono text-xs text-subtle">{timeAgo(r.publishedAt)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </article>

      <AppCta
        title="Get critical security briefs on your phone"
        body="Stay ahead of zero-days and active campaigns with concise 60-word briefs and KEV deadline alerts."
      />
    </>
  );
}