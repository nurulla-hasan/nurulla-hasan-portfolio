"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Calendar, 
  User,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface ProjectDetailsProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl: string;
    role: string;
    duration: string;
    features: string[];
    challenges: string[];
    screenshots: string[];
  };
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Auto-play slider
  useEffect(() => {
    if (project.screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setActiveScreenshot((prev) =>
        prev === project.screenshots.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [project.screenshots.length]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-0 w-[30%] h-[30%] bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        {/* Back Navigation */}
        <AnimatedSection direction="up" delay={0}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-xs font-bold uppercase tracking-widest mb-12"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="mb-16">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold tracking-widest uppercase text-primary/80 bg-primary/5 px-3 py-1.5 rounded-md border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground mb-6">
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <User className="w-4 h-4 text-primary" />
                {project.role}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                <Calendar className="w-4 h-4 text-primary" />
                {project.duration}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mb-10">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <Button variant="hero">
                    Live Preview <ExternalLink />
                  </Button>
                </Link>
              )}
              <Link href={project.githubUrl} target="_blank">
                <Button variant="nav">
                  Source Code <GithubIcon />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Screenshot Gallery */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Screenshots
              </h2>
            </div>

            {/* Main Screenshot */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted/10 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScreenshot}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={project.screenshots[activeScreenshot]}
                    alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Strip (only if multiple screenshots) */}
            {project.screenshots.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.screenshots.map((ss, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeScreenshot === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-border opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={ss}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Features & Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Key Features */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="p-8 border border-border bg-muted/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Key Features</h3>
              </div>
              <StaggerContainer direction="up" staggerDelay={0.06} className="space-y-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Technical Challenges */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="p-8 border border-border bg-muted/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Technical Challenges</h3>
              </div>
              <StaggerContainer direction="up" staggerDelay={0.06} className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Tech Stack */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                Tech Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary/5 border border-primary/15 rounded-xl text-sm font-bold text-primary/80 uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex items-center justify-between p-8 border border-border bg-muted/10 rounded-2xl">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Interested in this project?</h3>
              <p className="text-sm text-muted-foreground">Check it out live or explore the source code.</p>
            </div>
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <Button variant="hero">
                    Live <ExternalLink />
                  </Button>
                </Link>
              )}
              <Link href={project.githubUrl} target="_blank">
                <Button variant="nav">
                  Code <GithubIcon />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
