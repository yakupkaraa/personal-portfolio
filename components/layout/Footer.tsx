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
    <footer className="mt-4 w-full">
      <div className="flex flex-col items-center justify-between gap-4 px-3 pb-2 pt-4 text-[13px] text-muted-foreground md:flex-row">
        <span>© {year} Yakup Kara • {dict.footer.rights}</span>
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 transition-colors hover:text-foreground"
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