import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/site-data";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const visualStyles: Record<Project["visual"], string> = {
  arcade: "from-cyan-300/[0.18] via-lime-300/[0.08] to-emerald-300/[0.14]",
  iot: "from-emerald-300/[0.16] via-cyan-300/[0.1] to-slate-200/[0.08]",
  security: "from-cyan-300/[0.18] via-blue-400/[0.1] to-emerald-300/[0.1]",
  ai: "from-sky-300/[0.18] via-cyan-200/[0.1] to-teal-300/[0.12]",
};

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-gradient-to-br",
        visualStyles[project.visual],
      )}
      aria-hidden="true"
    >
      <div className="ambient-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-8 top-8 h-px bg-cyan-200/60 shadow-[0_0_24px_rgba(34,211,238,0.65)]" />
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-5 gap-2">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "h-2 rounded-full bg-white/[0.15]",
              index % 4 === 0 && "bg-cyan-200/70 shadow-[0_0_18px_rgba(34,211,238,0.6)]",
            )}
          />
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/[0.15] bg-slate-950/80 text-cyan-100 shadow-[0_0_60px_rgba(34,211,238,0.18)]">
        <Icon size={42} aria-hidden="true" />
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Project digital dengan arah produk yang bersih dan modern."
          description="Kumpulan project yang merepresentasikan eksplorasi game, IoT, cybersecurity dashboard, dan AI assistant berbasis web."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <GlassCard className="group flex h-full flex-col overflow-hidden p-0">
                <ProjectVisual project={project} />
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-300/[0.18] bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {project.githubUrl ? "Live Demo" : "View Project"}
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Source code for ${project.title} on GitHub`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                      >
                        <Github size={16} aria-hidden="true" />
                        <span>Source Code</span>
                      </Link>
                    )}
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
