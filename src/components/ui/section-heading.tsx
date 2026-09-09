import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mx-auto mb-12 max-w-3xl",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
