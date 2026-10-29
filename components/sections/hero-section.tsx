import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { SocialLinks } from "@/components/ui/social-links";
import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/data/profile";

interface InfoBlockProps {
  label: string;
  children: React.ReactNode;
}

function InfoBlock({ label, children }: InfoBlockProps) {
  return (
    <div className="border-t border-line py-6 first:border-t-0 first:pt-0 sm:first:border-t sm:first:pt-6 lg:first:border-t-0 lg:first:pt-0">
      <p className="mb-3 text-xs font-bold tracking-[0.12em] text-ink uppercase">{label}</p>
      {children}
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative">
      <Container className="grid gap-12 pt-14 pb-16 sm:pt-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-16">
        {/* Introduction */}
        <div className="lg:col-span-5">
          <span aria-hidden="true" className="mb-8 block h-[3px] w-16 bg-ink" />
          <h1
            id="hero-title"
            className="text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            Hi, I&apos;m {profile.firstName}, a {profile.headline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin aria-hidden="true" className="size-4" />
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#projects">View Projects</ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Contact Me
            </ButtonLink>
          </div>

          <a
            href="#about"
            aria-label="Scroll to About section"
            className="mt-12 hidden size-14 items-center justify-center rounded-full bg-accent text-white transition-colors duration-(--duration-fast) hover:bg-accent-hover lg:inline-flex"
          >
            <ChevronDown aria-hidden="true" className="size-6" />
          </a>
        </div>

        {/* Portrait */}
        <div className="flex justify-center lg:col-span-4">
          <div className="relative size-56 rounded-full bg-surface-2 p-2 sm:size-64 lg:size-72">
            <Image
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={profile.photo.width}
              height={profile.photo.height}
              sizes="(min-width: 1024px) 288px, (min-width: 640px) 256px, 224px"
              preload
              className="size-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Side column */}
        <div className="grid gap-x-8 sm:grid-cols-3 lg:col-span-3 lg:grid-cols-1">
          <InfoBlock label="About me">
            <p className="mb-4 text-sm leading-relaxed text-muted">{profile.lookingFor}</p>
            <TextLink href="/#about">Learn more</TextLink>
          </InfoBlock>
          <InfoBlock label="My work">
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Mobile apps with Flutter and Firebase, and web apps with ASP.NET Core and SQL Server.
            </p>
            <TextLink href="/#projects">Browse projects</TextLink>
          </InfoBlock>
          <InfoBlock label="Follow me">
            <SocialLinks className="-ml-3" />
          </InfoBlock>
        </div>
      </Container>
    </section>
  );
}
