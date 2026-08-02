"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Bold diagonal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent transform -skew-y-3 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-available/10 via-transparent to-transparent transform skew-y-2 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left side - Bold text, asymmetric */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Let&apos;s Work
              <span className="text-primary block">Together</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg border-l-4 border-primary pl-4">
              Have a project in mind? I&apos;m currently available for consulting
              and new opportunities. Let&apos;s build something great.
            </p>
          </motion.div>

          {/* Right side - Action cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Primary CTA card */}
            <Link href="/contact" className="block group">
              <div className="bg-primary text-primary-foreground rounded-2xl p-5 md:p-6 transform hover:-rotate-1 transition-all duration-300 hover:shadow-xl border-2 border-primary">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Mail className="w-5 h-5" />
                      <h3 className="text-lg md:text-xl font-bold">Get in Touch</h3>
                    </div>
                    <p className="text-sm text-primary-foreground/80">
                      Start a conversation about your project
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Secondary CTA card */}
            <Link href="/work" className="block group">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-5 md:p-6 transform hover:rotate-1 transition-all duration-300 hover:shadow-xl border border-border hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">View My Work</h3>
                    <p className="text-sm text-muted-foreground">
                      Explore past projects and case studies
                    </p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="text-xs text-muted-foreground/50 font-medium">
          Available for new projects
        </div>
      </motion.div>
    </section>
  );
}
