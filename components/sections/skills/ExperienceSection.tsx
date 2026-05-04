import { ArrowUp } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  company: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    period: "Oct 2024 — Present",
    title: "Frontend Developer",
    company: "IBSS Teknoloji ve Yazılım A.Ş.",
    highlights: [
      "Advanced proficiency in React and Next.js, delivering scalable and maintainable web applications.",
      "Focused on performance optimization techniques and UX improvements to enhance user experience.",
    ],
  },
  {
    period: "Jul 2023 — Sep 2024",
    title: "Frontend Developer Intern",
     company: "IBSS Teknoloji ve Yazılım A.Ş.",
    highlights: [
      "Strengthened core frontend fundamentals including HTML, CSS, and JavaScript through hands-on project experience.",
      "Gained practical experience with React, building reusable components and managing application state.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <h2 className="text-4xl font-bold tracking-tight text-foreground mb-16 text-center">
        Work Experience
      </h2>

      <div className="flex flex-col items-center max-w-2xl mx-auto">
        {experiences.map(({ period, title, company, highlights }, index) => (
          <div key={title} className="w-full">
            <div className="bg-card border border-border rounded-xl p-8 group hover:border-primary transition-colors duration-300">
              <span className="text-sm font-medium tracking-widest text-primary uppercase block mb-3">
                {period}
              </span>
              <h3 className="text-2xl font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-secondary text-sm font-medium uppercase tracking-widest mb-6">
                {company}
              </p>
              <ul className="space-y-3">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {index < experiences.length - 1 && (
              <div className="flex justify-center py-4">
                <ArrowUp className="h-6 w-6 text-primary" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}