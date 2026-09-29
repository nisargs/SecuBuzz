import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { termsSections } from '../data/legal';

export function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="September 1, 2026"
      sections={termsSections}
      canonicalPath="/terms"
      description="Terms of Service for SecuBuzz by MiSo Labs. Security intelligence reading terms and guidelines."
    />
  );
}