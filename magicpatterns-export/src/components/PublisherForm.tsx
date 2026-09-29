import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { FormField, inputClass } from './FormField';
import { publisherFocusAreas } from '../data/site';
import { isValidEmail, isValidUrl } from '../utils/text';

interface PublisherValues {
  publication: string;
  feed: string;
  email: string;
  focus: string;
}

type Errors = Partial<Record<keyof PublisherValues, string>>;

const initial: PublisherValues = { publication: '', feed: '', email: '', focus: publisherFocusAreas[0] };

export function PublisherForm() {
  const [values, setValues] = useState<PublisherValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const update = (key: keyof PublisherValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.publication.trim()) next.publication = 'Enter your publication name.';
    if (!isValidUrl(values.feed)) next.feed = 'Enter a full feed URL starting with https://';
    if (!isValidEmail(values.email)) next.email = 'Enter a valid email address.';
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-line bg-surface p-8" role="status">
        <CheckCircle2Icon className="h-6 w-6 text-accent" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-ink">Feed submitted</h3>
        <p className="mt-2 text-muted">
          Thanks, {values.publication}. Our editors will review your feed and reply to {values.email} within five
          business days.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setStatus('idle');
          }}
          className="mt-6 text-sm font-medium text-accent hover:underline">
          
          Submit another feed
        </button>
      </div>);

  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-lg border border-line bg-surface p-6 md:p-8">
      <h3 className="text-xl font-semibold text-ink">Submit your feed</h3>
      <FormField id="publication" label="Publication name" error={errors.publication}>
        <input id="publication" className={inputClass} value={values.publication} onChange={update('publication')} aria-invalid={!!errors.publication} aria-describedby={errors.publication ? 'publication-error' : undefined} />
      </FormField>
      <FormField id="feed" label="RSS or Atom feed URL" error={errors.feed}>
        <input id="feed" type="url" className={inputClass} placeholder="https://example.com/feed.xml" value={values.feed} onChange={update('feed')} aria-invalid={!!errors.feed} aria-describedby={errors.feed ? 'feed-error' : undefined} />
      </FormField>
      <FormField id="pub-email" label="Editorial contact email" error={errors.email}>
        <input id="pub-email" type="email" className={inputClass} value={values.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'pub-email-error' : undefined} />
      </FormField>
      <FormField id="focus" label="Primary coverage">
        <select id="focus" className={inputClass} value={values.focus} onChange={update('focus')}>
          {publisherFocusAreas.map((f) =>
          <option key={f}>{f}</option>
          )}
        </select>
      </FormField>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-semibold text-accent-ink transition-colors duration-150 ease-out hover:bg-accent/90 disabled:opacity-70">
        
        {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Submitting…' : 'Submit for review'}
      </button>
    </form>);

}