import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { PhoneMockup } from '../components/PhoneMockup';
import { FaqAccordion } from '../components/FaqAccordion';
import { appFeatures, appRequirements, downloadFaq } from '../data/site';
import { Seo } from '../components/Seo';
import { SupportBanner } from '../components/SupportBanner';

export function Download() {
  const scrollToVideo = (autoPlay = true) => {
    const el = document.getElementById('launch-video');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (autoPlay) {
        const video = el.querySelector('video');
        if (video) {
          setTimeout(() => {
            video.play().catch(() => {});
          }, 500);
        }
      }
    }
  };

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
              Secu<span className="text-accent">Buzz</span> for Android
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Free, zero-tracking security intelligence. 60-word briefs and direct CISA KEV threat alerts delivered without noise, algorithms, or account requirements.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <PlayStoreButton size="lg" source="download_page" />
                <button
                  type="button"
                  onClick={() => scrollToVideo(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface/80 px-4 py-3.5 text-sm font-medium text-ink transition-all duration-150 ease-out hover:border-accent/40 hover:bg-raised hover:text-accent"
                >
                  <Play className="h-4 w-4 text-accent fill-accent/30" />
                  <span>Watch video (0:23)</span>
                  <ArrowDown className="h-3.5 w-3.5 text-muted" />
                </button>
              </div>

              {/* Desktop QR Scan Card (Targeting corporate laptop & desktop readers) */}
              <div className="hidden sm:flex items-center gap-4 rounded-xl border border-line/80 bg-surface/80 p-3.5 pr-6 shadow-sm">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-line bg-white p-1">
                  <img
                    src="/qr.png"
                    alt="Scan QR code to install SecuBuzz on Android"
                    className="h-full w-full object-contain"
                    width={80}
                    height={80}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-medium text-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    Scan with Phone
                  </div>
                  <div className="text-sm font-medium text-ink">
                    On a work laptop or desktop?
                  </div>
                  <div className="text-xs text-muted">
                    Scan with your Android camera to open directly in Google Play.
                  </div>
                </div>
              </div>

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

            {/* Direct launch video jumper card */}
            <div className="mt-8 border-t border-line/60 pt-6">
              <button
                type="button"
                onClick={() => scrollToVideo(true)}
                className="group flex w-full max-w-lg items-center justify-between rounded-xl border border-line bg-surface/70 p-3.5 text-left transition-all duration-150 ease-out hover:border-accent/40 hover:bg-raised"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-transform duration-150 group-hover:scale-105">
                    <Play className="h-4 w-4 fill-accent/30 text-accent ml-0.5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                      Watch the launch walkthrough
                    </div>
                    <div className="text-xs text-muted">
                      23-second product tour &amp; triage overview
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted group-hover:text-accent">
                  <span className="rounded border border-line bg-surface px-1.5 py-0.5">0:23</span>
                  <ArrowDown className="h-4 w-4 transition-transform duration-150 group-hover:translate-y-0.5" />
                </div>
              </button>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section id="launch-video" className="border-b border-line bg-surface/40 scroll-mt-10">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Launch Walkthrough
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              See Secu<span className="text-accent">Buzz</span> in action
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
                  src="/secubuzz-landscape.mp4"
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

      <section className="border-t border-line">
        <div className="mx-auto max-w-site px-5 py-12 md:px-8">
          <SupportBanner source="download_page" />
        </div>
      </section>
    </>);

}