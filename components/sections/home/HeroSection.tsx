"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const SOCIAL_LINKS = [
  { href: "https://github.com/yakupkaraa", label: "GitHub", icon: <FaGithub className="h-5 w-5" /> },
  { href: "https://linkedin.com/in/yakupkara", label: "LinkedIn", icon: <FaLinkedin className="h-5 w-5" /> },
  { href: "mailto:yakupkaraa60@gmail.com", label: "Email", icon: <Mail className="h-5 w-5" /> },
];

interface HeroSectionProps {
  lang: Locale;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const dict = getDictionary(lang);

  const tiles = [
    dict.philosophy.cards.scalable.title,
    dict.philosophy.cards.performance.title,
    dict.philosophy.cards.cleanCode.title,
  ];

  return (
    <section id="home">
      {/* Scene */}
      <motion.div {...fadeUp(0)} className="relative mb-11">
        <div className="relative h-[520px] overflow-hidden rounded-[28px] bg-[#0B1630] sm:h-[580px] sm:rounded-[32px]">
          <img
            src="/img/hero-day.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover dark:hidden"
          />
          <img
            src="/img/hero-night.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 hidden h-full w-full object-cover dark:block"
          />
        </div>

        <Link
          href={`/${lang}/projects`}
          aria-label={dict.hero.viewProjects}
          className="absolute -bottom-[70px] left-1/2 flex size-[148px] -translate-x-1/2 flex-col items-center justify-center gap-1.5 rounded-full border-[14px] border-background bg-accent text-[#14161F] transition-transform hover:scale-105"
        >
          <span className="text-xs font-semibold tracking-wide">{dict.hero.viewProjects}</span>
          <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
        </Link>
      </motion.div>

      {/* Intro row */}
      <div className="flex flex-wrap items-start gap-x-14 gap-y-12 px-3 pt-24 sm:pt-28">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-6">
          <motion.h1
            {...fadeUp(0.2)}
            className="max-w-2xl text-balance text-4xl leading-[1.02] sm:text-[58px]"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="max-w-[420px] text-[15px] leading-relaxed text-muted-foreground"
          >
            {dict.hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-2 flex flex-wrap items-center gap-3">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-[52px] items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {icon}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="grid min-w-0 flex-[1_1_340px] grid-cols-1 gap-3.5 sm:grid-cols-3"
        >
          {tiles.map((label) => (
            <Link
              key={label}
              href="#philosophy"
              className="flex min-h-24 flex-col items-start justify-between gap-6 rounded-[28px] bg-card px-[18px] pb-4 pt-5 text-left transition-transform hover:-translate-y-0.5 sm:min-h-[140px]"
            >
              <span className="min-h-[34px] text-[13px] font-medium leading-snug">{label}</span>
              <span className="flex size-[38px] items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.4} />
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
