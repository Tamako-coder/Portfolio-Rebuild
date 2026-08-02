"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { allProjects, personalInfo } from "@/lib/data/portfolio-data";
import { Award } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

// Extract all unique technologies from projects
const allTechnologies = Array.from(
  new Set(allProjects.flatMap((project) => project.tags))
).sort();

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredProjects =
    selectedFilter === "All"
      ? allProjects
      : allProjects.filter((project) =>
          project.tags.includes(selectedFilter)
        );

  return (
    <div className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Diagonal background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transform rotate-6 scale-150" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-available/10 via-transparent to-transparent transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-2">
            Things I've built
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            A collection of projects spanning mobile apps, games, web applications, and iOS development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 md:mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setSelectedFilter("All")}
            className={`rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200 ${
              selectedFilter === "All"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`rounded-full border px-3.5 py-1 text-xs font-medium transition-all duration-200 ${
                selectedFilter === tech
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border hover:border-primary/50">
                <CardHeader className="p-4 md:p-5">
                  {/* Project Image Placeholder */}
                  <div className="w-full h-40 md:h-44 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-3 flex items-center justify-center text-5xl md:text-6xl font-bold text-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent group-hover:scale-110 transition-transform duration-500" />
                    <span className="relative z-10">
                      {project.title.charAt(0).toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm font-medium">
                      {project.tagline}
                    </CardDescription>
                  </div>

                  {/* Award Badge */}
                  {"award" in project && project.award && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-amber-600 dark:text-amber-500">
                      <Award size={14} />
                      <span className="font-medium">{project.award}</span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-3 p-4 md:p-5 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={`text-xs px-2 py-0.5 ${
                          selectedFilter === tag ? "bg-primary/20 text-primary" : ""
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground">
              No projects found with this technology
            </p>
          </motion.div>
        )}

        {/* See More on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Want to see more? Check out my other projects on GitHub
            </p>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-9 gap-1.5 px-6 text-sm font-medium transition-all"
            >
              <FaGithub size={20} />
              View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
