# DESIGN CONTRACT: Dimas Adhi P. Flagship Portfolio
**Project**: Dimas Adhi P. Portfolio  
**Target Directory**: `/root/porto-dimas`  
**Stack**: Next.js 15 (App Router), React 19, Tailwind CSS v4, Framer Motion 12, Lucide React  
**UI Design Depth**: Depth 3 (Flagship / Premium Art Direction)  
**Lead Authority**: AURORA (Product Design Authority & Art Direction Director)  
**Assigned Implementer**: FRAME (Frontend Implementation & Browser Interaction Authority)  
**Assigned QA Authority**: LENS (Fleet Visual QA & Art Direction Assurance Lead)  
**Technical Verification Status**: VERIFIED BY FRAME (Native font loader confirmed, GPU compositing optimized, zero blockers)  

---

## 1. Executive Summary & Design Mandate

Following direct confirmation from owner Adhi P., this contract governs the complete transformation of `/root/porto-dimas` into an authentic adaptation of [landonorris.com](https://landonorris.com) (Awwwards Site of the Day, OFF+BRAND Studio) engineered for Dimas Adhi P.'s professional identity as a high-caliber informatics, fullstack, industrial IoT SCADA, and cybersecurity developer.

FRAME must follow these specifications strictly without regressing to default Tailwind/shadcn templates or generic cyan-glow SaaS tropes.

---

## 2. Typography Integration & Font Specifications

### 2.1 Font Stack Roles
1. **Workhorse Font (Headings, Body, Buttons, UI)**: **Mona Sans Variable** (GitHub via `next/font/google`).
   - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black).
   - Variable axes: `wght` 200–900, `wdth` 75–125.
2. **High-Contrast Editorial Accent**: **Bodoni Moda** (via `next/font/google`).
   - Weights: 400, 500 (Italic & Normal).
   - Used specifically for punch keyword highlights (e.g. *RESILIENT*, *FIGHT*, *TELEMETRY*, *ARCHITECTURES*).
3. **Telemetry & Metrology**: **JetBrains Mono** (via `next/font/google`).
   - Weights: 400, 500, 700 (Tabular Numbers, `tnum`, uppercase micro-labels).

### 2.2 Next.js Google Fonts Integration (`src/app/layout.tsx`)
```tsx
import { Mona_Sans, Bodoni_Moda, JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-accent",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${monaSans.variable} ${bodoniModa.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-bg-void text-text-primary antialiased selection:bg-accent-lime/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
```

### 2.3 Tailwind CSS v4 Theme Rules (`src/app/globals.css`)
```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-mona), -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: var(--font-mona), sans-serif;
  --font-serif-accent: var(--font-serif-accent), "Bodoni Moda", serif;
  --font-mono: var(--font-mono), "JetBrains Mono", monospace;

  /* Color System */
  --color-bg-void: #060709;
  --color-bg-base: #0B0C0E;
  --color-bg-surface: #121418;
  --color-bg-surface-elevated: #181B22;
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-active: rgba(210, 255, 0, 0.40);
  --color-text-primary: #F4F4ED;
  --color-text-secondary: #9FA4B2;
  --color-text-muted: #5E6370;
  --color-text-inverse: #0A0A0B;
  --color-accent-lime: #D2FF00;
  --color-accent-lime-muted: rgba(210, 255, 0, 0.12);
}
```

---

## 3. Background Aerodynamic Contours (CFD Streamlines)

FRAME must replace `.ambient-grid`, `.ambient-flow`, and `.scanline` in `SiteBackground` with this high-performance SVG streamline engine:

### 3.1 `src/components/layout/site-background.tsx`
```tsx
export function SiteBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg-base will-change-transform [transform:translateZ(0)]"
      aria-hidden="true"
    >
      {/* 1. Deep Atmospheric Base Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(210,255,0,0.035),transparent_45rem)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(255,255,255,0.015),transparent_35rem)]" />

      {/* 2. Aerodynamic Wind-Tunnel CFD Streamlines (SVG with non-scaling strokes and zero mix-blend penalty) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="streamline-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="45%" stopColor="#D2FF00" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="streamline-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D2FF00" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#D2FF00" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Primary Laminar Streamlines */}
        <path
          d="M-100 150 C 300 80, 650 320, 1100 180 S 1500 240, 1600 200"
          stroke="url(#streamline-grad-1)"
          strokeWidth="1.2"
          strokeDasharray="8 4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 210 C 320 140, 680 380, 1130 240 S 1520 300, 1600 260"
          stroke="url(#streamline-grad-1)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 280 C 340 210, 710 440, 1160 310 S 1540 370, 1600 330"
          stroke="url(#streamline-grad-1)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 360 C 360 290, 740 510, 1190 390 S 1560 450, 1600 410"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 460 C 380 390, 770 600, 1220 480 S 1580 540, 1600 500"
          stroke="url(#streamline-grad-2)"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 580 C 400 510, 800 700, 1250 590 S 1600 650, 1600 610"
          stroke="rgba(210, 255, 0, 0.08)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M-100 720 C 430 650, 840 820, 1290 710 S 1620 770, 1600 730"
          stroke="rgba(255, 255, 255, 0.04)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />

        {/* Topographic Contour Rings */}
        <ellipse cx="1200" cy="180" rx="380" ry="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <ellipse cx="1200" cy="180" rx="260" ry="100" stroke="rgba(210,255,0,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        <ellipse cx="1200" cy="180" rx="140" ry="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}
```

