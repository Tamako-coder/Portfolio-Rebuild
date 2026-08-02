"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredProjects, allProjects } from "@/lib/data/portfolio-data";
import { ArrowRight, ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";

export function FeaturedProjectsSection() {
  // Get 4 projects: 3 featured + 1 from allProjects (Aether)
  const displayProjects = [
    ...featuredProjects,
    allProjects.find(p => p.id === "aether")
  ].filter(Boolean).slice(0, 4);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Diagonal background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent transform -rotate-3 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - Left aligned, asymmetric */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            Featured Work
          </h2>
          <p className="text-base md:text-lg text-muted-foreground border-l-4 border-primary pl-4">
            Production-ready applications that solve real problems
          </p>
        </motion.div>

        {/* Grid Layout - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.href} className="block h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-44 w-full overflow-hidden border-b border-border/40">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />

                    {/* Floating icon on hover */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="p-4 md:p-5 space-y-3 flex-1">
                    <div className="space-y-2">
                      <CardTitle className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>

                      {/* Award badge if exists */}
                      {project.award && (
                        <p className="flex items-center gap-1.5 text-xs font-medium text-primary/80">
                          <Trophy className="w-3 h-3" />
                          {project.award}
                        </p>
                      )}

                      <CardDescription className="text-xs md:text-sm font-medium">
                        {project.tagline}
                      </CardDescription>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack - Compact */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA - Asymmetric position */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-start"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-border hover:border-primary bg-background hover:bg-primary/5 px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
