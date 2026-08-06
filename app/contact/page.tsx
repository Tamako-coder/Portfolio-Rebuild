"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/lib/data/portfolio-data";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a message",
      href: `mailto:${personalInfo.social.email}`,
      label: personalInfo.social.email,
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      description: "Let's connect",
      href: personalInfo.social.linkedin,
      label: "Connect on LinkedIn",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      description: "See my code",
      href: personalInfo.social.github,
      label: "Check out my repos",
    },
    {
      icon: FaXTwitter,
      title: "Twitter / X",
      description: "Follow my thoughts",
      href: personalInfo.social.twitter,
      label: "Follow on X",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-8 md:pt-20 md:pb-30 relative overflow-hidden">
      {/* Diagonal background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transform rotate-6 scale-150" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-available/10 via-transparent to-transparent transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Let's work together
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have a project in mind, a role to fill, or just want to say hi? I'm always happy to chat.
          </p>

          {/* Say Hello Button */}
          <motion.a
            href={`mailto:${personalInfo.social.email}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-base font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : "_blank"}
              rel={link.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                <CardContent className="p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <link.icon className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
