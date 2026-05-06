import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { Locale, getDictionary } from "@/lib/i18n";

const SOCIAL_LINKS = [
  { href: "https://github.com/yakupkaraa", label: "GitHub", icon: <FaGithub className="h-4 w-4" /> },
  { href: "https://linkedin.com/in/yakupkara", label: "LinkedIn", icon: <FaLinkedin className="h-4 w-4" /> },
  { href: "mailto:yakupkaraa60@gmail.com", label: "Email", icon: <Mail className="h-4 w-4" /> },
];

interface FooterProps {
  lang: Locale;
}

export default function Footer({ lang }: FooterProps) {
  const dict = getDictionary(lang);
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <span>© {year} Yakup Kara • {dict.footer.rights}</span>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export { Footer };