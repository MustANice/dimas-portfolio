import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "@fontsource/inter/latin-900.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteBackground } from "@/components/layout/site-background";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimas.dindustries.my.id"),
  title: {
    default: "Dimas | Cybersecurity & AI Portfolio",
    template: "%s | Dimas",
  },
  description:
    "Portfolio Dimas, mahasiswa informatika yang fokus pada cybersecurity, AI, web development, dan teknologi modern.",
  keywords: [
    "Dimas",
    "portfolio",
    "cybersecurity",
    "AI",
    "Next.js",
    "web development",
    "informatics student",
  ],
  authors: [{ name: "Dimas" }],
  creator: "Dimas",
  openGraph: {
    title: "Dimas | Cybersecurity & AI Portfolio",
    description:
      "Modern personal portfolio for an informatics student, cybersecurity enthusiast, and AI learner.",
    url: "https://dimas.dindustries.my.id",
    siteName: "Dimas Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dimas | Cybersecurity & AI Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas | Cybersecurity & AI Portfolio",
    description:
      "Portfolio Dimas, mahasiswa informatika yang fokus pada cybersecurity, AI, web development, dan teknologi modern.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030407",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-300 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Lewati ke konten utama
        </a>
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
