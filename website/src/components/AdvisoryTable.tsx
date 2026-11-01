import React from 'react';
import { Link } from 'react-router-dom';
import type { Advisory } from '../types/advisory';
import { SeverityBadge } from './SeverityBadge';
import { DueStatus } from './DueStatus';
import { isValidDate } from '../utils/date';
import { Bookmark } from 'lucide-react';

interface AdvisoryTableProps {
  items: Advisory[];
  isWatchingCve?: (cve: string) => boolean;
  onToggleWatchCve?: (cve: string) => void;
}

export function AdvisoryTable({ items, isWatchingCve, onToggleWatchCve }: AdvisoryTableProps) {
  return (
    <>
      <div className="hidden overflow-x-auto rounded-lg border border-line md:block">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-surface text-xs text-subtle">
            <tr>
              <th scope="col" className="w-[140px] whitespace-nowrap px-4 py-3 font-medium">CVE</th>
              <th scope="col" className="w-[180px] max-w-[180px] px-4 py-3 font-medium">Vendor · Product</th>
              <th scope="col" className="min-w-[260px] px-4 py-3 font-medium">Description</th>
              <th scope="col" className="w-[110px] whitespace-nowrap px-4 py-3 font-medium">Severity</th>
              <th scope="col" className="w-[100px] whitespace-nowrap px-4 py-3 font-medium">Added</th>
              <th scope="col" className="w-[125px] whitespace-nowrap px-4 py-3 font-medium">Due</th>
              <th scope="col" className="w-[95px] whitespace-nowrap px-4 py-3 font-medium">Ransomware</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {items.map((a) => (
              <tr key={a.cve} className="group relative transition-colors duration-150 ease-out hover:bg-surface">
                <td className="w-[140px] whitespace-nowrap px-4 py-3.5 align-top">
                  <div className="flex items-center gap-1.5">
                    <Link
                      to={`/advisories/${a.slug}`}
                      className="font-mono font-medium text-ink transition-colors duration-150 ease-out after:absolute after:inset-0 group-hover:text-accent">
                      {a.cve}
                    </Link>
                    {onToggleWatchCve && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onToggleWatchCve(a.cve);
                        }}
                        title={isWatchingCve?.(a.cve) ? `Remove ${a.cve} from Watchlist` : `Watch ${a.cve}`}
                        className={`relative z-10 p-0.5 rounded transition-colors ${
                          isWatchingCve?.(a.cve)
                            ? 'text-accent hover:text-critical'
                            : 'text-subtle/40 hover:text-accent group-hover:text-subtle'
                        }`}>
                        <Bookmark className={`h-3 w-3 ${isWatchingCve?.(a.cve) ? 'fill-accent' : ''}`} />
                      </button>
                    )}
                  </div>
                </td>
                <td className="w-[180px] max-w-[180px] break-words px-4 py-3.5 align-top">
                  <div className="font-medium leading-snug text-ink">{a.vendor}</div>
                  <div className="mt-0.5 line-clamp-2 text-xs leading-tight text-muted" title={a.product}>{a.product}</div>
                </td>
                <td className="min-w-[260px] px-4 py-3.5 align-top">
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted group-hover:text-ink">
                    {a.description || a.name}
                  </p>
                </td>
                <td className="w-[110px] whitespace-nowrap px-4 py-3.5 align-top">
                  <SeverityBadge severity={a.severity} cvss={a.cvss} />
                </td>
                <td className="w-[100px] whitespace-nowrap px-4 py-3.5 align-top font-mono text-xs text-muted">{a.dateAdded}</td>
                <td className="w-[125px] whitespace-nowrap px-4 py-3.5 align-top">
                  {isValidDate(a.dueDate) ? (
                    <>
                      <div className="whitespace-nowrap font-mono text-xs text-muted">{a.dueDate}</div>
                      <div className="mt-1">
                        <DueStatus dueDate={a.dueDate} />
                      </div>
                    </>
                  ) : (
                    <span className="font-mono text-xs text-subtle" title="Open Source Advisory (No CISA KEV mandate)">
                      —
                    </span>
                  )}
                </td>
                <td className="w-[95px] whitespace-nowrap px-4 py-3.5 align-top font-mono text-xs">
                  {a.ransomware ? <span className="font-medium text-critical">Known</span> : <span className="text-subtle" title="No known ransomware use reported">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-line border-y border-line md:hidden">
        {items.map((a) => (
          <li key={a.cve} className="relative py-4 group">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5">
                <Link
                  to={`/advisories/${a.slug}`}
                  className="font-mono font-medium text-ink after:absolute after:inset-0 group-hover:text-accent">
                  {a.cve}
                </Link>
                {onToggleWatchCve && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onToggleWatchCve(a.cve);
                    }}
                    title={isWatchingCve?.(a.cve) ? `Remove ${a.cve} from Watchlist` : `Watch ${a.cve}`}
                    className={`relative z-10 p-1 rounded transition-colors ${
                      isWatchingCve?.(a.cve)
                        ? 'text-accent hover:text-critical'
                        : 'text-subtle/50 hover:text-accent'
                    }`}>
                    <Bookmark className={`h-3 w-3 ${isWatchingCve?.(a.cve) ? 'fill-accent' : ''}`} />
                  </button>
                )}
              </div>
              <SeverityBadge severity={a.severity} cvss={a.cvss} />
            </div>
            <p className="mt-1 text-sm font-medium text-ink">
              {a.vendor} {a.product}
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
              {a.description || a.name}
            </p>
            <div className="mt-2 flex items-center justify-between font-mono text-xs text-subtle">
              {isValidDate(a.dueDate) ? (
                <>
                  <span>Due {a.dueDate}{a.ransomware && <span className="text-critical"> · Ransomware</span>}</span>
                  <DueStatus dueDate={a.dueDate} />
                </>
              ) : (
                <>
                  <span>Open Source Advisory{a.ransomware && <span className="text-critical"> · Ransomware</span>}</span>
                  <span className="text-subtle">—</span>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
