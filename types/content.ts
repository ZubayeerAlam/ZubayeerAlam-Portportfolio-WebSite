export type SocialPlatform = "github" | "linkedin" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  firstName: string;
  headline: string;
  /** Main heading on the home page hero. */
  greeting: string;
  location: string;
  email: string;
  /** Short hero introduction (one or two sentences). */
  intro: string;
  /** About section paragraphs. */
  about: string[];
  /** The kind of roles being looked for. */
  lookingFor: string;
  languages: string[];
  photo: { src: string; alt: string; width: number; height: number };
  socials: SocialLink[];
}

export type ProjectStatus = "completed" | "in-development" | "coursework";

export type ProjectTrack = "dotnet" | "flutter";

export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  status: ProjectStatus;
  track: ProjectTrack;
  /** One-sentence summary shown in the project list. */
  summary: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Detail-page content. Only sections backed by real information are listed. */
  overview?: string;
  sections?: ProjectSection[];
  /** When true, the project gets its own /projects/[slug] page. */
  hasDetailPage: boolean;
}

export interface UpcomingProject {
  title: string;
  tech: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  status: string;
  description?: string;
  coursework?: string[];
}
