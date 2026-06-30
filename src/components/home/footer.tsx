"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GithubIcon, LinkedinIcon, XIcon, InstagramIcon } from "@/components/ui/icons";
import Link from "next/link";

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/nurulla-hasan", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/nurulla-hasan", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    const lenisInstance = (window as unknown as LenisWindow).lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary/5 py-8 border-t border-border relative">
      <AnimatedSection direction="none" delay={0.1}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-lg border border-border bg-primary/5 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground font-medium text-sm">
              © {new Date().getFullYear()} Nurulla Hasan. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
