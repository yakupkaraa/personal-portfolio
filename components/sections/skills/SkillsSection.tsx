import { Code2, Palette, Wrench } from "lucide-react";
import { ReactNode } from "react";

interface Skill {
  label: string;
  color: string;
}

interface SkillCard {
  icon: ReactNode;
  title: string;
  description: string;
  skills: Skill[];
  colSpan: string;
}

interface InfraItem {
  icon: ReactNode;
  label: string;
}

const skillCards: SkillCard[] = [
  {
    icon: <Code2 className="h-7 w-7 text-primary" />,
    title: "Core Development",
    description: "Proficiency in building reactive, type-safe applications with a focus on clean code and modularity.",
    colSpan: "md:col-span-2 lg:col-span-3",
    skills: [
      { label: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400" },
      { label: "React 18+", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400" },
      { label: "Next.js", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-400" },
    ],
  },
  {
    icon: <Palette className="h-7 w-7 text-secondary" />,
    title: "UI / UX Systems",
    description: "Crafting beautiful, accessible interfaces using utility-first CSS and advanced component design patterns.",
    colSpan: "md:col-span-2 lg:col-span-3",
    skills: [
      { label: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20 hover:border-sky-400" },
      { label: "shadcn/ui", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:border-indigo-400" },
    ],
  },
];

const infraItems: InfraItem[] = [
  { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "PostgreSQL" },
  { icon: <Wrench className="h-5 w-5 text-secondary" />, label: "Git/GitHub" },
];

export function SkillsSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="max-w-3xl mb-16">
        <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
          Expertise & Pathway
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-foreground mb-8">
          Technical Architecture & Professional Journey.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Bridging the gap between robust backend structures and fluid frontend
          experiences. My stack is built on precision, scalability, and modern
          performance standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillCards.map(({ icon, title, description, skills, colSpan }) => (
          <div
            key={title}
            className={`${colSpan} bg-card border border-border rounded-xl p-8 flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
              </div>
              <p className="text-muted-foreground mb-8">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="md:col-span-4 lg:col-span-6 bg-card border border-border rounded-xl p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Infrastructure & Workflow
              </h3>
              <p className="text-muted-foreground">
                The tools that keep the engine running smoothly, from CI/CD pipelines to state management.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {infraItems.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-foreground">
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}