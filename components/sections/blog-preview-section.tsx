"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/portfolio-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 2);

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-muted/30 to-transparent transform skew-y-2 -z-10" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header - Left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12 max-w-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            Latest Insights
          </h2>
          <p className="text-base md:text-lg text-muted-foreground border-l-4 border-primary pl-4">
            Practical writing on Next.js, React, AG Grid, and building bespoke software
          </p>
        </motion.div>

        {/* Blog Posts - Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-6">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.href} className="block group h-full">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border hover:border-primary/50 bg-card/50 backdrop-blur-sm transform hover:-rotate-1">
                  <CardHeader className="p-4 md:p-5 space-y-3">
                    {/* Meta info - compact */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <CardTitle className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="text-sm line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 md:p-5 pt-0 space-y-3">
                    {/* Topics - compact */}
                    <div className="flex flex-wrap gap-1.5">
                      {post.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs px-2 py-0.5">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Blog Posts CTA - Left aligned */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-start"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-border hover:border-primary bg-background hover:bg-primary/5 px-5 py-2.5 text-sm font-semibold transition-all hover:gap-3"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
