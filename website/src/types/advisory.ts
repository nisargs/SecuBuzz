export type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Unknown';

export interface AdvisoryReference {
  label: string;
  url: string;
}

export interface Advisory {
  cve: string;
  cveID?: string;
  slug: string;
  vendor: string;
  product: string;
  name: string;
  dateAdded: string;
  dueDate: string;
  cvss?: number;
  severity: Severity;
  cwe: string;
  ransomware: boolean;
  description: string;
  requiredAction: string;
  references: AdvisoryReference[];
  source?: 'CISA KEV' | 'GITHUB';
}