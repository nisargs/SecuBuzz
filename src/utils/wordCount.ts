/**
 * Calculates the number of words in a text string.
 * Uses whitespace separation matching the SecuBuzz web brief standard.
 */
export function wordCount(text?: string | null): number {
  if (!text || typeof text !== 'string') {
    return 0;
  }
  return text.trim().split(/\s+/).filter(Boolean).length;
}
