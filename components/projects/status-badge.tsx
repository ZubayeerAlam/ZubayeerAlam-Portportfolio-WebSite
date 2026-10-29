import type { ProjectStatus } from "@/types/content";
import { cn } from "@/lib/utils";

const labels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-development": "In development",
  coursework: "Coursework",
};

const styles: Record<ProjectStatus, string> = {
  completed: "border-line text-muted",
  "in-development": "border-accent/60 text-accent-hover",
  coursework: "border-line text-muted",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold tracking-wide uppercase",
        styles[status],
      )}
    >
      {labels[status]}
    </span>
  );
}
