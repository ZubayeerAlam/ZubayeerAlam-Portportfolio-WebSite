import Link from "next/link";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site-config";
import { SocialLinks } from "@/components/ui/social-links";
import { Container } from "./container";
import { Wordmark } from "./wordmark";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-canvas">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-1 text-sm text-muted">{profile.headline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
          </ul>
        </nav>

        <SocialLinks className="-ml-3 md:ml-0" />
      </Container>
      <Container className="border-t border-line/70 py-6">
        <p className="text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
