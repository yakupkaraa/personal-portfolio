import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-muted text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary mr-2" />
            Available for new projects
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground max-w-2xl leading-tight">
            Hi, I&apos;m <span className="text-primary">Yakup Kara</span>,{" "}
            a Frontend Developer.
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build resilient, high-performance web architectures with a focus
            on clean code and exceptional user experience.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Button>
              <Link href="/projects" className="flex items-center gap-2">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="aspect-square w-full max-w-md mx-auto relative rounded-2xl overflow-hidden border border-border">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover grayscale opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-card backdrop-blur-md border border-border shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center text-primary">
                <Code2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Projects</div>
                <div className="text-xs text-muted-foreground">Built with precision</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}