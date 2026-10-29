import { CodeXml } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export function Wordmark() {
  return (
    <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-base font-bold tracking-tight">
      <CodeXml aria-hidden="true" strokeWidth={2.75} className="size-6 text-accent-hover" />
      {profile.name}
    </Link>
  );
}
