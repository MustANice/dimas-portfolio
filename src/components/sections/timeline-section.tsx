import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { timelineItems } from "@/lib/site-data";

export function TimelineSection() {
  return (
    <section id="journey" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience / Education"
          title="Learning journey yang terus bergerak."
          description="Timeline ini merangkum perjalanan belajar Dimas dari fondasi informatika, keamanan digital, eksplorasi AI, sampai membangun project nyata."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-slate-700 to-emerald-300/40 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="grid gap-8">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 1;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article
                    className={
                      isRight
                        ? "relative pl-16 sm:ml-auto sm:w-[calc(50%-2rem)] sm:pl-0"
                        : "relative pl-16 sm:mr-auto sm:w-[calc(50%-2rem)] sm:pl-0 sm:text-right"
                    }
                  >
                    <div
                      className={
                        isRight
                          ? "absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-cyan-300/[0.28] bg-slate-950 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)] sm:-left-[3.25rem]"
                          : "absolute left-0 top-1 grid size-10 place-items-center rounded-full border border-cyan-300/[0.28] bg-slate-950 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.2)] sm:-right-[3.25rem] sm:left-auto"
                      }
                    >
                      <Icon size={19} aria-hidden="true" />
                    </div>

                    <div className="glass-panel rounded-2xl p-5">
                      <p className="text-sm font-semibold text-cyan-200">{item.period}</p>
                      <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
