import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TimelineSection } from "@/components/sections/timeline-section";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dimas",
  jobTitle: "Informatics Student",
  description:
    "Cybersecurity enthusiast, AI learner, and web development student building modern digital projects.",
  knowsAbout: [
    "Cybersecurity",
    "Artificial Intelligence",
    "Web Development",
    "Next.js",
    "Linux",
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
