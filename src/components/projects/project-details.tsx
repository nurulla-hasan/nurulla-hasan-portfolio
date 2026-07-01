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
  ArrowRight,
  Star
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { PROJECTS } from "@/lib/data";

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

  // Calculate next project
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = currentIndex !== -1 && currentIndex < PROJECTS.length - 1 
    ? PROJECTS[currentIndex + 1] 
    : PROJECTS[0]; // loop back to the first project

  // Auto-play slider
  useEffect(() => {
    if (project.screenshots && project.screenshots.length > 1) {
      const interval = setInterval(() => {
        setActiveScreenshot((prev) => (prev + 1) % project.screenshots.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.screenshots]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Back Navigation */}
        <AnimatedSection direction="down" delay={0}>
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to All Projects
          </Link>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && (
                <Link href={project.liveUrl} target="_blank">
                  <Button variant="hero" className="gap-2 shadow-[0_0_20px_rgba(var(--color-primary),0.3)]">
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              )}
              <Link href={project.githubUrl} target="_blank">
                <Button variant="nav" className="gap-2">
                  <GithubIcon className="w-4 h-4" /> Source
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Info Meta Bar */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center gap-6 md:gap-12 p-6 border border-border bg-muted/10 rounded-2xl mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Role</p>
                <p className="font-semibold text-foreground">{project.role}</p>
              </div>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
                <p className="font-semibold text-foreground">{project.duration}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Screenshots Slider */}
        <AnimatedSection direction="up" delay={0.2} className="mb-20">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-muted/20 premium-shadow group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreenshot}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={project.screenshots[activeScreenshot] || project.image}
                  alt={`${project.title} Screenshot ${activeScreenshot + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail Navigation */}
            {project.screenshots && project.screenshots.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 bg-background/50 backdrop-blur-md rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.screenshots.map((ss, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`relative w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                      activeScreenshot === index 
                        ? "border-primary opacity-100 scale-110 shadow-[0_0_15px_rgba(var(--color-primary),0.5)]" 
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={ss}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Features & Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Key Features */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="p-8 border border-border bg-muted/10 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
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
            <div className="p-8 border border-border bg-muted/10 rounded-2xl h-full">
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

        {/* Bottom CTA & Next Project */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 border border-border bg-muted/10 rounded-2xl gap-6">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Interested in this project?</h3>
                <p className="text-sm text-muted-foreground">Check it out live or explore the source code.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank">
                    <Button variant="hero">
                      Live <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                )}
                <Link href={project.githubUrl} target="_blank">
                  <Button variant="nav">
                    Code <GithubIcon className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Behance-Style Next Project Button */}
            {nextProject && (
              <Link href={`/projects/${nextProject.id}`} className="block group">
                <div className="relative p-10 md:p-16 border border-border bg-background rounded-2xl overflow-hidden flex flex-col items-center text-center transition-all duration-500 hover:border-primary/50">
                  {/* Subtle Background Image of Next Project */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Image 
                      src={nextProject.image} 
                      alt="Next Project Background" 
                      fill 
                      className="object-cover blur-sm"
                    />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase text-muted-foreground group-hover:text-primary transition-colors mb-4 flex items-center gap-2">
                      Next Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-primary/50 transition-all duration-500">
                      {nextProject.title}
                    </h3>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
