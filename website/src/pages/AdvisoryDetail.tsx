import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowUpRightIcon, ShieldAlertIcon, ActivityIcon, CopyIcon, CheckIcon, Share2Icon } from 'lucide-react';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { useLiveNews } from '../data/useLiveNews';
import { SeverityBadge } from '../components/SeverityBadge';
import { AppCta } from '../components/AppCta';
import { NotFound } from './NotFound';
import { shortDate, timeAgo } from '../utils/date';
import { dueStatus, parseCvssVector, formatAdvisorySnippet, getCvssSeverity } from '../utils/advisory';
import { Seo } from '../components/Seo';

interface EpssData {
  epss: number;
  percentile: number;
  delta7d?: number | null;
  date?: string;
}

interface CvssMetrics {
  vectorString?: string;
  score?: number;
  severity?: string;
  attackVector?: string;
  attackComplexity?: string;
  privilegesRequired?: string;
  userInteraction?: string;
  scope?: string;
  confidentialityImpact?: string;
  integrityImpact?: string;
  availabilityImpact?: string;
}

export function AdvisoryDetail() {
  const { slug } = useParams();
  const { advisories, loading: loadingAdv } = useLiveAdvisories();
  const { news } = useLiveNews();
  const advisory = advisories.find((a) => a.slug === slug || a.cve.toLowerCase() === (slug || '').toLowerCase());

  const [epss, setEpss] = useState<EpssData | null>(null);
  const [epssLoading, setEpssLoading] = useState(false);

  const [cvssMetrics, setCvssMetrics] = useState<CvssMetrics | null>(null);
  const [metricsLoading, setMetricsLoading] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  useEffect(() => {
    if (!advisory?.cve) return;

    // 1. Fetch EPSS score
    setEpssLoading(true);
    fetch(`/api/epss?cve=${advisory.cve}`)
      .then((res) => {
        if (!res.ok) throw new Error('Worker EPSS failed');
        return res.json();
      })
      .then((data: any) => {
        if (data && typeof data.epss === 'number') {
          setEpss({
            epss: data.epss,
            percentile: data.percentile,
            delta7d: typeof data.delta7d === 'number' ? data.delta7d : null,
            date: data.date,
          });
        }
      })
      .catch(() => {
        // Fallback directly to FIRST.org public API with time-series for 7d delta
        fetch(`https://api.first.org/data/v1/epss?cve=${advisory.cve}&scope=time-series`)
          .then((res) => res.json())
          .then((data: any) => {
            const item = data?.data?.[0];
            if (item && item.epss) {
              const epssVal = parseFloat(item.epss);
              const ts = item['time-series'];
              const epss7d = ts && ts.length > 0 ? parseFloat(ts[Math.min(6, ts.length - 1)].epss) : epssVal;
              setEpss({
                epss: epssVal,
                percentile: parseFloat(item.percentile),
                delta7d: Number((epssVal - epss7d).toFixed(4)),
                date: item.date,
              });
            }
          })
          .catch((err) => console.warn('EPSS fallback error:', err));
      })
      .finally(() => setEpssLoading(false));

    // 2. Fetch CVSS Metrics & Vector string
    setMetricsLoading(true);
    fetch(`/api/cve-metrics?cve=${advisory.cve}`)
      .then((res) => {
        if (!res.ok) throw new Error('CVSS metrics failed');
        return res.json();
      })
      .then((data: any) => {
        if (data && data.vectorString) {
          setCvssMetrics(data);
        }
      })
      .catch((err) => console.warn('CVSS metrics error:', err))
      .finally(() => setMetricsLoading(false));
  }, [advisory?.cve]);

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

  const effectiveCvss = cvssMetrics?.score ?? advisory.cvss;
  const effectiveSeverity = getCvssSeverity(effectiveCvss, advisory.severity);

  const handleCopySnippet = async () => {
    const text = formatAdvisorySnippet(advisory, effectiveCvss, epss?.percentile);
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    } catch {
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    }
  };

  const [copiedLink, setCopiedLink] = useState(false);

  const canonicalUrl = `https://secubuzz.com/advisories/${advisory.slug}`;
  const tweetText = `🚨 [CISA Zero-Day Alert] ${advisory.cve}: ${advisory.name}\n\nFederal remediation deadline: ${shortDate(advisory.dueDate)} · Live CISA KEV Radar 👇`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(canonicalUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const status = dueStatus(advisory.dueDate);
  const coverage = news.filter(
    (b) => b.cves.includes(advisory.cve) || (b.title + ' ' + b.summary).toLowerCase().includes(advisory.cve.toLowerCase())
  );
  const deadlineTone =
    status.tone === 'overdue' ? 'text-critical' : status.tone === 'urgent' ? 'text-accent' : 'text-ink';
  const deadlineText =
    status.days < 0
      ? Math.abs(status.days) === 1
        ? '1 day overdue'
        : `${Math.abs(status.days)} days overdue`
      : status.days === 0
      ? 'Due today'
      : status.days === 1
      ? '1 day remaining'
      : `${status.days} days remaining`;

  const rawCwe = (advisory.cwe || '').trim();
  const cleanCwe = rawCwe && rawCwe !== '—'
    ? rawCwe.replace(/^(CWE[:\s-]+)+/i, 'CWE-').trim()
    : '—';

  const facts = [
    { label: 'Vendor', value: advisory.vendor },
    { label: 'Product', value: advisory.product },
    { label: 'Added to KEV', value: shortDate(advisory.dateAdded) },
    { label: 'Weakness', value: cleanCwe || '—' },
    { label: 'Ransomware use', value: advisory.ransomware ? 'Known campaign use' : 'Not reported' },
    {
      label: 'EPSS Percentile',
      value: epss
        ? `${(epss.percentile * 100).toFixed(1)}th percentile`
        : epssLoading
        ? 'Querying FIRST.org...'
        : 'Pending FIRST.org evaluation',
    },
  ];

  return (
    <>
      <Seo
        title={`${advisory.cve}: ${advisory.vendor} ${advisory.product} Exploit Status, Patch & CISA KEV · SecuBuzz`}
        description={`CISA KEV active zero-day alert for ${advisory.cve} (${advisory.vendor} ${advisory.product}). Action required: ${advisory.requiredAction}. Due date: ${advisory.dueDate}. ${advisory.description || advisory.name}`.trim()}
        canonicalPath={`/advisories/${advisory.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'TechArticle',
          headline: `${advisory.cve} Vulnerability Advisory - ${advisory.vendor} ${advisory.product}`,
          description: advisory.description || advisory.name,
          datePublished: advisory.dateAdded,
          url: `https://secubuzz.com/advisories/${advisory.slug}`,
          author: {
            '@type': 'Organization',
            name: 'CISA / SecuBuzz',
          },
          publisher: {
            '@type': 'Organization',
            name: 'SecuBuzz',
            url: 'https://secubuzz.com',
          },
        }}
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
              <SeverityBadge severity={effectiveSeverity} cvss={effectiveCvss} />
              {advisory.ransomware && (
                <span className="rounded bg-critical/10 px-2 py-0.5 font-mono text-xs font-medium text-critical">
                  Ransomware Campaign
                </span>
              )}
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              {advisory.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                <Share2Icon className="h-3.5 w-3.5 text-subtle" aria-hidden="true" /> Share:
              </span>
              <a
                href={tweetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                X / Twitter
              </a>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                LinkedIn
              </a>
              <button
                type="button"
                onClick={handleCopySnippet}
                className="inline-flex items-center gap-1.5 rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs font-medium text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                {copiedSnippet ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    Copied (Slack/Teams)
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5 text-subtle" aria-hidden="true" />
                    Slack / Teams
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 rounded border border-line bg-surface px-2.5 py-1 font-mono text-xs font-medium text-ink transition-colors duration-150 ease-out hover:border-accent hover:text-accent">
                {copiedLink ? (
                  <>
                    <CheckIcon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    Copied Link
                  </>
                ) : (
                  <>
                    <CopyIcon className="h-3.5 w-3.5 text-subtle" aria-hidden="true" />
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-surface p-5">
            <p className="text-xs text-subtle">Federal remediation due</p>
            <p className="mt-1 font-mono text-2xl font-medium text-ink">{shortDate(advisory.dueDate)}</p>
            <p className={`mt-1 font-mono text-sm font-medium ${deadlineTone}`}>{deadlineText}</p>
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-[720px] space-y-10">
            {/* Description */}
            <section>
              <h2 className="text-lg font-semibold text-ink">Description</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-muted">{advisory.description}</p>
            </section>

            {/* Exploit Prediction Scoring System (EPSS) */}
            <section className="rounded-lg border border-line bg-surface p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ActivityIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h2 className="text-base font-semibold text-ink">Exploit Prediction Score (EPSS)</h2>
                </div>
                <span className="font-mono text-xs text-subtle">FIRST.org daily model</span>
              </div>

              {epss ? (
                <div className="mt-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded border border-line bg-raised/50 p-4">
                      <p className="text-xs text-subtle">Exploitation Probability (30-day)</p>
                      <p className="mt-1 font-mono text-2xl font-semibold text-ink">
                        {(epss.epss * 100).toFixed(2)}%
                      </p>
                      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
                        <div
                          className="h-full bg-accent transition-all duration-300"
                          style={{ width: `${Math.min(100, Math.max(4, epss.epss * 100))}%` }}
                        />
                      </div>
                    </div>
                    <div className="rounded border border-line bg-raised/50 p-4">
                      <p className="text-xs text-subtle">Relative Threat Percentile</p>
                      <p className="mt-1 font-mono text-2xl font-semibold text-accent">
                        {(epss.percentile * 100).toFixed(1)}%
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Higher risk than {(epss.percentile * 100).toFixed(1)}% of all tracked CVEs
                      </p>
                    </div>
                  </div>
                  {epss.delta7d !== undefined && epss.delta7d !== null && (
                    <div className="mt-3.5 flex items-center gap-2 border-t border-line/60 pt-3 font-mono text-xs">
                      <span className="text-subtle">7-day trend:</span>
                      {epss.delta7d > 0.001 ? (
                        <span className="font-semibold text-critical">
                          ↗ +{(epss.delta7d * 100).toFixed(1)}% (Rising)
                        </span>
                      ) : epss.delta7d < -0.001 ? (
                        <span className="font-semibold text-low">
                          ↘ {(epss.delta7d * 100).toFixed(1)}% (Falling)
                        </span>
                      ) : (
                        <span className="text-muted">→ Stable (0.0% delta)</span>
                      )}
                    </div>
                  )}
                </div>
              ) : epssLoading ? (
                <p className="mt-3 text-sm text-subtle font-mono">Querying FIRST.org EPSS telemetry...</p>
              ) : (
                <p className="mt-3 text-sm text-muted">
                  EPSS probability pending publication in FIRST.org daily feed.
                </p>
              )}
            </section>

            {/* CVSS v3.1 / v4.0 Vector Telemetry */}
            <section className="rounded-lg border border-line bg-surface p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldAlertIcon className="h-4 w-4 text-accent" aria-hidden="true" />
                  <h2 className="text-base font-semibold text-ink">Authoritative CVSS Vector</h2>
                </div>
                <span className="font-mono text-xs text-subtle">NIST NVD</span>
              </div>

              {cvssMetrics?.vectorString ? (() => {
                const parsed = parseCvssVector(cvssMetrics.vectorString);
                const av = cvssMetrics.attackVector || parsed.attackVector;
                const ac = cvssMetrics.attackComplexity || parsed.attackComplexity;
                const pr = cvssMetrics.privilegesRequired || parsed.privilegesRequired;
                const ui = cvssMetrics.userInteraction || parsed.userInteraction;
                const sc = cvssMetrics.scope || parsed.scope;
                const c = cvssMetrics.confidentialityImpact || parsed.confidentialityImpact;
                const i = cvssMetrics.integrityImpact || parsed.integrityImpact;
                const a = cvssMetrics.availabilityImpact || parsed.availabilityImpact;

                return (
                  <div className="mt-4 space-y-4">
                    <div>
                      <p className="text-xs text-subtle font-mono uppercase tracking-wider">Vector String</p>
                      <code className="mt-1 block rounded bg-raised p-2.5 font-mono text-xs text-ink break-all border border-line">
                        {cvssMetrics.vectorString}
                      </code>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 sm:grid-cols-4 text-xs font-mono">
                      {av && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Attack Vector</div>
                          <div className="mt-0.5 font-semibold text-accent">{av}</div>
                        </div>
                      )}
                      {ac && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Complexity</div>
                          <div className="mt-0.5 font-semibold text-ink">{ac}</div>
                        </div>
                      )}
                      {pr && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Privileges</div>
                          <div className="mt-0.5 font-semibold text-ink">{pr}</div>
                        </div>
                      )}
                      {ui && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Interaction</div>
                          <div className="mt-0.5 font-semibold text-ink">{ui}</div>
                        </div>
                      )}
                      {sc && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Scope</div>
                          <div className="mt-0.5 font-semibold text-ink">{sc}</div>
                        </div>
                      )}
                      {c && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Confidentiality</div>
                          <div className={`mt-0.5 font-semibold ${c.toUpperCase() === 'HIGH' ? 'text-critical' : 'text-ink'}`}>{c}</div>
                        </div>
                      )}
                      {i && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Integrity</div>
                          <div className={`mt-0.5 font-semibold ${i.toUpperCase() === 'HIGH' ? 'text-critical' : 'text-ink'}`}>{i}</div>
                        </div>
                      )}
                      {a && (
                        <div className="rounded border border-line bg-raised/40 p-2">
                          <div className="text-[10px] uppercase text-subtle">Availability</div>
                          <div className={`mt-0.5 font-semibold ${a.toUpperCase() === 'HIGH' ? 'text-critical' : 'text-ink'}`}>{a}</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })() : metricsLoading ? (
                <p className="mt-3 text-sm text-subtle font-mono">Querying NVD vector string...</p>
              ) : (
                <div className="mt-4">
                  <p className="font-mono text-xs text-muted">
                    {effectiveCvss !== undefined
                      ? `Base Score: ${effectiveCvss.toFixed(1)} (${effectiveSeverity})`
                      : `Severity: ${effectiveSeverity} (CISA KEV Active Exploit)`}
                  </p>
                  <p className="mt-1 text-xs text-subtle">
                    Detailed metric breakdown available directly on NIST NVD.
                  </p>
                </div>
              )}

              {/* Version & CPE Guidance */}
              <div className="mt-5 border-t border-line/60 pt-4">
                <p className="text-xs text-muted">
                  Affects <strong className="text-ink">{advisory.vendor} {advisory.product}</strong>. Because automated version range matching can produce false positives, authoritative version and CPE configuration matrices are maintained directly on NVD:
                </p>
                <a
                  href={`https://nvd.nist.gov/vuln/detail/${advisory.cve}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline">
                  View authoritative affected & patched versions on NVD
                  <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </section>

            {/* Required Action */}
            <section className="rounded-lg border border-accent/40 bg-accent/5 p-6">
              <h2 className="text-lg font-semibold text-accent">Required action</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-ink">{advisory.requiredAction}</p>
            </section>

            {/* References */}
            <section>
              <h2 className="text-lg font-semibold text-ink">References</h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {advisory.references.map((r) => (
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
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-10">
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.label} className="py-3.5">
                  <dt className="text-xs text-subtle">{f.label}</dt>
                  <dd
                    className={`mt-1 text-sm ${
                      f.label === 'Ransomware use' && advisory.ransomware ? 'text-critical font-medium' : 'text-ink'
                    }`}>
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>

            <section aria-labelledby="coverage">
              <h2 id="coverage" className="text-sm font-semibold text-ink">
                SecuBuzz coverage
              </h2>
              {coverage.length > 0 ? (
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {coverage.map((b) => (
                    <li key={b.slug}>
                      <Link to={`/news/${b.slug}`} className="block py-4">
                        <p className="text-[15px] font-medium leading-snug text-ink transition-colors duration-150 ease-out hover:text-accent">
                          {b.title}
                        </p>
                        <p className="mt-1.5 font-mono text-xs text-subtle">{timeAgo(b.publishedAt)}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-muted">No briefs reference this CVE yet.</p>
              )}
            </section>
          </aside>
        </div>
      </article>
      <AppCta
        title="Get KEV alerts on your Android device"
        body="Receive push notifications with remediation deadlines whenever new zero-days are cataloged."
      />
    </>
  );
}