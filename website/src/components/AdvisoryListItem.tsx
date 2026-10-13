import React from 'react';
import { Link } from 'react-router-dom';
import type { Advisory } from '../types/advisory';
import { SeverityBadge } from './SeverityBadge';
import { DueStatus } from './DueStatus';

interface AdvisoryListItemProps {
  advisory: Advisory;
}

export function AdvisoryListItem({ advisory }: AdvisoryListItemProps) {
  return (
    <li>
      <Link
        to={`/advisories/${advisory.slug}`}
        className="group block px-5 py-4 transition-colors duration-150 ease-out hover:bg-raised">
        
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-sm font-medium text-ink transition-colors duration-150 ease-out group-hover:text-accent">{advisory.cve}</span>
          <SeverityBadge severity={advisory.severity} cvss={advisory.cvss} />
        </div>
        <p className="mt-1.5 text-sm text-muted">
          {advisory.vendor} {advisory.product}
        </p>
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-subtle">Due {advisory.dueDate}</span>
          <DueStatus dueDate={advisory.dueDate} />
        </div>
      </Link>
    </li>);

}