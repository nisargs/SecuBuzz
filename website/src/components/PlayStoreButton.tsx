import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PlayIcon, QrCode, X, ExternalLink } from 'lucide-react';

interface PlayStoreButtonProps {
  size?: 'md' | 'lg';
  source?: string;
  className?: string;
}

export function PlayStoreButton({ size = 'md', source = 'button', className = '' }: PlayStoreButtonProps) {
  const [showQrModal, setShowQrModal] = useState(false);
  const sizing = size === 'lg' ? 'h-14 px-6 text-base' : 'h-11 px-5 text-sm';
  const href = `/go/play?src=${encodeURIComponent(source)}`;

  // Close modal on Escape key
  useEffect(() => {
    if (!showQrModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowQrModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showQrModal]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If user holds Ctrl / Cmd / Shift, respect default tab opening
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;

    // Detect if user is on mobile (Android / iOS / iPad)
    const isMobile =
      typeof navigator !== 'undefined' &&
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent);

    if (!isMobile) {
      // On desktop, show QR scan modal for instant phone install
      e.preventDefault();
      setShowQrModal(true);
    }
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center gap-3 whitespace-nowrap rounded-md bg-accent font-semibold text-accent-ink transition-[background-color,transform] duration-150 ease-out hover:bg-accent/90 active:scale-[0.98] ${sizing} ${className}`}
      >
        <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">Google Play</span>
          <span>Get it on Google Play</span>
        </span>
      </a>

      {showQrModal &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setShowQrModal(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="qr-modal-title"
          >
            <div
              className="relative w-full max-w-sm rounded-2xl border border-line bg-surface p-6 shadow-2xl transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-muted hover:bg-raised hover:text-ink transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono font-medium text-accent">
                  <QrCode className="h-3.5 w-3.5" />
                  <span>Scan with Phone Camera</span>
                </div>

                <h3 id="qr-modal-title" className="mt-3 text-lg font-semibold text-ink">
                  Install SecuBuzz on Android
                </h3>
                <p className="mt-1 text-xs text-muted">
                  Point your phone camera at the QR code to open directly in the Google Play Store.
                </p>

                {/* QR Code Container */}
                <div className="mx-auto my-5 flex h-48 w-48 items-center justify-center rounded-xl border border-line bg-white p-2 shadow-inner">
                  <img
                    src="/qr.png"
                    alt="SecuBuzz Google Play Store QR Code"
                    className="h-full w-full object-contain"
                    width={180}
                    height={180}
                  />
                </div>

                <div className="space-y-3">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-raised py-2.5 text-xs font-medium text-ink hover:border-accent hover:text-accent transition-all"
                    onClick={() => setShowQrModal(false)}
                  >
                    <span>Continue to Google Play Web Store</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                  <p className="text-[11px] text-subtle">
                    Requires Android 8.0+ · Free · Zero Tracking
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}