import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, QrCode } from 'lucide-react';
import { PlayStoreButton } from '../components/PlayStoreButton';
import { PhoneMockup } from '../components/PhoneMockup';
import { NewsBriefItem } from '../components/NewsBriefItem';
import { AdvisoryListItem } from '../components/AdvisoryListItem';
import { AppCta } from '../components/AppCta';
import { QrModal } from '../components/QrModal';
import { WhatsNewModal } from '../components/WhatsNewModal';
import { homeReasons } from '../data/site';
import { useLiveNews } from '../data/useLiveNews';
import { useLiveAdvisories } from '../data/useLiveAdvisories';
import { daysSince, daysUntil } from '../utils/date';

import { Seo } from '../components/Seo';

export function Home() {
  const [showHeroQr, setShowHeroQr] = useState(false);
  const [showWhatsNew, setShowWhatsNew] = useState(false);
  const { news } = useLiveNews();
  const { advisories } = useLiveAdvisories();
  const latest = news.slice(0, 4);
  const recentKev = advisories.slice(0, 5);
  const addedThisWeek = advisories.filter((a) => daysSince(a.dateAdded) <= 7).length;
  const nextDue = [...advisories].
  filter((a) => daysUntil(a.dueDate) >= 0).
  sort((a, b) => a.dueDate.localeCompare(b.dueDate))[0];

  return (
    <>
      <Seo
        title="SecuBuzz · Quick Cybersecurity News in 60 Words & CISA KEV Radar"
        description="Quick, factual 60-word cybersecurity news briefs and CISA KEV zero-day tracking with EPSS scores. Zero ad trackers or cookies, fast triage, 27+ curated threat feeds."
        canonicalPath="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'SecuBuzz',
          url: 'https://secubuzz.com/',
          description: 'Quick, factual 60-word cybersecurity news briefs and CISA KEV zero-day tracking for security professionals.',
          publisher: {
            '@type': 'Organization',
            name: 'MiSo Labs',
            url: 'https://secubuzz.com',
          },
        }}
      />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-site items-center gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            {/* What's New Pill */}
            <div className="mb-5">
              <button
                type="button"
                onClick={() => setShowWhatsNew(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 font-mono text-xs text-accent transition-all duration-150 ease-out hover:border-accent hover:bg-accent/20 cursor-pointer">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-semibold">What's New in v1.0.3</span>
                <span className="text-subtle">·</span>
                <span className="text-ink transition-colors group-hover:text-accent">Vendor Radar, EPSS & AMOLED</span>
                <ArrowRightIcon className="h-3 w-3 text-subtle transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
              </button>
            </div>

            <h1 className="text-[44px] font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Security news in 60 words.
              <span className="block text-muted">Zero-days within hours of CISA listing them.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              SecuBuzz condenses the day’s cybersecurity reporting and official vendor PSIRT advisories across Red Hat, Cisco, Microsoft, Palo Alto, and AWS into source-linked 60-word briefs, pushing new Known Exploited Vulnerabilities to your Android phone with remediation deadlines.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <PlayStoreButton size="lg" source="home_hero" />
              <Link
                to="/news"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-150 ease-out hover:text-accent">
                
                Read today’s briefs <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-4 hidden sm:flex items-center gap-2 text-xs text-muted">
              <button
                type="button"
                onClick={() => setShowHeroQr(true)}
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-accent hover:underline cursor-pointer"
              >
                <QrCode className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap">On a work computer? Scan QR code to install directly on Android</span>
              </button>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="text-xs text-subtle">KEVs added, last 7 days</dt>
                <dd className="mt-1 font-mono text-2xl font-medium text-ink">{addedThisWeek}</dd>
              </div>
              {nextDue && (
                <div>
                  <dt className="text-xs text-subtle">Next federal deadline</dt>
                  <dd className="mt-1 flex items-baseline gap-2.5">
                    <Link
                      to={`/advisories/${nextDue.slug}`}
                      className="font-mono text-2xl font-medium text-accent hover:underline">
                      {nextDue.dueDate.slice(5)}
                    </Link>
                    <span className="font-mono text-xs text-muted">({nextDue.cve})</span>
                  </dd>
                </div>
              )}
            </dl>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <div className="border-b border-line bg-surface/40 py-3.5">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
              Direct Vendor PSIRT Radar
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-xs text-subtle">
            <span>Red Hat RHSA</span>
            <span className="text-line">•</span>
            <span>Microsoft MSRC</span>
            <span className="text-line">•</span>
            <span>Cisco PSIRT</span>
            <span className="text-line">•</span>
            <span>Palo Alto Networks</span>
            <span className="text-line">•</span>
            <span>Fortinet</span>
            <span className="text-line">•</span>
            <span>AWS Bulletins</span>
            <span className="text-line">•</span>
            <span>Ubuntu USN</span>
            <span className="text-line">•</span>
            <span>GitLab Security</span>
          </div>
        </div>
      </div>

      <section className="mx-auto grid max-w-site gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex items-end justify-between border-b border-line pb-4">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">Latest briefs</h2>
            <Link to="/news" className="text-sm text-muted transition-colors duration-150 ease-out hover:text-ink">
              All news →
            </Link>
          </div>
          <div className="divide-y divide-line">
            {latest.map((b) =>
            <NewsBriefItem key={b.slug} brief={b} />
            )}
          </div>
        </div>

        <aside aria-labelledby="kev-heading" className="lg:pt-0">
          <div className="overflow-hidden rounded-lg border border-line bg-surface lg:sticky lg:top-24">
            <div className="border-b border-line px-5 py-4">
              <h2 id="kev-heading" className="font-semibold text-ink">
                Added to CISA KEV
              </h2>
              <p className="mt-0.5 text-sm text-muted">Actively exploited, with federal due dates</p>
            </div>
            <ul className="divide-y divide-line">
              {recentKev.map((a) =>
              <AdvisoryListItem key={a.cve} advisory={a} />
              )}
            </ul>
            <Link
              to="/advisories"
              className="block border-t border-line px-5 py-3.5 text-sm font-medium text-accent transition-colors duration-150 ease-out hover:bg-raised">
              
              View all advisories →
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
            Built for the ten minutes before your first ticket.
          </h2>
          <dl className="divide-y divide-line border-y border-line">
            {homeReasons.map((r) =>
            <div key={r.title} className="grid gap-2 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                <dt className="font-medium text-ink">{r.title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{r.body}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <AppCta />
      <QrModal isOpen={showHeroQr} onClose={() => setShowHeroQr(false)} source="home_hero_qr" />
      <WhatsNewModal isOpen={showWhatsNew} onClose={() => setShowWhatsNew(false)} />
    </>);

}