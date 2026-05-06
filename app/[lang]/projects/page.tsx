import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return <ProjectsSection lang={lang as "en" | "tr"} />;
}