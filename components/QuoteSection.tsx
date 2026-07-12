"use client";

import AnimatedSection from "./AnimatedSection";

export default function QuoteSection() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="relative">
            {/* Large decorative quotation mark */}
            <span className="font-serif text-8xl md:text-9xl text-accent-gold opacity-30 absolute -top-8 -left-2 md:-left-6 select-none pointer-events-none leading-none">
              &ldquo;
            </span>

            <blockquote className="relative z-10 pl-8 md:pl-12">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-text-primary italic leading-relaxed">
                Good systems are invisible when they work, and undeniable when
                they don&apos;t.
              </p>

              <footer className="mt-8">
                <div className="divider-gold mb-6 max-w-[60px]" />
                <p className="text-accent-gold-soft text-sm tracking-[0.2em] uppercase">
                  Edward Farrel
                </p>
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
