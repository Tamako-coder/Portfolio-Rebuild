"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredProjects } from "@/lib/data/portfolio-data";
import { ArrowRight, ExternalLink } from "lucide-react";

export function FeaturedProjectsSection() {
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

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
          {featuredProjects.map((project, index) => {
            // Create asymmetric layout - first project spans 2 columns on larger screens
            const isLarge = index === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border hover:border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="space-y-3 p-4 md:p-5">
                    {/* Project Image Placeholder with diagonal overlay */}
                    <div className="relative w-full h-40 md:h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-available/5 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-black text-primary/10">
                        {project.title.charAt(0).toUpperCase()}
                      </div>
                      {/* Diagonal accent on hover */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transform -skew-y-3 transition-all duration-300" />

                      {/* Floating link button */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <CardTitle className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-xs md:text-sm font-medium">
                        {project.tagline}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 p-4 md:p-5 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack - Compact */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, isLarge ? 5 : 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > (isLarge ? 5 : 3) && (
                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                          +{project.tags.length - (isLarge ? 5 : 3)}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
