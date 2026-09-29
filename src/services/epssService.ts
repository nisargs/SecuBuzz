/**
 * EPSS (Exploit Prediction Scoring System) Service
 * Fetches lightweight 30-day in-the-wild exploitation probabilities
 * and relative threat percentiles from FIRST.org via edge-cached endpoint.
 */

const EPSS_CACHE = new Map<string, { epss: number; percentile: number; date: string }>();

export async function fetchEpssScore(
  cveId: string,
): Promise<{ epss: number; percentile: number; date: string } | null> {
  const cleanCve = (cveId || '').trim().toUpperCase();
  if (!cleanCve.startsWith('CVE-')) return null;

  if (EPSS_CACHE.has(cleanCve)) {
    return EPSS_CACHE.get(cleanCve)!;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://secubuzz.com/api/epss?cve=${cleanCve}`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeout);

    if (!res.ok) return null;
    const data = (await res.json()) as any;
    if (typeof data.epss === 'number' && typeof data.percentile === 'number') {
      const result = {
        epss: data.epss,
        percentile: data.percentile,
        date: data.date || '',
      };
      EPSS_CACHE.set(cleanCve, result);
      return result;
    }
  } catch {
    // Fail gracefully without interrupting reading
  }
  return null;
}
