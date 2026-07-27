import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}