---

## 4. Component Specifications

### 4.1 Floating Perimeter Command Header (`Navbar`)
- **Structure**: Floating island capsule anchored at `fixed top-4 inset-x-4 max-w-6xl mx-auto z-50`.
- **Background**: `bg-surface/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.4)]`.
- **Left Cluster**:
  - Wordmark: `DIMAS ADHI` (Mona Sans 800 Bold, uppercase, `text-sm tracking-tight text-text-primary`).
  - Stencil Monogram Badge: `DA//04` (`px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[10px] text-accent-lime tracking-widest`).
- **Center Navigation Links (Desktop)**:
  - Links: `[01 // DISPATCH]`, `[02 // DUAL-MODE]`, `[03 // TECH ARSENAL]`, `[04 // JOURNEY]`, `[05 // CONTACT]`.
  - Font: JetBrains Mono 500, `text-xs uppercase tracking-wider text-text-secondary hover:text-accent-lime transition-colors`.
- **Right Action Cluster**:
  - **High-Visibility Solid Volt Lime `#D2FF00` Pill CTA Button**:
    - Text: `CV DOSSIER` + Download icon.
    - Style: `bg-accent-lime text-text-inverse font-mono font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:shadow-[0_0_24px_rgba(210,255,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all`.
  - Mobile Menu Toggle: Pill button with 2 minimal horizontal bars.

---

### 4.2 Hero Section & Perimeter HUD (`HeroSection`)
- **Layout**: Asymmetric full-bleed hero (`min-h-svh pt-32 pb-20 px-4 sm:px-8 max-w-6xl mx-auto flex flex-col justify-between`).
- **Perimeter HUD Widget Responsiveness**:
  - Desktop (`lg:fixed lg:bottom-8 lg:left-8 z-40`): Floating perimeter HUD telemetry card.
  - Mobile (`<1024px`): Renders inline directly beneath the Hero CTAs to prevent obstructing touch targets.
  - Structure:
    * Micro-Header: `[SYSTEM STATUS // 2026]` (Mono 10px tracking-[0.2em] text-accent-lime).
    * Telemetry Readouts:
      - `NODE: DIMAS // INDUSTRIAL & FULLSTACK`
      - `KERNEL: LINUX x86_64 / CLOUDFLARE SECURE`
      - `DISPATCH: READY // CONTRACT & RESEARCH`
    * Insignia: Circuit trace outline with status pulse.
- **Main Hero Headline**:
  ```tsx
  <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-text-primary leading-[1.05]">
    ENGINEERING{" "}
    <span className="font-serif-accent italic font-normal text-accent-lime">
      RESILIENT
    </span>{" "}
    DIGITAL SYSTEMS.
  </h1>
  ```
- **Editorial Sub-headline**:
  - `max-w-2xl text-base sm:text-lg leading-relaxed text-text-secondary mt-6 font-sans`:
    *"Mahasiswa Informatika, Fullstack Software Engineer, dan Pengembang IoT SCADA Industri. Mengintegrasikan keandalan protokol real-time, arsitektur Next.js modern, dan riset pertahanan siber."*
- **Call-to-Action Group**:
  - Primary CTA: Solid Volt Lime `#D2FF00` pill button (`GET IN TOUCH` / Mail Icon).
  - Secondary CTA: Outline hairline pill button (`VIEW REEL // CODE & LAB` / ArrowDown Icon).

---

### 4.3 Dual-Mode Architecture ("ON CODE" vs "IN LAB") (`ProjectsSection`)
FRAME must implement the central interactive feature adapting Lando's "ON TRACK" vs "OFF TRACK":

