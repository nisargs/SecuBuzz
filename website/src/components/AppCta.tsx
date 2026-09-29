import React from 'react';
import { PlayStoreButton } from './PlayStoreButton';

interface AppCtaProps {
  title?: string;
  body?: string;
}

export function AppCta({
  title = 'Start your morning triage on SecuBuzz',
  body = 'Free on Android. Curated 60-word briefs and automated CISA KEV threat alerts delivered without noise or tracking.'
}: AppCtaProps) {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-site flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
          <p className="mt-2 text-muted">{body}</p>
        </div>
        <PlayStoreButton size="lg" />
      </div>
    </section>);

}