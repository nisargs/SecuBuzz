import React, { useState, useMemo, useEffect } from 'react';
import { Plus, X, Bookmark, Check, ChevronDown, ExternalLink } from 'lucide-react';
import { POPULAR_VENDORS, normalizeCve, isValidVulnerabilityId } from '../data/useMyStack';
import { getVendorHealth, VENDOR_STATUS_REGISTRY } from '../data/vendorHealth';

const VENDOR_OUTAGES_STORAGE_KEY = 'secubuzz_vendor_outages_enabled_v1';

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
  const [vendorOutagesEnabled, setVendorOutagesEnabled] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(VENDOR_OUTAGES_STORAGE_KEY);
      return saved !== null ? JSON.parse(saved) : true; // Enabled by default
    } catch {
      return true;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(VENDOR_OUTAGES_STORAGE_KEY, JSON.stringify(vendorOutagesEnabled));
    } catch {
      // Ignore storage errors in private browsing
    }
  }, [vendorOutagesEnabled]);

  const [liveRegistry, setLiveRegistry] = useState(VENDOR_STATUS_REGISTRY);

  useEffect(() => {
    let isMounted = true;
    fetch('/api/vendor-status')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && isMounted) {
          setLiveRegistry((prev) => ({ ...prev, ...data }));
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  const [cveInput, setCveInput] = useState('');
  const [cveError, setCveError] = useState('');

  const vendorHealthMap = useMemo(() => {
    if (!vendorOutagesEnabled) {
      const operationalRegistry: Record<string, typeof VENDOR_STATUS_REGISTRY[string]> = {};
      for (const [k, v] of Object.entries(liveRegistry)) {
        operationalRegistry[k] = {
          ...v,
          status: 'OPERATIONAL',
          summary: 'All services operating normally',
        };
      }
      return operationalRegistry;
    }
    return liveRegistry;
  }, [vendorOutagesEnabled, liveRegistry]);

  const outageVendors = useMemo(() => {
    return selectedVendors
      .map((v) => getVendorHealth(v, vendorHealthMap))
      .filter((h) => h.status === 'OUTAGE' || h.status === 'DEGRADED')
      .sort((a, b) => {
        if (a.status === 'OUTAGE' && b.status !== 'OUTAGE') return -1;
        if (a.status !== 'OUTAGE' && b.status === 'OUTAGE') return 1;
        return a.vendor.localeCompare(b.vendor);
      });
  }, [selectedVendors, vendorHealthMap]);

  const [showIncidentList, setShowIncidentList] = useState(false);

  // Raw stats for the toggle button when active or muted
  const totalRawIncidents = useMemo(() => {
    return POPULAR_VENDORS
      .map((v) => getVendorHealth(v, liveRegistry))
      .filter((h) => h.status === 'OUTAGE' || h.status === 'DEGRADED')
      .sort((a, b) => {
        if (a.status === 'OUTAGE' && b.status !== 'OUTAGE') return -1;
        if (a.status !== 'OUTAGE' && b.status === 'OUTAGE') return 1;
        return a.vendor.localeCompare(b.vendor);
      });
  }, [liveRegistry]);

  const totalRawOutages = useMemo(
    () => totalRawIncidents.filter((i) => i.status === 'OUTAGE').length,
    [totalRawIncidents]
  );
  const totalRawDegraded = useMemo(
    () => totalRawIncidents.filter((i) => i.status === 'DEGRADED').length,
    [totalRawIncidents]
  );

  // If user has selected vendors in stack, show their incidents; otherwise show all active enterprise incidents
  const displayedIncidents = useMemo(() => {
    if (!vendorOutagesEnabled) return [];
    const list = selectedVendors.length > 0
      ? outageVendors
      : POPULAR_VENDORS
          .map((v) => getVendorHealth(v, vendorHealthMap))
          .filter((h) => h.status === 'OUTAGE' || h.status === 'DEGRADED');

    return [...list].sort((a, b) => {
      if (a.status === 'OUTAGE' && b.status !== 'OUTAGE') return -1;
      if (a.status !== 'OUTAGE' && b.status === 'OUTAGE') return 1;
      return a.vendor.localeCompare(b.vendor);
    });
  }, [selectedVendors, outageVendors, vendorHealthMap, vendorOutagesEnabled]);

  const outageCount = useMemo(
    () => displayedIncidents.filter((i) => i.status === 'OUTAGE').length,
    [displayedIncidents]
  );
  const degradedCount = useMemo(
    () => displayedIncidents.filter((i) => i.status === 'DEGRADED').length,
    [displayedIncidents]
  );

  const handleAddCve = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeCve(cveInput);
    if (!normalized) return;
    if (!isValidVulnerabilityId(normalized)) {
      setCveError('Format: CVE-YYYY-NNNN or GHSA-xxxx-xxxx-xxxx');
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

          {/* Sleek, Single-Line Health Summary Bar (Max ~28px height, expandable) */}
          {displayedIncidents.length > 0 && (
            <div className="mb-2.5 rounded-md border border-line bg-surface/90 overflow-hidden text-xs">
              <button
                type="button"
                onClick={() => setShowIncidentList(!showIncidentList)}
                className="w-full px-2.5 py-1.5 flex items-center justify-between hover:bg-surface transition-colors cursor-pointer text-left select-none"
              >
                <div className="flex items-center gap-1.5 min-w-0">
                  {outageCount > 0 && (
                    <span className="flex items-center gap-1 text-red-400 font-semibold font-mono text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      {outageCount} Outage{outageCount > 1 ? 's' : ''}
                    </span>
                  )}
                  {outageCount > 0 && degradedCount > 0 && <span className="text-muted/60 text-[10px]">·</span>}
                  {degradedCount > 0 && (
                    <span className="flex items-center gap-1 text-amber-400 font-medium font-mono text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {degradedCount} Degraded
                    </span>
                  )}
                  
                </div>
                <div className="flex items-center gap-1 text-subtle hover:text-ink text-[11px] font-mono shrink-0 ml-2">
                  <span>{showIncidentList ? 'Hide' : 'Details'}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showIncidentList ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Dynamic Ratio Bar: Red for Outages, Orange/Amber for Degraded */}
              <div className="h-[3px] w-full flex bg-surface-raised overflow-hidden">
                {outageCount > 0 && (
                  <div
                    style={{ width: `${(outageCount / displayedIncidents.length) * 100}%` }}
                    className="h-full bg-red-500 transition-all duration-300"
                    title={`${outageCount} Outage${outageCount > 1 ? 's' : ''}`}
                  />
                )}
                {degradedCount > 0 && (
                  <div
                    style={{ width: `${(degradedCount / displayedIncidents.length) * 100}%` }}
                    className="h-full bg-amber-500 transition-all duration-300"
                    title={`${degradedCount} Degraded`}
                  />
                )}
              </div>

              {/* Clean, compact slide-down list when explicitly expanded */}
              {showIncidentList && (
                <div
                  className="border-t border-line/60 p-2.5 space-y-2.5 bg-background/60 max-h-60 overflow-y-auto"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.18) transparent' }}
                >
                  {displayedIncidents.map((inc) => {
                    const isOutage = inc.status === 'OUTAGE';
                    return (
                      <div
                        key={inc.vendor}
                        className="py-1.5 border-b border-line/30 last:border-b-0 space-y-1 text-xs"
                      >
                        {/* Row 1: Status Dot + Vendor Name + Badge + Direct Link */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span
                              className={`h-1.5 w-1.5 rounded-full shrink-0 ${
                                isOutage ? 'bg-red-500 animate-pulse' : 'bg-amber-400'
                              }`}
                            />
                            <span
                              className={`font-semibold text-xs ${
                                isOutage ? 'text-red-400' : 'text-amber-400'
                              }`}
                            >
                              {inc.vendor}
                            </span>
                            <span
                              className={`text-[9px] font-mono uppercase px-1 py-0.2 rounded border ${
                                isOutage
                                  ? 'border-red-500/40 bg-red-500/10 text-red-400'
                                  : 'border-amber-500/40 bg-amber-500/10 text-amber-400'
                              }`}
                            >
                              {inc.status}
                            </span>
                          </div>
                          <a
                            href={inc.statusUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline hover:text-white shrink-0 font-mono text-[11px] inline-flex items-center gap-0.5 ml-2"
                          >
                            <span>Status</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </div>

                        {/* Row 2: Full description wrapped naturally without truncation */}
                        <p className="text-[11px] text-muted leading-relaxed pl-2.5 border-l border-line/60 break-words">
                          {inc.summary}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Active Vendor Chips */}
          {selectedVendors.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {selectedVendors.map((vendor) => {
                const health = getVendorHealth(vendor, vendorHealthMap);
                const isOutage = health.status === 'OUTAGE';
                const isDegraded = health.status === 'DEGRADED';

                let chipTheme = 'bg-accent/10 border-accent/40 text-accent';
                if (isOutage) {
                  chipTheme = 'bg-red-500/10 border-red-500/60 text-red-400 hover:border-red-400';
                } else if (isDegraded) {
                  chipTheme = 'bg-amber-500/10 border-amber-500/60 text-amber-400 hover:border-amber-400';
                }

                return (
                  <span
                    key={vendor}
                    className={`inline-flex items-center gap-1.5 border rounded px-2 py-1 text-xs font-medium transition-colors ${chipTheme}`}
                  >
                    {isOutage || isDegraded ? (
                      <a
                        href={health.statusUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                        title={`${vendor}: ${health.summary} (Click for official status)`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${isOutage ? 'bg-red-500 animate-pulse' : 'bg-amber-400'}`} />
                        <span>{vendor}</span>
                      </a>
                    ) : (
                      <span>{vendor}</span>
                    )}
                    <button
                      type="button"
                      onClick={() => removeVendor(vendor)}
                      className="text-inherit/70 hover:text-critical ml-0.5 cursor-pointer"
                      title={`Remove ${vendor}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                );
              })}
            </div>
          )}

          {/* Quick-Pick Popular Vendors */}
          <div className="flex flex-wrap gap-1.5">
            {POPULAR_VENDORS.map((vendor) => {
              const isSelected = selectedVendors.some(
                (v) => v.toLowerCase() === vendor.toLowerCase()
              );
              if (isSelected) return null;

              const health = getVendorHealth(vendor, vendorHealthMap);
              const isOutage = health.status === 'OUTAGE';
              const isDegraded = health.status === 'DEGRADED';

              let chipStyle = 'border-line/60 bg-surface/50 text-muted hover:border-accent hover:text-accent hover:bg-surface';
              if (isOutage) {
                chipStyle = 'border-red-500/50 bg-red-500/10 text-red-300 hover:border-red-400';
              } else if (isDegraded) {
                chipStyle = 'border-amber-500/50 bg-amber-500/10 text-amber-300 hover:border-amber-400';
              }

              return (
                <button
                  key={vendor}
                  type="button"
                  onClick={() => toggleVendor(vendor)}
                  className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[11px] transition-colors cursor-pointer ${chipStyle}`}
                  title={
                    isOutage || isDegraded
                      ? `${vendor}: ${health.summary} (Click to add to My Stack)`
                      : `Add ${vendor} to My Stack`
                  }
                >
                  <Plus className="h-2.5 w-2.5" />
                  <span>{vendor}</span>
                  {isOutage && <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse ml-0.5" />}
                  {isDegraded && <span className="h-1.5 w-1.5 rounded-full bg-amber-400 ml-0.5" />}
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
              placeholder="e.g. CVE-2026-111497 or GHSA-..."
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

          {/* Local Dev Outage Simulator */}
          <div className="mt-3 pt-2.5 border-t border-line/40 flex items-center justify-between text-[10px] font-mono text-subtle">
            <span>Vendor Outages:</span>
            <button
              type="button"
              onClick={() => setVendorOutagesEnabled(!vendorOutagesEnabled)}
              title={vendorOutagesEnabled ? "Click to mute vendor outage indicators" : "Click to show vendor outage indicators"}
              className={`relative overflow-hidden px-2.5 py-1 rounded text-[10px] font-semibold border transition-all cursor-pointer select-none ${
                vendorOutagesEnabled
                  ? 'border-line/80 bg-surface/90 hover:bg-surface'
                  : 'bg-surface text-muted border-line hover:border-accent hover:text-accent'
              }`}
            >
              {vendorOutagesEnabled ? (
                <>
                  <div className="flex items-center gap-1.5 pb-0.5">
                    <span className="flex items-center gap-1 text-red-400 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      {outageCount}
                    </span>
                    <span className="text-muted/50 font-mono">·</span>
                    <span className="flex items-center gap-1 text-amber-400 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      {degradedCount}
                    </span>
                    <span className="font-mono text-ink tracking-tight ml-0.5">
                      OUTAGES ACTIVE
                    </span>
                  </div>
                  {/* Dynamic Ratio Bar along bottom edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] flex bg-surface-raised overflow-hidden">
                    {outageCount > 0 && (
                      <div
                        style={{ width: `${(outageCount / displayedIncidents.length) * 100}%` }}
                        className="h-full bg-red-500 transition-all duration-300"
                      />
                    )}
                    {degradedCount > 0 && (
                      <div
                        style={{ width: `${(degradedCount / displayedIncidents.length) * 100}%` }}
                        className="h-full bg-amber-500 transition-all duration-300"
                      />
                    )}
                  </div>
                </>
              ) : (
                <span className="text-muted font-mono">OUTAGES: MUTED</span>
              )}
            </button>
          </div>
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
