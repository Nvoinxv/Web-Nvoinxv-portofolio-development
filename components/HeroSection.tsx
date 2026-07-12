"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[10rem] md:text-[16rem] lg:text-[20rem] font-bold text-accent-gold-soft opacity-[0.06] tracking-widest leading-none">
          ENGINEER
        </span>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-secondary" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-3 gap-12 lg:gap-16 items-center pt-32 pb-24">
        {/* Main content — left 2 cols */}
        <div className="lg:col-span-2">
          <AnimatedSection>
            <p className="font-serif text-accent-gold text-sm md:text-base tracking-[0.2em] mb-4 italic">
              Hello, I&apos;m
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-4 tracking-wide">
              Edward Farrel
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <p className="text-accent-gold-soft text-base md:text-lg tracking-[0.15em] uppercase mb-6 font-medium">
              Software Engineer
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Software Engineer with approximately two years of experience since
              June 2024, focusing on the development of backend systems,
              AI-based automation, and trading bot integration. Building
              intelligent systems that work quietly and reliably.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
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

          <AnimatedSection delay={0.3}>
            {/* Available for Freelance badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-accent-gold-soft/30 rounded-[6px]">
              <span className="w-2 h-2 bg-accent-gold rounded-full animate-pulse" />
              <span className="text-accent-gold-soft text-xs tracking-[0.15em] uppercase">
                Available for Freelance
              </span>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats block — right col */}
        <div className="lg:col-span-1">
          <AnimatedSection delay={0.3}>
            <div className="space-y-8 lg:border-l lg:border-border lg:pl-8">
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold text-accent-gold">
                  2+
                </p>
                <p className="text-text-secondary text-sm tracking-wide uppercase mt-1">
                  Years Experience
                </p>
              </div>
              <div className="divider-gold" />
              <div>
                <p className="font-serif text-4xl md:text-5xl font-bold text-accent-gold">
                  5
                </p>
                <p className="text-text-secondary text-sm tracking-wide uppercase mt-1">
                  Projects Delivered
                </p>
              </div>
              <div className="divider-gold" />
              <div>
                <p className="font-serif text-3xl md:text-4xl font-bold text-accent-gold">
                  Docker
                </p>
                <p className="text-text-secondary text-sm tracking-wide uppercase mt-1">
                  Deployment Ready
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <AnimatedSection delay={0.5}>
          <a
            href="#projects"
            className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
          >
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
