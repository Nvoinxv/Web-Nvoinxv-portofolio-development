"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import GithubIcon from "./GithubIcon";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl font-bold text-text-primary hover:text-accent-gold transition-colors duration-300"
        >
          Edward Farrel
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-accent-gold transition-colors duration-300 text-sm tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Nvoinxv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary hover:text-accent-gold transition-colors duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-primary/98 backdrop-blur-md border-t border-border">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-secondary hover:text-accent-gold transition-colors duration-300 text-sm tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Nvoinxv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-gold transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
