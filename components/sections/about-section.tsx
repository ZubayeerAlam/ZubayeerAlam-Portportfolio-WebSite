import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

export function AboutSection() {
  const linkedin = profile.socials.find((social) => social.platform === "linkedin");
  const [degree, training] = education;

  const facts = [
    { label: "Based in", value: profile.location },
    degree && { label: "Studying", value: `B.Sc. in CSE at AIUB (${degree.status})` },
    training && { label: "Training", value: `Ostad ${training.title} (${training.status})` },
    { label: "Languages", value: profile.languages.join(", ") },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact));

  return (
    <section id="about" aria-labelledby="about-title" className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <SectionHeading id="about-title" title="About me" className="lg:col-span-4" />

        <div className="reveal lg:col-span-8">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-x-8 sm:grid-cols-2">
            {facts.map((fact) => (
              <div key={fact.label} className="border-t border-line py-4">
                <dt className="text-xs font-bold tracking-[0.12em] text-ink uppercase">{fact.label}</dt>
                <dd className="mt-1.5 text-sm text-muted">{fact.value}</dd>
              </div>
            ))}
          </dl>

          {linkedin && (
            <div className="mt-8">
              <TextLink href={linkedin.href}>Follow my journey on LinkedIn</TextLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
