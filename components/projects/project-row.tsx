import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/content";
import { StatusBadge } from "./status-badge";
import { trackLabels } from "./track-labels";

interface ProjectRowProps {
  project: Project;
  index: number;
}

/**
 * Editorial list row. When the project has a detail page, the title link is stretched
 * over the whole row; the repository link sits above it so both stay clickable.
 */
export function ProjectRow({ project, index }: ProjectRowProps) {
  const detailHref = project.hasDetailPage ? `/projects/${project.slug}` : undefined;

  return (
    <li className="reveal group relative grid gap-4 border-t border-line py-8 transition-colors duration-(--duration-fast) sm:grid-cols-[4rem_1fr_auto] sm:gap-6 has-[a.stretched:focus-visible]:bg-surface/40 has-[a.stretched:hover]:bg-surface/40">
      <span aria-hidden="true" className="text-sm font-semibold text-muted tabular-nums sm:pt-1.5">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
            {detailHref ? (
              <Link
                href={detailHref}
                className="stretched after:absolute after:inset-0 after:content-[''] hover:text-accent-hover"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <StatusBadge status={project.status} />
          <span className="text-xs font-semibold tracking-wide text-muted uppercase">
            {trackLabels[project.track]}
          </span>
        </div>

        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{project.summary}</p>

        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/80">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {detailHref && (
          <span
            aria-hidden="true"
            className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink sm:hidden"
          >
            View details
            <ArrowRight className="size-4" />
          </span>
        )}

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors duration-(--duration-fast) hover:text-accent-hover hover:decoration-accent-hover"
          >
            View code on GitHub
            <ArrowUpRight aria-hidden="true" className="size-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        )}
      </div>

      {detailHref && (
        <ArrowRight
          aria-hidden="true"
          className="hidden size-6 text-muted transition-[color,translate] duration-(--duration-fast) group-has-[a.stretched:hover]:translate-x-1 group-has-[a.stretched:hover]:text-ink group-has-[a.stretched:focus-visible]:translate-x-1 group-has-[a.stretched:focus-visible]:text-ink sm:mt-1.5 sm:block"
        />
      )}
    </li>
  );
}
