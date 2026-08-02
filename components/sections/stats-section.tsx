"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data/portfolio-data";

export function StatsSection() {
  return (
    <section className="py-8 md:py-10 relative overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute inset-0 bg-muted/20 transform skew-y-1 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-5 text-center hover:border-primary/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-1 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
