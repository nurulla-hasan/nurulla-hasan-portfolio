"use client";

import Image from "next/image";
import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";

const ROLES = [
  "MERN Stack Developer",
  "Frontend Architecture Specialist",
  "Dashboard Systems Expert",
  "Scalable UI Architect",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-10 md:pt-0 text-foreground">
      {/* Background glow using semantic classes */}
      <div className="absolute right-[20%] top-[20%] w-200 h-200 bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute right-[30%] top-[40%] w-150 h-150 bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Soft noise / vignette feel */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background opacity-80 pointer-events-none" />

      {/* Curved lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-60 text-primary"
        viewBox="0 0 1600 900"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M980 120C1120 100 1270 135 1390 260C1480 355 1520 470 1500 620"
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <path
          d="M845 655C930 555 1035 500 1180 495C1320 490 1440 540 1545 650"
          stroke="currentColor"
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="1475" cy="225" r="4.5" fill="currentColor" fillOpacity="0.95" />
        <circle cx="940" cy="635" r="4.5" fill="currentColor" fillOpacity="0.95" />
      </svg>

      {/* Dot pattern */}
      <div className="absolute right-[9%] top-[18%] z-0 h-24 w-20 opacity-50">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: "radial-gradient(color-mix(in srgb, var(--color-primary) 70%, transparent) 1.2px, transparent 1.2px)",
            backgroundSize: "14px 14px",
          }}
        />
      </div>

      {/* Primary glow behind image */}
      <div className="absolute right-[10%] top-1/2 z-0 h-115 w-115 -translate-y-1/2 bg-primary/25 blur-[120px]" />
      <div className="absolute right-[14%] top-1/2 z-0 h-80 w-80 -translate-y-1/2 bg-primary/15 blur-[90px]" />

      <div className="relative z-10 mx-auto grid md:min-h-screen max-w-7xl items-center gap-16 px-6 py-10 md:pt-26 md:gap-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left */}
        <div className="flex flex-col items-start justify-center text-left lg:items-start lg:text-left pt-6 lg:pt-0">
          {/* Badge with Typewriter */}
          <div className="inline-flex items-center gap-2 border border-border bg-muted/30 px-4 py-2 backdrop-blur-md">
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

          {/* Heading */}
          <div className="mt-6 md:mt-8 space-y-1">
            <h1 className="text-[40px] font-bold leading-tight md:leading-22 text-foreground sm:text-[56px] md:text-[74px] xl:text-[86px]">
              Hi, I&apos;m
            </h1>
            <h2 className="text-[40px] font-bold leading-tight md:leading-22 sm:text-[56px] md:text-[74px] xl:text-[86px]">
              <span className="text-foreground">Nurulla </span>
              <span className="text-primary">Hasan</span>
            </h2>
          </div>

          {/* Experience & Location Badges */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-start lg:justify-start gap-3">
            <div className="px-4 py-1.5 bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-wider uppercase neon-border">
              1+ Year Experience
            </div>
            <div className="px-4 py-1.5 bg-muted/50 border border-border text-xs font-medium text-muted-foreground">
              Dhaka, Bangladesh
            </div>
          </div>

          {/* Accent line */}
          <div className="mt-6 md:mt-8 h-1.5 w-16 bg-primary shadow-[0_0_25px_var(--color-primary)] lg:mx-0" />

          {/* Description */}
          <p className="mt-6 md:mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-[1.38rem] md:leading-10 lg:max-w-145">
            I specialize in building API-driven web applications and 
            <span className="text-foreground font-semibold"> dashboard systems </span> 
            using React, Next.js, and TypeScript. Expert in 
            <span className="text-primary font-medium"> reusable architecture </span> 
            and modern data patterns.
          </p>

          {/* Buttons */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto">
            <Button variant="hero" >
              <Rocket className="mr-2 h-4 w-4" />
              View Projects
            </Button>

            <Button variant="nav">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex h-87.5 items-end justify-center sm:h-112.5 lg:h-180 lg:justify-end">
          {/* Big faded circle */}
          <div className="rounded-full absolute right-[-2%] top-[12%] h-135 w-135 border" />

          <div className="relative z-10 flex h-full w-full items-end justify-center lg:justify-end">
            <div className="relative h-full w-full max-w-155 mb-10 lg:mb-24 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] md:rounded-full">
              <Image
                src="/without-bg.png"
                alt="Nurulla Hasan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                priority
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}