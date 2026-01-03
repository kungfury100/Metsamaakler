import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full py-12 flex items-center justify-center text-[rgb(88,78,68)] bg-[rgba(255,255,255,0.4)] rounded-lg">
          <p>Sisu laadimine ebaõnnestus.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
