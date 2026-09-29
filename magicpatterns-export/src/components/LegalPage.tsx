import React from 'react';
import type { LegalSection } from '../data/legal';
import { PageIntro } from './PageIntro';

interface LegalPageProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <>
      <PageIntro title={title} meta={`Last updated ${updated}`} />
      <div className="mx-auto grid max-w-site gap-12 px-5 py-14 md:px-8 lg:grid-cols-[220px_1fr]">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-sm font-semibold text-ink">On this page</p>
            <ol className="mt-4 space-y-2.5 border-l border-line">
              {sections.map((s) =>
              <li key={s.id}>
                  <a
                  href={`#${s.id}`}
                  className="-ml-px block border-l border-transparent pl-4 text-sm text-muted transition-colors duration-150 ease-out hover:border-accent hover:text-ink">
                  
                    {s.heading}
                  </a>
                </li>
              )}
            </ol>
          </div>
        </nav>
        <div className="max-w-[68ch]">
          {sections.map((s) =>
          <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-8 first:pt-0 last:border-0">
              <h2 className="text-xl font-semibold tracking-tight text-ink">{s.heading}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((p, i) =>
              <p key={i} className="text-[15px] leading-relaxed text-muted">
                    {p}
                  </p>
              )}
              </div>
            </section>
          )}
        </div>
      </div>
    </>);

}