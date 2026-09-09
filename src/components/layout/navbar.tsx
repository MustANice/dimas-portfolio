"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5"
      >
        <Link
          href="#home"
          className="group inline-flex items-center gap-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Dimas portfolio home"
          onClick={() => setIsOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-full border border-cyan-300/[0.35] bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.22)] transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck size={18} aria-hidden="true" />
          </span>
          <span className="text-sm font-bold text-white">Dimas</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                  isActive &&
                    "bg-cyan-300/[0.12] text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.24)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="#contact"
          className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white/[0.12] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 lg:hidden"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-nav-menu"
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
        className={cn(
          "mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 lg:hidden",
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0 pointer-events-none",
        )}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300",
                  isActive && "bg-cyan-300/[0.12] text-cyan-100",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
