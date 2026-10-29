import { profile } from "@/data/profile";

/**
 * Site-wide settings. Set NEXT_PUBLIC_SITE_URL in Vercel once the production domain is known.
 */
export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  title: `${profile.name} — ${profile.headline}`,
  description:
    "Portfolio of Zubayeer Alam, a Computer Science and Engineering student at AIUB building Flutter mobile apps and ASP.NET Core web applications.",
  locale: "en_US",
  /** Set to true after adding public/resume.pdf. */
  resumeAvailable: false,
  resumePath: "/resume.pdf",
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;
