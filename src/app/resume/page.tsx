"use client";

import { Button } from "@/components/ui/button";
import { 
  GithubIcon, 
  LinkedinIcon, 
} from "@/components/ui/icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Wrench,
  User,
  Zap,
  Globe
} from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        {/* Navigation / Actions */}
        <div className="mb-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-xs font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          
          <Link 
            href="/assets/RESUME.pdf" 
            target="_blank"
            download="Nurulla_Hasan_Resume.pdf"
          >
            <Button variant="hero">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </Link>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-muted/10 border border-border rounded-3xl overflow-hidden shadow-2xl shadow-primary/5">
          {/* Header Section */}
          <div className="p-6 md:p-8 border-b border-border bg-muted/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-1">
                  Nurulla <span className="text-primary">Hasan</span>
                </h1>
                <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
                  Frontend Developer | React.js, Next.js &amp; TypeScript
                </p>
              </div>
              <div className="flex flex-col gap-1.5 text-left md:text-right md:items-end text-xs md:text-sm">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  +880 1750-974716
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-medium underline decoration-primary/30">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  nurullahasan.dev@gmail.com
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50 flex flex-wrap gap-5">
              <Link href="https://www.linkedin.com/in/nurulla-hasan/" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </Link>
              <Link href="https://github.com/nurulla-hasan" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </Link>
              <Link href="https://nurulla-hasan-portfolio-pink.vercel.app/" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                <Globe className="w-3.5 h-3.5" /> Portfolio
              </Link>
            </div>
          </div>

          <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Summary */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  Professional Summary
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  Frontend Developer with around 1.5 years of professional experience building production websites, role-based dashboards, and scalable web interfaces using React.js, Next.js, and TypeScript. Focused on responsive UI, REST API integration, SEO, and performance optimization.
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-primary/30">
                    <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-primary" />
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Junior Frontend Developer</h3>
                        <p className="text-primary font-bold">Sparktech Agency</p>
                        <p className="text-xs text-muted-foreground font-medium mt-1">Full-time, On-site | Dhaka, Bangladesh</p>
                      </div>
                      <div className="text-right md:text-right">
                        <p className="font-bold text-sm uppercase tracking-widest">March 2025 – Present</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-4">
                      <li>Serve as the sole frontend developer across multiple client products, owning production websites and role-based dashboards from requirement analysis to delivery.</li>
                      <li>Build reusable, API-driven interfaces for dashboards, complex forms, data tables, authentication, and role-based workflows using Next.js, React, TypeScript, and modern state-management tools.</li>
                      <li>Built reusable <code className="text-primary font-bold">useNextFilter</code> and <code className="text-primary font-bold">nextServerFetch</code> utilities to standardize URL-synced filtering, debounced navigation, authentication, request handling, and consistent API error management across projects.</li>
                      <li>Implement and maintain real-time chat, CRUD/CMS workflows, QR-based access, maps, file uploads, dynamic metadata, route protection, and responsive interfaces.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-xl font-black uppercase tracking-widest mb-6 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  Selected Projects
                </h2>
                <div className="space-y-8">
                  {/* Mouza Map Pro */}
                  <div className="group">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold">Mouza Map Pro</h3>
                      <div className="flex gap-4 shrink-0 flex-wrap">
                        <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">Personal Product</span>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Development</span>
                        <Link href="https://mouzamappro.com" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Product</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Next.js 16, React 19, TypeScript, Konva.js, Zustand, Leaflet, PDF.js, jsPDF</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Own and develop a Bangla-first land-surveying platform for measuring plots, aligning C.S./B.S. maps, tracing boundaries, annotating sheets, finding surveyors, and exporting survey documents at configurable scales.</li>
                      <li>Build mobile-first canvas and PDF interactions, worker-backed image processing, low-memory previews, tiled KMZ export, snapping, undo/redo, and responsive workflows for lower-powered devices.</li>
                    </ul>
                  </div>

                  {/* FixItNow */}
                  <div className="group">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold">FixItNow</h3>
                      <div className="flex gap-4 shrink-0 flex-wrap">
                        <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">Next.js Service Booking Platform</span>
                        <Link href="https://l2-b7-a5.vercel.app" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Demo</Link>
                        <Link href="https://github.com/nurulla-hasan/L2B7A5" target="_blank" className="text-xs font-bold text-primary hover:underline">Frontend GitHub</Link>
                        <Link href="https://github.com/nurulla-hasan/L2B7A4" target="_blank" className="text-xs font-bold text-primary hover:underline">Backend GitHub</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, React Hook Form, Zod, Express.js, PostgreSQL, Prisma</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Built responsive dashboards and protected workflows for Customer, Technician, and Admin roles.</li>
                      <li>Implemented service discovery, filtering, booking management, reviews, authentication, and API-driven UI states.</li>
                      <li>Created consistent form validation, loading, error, and payment-flow handling using React Hook Form, Zod, and reusable components.</li>
                    </ul>
                  </div>

                  {/* Mess Management System */}
                  <div className="group">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg font-bold">Mess Management System</h3>
                      <div className="flex gap-4 shrink-0 flex-wrap">
                        <span className="text-[10px] font-bold text-primary/70 uppercase tracking-widest">Personal Full-Stack Project</span>
                        <Link href="https://mess-os-client.vercel.app" target="_blank" className="text-xs font-bold text-primary hover:underline">Live Demo</Link>
                        <Link href="https://github.com/nurulla-hasan/mess_os_client" target="_blank" className="text-xs font-bold text-primary hover:underline">Frontend GitHub</Link>
                        <Link href="https://github.com/nurulla-hasan/mess_os_server" target="_blank" className="text-xs font-bold text-primary hover:underline">Backend GitHub</Link>
                      </div>
                    </div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Next.js, React, TypeScript, Tailwind CSS, Zustand, PWA, Express.js, MongoDB</p>
                    <ul className="space-y-2 text-muted-foreground text-sm list-disc list-outside ml-4">
                      <li>Built a full-stack mess management platform for managing members, meals, billing, expenses, market schedules, and financial reports through role-based dashboards.</li>
                      <li>Implemented member and meal management, monthly billing, expense tracking, financial reports, PWA support, and AI-assisted menu planning and shopping-list generation.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-12">
              {/* Skills */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary" />
                  Technical Skills
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "shadcn/ui"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">State &amp; Data</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Zustand", "Redux Toolkit", "TanStack Query", "TanStack Table", "React Hook Form", "Zod"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-3">Backend, Database &amp; Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "MongoDB", "REST APIs", "Git", "GitHub", "Vercel", "Postman"].map(s => (
                        <span key={s} className="px-3 py-1 bg-muted/20 border border-border rounded-md text-[10px] font-bold uppercase tracking-widest">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Education
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Diploma in Computer Science &amp; Technology</h3>
                    <p className="text-xs text-muted-foreground font-bold">Dinajpur Polytechnic Institute</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary mt-1">2021 – 2024</p>
                    <p className="text-xs font-bold text-foreground mt-1">CGPA: 3.50 / 4.00</p>
                  </div>
                </div>
              </section>

              {/* Additional Info */}
              <section>
                <h2 className="text-base font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  Additional Info
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Training &amp; Courses</h3>
                    <p className="text-xs text-muted-foreground font-medium mt-1">Programming Hero</p>
                    <ul className="text-xs text-muted-foreground list-disc list-outside ml-4 mt-1 space-y-1">
                      <li>Web Development Level 1 (Completed)</li>
                      <li>Next Level Web Development (Ongoing)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Languages</h3>
                    <div className="space-y-1 text-xs font-bold mt-2">
                      <div className="flex justify-between">
                        <span className="uppercase tracking-widest text-muted-foreground">Bangla</span>
                        <span className="text-primary">Native</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="uppercase tracking-widest text-muted-foreground">English</span>
                        <span className="text-primary">Working Proficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
