import { daysUntil } from './date';

export type DueTone = 'overdue' | 'urgent' | 'upcoming';

export function dueStatus(dueDate: string): {label: string;tone: DueTone;days: number;} {
  const days = daysUntil(dueDate);
  if (days < 0) {
    const n = Math.abs(days);
    return { label: `Overdue ${n}d`, tone: 'overdue', days };
  }
  if (days === 0) return { label: 'Due today', tone: 'urgent', days };
  if (days <= 7) return { label: `${days}d left`, tone: 'urgent', days };
  return { label: `${days}d left`, tone: 'upcoming', days };
}