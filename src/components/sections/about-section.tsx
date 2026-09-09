import { BrainCircuit, Code2, Cpu, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const focusAreas = [
  {
    title: "Cybersecurity Mindset",
    description:
      "Memahami cara sistem bekerja, mengenali risiko, dan membangun kebiasaan digital yang lebih aman.",
    icon: ShieldCheck,
  },
  {
    title: "AI Exploration",
    description:
      "Belajar cara AI membantu workflow, produk digital, eksperimen web, dan pemecahan masalah teknis.",
    icon: BrainCircuit,
  },
  {
    title: "Modern Web",
    description:
      "Membangun interface yang bersih, cepat, responsif, dan nyaman digunakan di berbagai perangkat.",
    icon: Code2,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Membangun skill teknologi dengan rasa ingin tahu dan disiplin."
          description="Fokus Dimas ada di irisan cybersecurity, AI, dan web development: belajar fondasi teknis, membuat project nyata, lalu mengubah ide menjadi pengalaman digital yang rapi."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <GlassCard className="h-full p-6 sm:p-8">
              {/* Profile Photo */}
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-[2px] rounded-full bg-gradient-to-br from-cyan-300 via-emerald-300 to-cyan-500 opacity-50 blur-[2px]" />
                  <div className="relative overflow-hidden rounded-full border-2 border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]" style={{ width: 100, height: 100 }}>
                    <Image
                      src="/dimas-photo.jpg"
                      alt="Foto Dimas"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8 inline-grid size-14 place-items-center rounded-2xl border border-cyan-300/[0.24] bg-cyan-300/10 text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.16)]">
                <Cpu size={26} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Introduction</h3>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Saya mahasiswa informatika yang senang mengeksplorasi teknologi
                modern dan membangun project digital. Saya percaya portfolio yang
                baik bukan hanya terlihat menarik, tetapi juga jelas, cepat, mudah
                diakses, dan punya fondasi engineering yang kuat.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ["Focus", "Security"],
                  ["Mode", "Learning"],
                  ["Stack", "Next.js"],
                  ["Goal", "Impact"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <p className="text-xs font-medium uppercase text-slate-500">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid gap-5">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal key={area.title} delay={index * 0.08}>
                  <GlassCard className="p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-cyan-300/[0.22] bg-cyan-300/10 text-cyan-100">
                        <Icon size={23} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{area.title}</h3>
                        <p className="mt-3 text-base leading-7 text-slate-300">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
