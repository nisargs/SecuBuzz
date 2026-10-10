import { Share } from 'react-native';
import type { Article } from '../models/article';

/**
 * Opens native share sheet for a cybersecurity news brief.
 * Formats headline, 60-word summary, original source link, and SecuBuzz attribution.
 */
export async function shareArticle(article: Article): Promise<void> {
  try {
    const slug = article.headline
      ? article.headline
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '')
          .slice(0, 60)
          .replace(/-+$/, '')
      : '';
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
