"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Home, Code2, LayoutGrid } from "lucide-react";
import { Locale, getDictionary } from "@/lib/i18n";

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const dict = getDictionary(lang);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { href: `/${lang}`, label: dict.header.home },
    { href: `/${lang}/skills`, label: dict.header.skills },
    { href: `/${lang}/projects`, label: dict.header.projects },
  ];

  const NAV_ICONS = [Home, Code2, LayoutGrid];

  const switchLang = () => {
    const newLang = lang === "en" ? "tr" : "en";
    window.location.href = pathname.replace(`/${lang}`, `/${newLang}`);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-3 z-50 h-0 md:relative md:top-0">
      {/* Desktop: fixed vertical rail on the left */}
      <aside className="fixed left-5 top-1/2 z-50 hidden h-[min(540px,80vh)] -translate-y-1/2 flex-col items-center rounded-full bg-[#FFFBF4]/95 px-2 py-4 shadow-lg ring-1 ring-[#14161F]/10 backdrop-blur dark:bg-[#1A2236]/90 dark:text-[#F4EFE8] dark:shadow-black/40 dark:ring-white/10 md:flex">
        <nav className="flex flex-1 items-center">
          <ul className="flex flex-col items-center gap-2">
            {NAV_LINKS.map(({ href, label }, i) => {
              const Icon = NAV_ICONS[i];
              const active = pathname === href;
              return (
                <li key={href} className="group relative">
                  <Link
                    href={href}
                    aria-label={label}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex size-11 items-center justify-center rounded-full text-[#14161F] transition-colors dark:text-[#F4EFE8]",
                      active
                        ? "bg-accent ring-2 ring-[#14161F] dark:text-[#14161F] dark:ring-[#F4EFE8]"
                        : "hover:bg-[#14161F]/5 dark:hover:bg-white/10"
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </Link>
                  <span className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#14161F] px-3 py-1.5 text-xs font-medium text-[#FFFBF4] opacity-0 dark:bg-[#F4EFE8] dark:text-[#14161F] transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={switchLang}
            className="flex size-11 cursor-pointer items-center justify-center rounded-full text-sm font-semibold text-[#14161F] transition-colors hover:bg-[#14161F]/5 dark:text-[#F4EFE8] dark:hover:bg-white/10"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
          <ThemeToggle className="size-11 bg-transparent shadow-none ring-0 hover:bg-[#14161F]/5 dark:bg-transparent dark:text-[#F4EFE8] dark:hover:bg-white/10 sm:size-11" />
        </div>
      </aside>

      <div
        className={cn(
          "absolute inset-x-3 top-3 sm:inset-x-5 sm:top-5 flex items-start justify-end gap-2 transition-all duration-300",
          scrolled && "drop-shadow-lg"
        )}
      >
        <div className="flex items-center gap-2 sm:gap-2.5 md:hidden">
          <button
            onClick={switchLang}
            className="h-12 sm:h-14 rounded-full bg-[#FFFBF4] ring-1 ring-[#14161F]/10 shadow-sm px-4 sm:px-5 text-sm font-semibold text-[#14161F] transition-opacity hover:opacity-90 cursor-pointer"
          >
            {lang === 'en' ? 'TR' : 'EN'}
          </button>
          <ThemeToggle />
          <button
            className="flex size-12 items-center justify-center rounded-full bg-[#FFFBF4] ring-1 ring-[#14161F]/10 shadow-sm text-[#14161F] transition-opacity hover:opacity-90 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute inset-x-3 top-[72px] sm:inset-x-5 sm:top-[88px] overflow-hidden rounded-3xl bg-[#FFFBF4] ring-1 ring-[#14161F]/10 shadow-sm shadow-xl"
          >
            <ul className="flex flex-col gap-1 p-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-full px-5 py-3 text-sm font-medium text-[#14161F] transition-colors",
                      pathname === href ? "bg-accent" : "hover:bg-[#14161F]/5"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };