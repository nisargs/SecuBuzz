import { Share } from 'react-native';
import type { Article } from '../models/article';

/**
 * Opens native share sheet for a cybersecurity news brief.
 * Formats headline, 60-word summary, original source link, and SecuBuzz attribution.
 */
export async function shareArticle(article: Article): Promise<void> {
  try {
    const message = [
      article.headline,
      '',
      article.summary,
      '',
      'Source:',
      article.sourceUrl,
      '',
      'Shared via SecuBuzz (https://secubuzz.com)',
    ].join('\n');

    await Share.share(
      {
        title: article.headline,
        message,
        url: article.sourceUrl,
      },
      {
        dialogTitle: `Share: ${article.headline}`,
      }
    );
  } catch (error) {
    // User cancelled or share action dismissed
  }
}
