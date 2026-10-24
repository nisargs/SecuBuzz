import React from 'react';
import { Link } from 'react-router-dom';
import { AppCta } from '../components/AppCta';
import { aboutPrinciples } from '../data/site';
import { Seo } from '../components/Seo';

export function About() {
  return (
    <>
      <Seo
        title="About SecuBuzz · MiSo Labs"
        description="SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs. No tracking, anonymous crash reports only."
        canonicalPath="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About SecuBuzz',
          url: 'https://secubuzz.com/about',
          description: 'SecuBuzz is an independent cybersecurity threat intelligence assistant built by MiSo Labs.',
          publisher: {
            '@type': 'Organization',
            name: 'MiSo Labs',
            url: 'https://secubuzz.com',
          },
          creator: {
            '@type': 'Person',
            name: 'Nisarg Soni',
            jobTitle: 'Security Operations Analyst',
            sameAs: 'https://www.linkedin.com/in/soni-nisarg/',
          },
        }}
      />
      <section className="border-b border-line">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-24">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl">
            Defenders don’t have a reading problem. They have a time problem.
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">
          Why we built Secu<span className="text-accent">Buzz</span>
        </h2>
        <div className="max-w-[64ch] space-y-5 text-[16px] leading-relaxed text-muted">
          <p>
            SecuBuzz was created by <strong className="text-ink">MiSo Labs</strong> to solve a persistent challenge in cybersecurity:
            alert fatigue and information overload. Every day, security analysts, engineers, and IT leaders
            are inundated with thousands of articles, breathless social media hot takes, and lengthy vendor announcements.
          </p>
          <p>
            We built SecuBuzz to cut straight to what matters. Our automated intelligence pipeline ingests
            coverage from 27 authoritative security publications, the CISA Known Exploited Vulnerabilities (KEV)
            catalog, and the GitHub Security Advisory Database hourly around the clock, distilling complex developments into objective, 60-word briefs with direct links to primary sources.
          </p>
          <p>
            SecuBuzz is engineered with a strict <strong className="text-ink">privacy-first architecture</strong>: no user accounts, no trackers,
            no advertising IDs, and anonymous crash reports only to maintain app stability. The app is available globally on Android via Google Play.
          </p>
          <p className="border-t border-line/60 pt-4 text-xs text-subtle">
            SecuBuzz is an independent threat intelligence project architected and maintained by{' '}
            <a
              href="https://www.linkedin.com/in/soni-nisarg/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted underline decoration-dotted transition-colors hover:text-ink"
            >
              Nisarg Soni
            </a>{' '}
            at MiSo Labs. Not affiliated with or endorsed by CISA or GitHub.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-site gap-12 px-5 py-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">What we hold to</h2>
          <dl className="divide-y divide-line border-y border-line">
            {aboutPrinciples.map((p) => (
              <div key={p.title} className="grid gap-1.5 py-6 md:grid-cols-[220px_1fr] md:gap-8">
                <dt className="font-medium text-ink">{p.title}</dt>
                <dd className="text-[15px] leading-relaxed text-muted">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="text-muted">Questions or feedback about SecuBuzz? We would love to hear from you.</p>
          <Link to="/contact" className="text-sm font-medium text-accent hover:underline">
            Contact MiSo Labs →
          </Link>
        </div>
      </section>

      <AppCta />
    </>
  );
}