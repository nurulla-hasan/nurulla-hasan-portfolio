"use client";

import Link from "next/link";
import { Send, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-background/60 backdrop-blur-xl border border-border/50 px-8 py-3 shadow-2xl shadow-primary/5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
          <Code2 className="text-primary w-7 h-7" strokeWidth={3} />
          <span className="text-2xl font-black tracking-tighter text-foreground uppercase">
            Nurulla <span className="text-primary">Hasan</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-primary relative group/link ${
                link.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${link.active ? "w-full" : "w-0 group-hover/link:w-full"}`} />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button 
            variant="outline" 
            className="rounded-full border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8 transition-all hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4 mr-2 fill-current" />
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
