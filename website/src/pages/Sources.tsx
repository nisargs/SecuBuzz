import React from 'react';
import { ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { Seo } from '../components/Seo';
import {
  SOURCE_GROUPS,
  THREAT_FEEDS_COUNT,
  TOTAL_SOURCES_COUNT,
} from '../data/sources';

export function Sources() {
  return (
    <>
      <Seo
        title="Monitored Sources & Vendor PSIRT Directory · SecuBuzz"
        description={`Explore the ${THREAT_FEEDS_COUNT} authoritative security newsrooms, vendor PSIRTs, supply chain monitors, and vulnerability databases indexed by SecuBuzz.`}
        canonicalPath="/sources"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'SecuBuzz Monitored Threat Intelligence Sources',
          url: 'https://secubuzz.com/sources',
          description: `Directory of ${THREAT_FEEDS_COUNT} curated cybersecurity feeds, vendor PSIRTs, and advisory databases indexed hourly by SecuBuzz.`,
          publisher: {
            '@type': 'Organization',
            name: 'MiSo Labs',
            url: 'https://secubuzz.com',
          },
        }}
      />

      <PageIntro
        title="Sources & Threat Intelligence Directory"
        description={`SecuBuzz indexes ${THREAT_FEEDS_COUNT} independent newsrooms, official vendor PSIRTs, and threat research organizations alongside 3 authoritative vulnerability databases. Every brief is distilled into 60 objective words with direct links to primary reporting.`}
      >
        <div className="mt-8 flex flex-wrap gap-2.5 pt-2">
          {SOURCE_GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="inline-flex items-center gap-1.5 rounded border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-ink"
            >
              <span>{g.title}</span>
              <span className="text-subtle">({g.sources.length})</span>
            </a>
          ))}
        </div>
      </PageIntro>

      <div className="mx-auto max-w-site px-5 py-12 md:px-8">
        <div className="space-y-16">
          {SOURCE_GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-24">
              <div className="border-b border-line pb-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                    {group.title}
                  </h2>
                  <span className="font-mono text-xs text-muted">
                    {group.sources.length}{' '}
                    {group.sources.length === 1 ? 'source' : 'sources'}
                  </span>
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  {group.description}
                </p>
              </div>

              <div className="divide-y divide-line border-b border-line">
                {group.sources.map((item) => (
                  <div
                    key={item.name}
                    className="grid gap-3 py-4 transition-colors duration-150 sm:grid-cols-[240px_1fr] sm:items-start md:grid-cols-[280px_1fr_160px] md:items-center md:gap-6"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
                        >
                          <span className="text-sm">{item.name}</span>
                          <ExternalLink className="h-3 w-3 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                        </a>
                      </div>
                      <p className="mt-0.5 font-mono text-xs text-subtle">
                        {item.domain}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-muted">
                      {item.focus}
                    </p>

                    <div className="flex items-center justify-start md:justify-end">
                      {item.cadence ? (
                        <span className="rounded border border-line/60 bg-raised px-2 py-0.5 font-mono text-[11px] text-muted">
                          {item.cadence}
                        </span>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden font-mono text-xs text-subtle transition-colors hover:text-accent md:inline-flex md:items-center md:gap-1"
                        >
                          visit site →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Editorial Integrity & Removal Notice */}
        <section className="mt-16 rounded-xl border border-line bg-surface p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck className="h-4 w-4" />
                <h3 className="font-semibold text-ink">
                  Attribution & Publisher Transparency
                </h3>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                SecuBuzz respects independent cybersecurity reporting and vendor
                research. We never republish full articles or bypass paywalls. Every
                brief credits the original byline and sends readers directly to the
                publisher’s canonical domain. Removal requests are honored within 48
                hours without friction.
              </p>
            </div>
            <div className="flex shrink-0">
              <Link
                to="/publishers"
                className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-raised px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Publisher guidelines & removal <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

