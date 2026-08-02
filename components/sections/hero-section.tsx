"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/lib/data/portfolio-data";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, ArrowRight } from "lucide-react";

const socialLinks = [
  { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: FaXTwitter, href: personalInfo.social.twitter, label: "Twitter/X" },
  { icon: Mail, href: `mailto:${personalInfo.social.email}`, label: "Email" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      {/* Diagonal background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-transparent transform rotate-6 scale-150" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-available/5 via-transparent to-transparent transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Asymmetric grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* Left column - Main content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Name and Status Badge side by side */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-4">
              {/* Name - Bold, tight, left-aligned */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95]"
              >
                {personalInfo.name.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "text-primary block" : "block"}>
                    {word}
                  </span>
                ))}
              </motion.h1>

              {/* Status Badge - Aligned with "Tanama" */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block lg:mb-1"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-available/30 bg-available/10 px-3 py-1 text-xs font-medium text-available glow-available-sm whitespace-nowrap">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-available"></span>
                  {personalInfo.status}
                </span>
              </motion.div>
            </div>

            {/* Title - Overlapping element */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative -mt-2"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium border-l-4 border-primary pl-4">
                {personalInfo.title}
              </p>
            </motion.div>

            {/* Tagline - Compact */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {personalInfo.tagline} with focus on{" "}
              <span className="text-foreground font-semibold">
                {personalInfo.description}
              </span>
            </motion.p>

            {/* CTAs - Inline, compact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border hover:bg-muted px-5 py-2.5 text-sm font-semibold transition-all"
              >
                Let&apos;s Talk
              </Link>
            </motion.div>
          </div>

          {/* Right column - Social + Stats card (overlapping) */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Floating social card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 sm:p-6 space-y-4"
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative element - Subtle diagonal accent */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={{ opacity: 1, rotate: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="hidden lg:block bg-gradient-to-br from-primary/10 to-available/10 rounded-2xl p-6 border border-primary/20 transform rotate-1 hover:rotate-0 transition-transform duration-300"
            >
              <p className="text-sm text-muted-foreground italic">
                "Building experiences that matter"
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground text-xs"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
