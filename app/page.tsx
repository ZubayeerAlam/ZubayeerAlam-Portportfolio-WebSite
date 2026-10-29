import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

// Temporary page used to check the layout shell in Step 2. The real sections replace it from Step 3.
const sections = ["about", "projects", "skills", "contact"] as const;

export default function HomePage() {
  return (
    <Container className="py-24">
      <SectionHeading
        id="shell-preview"
        as="h1"
        title="Layout shell preview"
        description="Header, footer, buttons and links. Sections arrive in the next steps."
      />
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="#projects">View Projects</ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          Contact Me
        </ButtonLink>
      </div>
      <div className="mt-8">
        <TextLink href="#about">Learn more</TextLink>
      </div>

      {sections.map((id) => (
        <section key={id} id={id} aria-label={id} className="mt-24 min-h-[50vh] border-t border-line pt-8">
          <p className="text-sm text-muted uppercase">#{id}</p>
        </section>
      ))}
    </Container>
  );
}
