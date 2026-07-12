"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="divider-gold mb-16" />

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Contact Info */}
          <div>
            <AnimatedSection>
              <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
                Contact
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-text-secondary text-lg mb-10 max-w-md leading-relaxed">
                Interested in working together or have a project in mind? Feel
                free to reach out.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-5">
                {/* PLACEHOLDER_EMAIL — replace with actual email before production */}
                <a
                  href="mailto:PLACEHOLDER_EMAIL"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  <Mail size={18} />
                  <span className="text-sm tracking-wide">
                    PLACEHOLDER_EMAIL
                  </span>
                </a>
                <a
                  href="https://github.com/Nvoinxv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors duration-300"
                >
                  <GithubIcon size={18} />
                  <span className="text-sm tracking-wide">
                    github.com/Nvoinxv
                  </span>
                </a>
                <div className="flex items-center gap-3 text-text-secondary">
                  <MapPin size={18} className="shrink-0" />
                  <span className="text-sm tracking-wide">Indonesia</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: CTA + Terminal Art */}
          <div className="flex flex-col justify-between gap-10">
            <AnimatedSection delay={0.15}>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Let&apos;s Work Together
              </h3>
              <a
                href="mailto:PLACEHOLDER_EMAIL"
                className="inline-flex items-center gap-2 px-8 py-3 bg-accent-gold text-bg-primary font-medium text-sm tracking-wide uppercase rounded-[6px] hover:bg-accent-gold-soft transition-colors duration-300"
              >
                Send a Message
                <ArrowUpRight size={16} />
              </a>
            </AnimatedSection>

            {/* Minimalist terminal / code art */}
            <AnimatedSection delay={0.2}>
              <div className="p-6 border border-border rounded-[8px] bg-bg-primary/40">
                {/* Terminal window dots */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-gold-soft/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-gold-soft/25" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-gold-soft/15" />
                  <span className="text-text-secondary text-xs ml-2 tracking-wide opacity-60">
                    terminal
                  </span>
                </div>
                {/* Terminal content */}
                <div className="font-mono text-xs text-text-secondary space-y-1.5">
                  <p>
                    <span className="text-accent-gold-soft">$</span> docker
                    build -t portfolio .
                  </p>
                  <p>
                    <span className="text-accent-gold-soft">$</span> docker run
                    -d portfolio
                  </p>
                  <p className="text-accent-gold">✓ deployed successfully</p>
                  <p>
                    <span className="text-accent-gold-soft">$</span>{" "}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs tracking-wide">
            &copy; {currentYear} Edward Farrel. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs tracking-wide opacity-50">
            Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
