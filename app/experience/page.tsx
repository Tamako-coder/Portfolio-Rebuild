"use client";

import { ExperienceSection } from "@/components/sections/experience-section";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      {/* Diagonal background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transform rotate-6 scale-150" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-available/10 via-transparent to-transparent transform -rotate-12" />
      </div>

      <ExperienceSection />
    </div>
  );
}
