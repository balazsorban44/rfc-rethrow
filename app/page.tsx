"use client";
import { redirect, useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <span>
      Home <Component />
    </span>
  );
}

function Component(): any {
  const s = useSearchParams();
  if (s.has("bar")) return;
  redirect("/?bar");
}
