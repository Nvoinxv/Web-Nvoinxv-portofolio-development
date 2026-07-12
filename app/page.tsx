"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsProcessSection from "@/components/SkillsProcessSection";
import QuoteSection from "@/components/QuoteSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsProcessSection />
        <QuoteSection />
        <ContactFooter />
      </main>
    </>
  );
}
