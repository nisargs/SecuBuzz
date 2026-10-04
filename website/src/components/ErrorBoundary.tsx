import React, { Component, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-site px-5 py-24 text-center md:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-critical">Error Rendering Content</p>
          <h1 className="mt-4 text-2xl font-bold text-ink">Something went wrong while rendering this record.</h1>
          <p className="mt-2 text-sm text-muted">
            The error has been safely caught. You can return to the previous screen or reload.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="rounded-md border border-line bg-surface px-4 py-2 text-xs font-mono text-ink hover:border-accent hover:text-accent"
            >
              Reload page
            </button>
            <Link
              to="/advisories"
              onClick={() => this.setState({ hasError: false })}
              className="rounded-md bg-accent px-4 py-2 text-xs font-mono font-medium text-accent-ink hover:opacity-90"
            >
              Back to Advisories
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
