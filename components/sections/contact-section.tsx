import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BrandIcon } from "@/components/ui/brand-icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { siteConfig } from "@/lib/site-config";

const linkClasses =
  "group flex min-h-14 items-center justify-between gap-4 border-b border-line py-3 transition-colors duration-(--duration-fast) hover:text-accent-hover";

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-panel border border-line lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <SectionHeading
              id="contact-title"
              title="Let's work together"
              description={`${profile.lookingFor} The quickest way to reach me is by email.`}
            />
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-panel bg-accent px-6 text-sm font-semibold text-white transition-colors duration-(--duration-fast) hover:bg-accent-hover"
            >
              <Mail aria-hidden="true" className="size-4" />
              Send me an email
            </a>
          </div>

          <div className="bg-surface-2 p-8 sm:p-12">
            <h3 className="text-xs font-bold tracking-[0.12em] text-ink uppercase">Find me online</h3>
            <ul className="mt-4">
              <li>
                <a href={`mailto:${profile.email}`} className={linkClasses}>
                  <span className="flex min-w-0 items-center gap-3">
                    <Mail aria-hidden="true" className="size-5 shrink-0 text-muted" />
                    <span className="truncate font-semibold">{profile.email}</span>
                  </span>
                </a>
              </li>
              {profile.socials.map((social) => (
                <li key={social.platform}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <span className="flex items-center gap-3">
                      <BrandIcon platform={social.platform} className="size-5 text-muted" />
                      <span className="font-semibold">{social.label}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 text-muted transition-transform duration-(--duration-fast) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
              {siteConfig.resumeAvailable && (
                <li>
                  <a href={siteConfig.resumePath} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <span className="flex items-center gap-3">
                      <FileText aria-hidden="true" className="size-5 text-muted" />
                      <span className="font-semibold">Download my CV</span>
                    </span>
                    <ArrowUpRight aria-hidden="true" className="size-5 text-muted" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-6 text-sm text-muted">Based in {profile.location}.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
