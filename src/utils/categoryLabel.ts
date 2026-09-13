import type {
  ArticleCategory,
  CategoryFilter,
} from '../models/article';

export function categoryLabel(
  category: ArticleCategory | CategoryFilter,
): string {
  if (category === 'ALL') {
    return 'All';
  }

  if (category === 'CVE') {
    return 'CVE';
  }

  return category
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}