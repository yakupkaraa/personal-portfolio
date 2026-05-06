import { HeroSection } from "@/components/sections/home/HeroSection";
import { PhilosophySection } from "@/components/sections/home/PhilosophySection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div>
      <HeroSection lang={lang as "en" | "tr"} />
      <PhilosophySection lang={lang as "en" | "tr"} />
    </div>
  );
}