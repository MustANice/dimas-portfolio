"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { socialLinks } from "@/lib/site-data";

const typingWords = ["Cybersecurity Enthusiast", "AI Learner", "Web Developer"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = typingWords[wordIndex];
  const visibleWord = useMemo(
    () => currentWord.slice(0, visibleCharacters),
    [currentWord, visibleCharacters],
  );

  useEffect(() => {
    const isComplete = visibleCharacters === currentWord.length;
    const isEmpty = visibleCharacters === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 38 : 72;

    const timeout = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && isEmpty) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % typingWords.length);
        return;
      }

      setVisibleCharacters((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [currentWord.length, isDeleting, visibleCharacters]);

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/[0.24] bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.16)]">
            <Sparkles size={16} aria-hidden="true" />
            Modern cybersecurity and AI portfolio
          </div>

          <h1 className="text-5xl font-black text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Dimas
            </span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
            Informatics Student |{" "}
            <span
              className="typing-caret text-cyan-200"
              aria-label="Cybersecurity Enthusiast, AI Learner, Web Developer"
            >
              <span aria-hidden="true">{visibleWord}</span>
            </span>
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Saya mahasiswa informatika yang tertarik pada cybersecurity, AI, web
            development, dan teknologi modern. Saya suka membangun project digital
            dan terus belajar perkembangan teknologi terbaru.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/dimas-cv.txt" download="Dimas-CV.txt" variant="primary">
              <Download size={18} aria-hidden="true" />
              Download CV
            </ButtonLink>
            <ButtonLink href="#contact">
              <Mail size={18} aria-hidden="true" />
              Contact Me
            </ButtonLink>
            <ButtonLink href="#projects" variant="ghost">
              <Rocket size={18} aria-hidden="true" />
              View Projects
            </ButtonLink>
          </div>

          <div className="mt-8 flex items-center gap-3" aria-label="Social links">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          {/* Outer glow */}
          <div className="absolute -inset-10 rounded-full bg-cyan-300/[0.07] blur-3xl" />
          <div className="absolute -inset-6 rounded-full bg-emerald-300/[0.05] blur-2xl" />

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-18px] rounded-full border border-dashed border-cyan-300/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-36px] rounded-full border border-dashed border-emerald-300/10"
          />

          {/* Photo container */}
          <div className="relative">
            {/* Glowing border ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-br from-cyan-300 via-emerald-300 to-cyan-500 opacity-60 blur-[2px]" />
            <div className="relative overflow-hidden rounded-full border-[3px] border-white/10 shadow-[0_0_60px_rgba(34,211,238,0.25)]" style={{ width: 300, height: 300 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/dimas-photo.jpg"
                alt="Foto formal Dimas"
                className="h-full w-full object-cover object-top"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
          </div>

          {/* Floating badge - top right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -right-4 top-6 flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-900/90 px-3 py-2 shadow-lg backdrop-blur-md"
          >
            <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-cyan-100">Open to work</span>
          </motion.div>

          {/* Floating badge - bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-full border border-emerald-300/20 bg-slate-900/90 px-3 py-2 shadow-lg backdrop-blur-md"
          >
            <ShieldCheck size={14} className="text-emerald-300" />
            <span className="text-xs font-semibold text-slate-200">Cybersecurity</span>
          </motion.div>

          {/* Floating badge - bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-4 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-3 py-2 shadow-lg backdrop-blur-md"
          >
            <Sparkles size={14} className="text-yellow-300" />
            <span className="text-xs font-semibold text-slate-200">AI Learner</span>
          </motion.div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll ke bagian about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.05] p-3 text-slate-300 transition-all hover:-translate-y-1 hover:border-cyan-300/40 hover:text-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:grid"
      >
        <ArrowDown size={18} aria-hidden="true" />
      </Link>
    </section>
  );
}
