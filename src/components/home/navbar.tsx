"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-background/60 backdrop-blur-xl border border-border/50 px-8 py-3 shadow-2xl shadow-primary/5">
        {/* Logo */}
        <Link href="/" className="group relative flex items-center justify-center transition-all duration-300 hover:scale-110 shrink-0">
          <Image 
            src="/logo.png" 
            alt="Nurulla Hasan Logo" 
            width={44} 
            height={44} 
            priority
            className="object-contain"
            style={{ height: 'auto' }}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0] + "/"));
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-primary relative group/link ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover/link:w-full"}`} />
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <ModeToggle />
          <Button 
            variant="hero" 
            className="transition-all rounded-full"
          >
            <Send className="w-4 h-4 mr-2 fill-current" />
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
}
