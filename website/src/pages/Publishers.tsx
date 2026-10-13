import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { PublisherForm } from '../components/PublisherForm';
import { publisherStats, publisherSteps, curatedSources } from '../data/site';
import { Seo } from '../components/Seo';

export function Publishers() {
  return (
    <>
      <Seo
        title="For Publishers & Security Researchers · SecuBuzz"
        description="How SecuBuzz attributes and links to cybersecurity publishers, researchers, and reporters. Concise 60-word briefs pointing readers directly to original reporting."
        canonicalPath="/publishers"
      />
      <PageIntro
        title="Send defenders to your reporting"
        description="SecuBuzz summarizes security journalism in 60 words and sends readers to the original. Your byline, your traffic, no full-text republishing.">
        
        <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
          {publisherStats.map((s) =>
          <div key={s.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="font-mono text-3xl font-medium text-ink">{s.value}</dd>
            </div>
          )}
        </dl>
      </PageIntro>

      <section className="mx-auto grid max-w-site gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1fr_420px]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink">How the partnership works</h2>
          <ol className="mt-8 space-y-0">
            {publisherSteps.map((step, i) =>
            <li key={step.title} className="relative grid grid-cols-[40px_1fr] gap-4 pb-10 last:pb-0">
                {i < publisherSteps.length - 1 &&
              <span className="absolute left-[15px] top-9 h-[calc(100%-36px)] w-px bg-line" aria-hidden="true" />
              }
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line font-mono text-sm text-accent">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-medium text-ink">{step.title}</h3>
                  <p className="mt-1.5 max-w-[56ch] text-[15px] leading-relaxed text-muted">{step.body}</p>
                </div>
              </li>
            )}
          </ol>

          <div className="mt-14 border-t border-line pt-8">
            <h2 className="text-lg font-semibold text-ink">Editorial requirements</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted marker:text-subtle">
              <li>Original reporting or research focused on cybersecurity</li>
              <li>Clear corrections policy and named authors</li>
              <li>No paywall on the first paragraph, so readers can verify the brief</li>
              <li>A working RSS or Atom feed with publish timestamps</li>
            </ul>
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-lg font-semibold text-ink">Removal &amp; opt-out policy</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Removal requests sent to{' '}
              <a href="mailto:publishers@secubuzz.com" className="font-mono text-ink underline hover:text-accent">
                publishers@secubuzz.com
              </a>{' '}
              are honored within 48 hours.
            </p>
          </div>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <PublisherForm />
        </div>
      </section>

      {/* Active Monitored Sources Directory */}
      <section className="border-t border-line bg-surface/30 py-20">
        <div className="mx-auto max-w-site px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">Active Threat Radar Index</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Monitored Sources &amp; Intelligence Feeds
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                SecuBuzz continuously ingests and monitors 27 verified tier-1 cybersecurity newsrooms, government CERT bulletins, and enterprise threat intelligence labs. Every brief provides direct, transparent outbound attribution to the original author and reporting outlet.
              </p>
            </div>
            <div className="shrink-0 font-mono text-xs text-muted">
              <span className="font-medium text-ink">{curatedSources.length}</span> verified feeds active
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {curatedSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between rounded-sm border border-line bg-bg p-5 transition-colors duration-150 ease-out hover:border-accent hover:bg-surface/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      {source.category}
                    </span>
                    <span className="text-subtle transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink">
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-medium text-ink group-hover:text-accent">
                    {source.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {source.description}
                  </p>
                </div>
                <div className="mt-4 border-t border-line/60 pt-3">
                  <span className="font-mono text-[11px] text-subtle group-hover:text-muted">
                    {source.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-sm border border-line/80 bg-surface/50 p-6 text-sm text-muted">
            <h3 className="font-medium text-ink">Editorial &amp; Syndication Notice</h3>
            <p className="mt-2 leading-relaxed">
              SecuBuzz acts strictly as a discovery and triage index. All trademarks, publication names, and logos belong to their respective copyright holders. Briefs are independent 60-word distillations pointing readers directly to original reporting. To request updates, custom feed ingest parameters, or removal, email{' '}
              <a href="mailto:publishers@secubuzz.com" className="font-mono text-ink underline hover:text-accent">
                publishers@secubuzz.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}