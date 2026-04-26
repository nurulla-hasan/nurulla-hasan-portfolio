"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Betopia Group",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh (On-site)",
    duration: "March 2025 – Present",
    description: "Leading frontend development for complex web applications and dashboard systems, focusing on scalability and reusable architecture.",
    achievements: [
      "Built reusable frontend abstractions including custom hooks, data tables, modal systems, and shared layout components to standardize UI patterns.",
      "Developed scalable filtering and data-loading solutions with URL-synced search state, debounced updates, and infinite-loading patterns.",
      "Implemented advanced features such as authenticated flows, protected routing, rich-text editing, and backend-integrated validated forms."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-7xl mx-auto bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary" />
            Career Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h3>
        </div>

        <div className="max-w-4xl">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-border pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-0 w-4.5 h-4.5 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--color-primary),0.5)]" />
              
              <div className="group relative p-8 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-muted/30">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      {exp.role}
                    </h4>
                    <p className="text-lg font-semibold text-foreground/80 mt-1">{exp.company}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-colors group-hover:bg-primary/2 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
