import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

export const inputClass =
'block w-full rounded-md border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink placeholder:text-subtle transition-[border-color] duration-150 ease-out focus:border-accent focus:outline-none aria-[invalid=true]:border-critical';

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error ?
      <p id={`${id}-error`} className="mt-1.5 text-sm text-critical" role="alert">
          {error}
        </p> :

      hint && <p className="mt-1.5 text-sm text-subtle">{hint}</p>
      }
    </div>);

}