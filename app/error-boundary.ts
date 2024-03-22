"use client";

import * as React from "react";

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    console.log("Derived state from error", error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.log(error, info.componentStack);
  }

  render() {
    console.log(this.state);

    if (this.state.hasError) return "Fallback!";

    return this.props.children;
  }
}
