import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel glow-border rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/[0.35] hover:shadow-[0_24px_90px_rgba(34,211,238,0.14)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
