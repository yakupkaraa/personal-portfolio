"use client";

import { Layers, Zap, FileCode } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

interface PhilosophySectionProps {
  lang: Locale;
}

export function PhilosophySection({ lang }: PhilosophySectionProps) {
  const dict = getDictionary(lang);

  const cards = [
    {
      icon: <Layers className="h-6 w-6 text-primary" />,
      title: dict.philosophy.cards.scalable.title,
      description: dict.philosophy.cards.scalable.description,
      colSpan: "md:col-span-2",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: dict.philosophy.cards.performance.title,
      description: dict.philosophy.cards.performance.description,
      colSpan: "",
    },
    {
      icon: <FileCode className="h-6 w-6 text-primary" />,
      title: dict.philosophy.cards.cleanCode.title,
      description: dict.philosophy.cards.cleanCode.description,
      colSpan: "",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <motion.h2
        className="text-4xl font-bold tracking-tight text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {dict.philosophy.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ icon, title, description, colSpan }, index) => (
          <motion.div
            key={title}
            className={`${colSpan} p-8 rounded-xl bg-card border border-border flex flex-col gap-6`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              {icon}
            </div>
            <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </motion.div>
        ))}

        <motion.div
          className="md:col-span-2 p-1 rounded-xl bg-gradient-to-br from-primary/10 via-card to-secondary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-background rounded-lg p-8 h-full border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-xs text-muted-foreground uppercase tracking-widest">
                portfolio.config.ts
              </span>
            </div>
            <pre className="text-sm text-muted-foreground leading-relaxed font-mono">
              <span className="text-primary">export const</span> portfolioConfig = {"{"}
              {"\n"}{"  "}name:{" "}
              <span className="text-secondary">&quot;Yakup Kara&quot;</span>,{"\n"}
              {"  "}stack: [
              <span className="text-secondary">&quot;React&quot;</span>,{" "}
              <span className="text-secondary">&quot;Next.js&quot;</span>,{" "}
              <span className="text-secondary">&quot;TypeScript&quot;</span>],{"\n"}
              {"  "}focus:{" "}
              <span className="text-secondary">&quot;Performance & UX&quot;</span>,{"\n"}
              {"  "}readyForHire:{" "}
              <span className="text-primary">true</span>
              {"\n"}
              {"}"};
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}