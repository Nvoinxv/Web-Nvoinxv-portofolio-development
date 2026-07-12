"use client";

import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Dart", "C++", "TypeScript"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    description: "Memahami requirement & goal sistem",
  },
  {
    num: "02",
    title: "Architect",
    description: "Merancang struktur data & sistem",
  },
  {
    num: "03",
    title: "Build",
    description: "Implementasi dengan stack terkait (Python/Dart/C++/TypeScript)",
  },
  {
    num: "04",
    title: "Deploy",
    description: "Containerization via Docker",
  },
  {
    num: "05",
    title: "Maintain",
    description: "Monitoring & iterasi",
  },
];

export default function SkillsProcessSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-16">
            Skills &amp; Process
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column: Skills */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="font-serif text-xl font-bold text-text-primary mb-8">
                Tech Stack
              </h3>
            </AnimatedSection>

            <div className="space-y-8">
              {skillCategories.map((category, idx) => (
                <AnimatedSection
                  key={category.title}
                  delay={0.15 + idx * 0.08}
                >
                  <h4 className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 border border-border rounded-[6px] text-text-secondary text-sm hover:border-accent-gold-soft hover:text-text-primary transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right column: Engineering Process Timeline */}
          <div>
            <AnimatedSection delay={0.1}>
              <h3 className="font-serif text-xl font-bold text-text-primary mb-8">
                Engineering Process
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical gold hairline */}
              <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-accent-gold via-accent-gold-soft to-transparent" />

              <div className="space-y-8">
                {processSteps.map((step, idx) => (
                  <AnimatedSection
                    key={step.num}
                    delay={0.15 + idx * 0.08}
                  >
                    <div className="flex items-start gap-6 relative">
                      {/* Dot on the timeline */}
                      <div className="w-6 h-6 rounded-full border-2 border-accent-gold bg-bg-secondary shrink-0 relative z-10 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent-gold" />
                      </div>

                      {/* Step content */}
                      <div className="pb-2">
                        <span className="text-accent-gold-soft text-xs tracking-wide font-medium">
                          {step.num}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-text-primary mt-1">
                          {step.title}
                        </h4>
                        <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
