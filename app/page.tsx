"use client";
import { redirect } from "next/navigation";
import { ErrorBoundary } from "./error-boundary";

export default function Home() {
  return (
    <span>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </span>
  );
}

function Component(): any {
  redirect("/?bar");
}
