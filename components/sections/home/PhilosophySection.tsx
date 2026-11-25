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
      icon: <Layers className="h-6 w-6" strokeWidth={1.8} />,
      title: dict.philosophy.cards.scalable.title,
      description: dict.philosophy.cards.scalable.description,
      colSpan: "",
    },
    {
      icon: <Zap className="h-6 w-6" strokeWidth={1.8} />,
      title: dict.philosophy.cards.performance.title,
      description: dict.philosophy.cards.performance.description,
      colSpan: "",
    },
    {
      icon: <FileCode className="h-6 w-6" strokeWidth={1.8} />,
      title: dict.philosophy.cards.cleanCode.title,
      description: dict.philosophy.cards.cleanCode.description,
      colSpan: "",
    },
  ];

  return (
    <section id="philosophy" className="scroll-mt-24 px-3 py-16 sm:py-20">
      <motion.h2
        className="mb-8 text-4xl text-foreground sm:text-[44px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {dict.philosophy.title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards.map(({ icon, title, description, colSpan }, index) => (
          <motion.div
            key={title}
            className={`${colSpan} flex min-h-[260px] flex-col gap-[18px] rounded-[32px] bg-card p-8`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex size-16 items-center justify-center rounded-full border border-border">
              {icon}
            </div>
            <h3 className="text-2xl text-foreground">{title}</h3>
            <p className="text-[15px] leading-relaxed text-muted-foreground">{description}</p>
          </motion.div>
        ))}

        <motion.div
          className="rounded-[32px] bg-card p-1.5 md:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-full rounded-[26px] bg-background p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-[#D9743A]" />
              <div className="h-3 w-3 rounded-full bg-accent" />
              <div className="h-3 w-3 rounded-full bg-[#5E78B0]" />
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