"use client";

import Image from "next/image";
import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedText } from "@/components/ui/animated-text";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-10 md:pt-0 text-foreground">

      {/* Subtle Background Gradient - Apple/Vercel style */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/8%,transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)/12%,transparent_70%)]" />

      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 dark:opacity-[0.15] pointer-events-none"
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

      {/* Subtle glow behind image */}
      <div className="absolute right-[18%] top-1/2 z-0 h-80 w-80 -translate-y-1/2 bg-primary/8 dark:bg-primary/20 blur-[100px]" />

      <div className="relative z-10 mx-auto grid md:min-h-screen max-w-7xl items-center gap-16 px-6 py-10 md:pt-26 md:gap-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* Left */}
        <div className="flex flex-col items-start justify-center text-left lg:items-start lg:text-left pt-6 lg:pt-0">
          {/* Badge */}
          <AnimatedSection direction="up" delay={0}>
            <div className="inline-flex items-center gap-2.5 border bg-muted/20 px-4 py-2 rounded-full">
              <span className="h-2 w-2 bg-primary shadow-[0_0_10px_var(--color-primary)] animate-pulse rounded-full" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-foreground/85">
                MERN Stack Developer
              </span>
            </div>
          </AnimatedSection>

          {/* Heading */}
          <div className="mt-6 space-y-0">
            <AnimatedText 
              text="Frontend-Focused"
              as="h1"
              className="text-[40px] font-bold leading-tight md:leading-18 sm:text-[56px] md:text-[74px] xl:text-[86px]"
              type="words"
              staggerDelay={0.04}
              delay={0.15}
            />
            <AnimatedSection direction="up" delay={0.25}>
              <h2 className="text-[36px] font-bold leading-tight md:leading-20 sm:text-[50px] md:text-[66px] xl:text-[78px] mt-1">
                <span className="text-primary">MERN Stack</span>
                <span className="text-foreground"> Developer</span>
              </h2>
            </AnimatedSection>
          </div>

          {/* Location Badge */}
          <AnimatedSection direction="up" delay={0.35}>
            <div className="mt-6 flex flex-wrap items-center justify-start lg:justify-start gap-3">
              <div className="px-4 py-1.5 bg-muted/50 border border-border rounded-full text-xs font-medium text-muted-foreground">
                Dhaka, Bangladesh
              </div>
            </div>
          </AnimatedSection>

          {/* Accent line */}
          <AnimatedSection direction="up" delay={0.4} distance={30}>
            <div className="mt-6 h-1 w-12 bg-primary shadow-[0_0_20px_var(--color-primary)] lg:mx-0 rounded-full" />
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="up" delay={0.45}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg md:text-[1.38rem] md:leading-10 lg:max-w-145">
              Building <span className="text-foreground font-semibold">scalable SaaS platforms</span>,
              dashboard systems and high-performance
              web applications using <span className="text-primary font-medium">React, Next.js & TypeScript</span>.
            </p>
          </AnimatedSection>

          {/* Buttons */}
          <AnimatedSection direction="up" delay={0.55}>
            <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-start gap-4 w-full sm:w-auto">
              <Button
                variant="hero"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#featured-projects");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
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
                className="object-contain object-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.10)] block dark:hidden"
              />

              {/* Dark Mode Avatar */}
              <Image
                src="/without-bg.png"
                alt="Nurulla Hasan"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                priority
                className="object-contain object-bottom drop-shadow-[0_10px_40px_rgba(0,0,0,0.25)] hidden dark:block"
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