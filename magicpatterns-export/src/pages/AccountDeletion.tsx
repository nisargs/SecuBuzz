import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { accountDeletionSections } from '../data/legal';

export function AccountDeletion() {
  return (
    <LegalPage
      title="Account & Data Deletion"
      updated="September 24, 2026"
      sections={accountDeletionSections}
    />
  );
}
