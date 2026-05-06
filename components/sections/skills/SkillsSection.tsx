"use client";

import { Code2, Palette, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

interface Skill {
  label: string;
  color: string;
}

interface SkillsSectionProps {
  lang: Locale;
}

export function SkillsSection({ lang }: SkillsSectionProps) {
  const dict = getDictionary(lang);

  const skillCards = [
    {
      icon: <Code2 className="h-7 w-7 text-primary" />,
      title: dict.skills.cards.coreDev.title,
      description: dict.skills.cards.coreDev.description,
      colSpan: "md:col-span-2 lg:col-span-3",
      skills: [
        { label: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400" },
        { label: "React 18+", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400" },
        { label: "Next.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/20 hover:border-slate-300" },
      ],
    },
    {
      icon: <Palette className="h-7 w-7 text-secondary" />,
      title: dict.skills.cards.uiux.title,
      description: dict.skills.cards.uiux.description,
      colSpan: "md:col-span-2 lg:col-span-3",
      skills: [
        { label: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20 hover:border-sky-400" },
        { label: "Framer Motion", color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 hover:border-fuchsia-400" },
        { label: "shadcn/ui", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-400" },
        { label: "GraphQL", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-400" },
      ],
    },
  ];

  const infraItems = [
    { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "Vercel" },
    { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "Git/GitHub" },
    { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "Jest" },
    { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "Playwright" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="max-w-3xl mb-16">
        <motion.span
          className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {dict.skills.badge}
        </motion.span>
        <motion.h1
          className="text-5xl font-bold tracking-tight text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {dict.skills.title}
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {dict.skills.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillCards.map(({ icon, title, description, skills, colSpan }, index) => (
          <motion.div
            key={title}
            className={`${colSpan} bg-card border border-border rounded-xl p-8 flex flex-col justify-between`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-muted-foreground mb-8">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="md:col-span-4 lg:col-span-6 bg-card border border-border rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {dict.skills.infrastructure.title}
              </h3>
              <p className="text-muted-foreground">
                {dict.skills.infrastructure.description}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {infraItems.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-foreground">
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}