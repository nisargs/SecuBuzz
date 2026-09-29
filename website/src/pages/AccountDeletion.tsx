import React from 'react';
import { LegalPage } from '../components/LegalPage';
import { accountDeletionSections } from '../data/legal';

export function AccountDeletion() {
  return (
    <LegalPage
      title="Account & Data Deletion"
      updated="September 24, 2026"
      sections={accountDeletionSections}
      canonicalPath="/account-deletion"
      description="Data privacy and deletion policy for SecuBuzz. 100% on-device data retention with immediate local purge options."
    />
  );
}
