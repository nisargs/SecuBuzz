import React, { useState } from 'react';
import { CheckCircle2Icon, Loader2Icon } from 'lucide-react';
import { FormField, inputClass } from './FormField';
import { contactTopics } from '../data/site';
import { isValidEmail } from '../utils/text';

interface ContactValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof ContactValues, string>>;

const initial: ContactValues = { name: '', email: '', topic: contactTopics[0], message: '' };

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const update =
  (key: keyof ContactValues) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Enter your name.';
    if (!isValidEmail(values.email)) next.email = 'Enter a valid email address.';
    if (values.message.trim().length < 10) next.message = 'Tell us a bit more (at least 10 characters).';
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-line bg-surface p-8" role="status">
        <CheckCircle2Icon className="h-6 w-6 text-accent" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-semibold text-ink">Message sent</h2>
        <p className="mt-2 text-muted">
          Thanks, {values.name.split(' ')[0]}. We usually reply within one business day at {values.email}.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initial);
            setStatus('idle');
          }}
          className="mt-6 text-sm font-medium text-accent hover:underline">
          
          Send another message
        </button>
      </div>);

  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-lg border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" error={errors.name}>
          <input id="name" autoComplete="name" className={inputClass} value={values.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
        </FormField>
        <FormField id="email" label="Email" error={errors.email}>
          <input id="email" type="email" autoComplete="email" className={inputClass} value={values.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
        </FormField>
      </div>
      <FormField id="topic" label="Topic">
        <select id="topic" className={inputClass} value={values.topic} onChange={update('topic')}>
          {contactTopics.map((t) =>
          <option key={t}>{t}</option>
          )}
        </select>
      </FormField>
      <FormField id="message" label="Message" error={errors.message}>
        <textarea id="message" rows={6} className={`${inputClass} resize-y`} value={values.message} onChange={update('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
      </FormField>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-6 text-sm font-semibold text-accent-ink transition-colors duration-150 ease-out hover:bg-accent/90 disabled:opacity-70">
        
        {status === 'submitting' && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>);

}