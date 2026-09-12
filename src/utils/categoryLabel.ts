import type { ArticleCategory } from '../models/article';

const LABELS: Record<ArticleCategory, string> = {
  BREACH: 'Breach',
  RANSOMWARE: 'Ransomware',
  CVE: 'CVE',
  VULNERABILITY: 'Vulnerability',
  NATION_STATE: 'Nation-State',
  GENERAL: 'General',
};

export function categoryLabel(category: ArticleCategory): string {
  return LABELS[category];
}
