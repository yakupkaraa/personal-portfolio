export interface TechItem {
  label: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: TechItem[];
  colSpan: string;
  imageAlt: string;
  link?: string;
}

export const dummyProjects: Project[] = [
  {
    id: "01",
    title: "Lumina Dashboard",
    description: "A high-performance analytics platform for cloud infrastructure monitoring. Features real-time data streaming and interactive charting.",
    techStack: [
      { label: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400" },
      { label: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20 hover:border-blue-400" },
      { label: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20 hover:border-sky-400" },
      { label: "GraphQL", color: "bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-400" },
    ],
    colSpan: "md:col-span-8",
    imageAlt: "Lumina Dashboard",
    link: "#",
  },
  {
    id: "02",
    title: "NeuralGraph",
    description: "Interactive knowledge base visualization using force-directed graphs.",
    techStack: [
      { label: "Next.js", color: "bg-slate-500/10 text-slate-300 border-slate-500/20 hover:border-slate-300" },
      { label: "D3.js", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-400" },
    ],
    colSpan: "md:col-span-4",
    imageAlt: "NeuralGraph",
    link: "#",
  },
  {
    id: "03",
    title: "EdgeRuntime",
    description: "A low-latency WebAssembly runtime optimized for edge computing environments.",
    techStack: [
      { label: "Rust", color: "bg-orange-500/10 text-orange-400 border-orange-500/20 hover:border-orange-400" },
      { label: "Wasm", color: "bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-400" },
    ],
    colSpan: "md:col-span-4",
    imageAlt: "EdgeRuntime",
    link: "#",
  },
  {
    id: "04",
    title: "Prism UI Kit",
    description: "An enterprise-grade component library built with accessibility and motion design at its core.",
    techStack: [
      { label: "Vue 3", color: "bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-400" },
      { label: "Vite", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-400" },
      { label: "Framer Motion", color: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20 hover:border-fuchsia-400" },
    ],
    colSpan: "md:col-span-8",
    imageAlt: "Prism UI Kit",
    link: "#",
  },
];