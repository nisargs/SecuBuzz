import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { PublisherForm } from '../components/PublisherForm';
import { publisherStats, publisherSteps } from '../data/site';
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

      <section className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1fr_490px]">
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
              <a href="mailto:publishers@secubuzz.com" className="font-mono text-ink underline transition-colors duration-150 ease-out hover:text-accent">
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
    </>
  );
}