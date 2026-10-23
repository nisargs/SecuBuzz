import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { QrCode, X, ExternalLink } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function QrModal({ isOpen, onClose, source = 'qr_modal' }: QrModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const href = `/go/play?src=${encodeURIComponent(source)}`;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
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
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted hover:bg-raised hover:text-ink transition-colors cursor-pointer"
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
            Install Secu<span className="text-accent">Buzz</span> on Android
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
              onClick={onClose}
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
  );
}
