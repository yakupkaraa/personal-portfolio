"use client";

import { Code2, Palette, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

const PILL =
  "border-border text-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground";

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
      icon: <Code2 className="h-6 w-6" strokeWidth={1.8} />,
      title: dict.skills.cards.coreDev.title,
      description: dict.skills.cards.coreDev.description,
      colSpan: "md:col-span-2 lg:col-span-3",
      skills: [
        { label: "TypeScript", color: PILL },
        { label: "React 18+", color: PILL },
        { label: "Next.js", color: PILL },
      ],
    },
    {
      icon: <Palette className="h-6 w-6" strokeWidth={1.8} />,
      title: dict.skills.cards.uiux.title,
      description: dict.skills.cards.uiux.description,
      colSpan: "md:col-span-2 lg:col-span-3",
      skills: [
        { label: "Tailwind CSS", color: PILL },
        { label: "Framer Motion", color: PILL },
        { label: "shadcn/ui", color: PILL },
        { label: "GraphQL", color: PILL },
      ],
    },
  ];

  const infraItems = [
    { icon: <Wrench className="h-[18px] w-[18px]" strokeWidth={1.8} />, label: "Vercel" },
    { icon: <Wrench className="h-[18px] w-[18px]" strokeWidth={1.8} />, label: "Git/GitHub" },
    { icon: <Wrench className="h-[18px] w-[18px]" strokeWidth={1.8} />, label: "Jest" },
    { icon: <Wrench className="h-[18px] w-[18px]" strokeWidth={1.8} />, label: "Playwright" },
  ];

  return (
    <section className="px-3 pb-16 pt-28 sm:pb-20">
      <div className="mb-12 max-w-3xl">
        <motion.span
          className="mb-4 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {dict.skills.badge}
        </motion.span>
        <motion.h1
          className="mb-6 text-balance text-4xl leading-[1.05] text-foreground sm:text-[44px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {dict.skills.title}
        </motion.h1>
        <motion.p
          className="max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {dict.skills.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-6">
        {skillCards.map(({ icon, title, description, skills, colSpan }, index) => (
          <motion.div
            key={title}
            className={`${colSpan} flex min-h-[280px] flex-col justify-between rounded-[32px] bg-card p-8`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 flex-none items-center justify-center rounded-full border border-border">
                  {icon}
                </div>
                <h3 className="text-2xl text-foreground">{title}</h3>
              </div>
              <p className="mb-8 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ label, color }) => (
                <span
                  key={label}
                  className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="rounded-[32px] bg-card p-8 md:col-span-4 lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="mb-2 text-2xl text-foreground">
                {dict.skills.infrastructure.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {dict.skills.infrastructure.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {infraItems.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 rounded-full border border-border px-5 py-2.5 text-foreground">
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