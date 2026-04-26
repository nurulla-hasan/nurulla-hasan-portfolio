"use client";

import Image from "next/image";
import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20 text-foreground">
      {/* Background glow using semantic classes */}
      <div className="absolute right-[20%] top-[20%] w-200 h-200 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute right-[30%] top-[40%] w-150 h-150 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
      <div className="absolute right-[10%] top-1/2 z-0 h-115 w-115 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
      <div className="absolute right-[14%] top-1/2 z-0 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left */}
        <div className="flex max-w-170 flex-col items-start justify-center pt-8 lg:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-4 py-2 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)]" />
            <span className="text-sm font-medium tracking-wide text-foreground/85">
              Frontend-Focused <span className="text-primary">MERN</span> Stack Developer
            </span>
          </div>

          {/* Heading */}
          <div className="mt-7 space-y-1">
            <h1 className="text-[56px] font-bold leading-[0.98] tracking-[-0.04em] text-foreground md:text-[74px] xl:text-[86px]">
              Hi, I&apos;m
            </h1>
            <h2 className="text-[56px] font-bold leading-[0.98] tracking-[-0.045em] md:text-[74px] xl:text-[86px]">
              <span className="text-foreground">Nurulla </span>
              <span className="text-primary">Hasan</span>
            </h2>
          </div>

          {/* Accent line */}
          <div className="mt-7 h-0.75 w-14 rounded-full bg-primary shadow-[0_0_18px_var(--color-primary)]" />

          {/* Description */}
          <p className="mt-8 max-w-145 text-lg leading-9 text-muted-foreground md:text-[1.38rem] md:leading-10">
            I build clean, scalable and impactful web applications
            <br className="hidden md:block" /> using{" "}
            <span className="font-medium text-primary">
              React, Next.js, TypeScript
            </span>{" "}
            and modern technologies.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="xl">
              <Rocket className="mr-2 h-4 w-4" />
              View Projects
            </Button>

            <Button variant="heroOutline" size="xl">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex h-140 items-end justify-center lg:h-180 lg:justify-end -mt-10 lg:-mt-20">
          {/* Big faded circle */}
          <div className="absolute right-[6%] top-[13%] h-135 w-135 rounded-full border border-white/10" />

          <div className="relative z-10 flex h-full w-full items-end justify-center lg:justify-end">
            <div className="relative h-full w-full max-w-155 mb-8 lg:mb-12 mask-[linear-gradient(to_bottom,black_80%,transparent_100%)]">
              <Image
                src="/without-bg.png"
                alt="Nurulla Hasan"
                fill
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