import React from 'react';
import { Link } from 'react-router-dom';
import type { Advisory } from '../types/advisory';
import { SeverityBadge } from './SeverityBadge';
import { DueStatus } from './DueStatus';

interface AdvisoryTableProps {
  items: Advisory[];
}

export function AdvisoryTable({ items }: AdvisoryTableProps) {
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
            {items.map((a) =>
            <tr key={a.cve} className="group relative transition-colors duration-150 ease-out hover:bg-surface">
                <td className="w-[140px] whitespace-nowrap px-4 py-3.5 align-top">
                  <Link
                  to={`/advisories/${a.slug}`}
                  className="font-mono font-medium text-ink after:absolute after:inset-0 group-hover:underline underline-offset-2 decoration-muted/50">
                    {a.cve}
                  </Link>
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
                  <div className="whitespace-nowrap font-mono text-xs text-muted">{a.dueDate}</div>
                  <div className="mt-1">
                    <DueStatus dueDate={a.dueDate} />
                  </div>
                </td>
                <td className="w-[95px] whitespace-nowrap px-4 py-3.5 align-top font-mono text-xs">
                  {a.ransomware ? <span className="font-medium text-critical">Known</span> : <span className="text-subtle" title="No known ransomware use reported">—</span>}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ul className="divide-y divide-line border-y border-line md:hidden">
        {items.map((a) =>
        <li key={a.cve}>
            <Link to={`/advisories/${a.slug}`} className="block py-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono font-medium text-ink">{a.cve}</span>
                <SeverityBadge severity={a.severity} cvss={a.cvss} />
              </div>
              <p className="mt-1 text-sm font-medium text-ink">
                {a.vendor} {a.product}
              </p>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                {a.description || a.name}
              </p>
              <div className="mt-2 flex items-center justify-between font-mono text-xs text-subtle">
                <span>Due {a.dueDate}{a.ransomware && <span className="text-critical"> · Ransomware</span>}</span>
                <DueStatus dueDate={a.dueDate} />
              </div>
            </Link>
          </li>
        )}
      </ul>
    </>);

}