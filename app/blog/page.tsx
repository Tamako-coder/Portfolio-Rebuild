"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/portfolio-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Format date to "1 March 2026" format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
      {/* Diagonal background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent transform rotate-6 scale-150" />
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-available/10 via-transparent to-transparent transform -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-black mb-2">
            Blog
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            Thoughts on Next.js, React, AG Grid, and building real software for
            real businesses.
          </p>
        </motion.div>

        {/* Blog Posts List */}
        <div className="space-y-5 md:space-y-6">
          {sortedPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.href} className="group block">
                <Card className="border hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    {/* Date and Read Time */}
                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs px-2 py-0.5">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ArrowRight size={16} />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Empty State (if no posts) */}
        {sortedPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
