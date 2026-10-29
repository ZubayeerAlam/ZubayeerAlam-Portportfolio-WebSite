import Link from "next/link";
import { cn, isExternal } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-panel px-6 text-sm font-semibold transition-colors duration-(--duration-fast)";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary: "border border-line text-ink hover:border-muted",
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (isExternal(href) || href.startsWith("mailto:")) {
    const external = isExternal(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
