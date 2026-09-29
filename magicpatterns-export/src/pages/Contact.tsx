import React from 'react';
import { PageIntro } from '../components/PageIntro';
import { ContactForm } from '../components/ContactForm';

const channels = [
  { label: 'General', value: 'hello@secubuzz.com' },
  { label: 'Press', value: 'press@secubuzz.com' },
  { label: 'Corrections', value: 'corrections@secubuzz.com' },
];


export function Contact() {
  return (
    <>
      <PageIntro
        title="Contact"
        description="Questions, corrections, press, or a bug in the app. A real person on the team reads every message." />
      
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
            <h2 className="text-sm font-semibold text-ink">Reporting a vulnerability in SecuBuzz?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Please don’t use this form. Email{' '}
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