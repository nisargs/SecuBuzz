export type NewsCategory =
'Vulnerability' |
'Ransomware' |
'Breach' |
'Malware' |
'Policy' |
'Cloud';

export interface NewsBrief {
  slug: string;
  title: string;
  summary: string;
  category: NewsCategory;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  cves: string[];
}