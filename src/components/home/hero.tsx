"use client";

import Image from "next/image";
import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import Link from "next/link";

const ROLES = [
  "MERN Stack Developer",
  "Frontend Architecture Specialist",
  "Dashboard Systems Expert",
  "Scalable UI Architect",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-10 md:pt-0 text-foreground">

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-25 dark:opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(circle 60% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle 60% at 50% 50%, #000 30%, transparent 100%)"
        }}
      />

      {/* Primary glow behind image */}
      <div className="absolute right-[18%] top-1/2 z-0 h-115 w-115 -translate-y-1/2 bg-primary/15 dark:bg-primary/40 blur-[120px]" />
      <div className="absolute right-[14%] top-1/2 z-0 h-80 w-80 -translate-y-1/2 bg-primary/10 dark:bg-primary/30 blur-[90px]" />

      <div className="relative z-10 mx-auto grid md:min-h-screen max-w-7xl items-center gap-16 px-6 py-10 md:pt-26 md:gap-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left */}
        <div className="flex flex-col items-start justify-center text-left lg:items-start lg:text-left pt-6 lg:pt-0">
          {/* Badge with Typewriter */}
          <AnimatedSection direction="up" delay={0}>
            <div className="inline-flex items-center gap-2 border bg-muted/30 px-4 py-2 rounded-lg">
              <span className="h-2.5 w-2.5 bg-primary shadow-[0_0_14px_var(--color-primary)] animate-pulse" />
              <div className="flex items-center text-xs sm:text-sm font-medium tracking-wide text-foreground/85">
                <span>Frontend-Focused </span>
                <Typewriter 
                  texts={ROLES} 
                  className="ml-1.5 font-bold text-primary"
                  delay={80}
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Heading */}
          <div className="mt-6 space-y-1">
            <AnimatedText 
              text="Hi, I&apos;m"
              as="h1"
              className="text-[25px] font-bold leading-tight md:leading-22 text-foreground sm:text-[30px] md:text-[40px] xl:text-[50px]"
              type="words"
              staggerDelay={0.04}
              delay={0.15}
            />
            <AnimatedSection direction="up" delay={0.25}>
              <h2 className="text-[40px] font-bold leading-tight md:leading-22 sm:text-[56px] md:text-[74px] xl:text-[86px]">
                <span className="text-foreground">Nurulla </span>
                <span className="text-primary">Hasan</span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Experience & Location Badges */}
          <AnimatedSection direction="up" delay={0.35}>
            <div className="mt-6 flex flex-wrap items-center justify-start lg:justify-start gap-3">
              <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-xs font-bold text-primary tracking-wider uppercase neon-border">
                1+ Year Experience
              </div>
              <div className="px-4 py-1.5 bg-muted/50 border border-border rounded-lg text-xs font-medium text-muted-foreground">
                Dhaka, Bangladesh
              </div>
            </div>
          </AnimatedSection>

          {/* Accent line */}
          <AnimatedSection direction="up" delay={0.4} distance={30}>
            <div className="mt-6 h-1.5 w-16 bg-primary shadow-[0_0_25px_var(--color-primary)] lg:mx-0" />
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="up" delay={0.45}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-[1.38rem] md:leading-10 lg:max-w-145">
              I specialize in building API-driven web applications and 
              <span className="text-foreground font-semibold"> dashboard systems </span> 
              using React, Next.js, and TypeScript. Expert in 
              <span className="text-primary font-medium"> reusable architecture </span> 
              and modern data patterns.
            </p>
          </AnimatedSection>

          {/* Buttons */}
          <AnimatedSection direction="up" delay={0.55}>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto">
              <Button
                variant="hero"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#projects");
                  if (element) {
                    const lenisInstance = (window as unknown as LenisWindow).lenis;
                    if (lenisInstance) {
                      lenisInstance.scrollTo("#projects", {
                        offset: -80,
                        duration: 1.2,
                      });
                    } else {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                <Rocket className="mr-2 h-4 w-4" />
                View Projects
              </Button>

              <Link 
                href="/assets/RESUME.pdf" 
                target="_blank"
                download="Nurulla_Hasan_Resume.pdf"
              >
                <Button variant="nav">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Right */}
        <AnimatedSection direction="right" delay={0.2} className="relative flex h-87.5 items-end justify-center sm:h-112.5 lg:h-180 lg:justify-end">
          {/* Big faded circle */}
          <div className="rounded-full absolute right-[-2%] top-[12%] h-135 w-135" />

          <div className="relative z-10 flex h-full w-full items-end justify-center lg:justify-end">
            <motion.div
              className="relative h-full w-full max-w-155 mb-10 lg:mb-24 mask-[linear-gradient(to_bottom,white_60%,transparent_100%)] dark:mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] flex items-center justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Light Mode Avatar */}
              <Image
                src="/light-avatar.png"
                alt="Nurulla Hasan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.12)] block dark:hidden"
              />

              {/* Dark Mode Avatar */}
              <Image
                src="/without-bg.png"
                alt="Nurulla Hasan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                priority
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] hidden dark:block"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection direction="none" delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <motion.div
            className="w-px h-8 bg-linear-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [1, 0.6, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </AnimatedSection>
    </section>
  );
}