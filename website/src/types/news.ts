export type NewsCategory =
'Vulnerability' |
'Ransomware' |
'Breach' |
'Malware' |
'Policy' |
'Cloud';

export interface AdditionalSource {
  source: string;
  sourceUrl: string;
}

export interface NewsBrief {
  slug: string;
  title: string;
  summary: string;
  category: NewsCategory;
  source: string;
  sourceUrl: string;
  additionalSources?: AdditionalSource[];
  publishedAt: string;
  cves: string[];
  aliases?: string[];
}