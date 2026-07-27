"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Package } from "lucide-react";
import { changelogData, type ChangeItem } from "@/lib/data/changelog-data";

const typeColors: Record<ChangeItem["type"], string> = {
  Added: "bg-green-500/10 text-green-600 dark:text-green-500 border-green-500/20",
  Changed: "bg-blue-500/10 text-blue-600 dark:text-blue-500 border-blue-500/20",
  Fixed: "bg-amber-500/10 text-amber-600 dark:text-amber-500 border-amber-500/20",
  Removed: "bg-red-500/10 text-red-600 dark:text-red-500 border-red-500/20",
};

export default function ChangelogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <Package size={13} />
            Release History
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Changelog</h1>
          <p className="text-muted-foreground">
            <strong>All notable changes to this project, newest first.</strong>
          </p>
        </motion.div>

        {/* Changelog Entries */}
        <div className="space-y-16">
          {changelogData.map((entry, index) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-border last:border-0 pb-16 last:pb-0"
            >
              {/* Version Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-1">{entry.version}</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  <strong>{entry.date}</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {entry.summary}
                </p>
              </div>

              {/* Changes by Category */}
              <div className="space-y-6">
                {Object.entries(entry.changes).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold mb-3">{category}</h3>
                    <ul className="space-y-3">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Badge
                            variant="secondary"
                            className={`${typeColors[item.type]} text-xs font-bold px-2 py-0.5 flex-shrink-0 mt-0.5 border`}
                          >
                            {item.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground leading-relaxed flex-1">
                            {item.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground"
        >
          <p>
            <strong>
              This changelog follows the{" "}
              <a
                href="https://keepachangelog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Keep a Changelog
              </a>{" "}
              convention.
            </strong>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
