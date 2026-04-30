import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <span>© 2026 Portfolio • Built with precision</span>
        <div className="flex gap-8">
          <Link href="https://github.com/yakupkaraa" className="hover:text-primary transition-colors">GitHub</Link>
          <Link href="https://www.linkedin.com/in/yakup-kara-996ba4270/" className="hover:text-primary transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };