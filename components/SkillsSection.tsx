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

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
            Expertise
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-16">
            Tech Stack
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={category.title} delay={idx * 0.1}>
              <h3 className="text-accent-gold text-sm tracking-[0.2em] uppercase mb-6 font-medium">
                {category.title}
              </h3>
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
    </section>
  );
}
