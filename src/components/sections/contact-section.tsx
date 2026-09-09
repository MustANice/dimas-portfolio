"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const contactLinks = [
  { label: "Email", href: "mailto:adhi@dindustries.my.id", value: "adhi@dindustries.my.id", icon: Mail },
  { label: "GitHub", href: "https://github.com/MustANice", value: "github.com/MustANice", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/", value: "linkedin.com", icon: Linkedin },
];

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").slice(0, 100);
    const email = String(formData.get("email") ?? "").slice(0, 100);
    const message = String(formData.get("message") ?? "").slice(0, 1000);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:adhi@dindustries.my.id?subject=Portfolio%20Contact&body=${body}`;
    setStatus("Membuka aplikasi email untuk mengirim pesan.");
  }

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Punya ide project atau ingin terhubung?"
          description="Kirim pesan singkat untuk diskusi project, kolaborasi belajar, atau peluang yang berkaitan dengan web, AI, dan cybersecurity."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="glass-panel glow-border h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Terbuka untuk berdiskusi tentang project digital, eksplorasi AI,
                keamanan web dasar, dan ide teknologi yang bisa dikembangkan
                menjadi produk nyata.
              </p>
              <div className="mt-8 grid gap-3">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <span className="grid size-11 place-items-center rounded-2xl border border-cyan-300/[0.2] bg-cyan-300/10 text-cyan-100 transition-colors group-hover:bg-cyan-300 group-hover:text-slate-950">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm text-slate-400">
                          {item.value}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-panel glow-border rounded-2xl p-6 sm:p-8"
              initial={false}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Nama
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    placeholder="Nama kamu"
                    className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-300/30 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-slate-200">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={100}
                    placeholder="nama@email.com"
                    className="min-h-12 rounded-2xl border border-white/10 bg-slate-950/60 px-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-300/30 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                  />
                </label>
              </div>

              <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
                Pesan
                <textarea
                  required
                  name="message"
                  rows={6}
                  maxLength={1000}
                  placeholder="Ceritakan ide atau pesan kamu..."
                  className="resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-base text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-cyan-300/30 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/10"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-cyan-300/[0.35] bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
              >
                <Send size={18} aria-hidden="true" />
                Send Message
              </button>
              <p className="mt-4 min-h-6 text-sm text-emerald-200" aria-live="polite">
                {status}
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
