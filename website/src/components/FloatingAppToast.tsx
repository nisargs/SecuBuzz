import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, QrCode } from 'lucide-react';
import { QrModal } from './QrModal';
import { GooglePlayIcon } from './GooglePlayIcon';

const DISMISS_KEY = 'secubuzz_dismiss_floating_app_v1';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const DIRECT_PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.secubuzz.app&referrer=utm_source%3Dfloating_toast%26utm_medium%3Dwebsite';

export function FloatingAppToast() {
  const [visible, setVisible] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Suppress on dedicated download page
    if (location.pathname === '/download') {
      setVisible(false);
      return;
    }

    // Check if previously dismissed within 7 days
    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const timeSince = Date.now() - parseInt(dismissedAt, 10);
        if (timeSince < SEVEN_DAYS_MS) {
          setVisible(false);
          return;
        }
      }
    } catch {
      // Ignore local storage error
    }

    // Reveal gracefully after user scrolls 350px OR after 5 seconds on page
    let triggered = false;

    const handleScroll = () => {
      if (!triggered && window.scrollY > 350) {
        triggered = true;
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const timer = setTimeout(() => {
      if (!triggered) {
        triggered = true;
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }, 5000);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // Ignore local storage error
    }
    setVisible(false);
  };

  return (
    <>
      <aside
        aria-label="Download SecuBuzz mobile app"
        className="fixed bottom-5 right-4 sm:right-6 z-40 hidden sm:flex flex-col items-end pointer-events-none"
      >
        <AnimatePresence>
          {visible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 14 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-[330px] rounded-2xl border border-line bg-surface/95 p-4 shadow-2xl backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2.5 border-b border-line/60">
                <div className="flex items-center gap-2">
                  <img
                    src="/icon.png"
                    alt="SecuBuzz Icon"
                    className="h-6 w-6 rounded-md border border-line object-cover shadow-sm"
                  />
                  <span className="text-xs font-semibold text-ink">
                    Take Secu<span className="text-accent">Buzz</span> with you
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="rounded-md p-1 text-muted hover:bg-raised hover:text-ink transition-colors cursor-pointer"
                  aria-label="Dismiss app download prompt"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <p className="mt-2.5 text-xs text-muted leading-relaxed">
                60-word cybersecurity briefs &amp; real-time zero-day alerts on Android. Free · Zero ads.
              </p>

              {/* Action Buttons */}
              <div className="mt-3.5 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowQrModal(true)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-line bg-raised px-3 py-2 text-xs font-medium text-ink hover:border-accent hover:text-accent transition-all cursor-pointer"
                  title="Scan QR Code with your phone"
                >
                  <QrCode className="h-3.5 w-3.5 text-accent" />
                  <span>Scan QR</span>
                </button>

                <a
                  href={DIRECT_PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-accent px-3 py-2 text-xs font-semibold text-accent-ink hover:bg-accent/90 transition-colors shadow-sm group"
                  title="Open SecuBuzz on Google Play Store"
                >
                  <GooglePlayIcon className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:scale-110" />
                  <span>Google Play</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>

      <QrModal
        isOpen={showQrModal}
        onClose={() => setShowQrModal(false)}
        source="floating_toast"
      />
    </>
  );
}
