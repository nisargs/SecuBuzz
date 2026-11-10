import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { privacySections } from '../data/legal';

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="November 9, 2026"
      sections={privacySections}
      canonicalPath="/privacy"
      description="Privacy Policy for SecuBuzz by MiSo Labs detailing data practices, push notifications, and advertising disclosures."
    />
  );
}