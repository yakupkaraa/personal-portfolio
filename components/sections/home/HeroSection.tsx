"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { Locale, getDictionary } from "@/lib/i18n";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

interface HeroSectionProps {
  lang: Locale;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const dict = getDictionary(lang);

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <motion.h1 {...fadeUp(0.2)} className="text-5xl font-bold tracking-tight text-foreground max-w-2xl leading-tight">
            {dict.hero.title}
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            {dict.hero.description}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex items-center gap-4 pt-2">
            <Button>
              <Link href={`/${lang}/projects`} className="flex items-center gap-2">
                {dict.hero.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="aspect-square w-full max-w-md mx-auto relative rounded-2xl overflow-hidden border border-border">
            <img
              src="/img/undraw_code-review_jdgp.svg"
              alt="Avatar"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>

          <motion.div
            className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-card backdrop-blur-md border border-border shadow-xl hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{dict.hero.badge}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}