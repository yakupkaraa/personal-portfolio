"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { m } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

interface ProjectsSectionProps {
  lang: Locale;
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const dict = getDictionary(lang);

  const projects = [
    {
      title: dict.projects.items.nextTemplate.title,
      description: dict.projects.items.nextTemplate.description,
      tech: ["Next.js", "shadcn/ui", "Tailwind CSS"],
      gradient:
        "bg-[linear-gradient(150deg,#FFE6CC,#F2B97E)] dark:bg-[linear-gradient(150deg,#0B1630,#22406F)]",
      href: "https://next-template-dashboard-topaz.vercel.app",
      repo: "https://github.com/yakupkaraa/Next-Template",
    },
    {
      title: dict.projects.items.grove.title,
      description: dict.projects.items.grove.description,
      tech: ["React Native", "Expo"],
      gradient:
        "bg-[linear-gradient(150deg,#E8EFFB,#9DB6E0)] dark:bg-[linear-gradient(150deg,#14233F,#3B4F7D)]",
      href: "https://github.com/yakupkaraa/grove-habit-tracker",
      repo: undefined as string | undefined,
    },
  ];

  return (
    <section className="px-3 pb-16 pt-28 sm:pb-20">
      <div className="mb-10 max-w-2xl">
        <m.h1
          className="mb-3 text-4xl text-foreground sm:text-[44px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {dict.projects.title}
        </m.h1>
        <m.p
          className="max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {dict.projects.description}
        </m.p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-5">
        {projects.map(({ title, description, tech, gradient, href, repo }, index) => (
          <m.article
            key={title}
            className={`relative flex min-h-[340px] flex-col justify-end gap-3.5 overflow-hidden rounded-[32px] p-8 text-[#14161F] dark:text-[#FFFBF4] sm:min-h-[420px] ${gradient}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <h2 className="relative text-balance text-2xl leading-tight sm:text-[32px]">{title}</h2>
            <p className="relative max-w-[460px] text-[15px] leading-relaxed opacity-90">
              {description}
            </p>
            <div className="relative flex flex-wrap items-center justify-between gap-3">
              <ul className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-[#14161F]/35 px-3.5 dark:border-[#FFFBF4]/50 py-1.5 text-[13px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2.5">
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} – GitHub`}
                    className="flex size-12 items-center justify-center rounded-full transition-transform hover:scale-105 border border-[#14161F]/35 text-[#14161F] dark:border-[#FFFBF4]/50 dark:text-[#FFFBF4]"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                )}
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={repo ? `${title} – Live demo` : `${title} – GitHub`}
                  className="flex size-12 items-center justify-center rounded-full transition-transform hover:scale-105 bg-[#14161F] text-[#FFFBF4] dark:bg-[#FFFBF4] dark:text-[#14161F]"
                >
                  <ArrowUpRight className="h-[18px] w-[18px]" strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}
