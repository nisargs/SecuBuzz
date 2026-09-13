import * as Linking from 'expo-linking';

export async function openArticle(
  url: string,
): Promise<boolean> {
  try {
    if (!url) {
      return false;
    }

    await Linking.openURL(url);

    return true;
  } catch (error) {
    console.warn(
      'Unable to open article URL:',
      url,
      error,
    );

    return false;
  }
}