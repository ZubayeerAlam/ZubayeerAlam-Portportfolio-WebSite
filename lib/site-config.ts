import { profile } from "@/data/profile";

/**
 * Public URL of the site, used for canonical links, the sitemap and Open Graph.
 * 1. NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 * 2. Vercel's production URL (set automatically on Vercel)
 * 3. localhost for local development
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

/**
 * Site-wide settings.
 */
export const siteConfig = {
  url: resolveSiteUrl(),
  title: `${profile.name} — ${profile.headline}`,
  description:
    "Portfolio of Zubayeer Alam, a Computer Science and Engineering student at AIUB building Flutter mobile apps and ASP.NET Core web applications.",
  locale: "en_US",
  /** Set to true once the CV PDF is in public/cv/. */
  resumeAvailable: true,
  resumePath: "/cv/Zubayeer_Alam_CV.pdf",
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
