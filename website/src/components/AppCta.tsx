import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode } from 'lucide-react';
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
        <div className="flex items-center gap-3">
          <PlayStoreButton size="lg" source="bottom_cta" />
          <Link
            to="/download"
            title="Scan QR Code to install on Android"
            className="hidden sm:inline-flex h-14 items-center gap-2 rounded-md border border-line bg-surface px-4 text-xs font-medium text-ink transition-all duration-150 ease-out hover:border-accent hover:bg-raised hover:text-accent"
          >
            <QrCode className="h-4 w-4 text-accent" />
            <span>Scan QR</span>
          </Link>
        </div>
      </div>
    </section>
  );
}