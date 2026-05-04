"use client";

import { Layers, Zap, FileCode } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PhilosophyCard {
  icon: ReactNode;
  title: string;
  description: string;
  colSpan: string;
}

const cards: PhilosophyCard[] = [
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Scalable Design Systems",
    description: "I believe in building foundations that last. My approach centers on modular components and robust state management for seamless growth.",
    colSpan: "md:col-span-2",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Performance First",
    description: "Optimized for Core Web Vitals, ensuring every millisecond is accounted for through modern hydration and lazy-loading strategies.",
    colSpan: "",
  },
  {
    icon: <FileCode className="h-6 w-6 text-primary" />,
    title: "Clean Code",
    description: "Self-documenting, type-safe development using TypeScript and industry-leading linting standards for maintainable codebases.",
    colSpan: "",
  },
];

export function PhilosophySection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <motion.h2
        className="text-4xl font-bold tracking-tight text-foreground mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Philosophy & Approach
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(({ icon, title, description, colSpan }, index) => (
          <motion.div
            key={title}
            className={`${colSpan} p-8 rounded-xl bg-card border border-border flex flex-col gap-6`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
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
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
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