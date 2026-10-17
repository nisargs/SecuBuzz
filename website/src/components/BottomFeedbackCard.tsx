import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Mail, Bug, Lightbulb, ChevronUp } from 'lucide-react';

export function BottomFeedbackCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem('sb_feedback_dismissed') === '1';
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    try {
      sessionStorage.setItem('sb_feedback_dismissed', '1');
    } catch {
      // Ignore
    }
  };

  return (
    <aside
      aria-label="Feedback and suggestions"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="feedback-expanded"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-[340px] sm:w-[390px] rounded-2xl border border-line bg-surface/95 p-5 shadow-2xl backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-line/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-mono font-medium text-accent uppercase tracking-wider">
                    Developer Dispatch
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-1 text-muted hover:bg-raised hover:text-ink transition-colors"
                  aria-label="Collapse card"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content */}
              <div className="mt-3">
                <h4 className="text-sm font-semibold text-ink">
                  Finding SecuBuzz helpful?
                </h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Send a quick note directly to the developer. We read every email and build based on user signal.
                </p>

                <div className="mt-4 space-y-2.5">
                  {/* Feedback / Ideas */}
                  <a
                    href="mailto:feedback@secubuzz.com?subject=[SecuBuzz%20Idea]%20Feature%20Suggestion&body=Hi%20SecuBuzz%20team,%0A%0AHere%20is%20my%20idea%20or%20feedback:%0A%0A"
                    className="flex items-center justify-between gap-3 rounded-lg border border-line bg-raised px-3.5 py-2.5 text-xs font-medium text-ink hover:border-accent hover:text-accent transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        <Lightbulb className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-ink group-hover:text-accent transition-colors">
                          Send an Idea or Suggestion
                        </span>
                        <span className="text-[11px] font-mono text-muted">
                          feedback@secubuzz.com
                        </span>
                      </div>
                    </div>
                    <Mail className="h-4 w-4 shrink-0 text-muted group-hover:text-accent transition-colors" />
                  </a>

                  {/* Bug Report */}
                  <a
                    href="mailto:support@secubuzz.com?subject=[SecuBuzz%20Bug]%20Issue%20Report&body=Hi%20SecuBuzz%20team,%0A%0AI%20noticed%20an%20issue%20or%20bug:%0A%0APage%20or%20Component:%0ADetails:%0A%0A"
                    className="flex items-center justify-between gap-3 rounded-lg border border-line bg-raised px-3.5 py-2.5 text-xs font-medium text-ink hover:border-accent hover:text-accent transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-line/50 text-muted group-hover:text-accent transition-colors">
                        <Bug className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-ink group-hover:text-accent transition-colors">
                          Report a Bug or Data Issue
                        </span>
                        <span className="text-[11px] font-mono text-muted">
                          support@secubuzz.com
                        </span>
                      </div>
                    </div>
                    <Mail className="h-4 w-4 shrink-0 text-muted group-hover:text-accent transition-colors" />
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-between pt-2 border-t border-line/40 text-[11px] text-subtle">
                  <span>Zero tracking · Direct dev inbox</span>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="hover:text-ink underline"
                  >
                    Don't show again
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="feedback-pill"
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="group flex items-center gap-1 rounded-full border border-line bg-surface/90 py-1.5 pl-3.5 pr-2 text-xs font-medium text-ink shadow-lg backdrop-blur-md transition-all duration-150 ease-out hover:border-accent hover:bg-raised hover:text-accent"
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-xs font-medium"
              >
                <MessageSquare className="h-3.5 w-3.5 text-accent" />
                <span>Finding SecuBuzz helpful?</span>
                <ChevronUp className="h-3 w-3 text-muted group-hover:text-accent transition-transform duration-150" />
              </button>
              <button
                type="button"
                onClick={handleDismiss}
                className="ml-1 rounded-full p-1 text-subtle hover:bg-surface hover:text-ink transition-colors"
                title="Dismiss"
                aria-label="Dismiss feedback prompt"
              >
                <X className="h-3 w-3" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
