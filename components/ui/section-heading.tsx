import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Used for aria-labelledby on the parent section. */
  id: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
}

/** Section title with the short white bar above it, as in the reference design. */
export function SectionHeading({ id, title, description, as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <span aria-hidden="true" className="mb-6 block h-[3px] w-14 bg-ink" />
      <Tag id={id} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </Tag>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
