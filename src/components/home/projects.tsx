"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";

const PROJECTS = [
  {
    title: "Wedding Marketplace & Vendor Platform",
    description:
      "A comprehensive platform featuring App Router route groups, shared UI abstractions, and vendor/user dashboard workflows. Includes smart filtering and infinite loading.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://portfolio-mu-five-k7foxti51e.vercel.app/",
    githubUrl: "https://github.com/nurulla-hasan",
  },
  {
    title: "Admin & Management Dashboard",
    description:
      "Built reusable data-heavy dashboard patterns with sortable/searchable tables, shared modals, and management modules across multiple entities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Redux Toolkit", "RTK Query"],
    liveUrl: "https://portfolio-mu-five-k7foxti51e.vercel.app/",
    githubUrl: "https://github.com/nurulla-hasan",
  },
  {
    title: "Cookbook Recipe & Meal Planner",
    description:
      "Developed modular frontend flows with protected routing, debounce-driven interactions, and reusable profile/account features.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Redux", "JavaScript", "Shadcn UI"],
    liveUrl: "https://portfolio-mu-five-k7foxti51e.vercel.app/",
    githubUrl: "https://github.com/nurulla-hasan",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 max-w-7xl mx-auto bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Selected Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore a collection of my recent work, focusing on large-scale
              dashboard systems, reusable component libraries, and full-stack
              applications built with modern tools.
            </p>
          </div>
          <Button variant="nav" className="group">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image Container */}
              <div
                className={`relative aspect-video rounded-3xl overflow-hidden border border-border bg-muted/20 ${
                  index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold tracking-widest uppercase text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="sm" className="rounded-full">
                      Live Demo <ExternalLink />
                    </Button>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="nav" size="sm" className="rounded-full">
                      Source Code <GithubIcon />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
