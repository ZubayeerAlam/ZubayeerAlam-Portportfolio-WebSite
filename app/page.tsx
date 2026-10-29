import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* Projects section goes here (Step 5). */}
      <SkillsSection />
    </>
  );
}
