import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer } from "@/components/ui/stagger-container";

const EXPERIENCES = [
  {
    company: "Sparktech Agency",
    role: "Junior Frontend Developer",
    location: "Dhaka, Bangladesh (On-site)",
    duration: "March 2025 – Present",
    description: "Serve as the sole frontend developer across multiple client products, building production websites and role-based dashboards from requirement analysis to delivery.",
    achievements: [
      <span key="build">Build reusable, API-driven interfaces for dashboards, complex forms, data tables, authentication, and <span className="text-primary font-medium">role-based workflows</span> using Next.js, React, TypeScript, and modern state-management tools.</span>,
      <span key="utils">Developed reusable <span className="text-primary font-medium">useNextFilter</span> and <span className="text-primary font-medium">nextServerFetch</span> utilities to standardize URL-synced filtering, debounced navigation, authentication, request handling, and consistent API error management across projects.</span>,
      <span key="implement">Implement and maintain <span className="text-primary font-medium">real-time chat</span>, CRUD and CMS workflows, QR-based access, maps, file uploads, dynamic metadata, route protection, and responsive interfaces.</span>,
      <span key="collab">Collaborate with backend developers and stakeholders to turn business requirements into practical, maintainable, and user-friendly frontend solutions.</span>
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Zustand", "TanStack Query", "TanStack Table", "React Hook Form", "Zod"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-background overflow-hidden">
      {/* Background Decorative Glow - Positioned to the right for visual variety */}
      <div className="absolute top-[15%] right-[5%] w-100 h-100 bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Career Path"
          title="Professional"
          titleAccent="Experience"
          description="My professional journey is focused on building production-ready websites, reusable frontend systems, and role-based dashboards for real-world client products."
        />

        <div className="max-w-4xl">
          {EXPERIENCES.map((exp) => (
            <AnimatedSection
              key={exp.company}
              direction="left"
              threshold={0.15}
              className="relative pl-8 md:pl-12 border-l border-border pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-2.25 top-0 w-4.5 h-4.5 bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--color-primary),0.5)]" />
              
              <div className="group relative p-8 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30">
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
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <StaggerContainer direction="up" staggerDelay={0.08} className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/80 text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </StaggerContainer>

                {/* Tech Stack Tags */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/5 border border-primary/15 rounded-md text-xs font-bold text-primary/80 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
