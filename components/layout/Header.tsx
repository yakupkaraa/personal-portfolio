import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
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
                      className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all px-4 py-1.5 rounded-full"
                      href={href}
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