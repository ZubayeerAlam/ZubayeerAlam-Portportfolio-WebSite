import { FileText } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-canvas">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors duration-(--duration-fast) hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {siteConfig.resumeAvailable && (
              <li>
                <a
                  href={siteConfig.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-panel border border-line px-3 py-1.5 font-semibold text-ink transition-colors duration-(--duration-fast) hover:border-muted"
                >
                  <FileText aria-hidden="true" className="size-4" />
                  CV
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            )}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
