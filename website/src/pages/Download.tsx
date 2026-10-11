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

      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Launch Walkthrough
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              See SecuBuzz in action
            </h2>
            <p className="mt-3 text-base text-muted md:text-lg">
              A 23-second walkthrough of real-time threat triage, 60-word security briefs, and CISA KEV deadline tracking.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-accent/5 ring-1 ring-white/5">
              <div className="flex items-center justify-between border-b border-line bg-raised/70 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="ml-2 font-mono text-xs text-subtle">SecuBuzz · Product Walkthrough</span>
                </div>
                <span className="font-mono text-xs text-muted">0:23 · 1080p</span>
              </div>
              <div className="relative aspect-video w-full bg-[#0B0F14]">
                <video
                  src="/brag.mp4"
                  poster="/1.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
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