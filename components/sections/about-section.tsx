"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { personalInfo, roles, stats } from "@/lib/data/portfolio-data";
import { MapPin } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        className="mb-8 md:mb-10 flex flex-col items-start gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          About
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight">
          The person behind the code
        </h2>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Column - Image and Stats */}
        <motion.div
          className="flex flex-col items-center gap-8 lg:items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Image with Glow Effect */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-md" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-primary/30 bg-primary/10">
              <Image
                alt={personalInfo.name}
                src="/Roby.webp"
                fill
                priority
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid w-full max-w-sm grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl px-4 py-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Bio and Details */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Heading */}
          <h3 className="text-2xl font-semibold leading-snug">
            Hi there! I'm Roby —{" "}
            <span className="text-gradient">a software engineer based in Singapore</span>
          </h3>

          {/* Location */}
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            {personalInfo.location}
          </p>

          {/* Bio Paragraph 1 */}
          <p className="leading-relaxed text-muted-foreground">
            I'm a dedicated software engineer and co-founder of{" "}
            <a
              href="https://www.trietech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              TrieTech
            </a>
            , a forward-thinking software consulting company. An alumnus of the National
            University of Singapore, my career has been driven by a passion for technology and
            innovation.
          </p>

          {/* Bio Paragraph 2 */}
          <p className="leading-relaxed text-muted-foreground">
            At TrieTech, we specialize in crafting bespoke web applications, focusing on
            delivering both excellence and efficiency. I'm committed to leveraging my expertise
            to provide top-tier software solutions and fostering growth in the tech industry.
          </p>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="border border-border/50 bg-card px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {role}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
