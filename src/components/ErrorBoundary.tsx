import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-accent">Something went wrong</h1>
            <p className="text-muted-foreground">We apologize for the inconvenience. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.children;
  }
}

export default ErrorBoundary;
