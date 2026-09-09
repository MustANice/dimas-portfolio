import {
  Atom,
  Bot,
  BrainCircuit,
  Braces,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Github,
  GitBranch,
  GraduationCap,
  Home,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Radar,
  ShieldCheck,
  Terminal,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  accent: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  href: string;
  visual: "arcade" | "iot" | "security" | "ai";
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Email", href: "mailto:hello@dimas.dev", icon: Mail },
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: Braces, accent: "text-yellow-200" },
  { name: "TypeScript", icon: Code2, accent: "text-cyan-200" },
  { name: "React", icon: Atom, accent: "text-sky-200" },
  { name: "Next.js", icon: Layers3, accent: "text-white" },
  { name: "Tailwind CSS", icon: Wind, accent: "text-teal-200" },
  { name: "Python", icon: Terminal, accent: "text-emerald-200" },
  { name: "Cybersecurity", icon: ShieldCheck, accent: "text-cyan-200" },
  { name: "Linux", icon: Cpu, accent: "text-slate-100" },
  { name: "SQL", icon: Database, accent: "text-blue-200" },
  { name: "Git", icon: GitBranch, accent: "text-orange-200" },
];

export const projects: Project[] = [
  {
    title: "Worm Games",
    description: "Game project sederhana dengan konsep arcade modern.",
    stack: ["JavaScript", "Canvas", "Game Logic"],
    icon: Gamepad2,
    href: "#contact",
    visual: "arcade",
  },
  {
    title: "Smart Home IoT",
    description: "Project IoT monitoring dan keamanan rumah menggunakan Arduino.",
    stack: ["Arduino", "IoT", "Security"],
    icon: Home,
    href: "#contact",
    visual: "iot",
  },
  {
    title: "Cybersecurity Dashboard",
    description: "Dashboard monitoring keamanan jaringan dengan tampilan modern.",
    stack: ["Next.js", "Charts", "Network"],
    icon: Radar,
    href: "#contact",
    visual: "security",
  },
  {
    title: "AI Assistant",
    description: "Eksperimen AI assistant berbasis web modern.",
    stack: ["AI", "React", "API"],
    icon: Bot,
    href: "#contact",
    visual: "ai",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    title: "Informatics Student",
    period: "Sekarang",
    description:
      "Membangun dasar ilmu komputer, pemrograman, struktur data, basis data, dan pengembangan aplikasi web.",
    icon: GraduationCap,
  },
  {
    title: "Cybersecurity Learning Path",
    period: "Aktif belajar",
    description:
      "Mendalami Linux, network security, basic penetration testing, threat awareness, dan praktik keamanan digital.",
    icon: ShieldCheck,
  },
  {
    title: "AI Exploration",
    period: "Eksperimen",
    description:
      "Mengeksplorasi AI assistant, prompt engineering, integrasi API, dan pengalaman produk berbasis kecerdasan buatan.",
    icon: BrainCircuit,
  },
  {
    title: "Digital Project Builder",
    period: "Berproses",
    description:
      "Mencoba ide project web, game sederhana, dashboard, serta prototipe IoT yang berguna dan mudah dipakai.",
    icon: Code2,
  },
];
