import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { privacySections } from '../data/legal';

export function Privacy() {
  return <LegalPage title="Privacy Policy" updated="September 1, 2026" sections={privacySections} />;
}