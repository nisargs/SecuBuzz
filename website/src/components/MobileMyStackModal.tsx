import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Layers, Check } from 'lucide-react';
import { MyStackSidebar } from './MyStackSidebar';
import { trackModalOpen } from '../utils/analytics';

interface MobileMyStackModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVendors: string[];
  watchedCves: string[];
  toggleVendor: (vendor: string) => void;
  removeVendor: (vendor: string) => void;
  clearVendors?: () => void;
  toggleWatchCve: (cve: string) => void;
  removeWatchCve: (cve: string) => void;
  clearCves?: () => void;
  clearStack: () => void;
  matchCount: number;
  isStackFilterActive: boolean;
  onToggleStackFilter: () => void;
}

export function MobileMyStackModal({
  isOpen,
  onClose,
  selectedVendors,
  watchedCves,
  toggleVendor,
  removeVendor,
  clearVendors,
  toggleWatchCve,
  removeWatchCve,
  clearCves,
  clearStack,
  matchCount,
  isStackFilterActive,
  onToggleStackFilter,
}: MobileMyStackModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    trackModalOpen('my_stack', 'mobile_drawer');
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalCount = selectedVendors.length + watchedCves.length;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col justify-end sm:justify-center items-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-stack-title"
    >
      <div
        className="relative flex flex-col w-full sm:max-w-lg max-h-[90vh] rounded-t-2xl sm:rounded-2xl border border-line bg-surface shadow-2xl transition-all overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Handle on small screens */}
        <div className="sm:hidden flex justify-center pt-2.5 pb-1 bg-surface">
          <div className="w-10 h-1 rounded-full bg-line" />
        </div>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-surface">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-accent" />
            <h2 id="mobile-stack-title" className="text-sm font-semibold text-ink">
              My Stack & Watchlist
            </h2>
            {totalCount > 0 && (
              <span className="font-mono text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/30">
                {totalCount} active
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted hover:bg-raised hover:text-ink transition-colors cursor-pointer"
            aria-label="Close My Stack"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Scrollable MyStackSidebar */}
        <div className="overflow-y-auto p-4 space-y-4 max-h-[calc(90vh-130px)] overscroll-contain">
          <MyStackSidebar
            selectedVendors={selectedVendors}
            watchedCves={watchedCves}
            toggleVendor={toggleVendor}
            removeVendor={removeVendor}
            clearVendors={clearVendors}
            toggleWatchCve={toggleWatchCve}
            removeWatchCve={removeWatchCve}
            clearCves={clearCves}
            clearStack={clearStack}
            matchCount={matchCount}
            isStackFilterActive={isStackFilterActive}
            onToggleStackFilter={onToggleStackFilter}
            defaultCollapsed={false}
          />
        </div>

        {/* Modal Footer: Quick Apply Button */}
        <div className="border-t border-line p-3 bg-surface/95 flex items-center justify-between gap-3">
          <div className="text-xs text-subtle font-mono">
            {totalCount > 0 ? `${matchCount} matching briefs` : 'Select vendors above'}
          </div>
          <button
            type="button"
            onClick={() => {
              if (totalCount > 0 && !isStackFilterActive) {
                onToggleStackFilter();
              }
              onClose();
            }}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-bg hover:bg-accent/90 transition-colors cursor-pointer"
          >
            <Check className="h-3.5 w-3.5" />
            <span>{isStackFilterActive ? 'Done' : totalCount > 0 ? 'Apply Filter' : 'Done'}</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

