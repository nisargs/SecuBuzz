import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { privacySections } from '../data/legal';

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="September 1, 2026"
      sections={privacySections}
      canonicalPath="/privacy"
      description="Privacy Policy for SecuBuzz by MiSo Labs. No tracking, zero ad profiles, anonymous crash reports only."
    />
  );
}