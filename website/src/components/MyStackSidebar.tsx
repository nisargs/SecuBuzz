import React, { useState } from 'react';
import { Plus, X, Bookmark, Check, ChevronDown } from 'lucide-react';
import { POPULAR_VENDORS, normalizeCve } from '../data/useMyStack';

interface MyStackSidebarProps {
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
  defaultCollapsed?: boolean;
}

export function MyStackSidebar({
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
  defaultCollapsed = false,
}: MyStackSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [cveInput, setCveInput] = useState('');
  const [cveError, setCveError] = useState('');

  const handleAddCve = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeCve(cveInput);
    if (!normalized) return;
    if (!/^CVE-\d{4}-\d{4,7}$/.test(normalized)) {
      setCveError('Format: CVE-YYYY-NNNN');
      return;
    }
    setCveError('');
    toggleWatchCve(normalized);
    setCveInput('');
  };

  const hasItems = selectedVendors.length > 0 || watchedCves.length > 0;

  return (
    <div className="overflow-hidden rounded-lg border border-line hover:border-accent/40 bg-surface shadow-sm transition-colors">
      {/* Header - Clean single-line header with smooth collapse/expand */}
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="group px-3.5 py-2.5 bg-surface flex items-center justify-between select-none cursor-pointer hover:bg-surface/80 transition-colors"
      >
        <div className="flex items-center gap-2 min-w-0">
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-subtle group-hover:text-accent transition-all duration-200 ${
              isCollapsed ? '-rotate-90' : 'rotate-0'
            }`}
          />
          <h2 className="font-semibold text-ink group-hover:text-accent transition-colors text-xs sm:text-sm whitespace-nowrap truncate">
            My Stack & Watchlist
          </h2>
          {hasItems && (
            <span className="font-mono text-[10px] text-accent bg-accent/10 px-1.5 py-0.5 rounded border border-accent/30 shrink-0 group-hover:border-accent/60 group-hover:bg-accent/20 transition-colors">
              {selectedVendors.length + watchedCves.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {hasItems && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                clearStack();
              }}
              className="text-[11px] font-mono text-subtle hover:text-accent transition-colors cursor-pointer whitespace-nowrap focus:outline-none"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {!isCollapsed && (
        <div className="border-t border-line p-4 space-y-4">
        {/* Active Triage Action Button (When stack is configured) */}
        {hasItems && (
          <button
            type="button"
            onClick={onToggleStackFilter}
            className={`w-full py-2 px-3 rounded-md text-xs font-medium transition-all duration-150 flex items-center justify-between border cursor-pointer ${
              isStackFilterActive
                ? 'bg-accent/15 border-accent text-accent'
                : 'bg-surface border-line text-ink hover:border-accent hover:text-accent'
            }`}
          >
            <div className="flex items-center gap-1.5">
              {isStackFilterActive ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Filtered to My Stack</span>
                </>
              ) : (
                <span>Filter Feed to My Stack</span>
              )}
            </div>
            <span className="font-mono text-[11px] bg-raised px-1.5 py-0.5 rounded border border-line">
              {matchCount} {matchCount === 1 ? 'match' : 'matches'}
            </span>
          </button>
        )}

        {/* Vendors Section */}
        <div>
          <div className="flex items-center justify-between text-xs text-subtle font-mono mb-2">
            <span>ENTERPRISE VENDORS ({selectedVendors.length})</span>
            {selectedVendors.length > 0 && clearVendors && (
              <button
                type="button"
                onClick={clearVendors}
                className="text-[11px] text-subtle hover:text-ink transition-colors cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Active Vendor Chips */}
          {selectedVendors.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {selectedVendors.map((vendor) => (
                <span
                  key={vendor}
                  className="inline-flex items-center gap-1 bg-accent/10 border border-accent/40 rounded px-2 py-1 text-xs font-medium text-accent"
                >
                  <span>{vendor}</span>
                  <button
                    type="button"
                    onClick={() => removeVendor(vendor)}
                    className="text-accent/70 hover:text-critical ml-0.5 cursor-pointer"
                    title={`Remove ${vendor}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Quick-Pick Popular Vendors */}
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_VENDORS.map((vendor) => {
              const isSelected = selectedVendors.some(
                (v) => v.toLowerCase() === vendor.toLowerCase()
              );
              if (isSelected) return null;

              return (
                <button
                  key={vendor}
                  type="button"
                  onClick={() => toggleVendor(vendor)}
                  className="inline-flex items-center gap-1 rounded border border-line/60 bg-surface/50 px-2 py-0.5 text-[11px] text-muted hover:border-accent hover:text-accent hover:bg-surface transition-colors cursor-pointer"
                >
                  <Plus className="h-2.5 w-2.5" />
                  <span>{vendor}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CVE Watchlist Section (Standard Terminology) */}
        <div className="border-t border-line/60 pt-3">
          <div className="flex items-center justify-between text-xs text-subtle font-mono mb-2">
            <span>CVE WATCHLIST ({watchedCves.length})</span>
            {watchedCves.length > 0 && clearCves && (
              <button
                type="button"
                onClick={clearCves}
                className="text-[11px] text-subtle hover:text-ink transition-colors cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Watched CVE Chips */}
          {watchedCves.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {watchedCves.map((cve) => (
                <span
                  key={cve}
                  className="inline-flex items-center gap-1 font-mono bg-accent/10 border border-accent/40 text-accent rounded px-2 py-1 text-[11px]"
                >
                  <Bookmark className="h-2.5 w-2.5 fill-accent" />
                  <span>{cve}</span>
                  <button
                    type="button"
                    onClick={() => removeWatchCve(cve)}
                    className="text-accent/70 hover:text-critical ml-0.5 cursor-pointer"
                    title={`Unwatch ${cve}`}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Quick Add CVE Input */}
          <form onSubmit={handleAddCve} className="flex gap-1.5">
            <input
              type="text"
              value={cveInput}
              onChange={(e) => {
                setCveInput(e.target.value);
                if (cveError) setCveError('');
              }}
              placeholder="e.g. CVE-2026-111497"
              className="h-7 w-full rounded border border-line bg-surface px-2 text-xs font-mono text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="h-7 px-2.5 rounded border border-line bg-surface text-xs font-medium text-ink hover:border-accent hover:text-accent hover:bg-raised transition-colors shrink-0 cursor-pointer"
            >
              Watch
            </button>
          </form>
          {cveError && (
            <p className="mt-1 text-[11px] text-critical font-mono">{cveError}</p>
          )}
        </div>

        {/* Quiet Educational Note (Only when unconfigured) */}
        {!hasItems && (
          <p className="text-xs text-subtle leading-relaxed border-t border-line/60 pt-3">
            Stored 100% on this device. Zero accounts, zero PII, zero third-party disclosure.
          </p>
        )}
        </div>
      )}
    </div>
  );
}
