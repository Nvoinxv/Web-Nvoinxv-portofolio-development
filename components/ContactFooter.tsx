"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail } from "lucide-react";
import GithubIcon from "./GithubIcon";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="divider-gold mb-16" />

        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
            Contact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-text-secondary text-lg mb-12 max-w-2xl">
            Interested in working together or have a project in mind? Feel free
            to reach out.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
            {/* edwardfarrel79@gmail.com — replace with actual email before production */}
            <a
              href="mailto:edwardfarrel79@gmail.com"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors duration-300 group"
            >
              <Mail size={20} />
              <span className="text-sm tracking-wide">edwardfarrel79@gmail.com</span>
            </a>
            <a
              href="https://github.com/Nvoinxv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-text-secondary hover:text-accent-gold transition-colors duration-300 group"
            >
              <GithubIcon size={20} />
              <span className="text-sm tracking-wide">github.com/Nvoinxv</span>
            </a>
          </div>
        </AnimatedSection>

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
