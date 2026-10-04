import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { ContactForm } from '../components/ContactForm';
import { Seo } from '../components/Seo';

const channels = [
  { label: 'General Support & App Feedback', value: 'support@secubuzz.com' },
  { label: 'Security Disclosures & Vulnerabilities', value: 'security@secubuzz.com' },
  { label: 'Publishers & Removal Requests', value: 'publishers@secubuzz.com' },
];


export function Contact() {
  return (
    <>
      <Seo
        title="Contact SecuBuzz · MiSo Labs"
        description="Contact the SecuBuzz team at MiSo Labs. Support, bug reports, publisher partnerships, and coordinated security disclosures."
        canonicalPath="/contact"
      />
      <PageIntro
        title="Contact"
        description="Questions, corrections, support, or a bug in the app. A real person on the team reads every message." />
      
      <div className="mx-auto grid max-w-site gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <aside className="space-y-10">
          <section>
            <h2 className="text-sm font-semibold text-ink">Email us directly</h2>
            <dl className="mt-3 divide-y divide-line border-y border-line">
              {channels.map((c) =>
              <div key={c.label} className="py-3.5">
                  <dt className="text-xs text-subtle">{c.label}</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${c.value}`} className="font-mono text-sm text-ink hover:text-accent">
                      {c.value}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </section>
          <section className="rounded-lg border border-line p-5">
            <h2 className="text-sm font-semibold text-ink">Publishers &amp; removal requests</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Removal requests sent to{' '}
              <a href="mailto:publishers@secubuzz.com" className="font-mono text-ink hover:text-accent">
                publishers@secubuzz.com
              </a>{' '}
              are honored within 48 hours.
            </p>
          </section>
          <section className="rounded-lg border border-line p-5">
            <h2 className="text-sm font-semibold text-ink">Reporting a vulnerability in SecuBuzz?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Please email{' '}
              <a href="mailto:security@secubuzz.com" className="font-mono text-ink hover:text-accent">
                security@secubuzz.com
              </a>{' '}
              with details. We acknowledge reports within 48 hours and follow coordinated disclosure.
            </p>
          </section>
        </aside>
      </div>
    </>);

}