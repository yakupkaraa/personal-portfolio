"use client";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

interface ProjectsSectionProps {
  lang: Locale;
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const dict = getDictionary(lang);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16 max-w-2xl">
        <motion.h1
          className="text-5xl font-bold tracking-tight text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {dict.projects.title}
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {dict.projects.description}
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center py-32 gap-6 border border-dashed border-border rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
          <Clock className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground">{dict.projects.comingSoon.title}</h2>
        <p className="text-muted-foreground text-center max-w-md">
          {dict.projects.comingSoon.description}
        </p>
      </motion.div>
    </section>
  );
}