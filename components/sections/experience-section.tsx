"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  highlights?: string[];
  technologies: string[];
  initials: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "trietech",
    role: "Co-Founder & CTO",
    company: "TrieTech Private Limited",
    companyUrl: "https://www.trietech.com/",
    location: "Singapore",
    period: "December 2023 – Present",
    current: true,
    description:
      "Co-founding and leading a software consulting company specializing in bespoke web application development. Driving technical strategy, architecture decisions, and client delivery — focused on excellence, efficiency, and innovation.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "ShadCN UI"],
    initials: "TT",
  },
  {
    id: "onextech",
    role: "Software Engineer",
    company: "One X Tech",
    location: "Singapore",
    period: "June 2022 – September 2023",
    description: "Full Stack Software Engineer with broad responsibilities across the development lifecycle.",
    highlights: [
      "Built a proprietary React component library used across client projects to standardize features and improve efficiency",
      "Spearheaded project management, dividing projects into sprints and ensuring on-time delivery",
      "Conducted client meetings to understand requirements and align development tasks",
      "Recognized as top earner in company town hall, lauded for extensive stack knowledge and collaborative work ethic",
      "Authored in-depth documentation for the component library using JSDoc",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "Docusaurus"],
    initials: "OX",
  },
  {
    id: "gic",
    role: "Software Engineer (Internship)",
    company: "GIC",
    location: "Singapore",
    period: "May 2021 – November 2021",
    description: "Contributed extensively to internal team initiatives and projects. Details under NDA.",
    technologies: ["Software Engineering"],
    initials: "GIC",
  },
  {
    id: "ocap",
    role: "Full Stack Engineer (Internship)",
    company: "oCap Management",
    location: "Singapore",
    period: "May 2020 – July 2020",
    description: "Contributed to multiple internal engineering initiatives.",
    highlights: [
      "Created a retrieval-based chatbot using the RASA Framework (Python) to assist with onboarding",
      "Built an OCR program to automatically extract data from documents",
      "Reviewed product UI design and functionality",
    ],
    technologies: ["Python", "RASA", "OCR", "Full-Stack"],
    initials: "OC",
  },
];

const education = {
  institution: "National University of Singapore",
  degree: "Bachelor of Computing in Computer Science",
  specialization: "Software Engineering",
  period: "2018 – 2022",
  initials: "NUS",
};

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        className="mb-8 md:mb-10 flex flex-col items-start gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Experience
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">Where I've worked</h2>
        <p className="max-w-md text-base text-muted-foreground">
          A journey through the companies and roles that have shaped who I am as an engineer.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-0">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-border/50 sm:block" />

        {/* Experience Items */}
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative flex gap-6 pb-6 last:pb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Company Icon */}
            <div className="relative hidden sm:flex flex-col items-center">
              <div
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 text-xs font-bold transition-all duration-300 ${
                  exp.current
                    ? "border-primary bg-primary text-primary-foreground glow-primary-sm"
                    : "border-border/60 bg-card text-muted-foreground"
                }`}
              >
                {exp.initials}
              </div>
            </div>

            {/* Content Card */}
            <div className="flex-1 rounded-xl border border-border/50 bg-card p-4 md:p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
              {/* Header */}
              <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base md:text-lg font-bold text-foreground">{exp.role}</h3>
                    {exp.current && (
                      <Badge
                        variant="default"
                        className="border-primary/40 bg-primary/10 text-primary text-xs"
                      >
                        <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm font-medium text-primary">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="text-muted-foreground font-normal"> · {exp.location}</span>
                  </p>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap">
                  <Calendar className="h-3 w-3" aria-hidden="true" />
                  {exp.period}
                </p>
              </div>

              {/* Description */}
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="mb-3 flex flex-col gap-1.5">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-border/40 bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <motion.div
        className="mt-8 flex items-center gap-4 rounded-xl border border-border/50 bg-card p-4 md:p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted text-sm font-bold text-muted-foreground">
          {education.initials}
        </div>
        <div className="flex-1">
          <p className="font-semibold text-foreground">{education.institution}</p>
          <p className="text-sm text-muted-foreground">
            {education.degree} ·{" "}
            <span className="text-primary">Specialization: {education.specialization}</span> ·{" "}
            {education.period}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <span className="text-xs text-muted-foreground">Education</span>
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 flex justify-center"
      >
        <button
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 text-sm font-semibold transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </button>
      </motion.div>
    </section>
  );
}
