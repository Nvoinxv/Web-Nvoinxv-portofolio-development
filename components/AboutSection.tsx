"use client";

import AnimatedSection from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="divider-gold mb-16" />

        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
            About
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Background
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed max-w-3xl">
            <p>
              Software Engineer with approximately two years of experience since
              June 2024, focusing on the development of backend systems, AI-based
              automation, and trading bot integration.
            </p>
            <p>
              My work revolves around building intelligent systems that automate
              complex workflows — from processing and summarizing information
              with AI, to executing automated trading strategies across
              cryptocurrency markets.
            </p>
          </div>
        </AnimatedSection>

        <div className="divider-gold mt-16" />
      </div>
    </section>
  );
}
