import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="bg-surface py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <SectionHeading id="education-title" title="Education & training" className="lg:col-span-4" />

        <ol className="lg:col-span-8">
          {education.map((item) => (
            <li
              key={item.title}
              className="reveal grid gap-3 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-x-8"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-base text-muted">{item.institution}</p>
              </div>
              <p className="text-sm font-semibold text-ink sm:pt-1 sm:text-right">{item.status}</p>

              {item.description && (
                <p className="text-base leading-relaxed text-muted sm:col-span-2">{item.description}</p>
              )}

              {item.coursework && (
                <div className="mt-3 sm:col-span-2">
                  <p className="text-xs font-bold tracking-[0.12em] text-ink uppercase">Relevant coursework</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <li key={course} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
