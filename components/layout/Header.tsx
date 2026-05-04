"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="max-w-7xl mx-auto bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-lg px-8 py-3 flex justify-between items-center">
        
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          Portfolio
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "px-4 py-1.5 rounded-full transition-all text-sm",
                    pathname === href
                      ? "bg-accent text-primary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Buraya mobil menü butonu gelebilir */}
        </div>
      </div>
    </header>
  );
}

export { Header };