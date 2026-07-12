"use client";

import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Discord Trading Bot",
    category: "Trading Automation",
    description:
      "Automated trading bot for BTC, ETH, and SOL, integrated with Discord as a notification and execution interface.",
    tags: ["Python", "Discord API", "WebSocket"],
  },
  {
    num: "02",
    title: "AI News Summarizer",
    category: "AI Automation",
    description:
      "AI-powered automation system for summarizing news articles automatically.",
    tags: ["Python", "NLP", "AI/ML"],
  },
  {
    num: "03",
    title: "AI Education Automation",
    category: "AI Automation",
    description:
      "AI automation system designed for educational purposes and learning workflows.",
    tags: ["Python", "AI/ML", "Education"],
  },
  {
    num: "04",
    title: "AI Customer Service Chatbot",
    category: "AI Chatbot",
    description:
      "AI-powered chatbot for automated customer service interactions.",
    tags: ["Python", "AI/ML", "Chatbot"],
  },
  {
    num: "05",
    title: "AI Email Automation",
    category: "AI Automation",
    description:
      "AI automation system for reading and processing emails automatically.",
    tags: ["Python", "AI/ML", "SMTP"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
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
              <div className="group relative p-6 md:p-8 bg-bg-secondary border border-border rounded-[8px] hover:border-accent-gold-soft transition-all duration-300 h-full">
                {/* Large number */}
                <span className="font-serif text-5xl md:text-6xl font-bold text-accent-gold opacity-25 absolute top-4 right-6 group-hover:opacity-50 transition-opacity duration-300 leading-none">
                  {project.num}
                </span>

                {/* Category */}
                <span className="text-accent-gold-soft text-xs tracking-[0.2em] uppercase">
                  {project.category}
                </span>

                {/* Title + Arrow */}
                <div className="flex items-start justify-between mt-3 mb-4">
                  <h3 className="font-serif text-xl font-bold text-text-primary group-hover:text-accent-gold transition-colors duration-300 pr-14">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-text-secondary group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1"
                  />
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech tags */}
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
