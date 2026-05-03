"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import dynamic from "next/dynamic";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const ThemeToggle = dynamic(
  () => import("./ThemeToggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-lg px-8 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
              Portfolio
            </Link>

            <NavigationMenu>
              <NavigationMenuList className="hidden md:flex items-center gap-2">
                {navLinks.map(({ href, label }) => (
                  <NavigationMenuItem key={href}>
                    <NavigationMenuLink
                      href={href}
                      className={`px-4 py-1.5 rounded-full transition-all text-sm ${
                        pathname === href
                          ? "bg-accent text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
export { Header };