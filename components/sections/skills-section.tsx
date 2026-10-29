import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="skills-title"
          title="Skills"
          description="Technologies I have used in my projects and coursework."
        />

        <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="reveal border-t border-line py-6">
              <h3 className="text-xs font-bold tracking-[0.12em] text-ink uppercase">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
