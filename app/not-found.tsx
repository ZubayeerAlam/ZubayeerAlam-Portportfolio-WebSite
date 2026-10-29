import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="py-28 sm:py-36">
      <span aria-hidden="true" className="mb-8 block h-[3px] w-16 bg-ink" />
      <p className="text-sm font-bold tracking-[0.12em] text-muted uppercase">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/#projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </Container>
  );
}
