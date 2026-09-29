import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowUpRightIcon } from 'lucide-react';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { useLiveNews } from '../data/useLiveNews';
import { SeverityBadge } from '../components/SeverityBadge';
import { AppCta } from '../components/AppCta';
import { NotFound } from './NotFound';
import { shortDate, timeAgo } from '../utils/date';
import { dueStatus } from '../utils/advisory';
import { Seo } from '../components/Seo';

export function AdvisoryDetail() {
  const { slug } = useParams();
  const { advisories, loading: loadingAdv } = useLiveAdvisories();
  const { news } = useLiveNews();
  const advisory = advisories.find((a) => a.slug === slug || a.cve.toLowerCase() === (slug || '').toLowerCase());

  if (!advisory) {
    if (loadingAdv) {
      return (
        <div className="mx-auto max-w-site px-5 py-24 text-center">
          <p className="text-sm font-mono text-muted">Retrieving advisory...</p>
        </div>
      );
    }
    return <NotFound />;
  }

  const status = dueStatus(advisory.dueDate);
  const coverage = news.filter((b) => b.cves.includes(advisory.cve));
  const deadlineTone =
  status.tone === 'overdue' ? 'text-critical' : status.tone === 'urgent' ? 'text-accent' : 'text-ink';
  const deadlineText =
  status.days < 0 ?
  `${Math.abs(status.days)} days overdue` :
  status.days === 0 ?
  'Due today' :
  `${status.days} days remaining`;

  const facts = [
  { label: 'Vendor', value: advisory.vendor },
  { label: 'Product', value: advisory.product },
  { label: 'Added to KEV', value: shortDate(advisory.dateAdded) },
  { label: 'Weakness', value: advisory.cwe },
  { label: 'Ransomware use', value: advisory.ransomware ? 'Known campaign use' : 'Not reported' }];


  return (
    <>
      <Seo
        title={`${advisory.cve} · ${advisory.vendor} ${advisory.product} · SecuBuzz`}
        description={advisory.description || advisory.name}
        canonicalPath={`/advisories/${advisory.slug}`}
      />
      <article className="mx-auto max-w-site px-5 pb-16 pt-10 md:px-8">
        <Link
          to="/advisories"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 ease-out hover:text-ink">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" /> All advisories
        </Link>

        <header className="mt-10 grid gap-8 border-b border-line pb-10 lg:grid-cols-[1fr_300px] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-muted">{advisory.cve}</span>
              <SeverityBadge severity={advisory.severity} cvss={advisory.cvss} />
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              {advisory.name}
            </h1>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="text-xs text-subtle">Federal remediation due</p>
            <p className="mt-1 font-mono text-2xl font-medium text-ink">{shortDate(advisory.dueDate)}</p>
            <p className={`mt-1 font-mono text-sm font-medium ${deadlineTone}`}>{deadlineText}</p>
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="max-w-[720px] space-y-10">
            <section>
              <h2 className="text-lg font-semibold text-ink">Description</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{advisory.description}</p>
            </section>
            <section className="rounded-lg border border-accent/40 bg-accent/5 p-6">
              <h2 className="text-lg font-semibold text-accent">Required action</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-ink">{advisory.requiredAction}</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-ink">References</h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {advisory.references.map((r) =>
                <li key={r.url}>
                    <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-3.5 text-[15px] text-ink transition-colors duration-150 ease-out hover:text-accent">
                    
                      {r.label}
                      <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
                    </a>
                  </li>
                )}
              </ul>
            </section>
          </div>

          <aside className="space-y-10">
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((f) =>
              <div key={f.label} className="py-3.5">
                  <dt className="text-xs text-subtle">{f.label}</dt>
                  <dd className={`mt-1 text-sm ${f.label === 'Ransomware use' && advisory.ransomware ? 'text-critical' : 'text-ink'}`}>
                    {f.value}
                  </dd>
                </div>
              )}
            </dl>
            <section aria-labelledby="coverage">
              <h2 id="coverage" className="text-sm font-semibold text-ink">
                SecuBuzz coverage
              </h2>
              {coverage.length > 0 ?
              <ul className="mt-3 divide-y divide-line border-y border-line">
                  {coverage.map((b) =>
                <li key={b.slug}>
                      <Link to={`/news/${b.slug}`} className="block py-4">
                        <p className="text-[15px] font-medium leading-snug text-ink transition-colors duration-150 ease-out hover:text-accent">
                          {b.title}
                        </p>
                        <p className="mt-1.5 font-mono text-xs text-subtle">{timeAgo(b.publishedAt)}</p>
                      </Link>
                    </li>
                )}
                </ul> :

              <p className="mt-2 text-sm text-muted">No briefs reference this CVE yet.</p>
              }
            </section>
          </aside>
        </div>
      </article>
      <AppCta title="Get KEV alerts on your Android device" body="Receive push notifications with remediation deadlines whenever new zero-days are cataloged." />
    </>);

}