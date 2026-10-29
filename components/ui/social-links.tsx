import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { BrandIcon } from "./brand-icons";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {profile.socials.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (opens in a new tab)`}
            className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-(--duration-fast) hover:text-ink"
          >
            <BrandIcon platform={social.platform} className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
