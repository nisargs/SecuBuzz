export type AdvisorySource = 'CISA KEV' | 'GITHUB' | 'NVD';

export type AdvisorySeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type CveAdvisory = {
  id: string;
  cveID: string;
  source: AdvisorySource;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  severity: AdvisorySeverity;
  shortDescription: string;
  requiredAction?: string;
  dueDate?: string;
  knownRansomwareCampaignUse?: 'Known' | 'Unknown' | string;
  url: string;
  cwes?: string[];
  cvssScore?: number;
  patchedVersion?: string;
  vulnerableVersionRange?: string;
};

export type AdvisorySourceFilter = 'ALL' | 'CISA' | 'GITHUB';
export type AdvisorySeverityFilter = 'ALL' | AdvisorySeverity | 'RANSOMWARE';
