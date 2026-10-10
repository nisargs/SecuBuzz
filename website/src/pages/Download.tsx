import React from 'react';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { PhoneMockup } from '../components/PhoneMockup';
import { FaqAccordion } from '../components/FaqAccordion';
import { appFeatures, appRequirements, downloadFaq } from '../data/site';
import { Seo } from '../components/Seo';

export function Download() {
  return (
    <>
      <Seo
        title="Download SecuBuzz for Android · Quick Cybersecurity News"
        description="Download SecuBuzz for Android. Fast 60-word cybersecurity briefs and CISA zero-day alerts. Available globally on Google Play."
        canonicalPath="/download"
      />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-site items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1fr_0.8fr] lg:py-20">
          <div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl">
              SecuBuzz for Android
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Free, zero-tracking security intelligence. 60-word briefs and direct CISA KEV threat alerts delivered without noise, algorithms, or account requirements.
            </p>
            <div className="mt-8 flex flex-col items-start gap-2.5">
              <PlayStoreButton size="lg" source="download_page" />
              <p className="text-xs text-subtle">
                Official release on Google Play · Requires Android 8.0 (Oreo) or higher · Free &amp; Ad-Free
              </p>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6">
              {appRequirements.map((r) =>
              <div key={r.label}>
                  <dt className="text-xs text-subtle">{r.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{r.value}</dd>
                </div>
              )}
            </dl>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">What’s in the app</h2>
        <dl className="divide-y divide-line border-y border-line">
          {appFeatures.map((f) =>
          <div key={f.title} className="grid gap-1.5 py-5 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="font-medium text-ink">{f.title}</dt>
              <dd className="text-[15px] leading-relaxed text-muted">{f.body}</dd>
            </div>
          )}
        </dl>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl font-semibold tracking-tight text-ink">Questions</h2>
          <FaqAccordion items={downloadFaq} />
        </div>
      </section>
    </>);

}