import React, { useState } from 'react';
import { PlayIcon } from 'lucide-react';
import { QrModal } from './QrModal';

interface PlayStoreButtonProps {
  size?: 'md' | 'lg';
  source?: string;
  className?: string;
}

export function PlayStoreButton({ size = 'md', source = 'button', className = '' }: PlayStoreButtonProps) {
  const [showQrModal, setShowQrModal] = useState(false);
  const sizing = size === 'lg' ? 'h-14 px-6 text-base' : 'h-11 px-5 text-sm';
  const href = `/go/play?src=${encodeURIComponent(source)}`;

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
        className={`inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-md bg-accent font-semibold text-accent-ink transition-[background-color,transform] duration-150 ease-out hover:bg-accent/90 active:scale-[0.98] ${sizing} ${className}`}
      >
        <PlayIcon className="h-4 w-4 fill-current" aria-hidden="true" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wide opacity-80">Google Play</span>
          <span>Get it on Google Play</span>
        </span>
      </a>

      <QrModal isOpen={showQrModal} onClose={() => setShowQrModal(false)} source={source} />
    </>
  );
}