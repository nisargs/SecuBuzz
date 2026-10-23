import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import { PLAY_STORE_URL } from '../data/site';

const DISMISS_KEY = 'secubuzz_dismiss_app_banner_v1';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function SmartAppBanner() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Never show on the dedicated download page
    if (location.pathname === '/download') {
      setVisible(false);
      return;
    }

    try {
      const dismissedAt = localStorage.getItem(DISMISS_KEY);
      if (dismissedAt) {
        const timeSince = Date.now() - parseInt(dismissedAt, 10);
        if (timeSince < SEVEN_DAYS_MS) {
          setVisible(false);
          return;
        }
      }
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, [location.pathname]);

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, Date.now().toString());
    } catch {
      // ignore storage failure
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Mobile App Install Banner"
          className="relative z-50 border-b border-line bg-surface/95 px-3 py-2.5 backdrop-blur md:hidden"
        >
          <div className="mx-auto flex max-w-site items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <button
                type="button"
                onClick={handleDismiss}
                aria-label="Dismiss app banner"
                className="grid h-7 w-7 shrink-0 place-items-center rounded text-subtle transition-colors hover:text-ink focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <XIcon className="h-4 w-4" />
              </button>
              <img
                src="/icon.png"
                alt="SecuBuzz Icon"
                className="h-9 w-9 shrink-0 rounded-lg border border-line object-cover shadow-sm"
              />
              <div className="min-w-0 flex-1 leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="truncate text-xs font-semibold text-ink">
                    Secu<span className="text-accent">Buzz</span> for Android
                  </span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                </div>
                <p className="truncate text-[11px] text-muted">60-word briefs &amp; zero-day radar</p>
                <p className="text-[10px] text-subtle">Free · No Ads · Google Play</p>
              </div>
            </div>
            <a
              href="/go/play?src=smart_banner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md bg-accent px-3 text-xs font-semibold text-accent-ink transition-colors hover:bg-accent/90"
            >
              Get App
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
