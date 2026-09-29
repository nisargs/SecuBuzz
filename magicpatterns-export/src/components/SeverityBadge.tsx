import React from 'react';
import type { Severity } from '../types/advisory';

interface SeverityBadgeProps {
  severity: Severity;
  cvss?: number;
}

const toneClass: Record<Severity, string> = {
  Critical: 'text-critical border-critical/40 bg-critical/10',
  High: 'text-high border-high/40 bg-high/10',
  Medium: 'text-medium border-medium/40 bg-medium/10',
  Low: 'text-low border-low/40 bg-low/10'
};

export function SeverityBadge({ severity, cvss }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded border px-1.5 py-0.5 font-mono text-[11px] font-medium ${toneClass[severity]}`}>
      
      {severity}
      {cvss !== undefined && <span className="opacity-80">{cvss.toFixed(1)}</span>}
    </span>);

}