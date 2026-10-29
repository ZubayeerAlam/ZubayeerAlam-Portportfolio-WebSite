import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/** Centres content with the site's max width and side gutters. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>;
}
