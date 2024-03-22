import { redirect } from "next/navigation";
import { ErrorBoundary } from "./error-boundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <Component />
    </ErrorBoundary>
  );
}

function Component(): any {
  redirect("/?foo");
}
