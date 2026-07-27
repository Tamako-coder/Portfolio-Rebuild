"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Have a project in mind? I&apos;m currently available for consulting
            and new opportunities. Let&apos;s build something great together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 px-2.5 text-sm font-medium transition-all"
            >
              Get in Touch
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground h-9 gap-1.5 px-2.5 text-sm font-medium transition-all"
            >
              View My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
