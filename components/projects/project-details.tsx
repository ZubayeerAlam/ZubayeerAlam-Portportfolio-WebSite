import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import type { Project } from "@/types/content";
import { StatusBadge } from "./status-badge";
import { trackLabels } from "./track-labels";

interface ProjectDetailsProps {
  project: Project;
  nextProject?: Project;
}

export function ProjectDetails({ project, nextProject }: ProjectDetailsProps) {
  return (
    <article aria-labelledby="project-title">
      <header className="border-b border-line">
        <Container className="pt-10 pb-14 sm:pt-14 sm:pb-20">
          <Link
            href="/#projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted transition-colors duration-(--duration-fast) hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All projects
          </Link>

          <span aria-hidden="true" className="mt-8 mb-6 block h-[3px] w-16 bg-ink" />
          <h1 id="project-title" className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-xs font-semibold tracking-wide text-muted uppercase">
              {trackLabels[project.track]}
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.overview ?? project.summary}
          </p>
        </Container>
      </header>

      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-12 lg:col-span-8">
          {project.sections?.map((section) => (
            <section key={section.heading} className="reveal" aria-labelledby={`section-${slugify(section.heading)}`}>
              <h2 id={`section-${slugify(section.heading)}`} className="text-2xl font-bold tracking-tight">
                {section.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent-hover" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside aria-label="Project information" className="lg:col-span-4">
          <div className="rounded-panel bg-surface p-6 lg:sticky lg:top-24">
            <h2 className="text-xs font-bold tracking-[0.12em] text-ink uppercase">Tech stack</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                  {tech}
                </li>
              ))}
            </ul>

            {(project.repoUrl || project.liveUrl) && (
              <>
                <h2 className="mt-8 text-xs font-bold tracking-[0.12em] text-ink uppercase">Links</h2>
                <ul className="mt-2">
                  {project.repoUrl && (
                    <li>
                      <ExternalLink href={project.repoUrl}>Source code on GitHub</ExternalLink>
                    </li>
                  )}
                  {project.liveUrl && (
                    <li>
                      <ExternalLink href={project.liveUrl}>Live demo</ExternalLink>
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </aside>
      </Container>

      {nextProject && (
        <Container className="pb-20">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-line pt-8"
          >
            <span>
              <span className="block text-xs font-bold tracking-[0.12em] text-muted uppercase">
                Next project
              </span>
              <span className="mt-2 block text-2xl font-bold tracking-tight transition-colors duration-(--duration-fast) group-hover:text-accent-hover">
                {nextProject.title}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-6 shrink-0 text-muted transition-[color,translate] duration-(--duration-fast) group-hover:translate-x-1 group-hover:text-ink"
            />
          </Link>
        </Container>
      )}
    </article>
  );
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors duration-(--duration-fast) hover:text-accent-hover hover:decoration-accent-hover"
    >
      {children}
      <ArrowUpRight aria-hidden="true" className="size-4" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
