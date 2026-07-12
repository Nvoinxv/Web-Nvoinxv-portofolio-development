"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-6">
            Software Engineer
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-6 tracking-wide">
            Edward Farrel
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems — from AI automation and trading bots
            to robust backend architectures.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent-gold text-bg-primary font-medium text-sm tracking-wide uppercase rounded-[6px] hover:bg-accent-gold-soft transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-text-secondary font-medium text-sm tracking-wide uppercase rounded-[6px] hover:border-accent-gold hover:text-accent-gold transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <AnimatedSection delay={0.5}>
          <a href="#about" className="text-text-secondary hover:text-accent-gold transition-colors duration-300">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
