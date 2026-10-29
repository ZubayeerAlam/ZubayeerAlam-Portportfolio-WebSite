import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn, isExternal } from "@/lib/utils";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase link with an underline and arrow, e.g. "BROWSE PROJECTS →". */
export function TextLink({ href, children, className }: TextLinkProps) {
  const external = isExternal(href);
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(
    "group inline-flex items-center gap-1.5 border-b border-ink/70 pb-1 text-xs font-bold tracking-[0.08em] text-ink uppercase transition-colors duration-(--duration-fast) hover:border-accent-hover hover:text-accent-hover",
    className,
  );
  const content = (
    <>
      {children}
      <Icon
        aria-hidden="true"
        className="size-3.5 transition-transform duration-(--duration-fast) group-hover:translate-x-0.5"
      />
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
