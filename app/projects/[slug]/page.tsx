import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/projects/project-details";
import { getDetailProjects, getProject } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const shareImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Zubayeer Alam — portfolio" };

// Only the slugs returned below exist; any other slug renders the 404 page.
export const dynamicParams = false;

export function generateStaticParams() {
  return getDetailProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    // Overriding openGraph/twitter replaces the inherited values, so the shared share image is repeated here.
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: project.title,
      description: project.summary,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [shareImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.hasDetailPage) notFound();

  const detailProjects = getDetailProjects();
  const index = detailProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = detailProjects[(index + 1) % detailProjects.length];

  return <ProjectDetails project={project} nextProject={nextProject} />;
}