#### Dual-Mode Controller:
- Kinetic segmented pill toggle with Framer Motion spring indicator:
  ```tsx
  <div
    role="tablist"
    aria-label="Portfolio Engineering Mode"
    className="relative inline-flex p-1.5 rounded-full bg-surface-elevated border border-white/10"
  >
    <button
      role="tab"
      id="tab-code"
      aria-controls="panel-projects"
      aria-selected={mode === "code"}
      onClick={() => setMode("code")}
      className={cn(
        "relative z-10 px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200",
        mode === "code" ? "text-text-inverse" : "text-text-secondary hover:text-text-primary"
      )}
    >
      [01 // ON CODE]
      {mode === "code" && (
        <motion.div
          layoutId="active-mode-pill"
          className="absolute inset-0 -z-10 rounded-full bg-accent-lime shadow-[0_0_20px_rgba(210,255,0,0.35)]"
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
        />
      )}
    </button>
    <button
      role="tab"
      id="tab-lab"
      aria-controls="panel-projects"
      aria-selected={mode === "lab"}
      onClick={() => setMode("lab")}
      className={cn(
        "relative z-10 px-6 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200",
        mode === "lab" ? "text-text-inverse" : "text-text-secondary hover:text-text-primary"
      )}
    >
      [02 // IN LAB]
      {mode === "lab" && (
        <motion.div
          layoutId="active-mode-pill"
          className="absolute inset-0 -z-10 rounded-full bg-accent-lime shadow-[0_0_20px_rgba(210,255,0,0.35)]"
          transition={{ type: "spring", stiffness: 450, damping: 35 }}
        />
      )}
    </button>
  </div>
  ```

#### Mode Content Mapping:
- **`ON CODE` Mode**:
  1. **Wedding Invitation Platform**: Fullstack digital invitation platform (TypeScript, Fastify, Drizzle ORM, SQLite, SSE real-time RSVP, QR kiosk check-in).
  2. **Cybersecurity Incident Dashboard**: Live network telemetry, attack surface analysis, and traffic monitoring (Next.js 15, Recharts, Packet Inspection).
  3. **Worm Games (Modern Arcade)**: High-performance HTML5 Canvas arcade game with custom collision math and reactive audio synthesizers.
- **`IN LAB` Mode**:
  1. **Smart Oil Tracker (SCADA IoT)**: Industrial SCADA IoT fleet monitoring with 10Hz MQTT telemetry, GPS anti-theft sensors, and live fuel volume tracking.
  2. **Linux Hardening & Packet Inspection**: Kernel tuning, zero-trust network segmentation, Cloudflare Tunnel deployment, and SAST automated triage pipelines.
  3. **Autonomous AI Multi-Agent Fleet**: Multi-agent orchestration engine with parallel tool execution, SSE log streams, and task graph governance.

---

### 4.4 Modular Showcase Cards with Notched Tab Badges
- **Card Shell Architecture (Anti-Clipping Invariant)**:
  Container uses `rounded-3xl bg-surface border border-white/10 flex flex-col transition-all duration-300 hover:border-white/20 hover:-translate-y-1`.
  Top visual media uses `rounded-t-3xl overflow-hidden`.
  Bottom card body uses `p-6 flex-1 flex flex-col justify-between`.
- **The Protruding Notched Tab Badge**:
  Positioned docked at the bottom of the card body:
  ```tsx
  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
    <div className="inline-flex items-center gap-2 rounded-t-lg bg-surface-elevated border-t border-x border-white/15 px-3 py-1 font-mono text-[10px] tracking-widest text-accent-lime uppercase shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <span className="inline-block size-1.5 rounded-full bg-accent-lime animate-pulse" />
      {project.year} // {project.category}
    </div>
    <div className="flex items-center gap-3">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-xs text-text-secondary hover:text-white transition-colors"
          aria-label={`Source code for ${project.title}`}
        >
          SOURCE
        </a>
      )}
      <a
        href={project.href}
        target={project.href.startsWith("http") ? "_blank" : undefined}
        rel={project.href.startsWith("http") ? "noreferrer" : undefined}
        className="font-mono text-xs font-bold text-text-primary hover:text-accent-lime uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
      >
        LIVE DEMO <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  </div>
  ```

---

