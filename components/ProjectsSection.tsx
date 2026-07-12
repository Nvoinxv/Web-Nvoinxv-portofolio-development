"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Discord Trading Bot",
    description:
      "Automated trading bot for BTC, ETH, and SOL, integrated with Discord as a notification and execution interface.",
    tags: ["Python", "Discord API", "Trading"],
  },
  {
    title: "AI News Summarizer",
    description:
      "AI-powered automation system for summarizing news articles automatically.",
    tags: ["Python", "AI/ML", "NLP"],
  },
  {
    title: "AI Education Automation",
    description:
      "AI automation system designed for educational purposes and learning workflows.",
    tags: ["Python", "AI/ML", "Education"],
  },
  {
    title: "AI Customer Service Chatbot",
    description:
      "AI-powered chatbot for automated customer service interactions.",
    tags: ["Python", "AI/ML", "Chatbot"],
  },
  {
    title: "AI Email Automation",
    description:
      "AI automation system for reading and processing emails automatically.",
    tags: ["Python", "AI/ML", "Automation"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-accent-gold-soft text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-16">
            Selected Projects
          </h2>
        </AnimatedSection>

        {/* TODO: expand project detail */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.title} delay={idx * 0.08}>
              <div className="group p-6 md:p-8 bg-bg-secondary border border-border rounded-[8px] hover:border-accent-gold-soft transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-text-secondary group-hover:text-accent-gold transition-colors duration-300 mt-1 shrink-0 ml-4 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs text-accent-gold-soft border border-border rounded-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
