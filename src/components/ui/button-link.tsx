import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-cyan-300/40 bg-cyan-300 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.28)] hover:bg-cyan-200",
  secondary:
    "border-white/[0.12] bg-white/[0.08] text-white hover:border-cyan-300/[0.45] hover:bg-cyan-300/10 hover:text-cyan-100",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-white/[0.08] hover:text-white",
};

export function ButtonLink({
  children,
  className,
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