### 4.5 Technical Arsenal (`SkillsSection`)
- Grouped into 4 technical quadrants:
  1. **Fullstack Core**: Next.js 15, TypeScript, React 19, Tailwind CSS v4, Fastify, Drizzle ORM.
  2. **Industrial IoT & SCADA**: MQTT Broker, Socket.IO, GPS Fleet Sensors, Node.js Microservices.
  3. **Linux & Infrastructure**: Debian/Ubuntu Server, Docker Containers, Systemd Daemons, Cloudflare Tunnels.
  4. **Security & AI Operations**: Packet Inspection, SAST Triage, Git Branch Hardening, Multi-Agent AI Pipelines.
- Each skill features an engineering telemetry badge (`STABLE`, `READY`, `ACTIVE RESEARCH`).

---

### 4.6 Contoured Dark Footer (`Footer`)
- **Top Contour Arch**:
  - `relative w-full rounded-t-[40px] md:rounded-t-[64px] bg-surface-elevated border-t border-white/15 pt-16 pb-16 px-6 lg:px-16 overflow-hidden mt-24`.
- **Component 1: Kinetic Typographic Infinite Marquee**:
  - Height: `py-6 border-b border-white/10 select-none overflow-hidden`.
  - Text: `"ENGINEERING RESILIENT DIGITAL ARCHITECTURES. // FULLSTACK & CYBERSECURITY // "`.
  - Typography: Mona Sans 900 Black, uppercase, `text-4xl sm:text-6xl md:text-7xl tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:[-webkit-text-stroke:1px_#D2FF00] transition-colors`.
- **Component 2: Watermark Stencil Monogram Centerpiece**:
  - Centered watermark in background: `DA//04` rendered at `clamp(6rem, 20vw, 16rem)` in font-black `text-white/[0.03] pointer-events-none select-none`.
  - Foreground Identity:
    * `DIMAS // ADHI P.` (Mona Sans 800, `text-2xl sm:text-3xl tracking-tight text-text-primary`).
    * Monospace subtitle: `INFORMATICS STUDENT // CYBER DEFENSE // FULLSTACK SYSTEMS`.
- **Component 3: Three-Column Structured Index**:
  - **Column 1 (PAGES)**: Section jump anchor links (`[01 // HERO]`, `[02 // DUAL-MODE SHOWCASE]`, `[03 // TECH ARSENAL]`, `[04 // JOURNEY]`, `[05 // CONTACT]`).
  - **Column 2 (SIGNATURE & STATUS)**:
    * Monogram signature badge `DA//04`.
    * Location: `INDONESIA / UTC+7`.
    * Status: `DISPATCH READY // AVAILABLE FOR RESEARCH & ENGINEERING`.
  - **Column 3 (CONNECT)**:
    * Email: `adhi@dindustries.my.id` (with copy-to-clipboard or mailto).
    * GitHub: `github.com/MustANice`.
    * LinkedIn & Instagram.
    * Back to Top Pill Button (`TOP ↑` in JetBrains Mono).

---

## 5. Acceptance Criteria & Quality Gate

FRAME must fulfill all 8 acceptance criteria before handing off build artifacts to LENS for QA:

- [ ] **AC-1 (Workhorse Typography)**: Mona Sans Variable loaded and applied across all headers, body copy, and UI controls; zero fallback to standard unconfigured Inter.
- [ ] **AC-2 (Editorial Serif Accent)**: Keyword accents (e.g. *RESILIENT*, *FIGHT*, *TELEMETRY*) rendered in high-contrast editorial italic serif font (`Bodoni Moda`).
- [ ] **AC-3 (Aerodynamic CFD Streamlines)**: Background consists of SVG wind-tunnel CFD streamlines with non-scaling strokes and optimized alpha strokes; legacy dot-grid and cyan scanlines are 100% removed.
- [ ] **AC-4 (Dual-Mode Architecture)**: "ON CODE" vs "IN LAB" interactive segmented switcher functioning with kinetic spring transition, proper ARIA roles, and correct project filtering.
- [ ] **AC-5 (Modular Cards with Notched Tabs)**: Cards feature hairline borders and protruding bottom notched tab badges indicating year & category without clipping.
- [ ] **AC-6 (Volt Lime Solid Pill CTA)**: Primary actions ("CV DOSSIER", "GET IN TOUCH") styled as solid Volt Lime `#D2FF00` pill buttons with black text.
- [ ] **AC-7 (Contoured Dark Footer)**: Footer card features organic curved arch top (`rounded-t-[40px] md:rounded-t-[60px]`), dual slogan marquee, watermark monogram `DA//04`, and 3-column index.
- [ ] **AC-8 (Mobile Responsive Integrity)**: Clean viewport rendering on 320px, 375px, 390px, and 428px with zero horizontal scroll leaks (`document.documentElement.scrollWidth === window.innerWidth`).
