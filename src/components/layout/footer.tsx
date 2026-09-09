import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Email", href: "mailto:hello@dimas.dev", icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-cyan-300/[0.15] bg-slate-950/50 px-4 py-10 shadow-[0_-1px_40px_rgba(34,211,238,0.12)] sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-sm font-semibold text-white">Dimas</p>
          <p className="mt-1 text-sm text-slate-400">
            Informatics Student | Cybersecurity Enthusiast | AI Learner
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={social.label}
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            );
          })}
        </div>
        <p className="text-sm text-slate-500">
          Copyright {new Date().getFullYear()} Dimas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
