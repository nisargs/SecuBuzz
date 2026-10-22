import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SearchIcon, ChevronDownIcon, CheckIcon, XIcon } from 'lucide-react';

export interface VendorOption {
  name: string;
  count: number;
}

interface VendorSelectProps {
  value: string;
  onChange: (value: string) => void;
  vendors: VendorOption[];
  totalCount: number;
}

export function VendorSelect({ value, onChange, vendors, totalCount }: VendorSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Auto-focus search input when opening
  useEffect(() => {
    if (isOpen) {
      // Small timeout to ensure DOM is rendered
      const timer = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setSearch('');
    }
  }, [isOpen]);

  // Filter vendors based on search input
  const filteredVendors = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return vendors;
    return vendors.filter((v) => v.name.toLowerCase().includes(q));
  }, [vendors, search]);

  // Current selected vendor label
  const selectedVendor = useMemo(() => {
    if (value === 'ALL') return null;
    return vendors.find((v) => v.name.toLowerCase() === value.toLowerCase());
  }, [value, vendors]);

  const displayLabel = selectedVendor
    ? `${selectedVendor.name} (${selectedVendor.count})`
    : value === 'ALL'
      ? `All Vendors (${totalCount})`
      : value;

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`inline-flex h-8 min-w-[160px] max-w-[220px] items-center justify-between gap-1.5 rounded-md border border-line bg-surface px-2.5 text-xs text-ink transition-colors hover:border-subtle/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/20 ${
          isOpen ? 'border-accent ring-1 ring-accent/20' : ''
        }`}
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 shrink-0 text-subtle transition-transform duration-150 ${
            isOpen ? 'rotate-180 text-accent' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute left-0 top-full z-50 mt-1.5 w-64 sm:w-72 rounded-lg border border-line bg-surface p-1 shadow-2xl backdrop-blur-md ring-1 ring-black/10 dark:ring-white/5 animate-in fade-in-0 zoom-in-95"
        >
          {/* Search inside */}
          <div className="p-1.5 border-b border-line/40">
            <div className="relative flex items-center">
              <SearchIcon className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-subtle" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vendors..."
                className="h-7 w-full rounded border border-line/70 bg-raised/80 pl-8 pr-7 text-xs text-ink placeholder:text-subtle focus:border-accent focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setIsOpen(false);
                  }
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-2 text-subtle hover:text-ink p-0.5 rounded"
                  aria-label="Clear search"
                >
                  <XIcon className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>

          {/* Scrollable List */}
          <div className="max-h-60 overflow-y-auto overscroll-contain py-1 text-xs">
            {/* "All Vendors" Option */}
            {(!search.trim() || 'all vendors'.includes(search.trim().toLowerCase())) && (
              <button
                type="button"
                onClick={() => {
                  onChange('ALL');
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded px-2.5 py-1.5 text-left text-xs transition-colors ${
                  value === 'ALL'
                    ? 'bg-accent/15 text-accent font-medium'
                    : 'text-ink hover:bg-raised'
                }`}
              >
                <span>All Vendors</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="font-mono text-[10px] text-subtle bg-raised/80 px-1.5 py-0.5 rounded">
                    {totalCount}
                  </span>
                  {value === 'ALL' && <CheckIcon className="h-3 w-3 text-accent" />}
                </div>
              </button>
            )}

            {/* Alphabetical Vendors */}
            {filteredVendors.map((v) => {
              const isSelected = value.toLowerCase() === v.name.toLowerCase();
              return (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => {
                    onChange(v.name);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded px-2.5 py-1.5 text-left text-xs transition-colors ${
                    isSelected
                      ? 'bg-accent/15 text-accent font-medium'
                      : 'text-ink hover:bg-raised'
                  }`}
                >
                  <span className="truncate pr-2">{v.name}</span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="font-mono text-[10px] text-subtle bg-raised/80 px-1.5 py-0.5 rounded">
                      {v.count}
                    </span>
                    {isSelected && <CheckIcon className="h-3 w-3 text-accent" />}
                  </div>
                </button>
              );
            })}

            {filteredVendors.length === 0 &&
              Boolean(search.trim()) &&
              !'all vendors'.includes(search.trim().toLowerCase()) && (
                <div className="py-4 text-center text-xs text-subtle">
                  No vendors matching &ldquo;{search}&rdquo;
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
