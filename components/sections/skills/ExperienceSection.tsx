"use client";

import { ArrowUp } from "lucide-react";
import { m } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

interface ExperienceSectionProps {
  lang: Locale;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const dict = getDictionary(lang);

  const experiences = [
    {
      period: dict.experience.jobs.intern.period,
      title: dict.experience.jobs.intern.title,
      company: dict.experience.jobs.intern.company,
      highlights: dict.experience.jobs.intern.highlights,
    },
    {
      period: dict.experience.jobs.current.period,
      title: dict.experience.jobs.current.title,
      company: dict.experience.jobs.current.company,
      highlights: dict.experience.jobs.current.highlights,
    },
  ];

  return (
    <section className="px-3 py-16 sm:py-20">
      <m.h2
        className="mb-10 text-center text-4xl text-foreground sm:text-[44px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {dict.experience.title}
      </m.h2>

      <div className="mx-auto flex max-w-[680px] flex-col items-center">
        {[...experiences].reverse().map(({ period, title, company, highlights }, index, arr) => (
          <div key={title} className="w-full">
            <m.div
              className="rounded-[28px] bg-card px-6 py-7 sm:px-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {period}
              </span>
              <h3 className="mb-2 text-2xl text-foreground">{title}</h3>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground">
                {company}
              </p>
              <ul className="space-y-2.5">
                {highlights.map((highlight: string) => (
                  <li key={highlight} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </m.div>

            {index < arr.length - 1 && (
              <m.div
                className="flex justify-center py-3.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 + 0.1 }}
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-border"><ArrowUp className="h-4 w-4" strokeWidth={2} /></span>
              </m.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}