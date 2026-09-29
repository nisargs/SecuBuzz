import React from 'react';
import { dueStatus } from '../utils/advisory';

interface DueStatusProps {
  dueDate: string;
}

const toneClass = {
  overdue: 'text-critical',
  urgent: 'text-accent',
  upcoming: 'text-muted'
};

export function DueStatus({ dueDate }: DueStatusProps) {
  const status = dueStatus(dueDate);
  return (
    <span className={`whitespace-nowrap font-mono text-xs font-medium ${toneClass[status.tone]}`}>
      {status.label}
    </span>);

}