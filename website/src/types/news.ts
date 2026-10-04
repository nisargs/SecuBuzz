export type NewsCategory =
'Vulnerability' |
'Ransomware' |
'Breach' |
'Malware' |
'Policy' |
'Cloud';

export type NewsSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface AdditionalSource {
  source: string;
  sourceUrl: string;
}

export interface NewsBrief {
  slug: string;
  title: string;
  summary: string;
  category: NewsCategory;
  severity?: NewsSeverity;
  source: string;
  sourceUrl: string;
  additionalSources?: AdditionalSource[];
  publishedAt: string;
  cves: string[];
  aliases?: string[];
}