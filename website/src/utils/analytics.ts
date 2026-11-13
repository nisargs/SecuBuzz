export function trackModalOpen(modal: string, source: string = 'unknown') {
  try {
    const payload = JSON.stringify({ modal, source });
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/modal-open', payload);
    } else {
      fetch('/api/analytics/modal-open', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true,
      }).catch(() => {});
    }
  } catch {}
}

