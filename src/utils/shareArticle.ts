import { Share } from 'react-native';
import type { Article } from '../models/article';

/**
 * Opens native share sheet for a cybersecurity news brief.
 * Formats headline, 60-word summary, original source link, and SecuBuzz attribution.
 */
function createSlug(headline: string = '', id: string = ''): string {
  const base = (headline || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .slice(0, 50)
    .replace(/^-+|-+$/g, '');

  const idStr = (id || headline || '').trim();
  const entropy = `${base}|${idStr}`;

  let hash = 0x811c9dc5;
  for (let i = 0; i < entropy.length; i++) {
    hash ^= entropy.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  const hex = (hash >>> 0).toString(16).padStart(8, '0');
  return base ? `${base}-${hex}` : `article-${hex}`;
}

export async function shareArticle(article: Article): Promise<void> {
  try {
    const slug = (article as any).slug || createSlug(article.headline, article.id);
    const webUrl = slug ? `https://secubuzz.com/news/${slug}` : 'https://secubuzz.com';

    const message = [
      `⚡ [60-Word Security Brief] ${article.headline}`,
      '',
      article.summary,
      '',
      `- Read 60-word brief: ${webUrl}`,
      `- Source: ${article.sourceName || 'Primary Source'} (${article.sourceUrl})`,
      '',
      'Shared via SecuBuzz · Quick 60-Word Cybersecurity News',
      '📱 Google Play: https://play.google.com/store/apps/details?id=com.secubuzz.app',
      '🌐 Web: https://secubuzz.com',
    ].join('\n');

    await Share.share(
      {
        title: `⚡ [60-Word Security Brief] ${article.headline}`,
        message,
        url: webUrl,
      },
      {
        dialogTitle: `Share: ${article.headline}`,
      }
    );
  } catch (error) {
    // User cancelled or share action dismissed
  }
}
