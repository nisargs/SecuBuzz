/**
 * EPSS (Exploit Prediction Scoring System) Service
 * Fetches lightweight 30-day in-the-wild exploitation probabilities
 * and relative threat percentiles from FIRST.org via edge-cached endpoint
 * or direct FIRST.org batch queries.
 */

const EPSS_CACHE = new Map<string, { epss: number; percentile: number; date: string }>();

export function getCachedEpss(cveId: string): { epss: number; percentile: number; date: string } | undefined {
  const cleanCve = (cveId || '').trim().toUpperCase();
  return EPSS_CACHE.get(cleanCve);
}

export function getEpssPercentile(cveId: string): number | undefined {
  const cleanCve = (cveId || '').trim().toUpperCase();
  return EPSS_CACHE.get(cleanCve)?.percentile;
}

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

    if (res.ok) {
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
    }
  } catch {
    // Fail gracefully without interrupting reading
  }
  return null;
}

/**
 * Batch fetch EPSS threat percentiles directly from FIRST.org for up to 70 CVEs.
 * FIRST.org accepts comma-separated CVEs up to 2,000 characters.
 */
export async function fetchEpssBatch(
  cveIds: string[],
): Promise<Map<string, { epss: number; percentile: number }>> {
  const results = new Map<string, { epss: number; percentile: number }>();
  const toFetch: string[] = [];

  for (const raw of cveIds) {
    const clean = (raw || '').trim().toUpperCase();
    if (!clean.startsWith('CVE-')) continue;
    if (EPSS_CACHE.has(clean)) {
      const cached = EPSS_CACHE.get(clean)!;
      results.set(clean, { epss: cached.epss, percentile: cached.percentile });
    } else {
      toFetch.push(clean);
    }
  }

  if (toFetch.length === 0) return results;

  // Chunk toFetch into batches of 35 (~600 chars each, well within 2,000 char limit)
  const chunkSize = 35;
  for (let i = 0; i < toFetch.length && i < 70; i += chunkSize) {
    const chunk = toFetch.slice(i, i + chunkSize);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000);
      const url = `https://api.first.org/data/v1/epss?cve=${chunk.join(',')}`;
      const res = await fetch(url, {
        signal: controller.signal,
        headers: { Accept: 'application/json' },
      });
      clearTimeout(timeout);

      if (res.ok) {
        const json: any = await res.json();
        const items = Array.isArray(json?.data) ? json.data : [];
        for (const item of items) {
          const cve = (item.cve || '').toUpperCase();
          const epss = parseFloat(item.epss);
          const percentile = parseFloat(item.percentile);
          if (!isNaN(epss) && !isNaN(percentile)) {
            const entry = {
              epss,
              percentile,
              date: item.date || '',
            };
            EPSS_CACHE.set(cve, entry);
            results.set(cve, { epss, percentile });
          }
        }
      }
    } catch {
      // Non-fatal, offline fallback
    }
  }

  return results;
}
