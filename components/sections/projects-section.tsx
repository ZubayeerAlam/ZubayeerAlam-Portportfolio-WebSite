import { Container } from "@/components/layout/container";
import { ProjectRow } from "@/components/projects/project-row";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, upcomingProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="projects-title"
          title="Projects"
          description="Web apps built with ASP.NET Core and mobile apps built with Flutter."
        />

        <ol className="mt-12 border-b border-line">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </ol>

        {upcomingProjects.length > 0 && (
          <div className="mt-14">
            <h3 className="text-xs font-bold tracking-[0.12em] text-ink uppercase">Also in progress</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {upcomingProjects.map((project) => (
                <li key={project.title} className="rounded-panel border border-line px-4 py-3">
                  <p className="font-semibold">{project.title}</p>
                  <p className="mt-0.5 text-sm text-muted">{project.tech.join(", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
