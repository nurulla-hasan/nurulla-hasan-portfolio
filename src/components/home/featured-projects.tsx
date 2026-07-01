"use client";

import Image from "next/image";
import { ExternalLink, Star, Info, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";

import { PROJECTS } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";

const FEATURED_IDS = ["mess-manager-os", "mouza-map-calculator", "mentorip"];

export function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section id="featured-projects" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 translate-x-1/3 w-125 h-125 bg-primary/10 dark:bg-primary/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader
          badge="Starred Projects"
          title="Featured"
          titleAccent="Projects"
          description="Projects that showcase my best work — from architecture to polished UI."
          link={{ href: "/projects", label: "View All Projects" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction="up"
              threshold={0.12}
              delay={index * 0.12}
              className="group relative flex flex-col border border-border bg-muted/10 rounded-2xl overflow-hidden premium-hover hover:border-primary/30 transition-all duration-500"
            >
              {/* Star Badge */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                <Star className="w-3 h-3" />
                Featured
              </div>

              {/* Image */}
              <Link href={`/projects/${project.id}`} className="relative aspect-16/10 overflow-hidden block">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <span className="text-white font-bold bg-primary/90 px-6 py-2.5 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 pt-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest uppercase text-primary/70 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-bold text-muted-foreground/60 px-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-auto">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/50">
                  {project.liveUrl && (
                    <Link href={project.liveUrl} target="_blank">
                      <Button variant="hero" className="gap-2">
                        Live <ExternalLink />
                      </Button>
                    </Link>
                  )}
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="nav" className="gap-2">
                      Details <Info />
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="nav" className="gap-2">
                      Code <GithubIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
