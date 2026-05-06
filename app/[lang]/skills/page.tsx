import { SkillsSection } from "@/components/sections/skills/SkillsSection";
import { ExperienceSection } from "@/components/sections/skills/ExperienceSection";

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <SkillsSection lang={lang as "en" | "tr"} />
      <ExperienceSection lang={lang as "en" | "tr"} />
    </div>
  );
}