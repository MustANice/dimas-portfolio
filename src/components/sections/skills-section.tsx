import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Toolbox modern untuk membangun, mengamankan, dan bereksperimen."
          description="Kombinasi web development, scripting, database, workflow Git, Linux, dan dasar keamanan digital untuk mendukung project yang scalable."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.name} delay={index * 0.045}>
                <GlassCard className="group relative min-h-36 overflow-hidden p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                    <div
                      className={cn(
                        "grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.16)]",
                        skill.accent,
                      )}
                    >
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-white">{skill.name}</h3>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
