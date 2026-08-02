"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data/portfolio-data";

const skillCategories = [
  { title: "Languages", items: skills.languages },
  { title: "Frontend", items: skills.frontend },
  { title: "Backend", items: skills.backend },
  { title: "Database", items: skills.database },
  { title: "DevOps & Cloud", items: skills.devops },
  { title: "Tools & Practices", items: skills.tools },
];

export function SkillsSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Diagonal background strips */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-muted/20 transform -skew-y-3" />
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-primary/5 transform skew-y-2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - Right aligned for asymmetry */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 max-w-3xl ml-auto text-right"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            Tech Stack
          </h2>
          <p className="text-base md:text-lg text-muted-foreground border-r-4 border-primary pr-4">
            Technologies I use to build production-ready applications
          </p>
        </motion.div>

        {/* Compact Bento Grid - Asymmetric sizes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {skillCategories.map((category, categoryIndex) => {
            // Create varied sizes for visual interest
            const spanClass = categoryIndex === 0 ? "col-span-2" : "";

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
                className={`${spanClass} group`}
              >
                <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-5 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:-rotate-1">
                  <h3 className="text-sm md:text-base font-bold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full group-hover:h-6 transition-all" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.05 + index * 0.02 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-xs px-2 py-0.5 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative floating element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-available/10 rounded-full px-5 py-2 border border-primary/20 transform rotate-1">
            <span className="text-sm text-muted-foreground font-medium">
              Always learning, always building
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
