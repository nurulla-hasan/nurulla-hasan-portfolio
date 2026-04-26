import { Cpu, Database, Layout, Zap } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Mastery",
    description: "Expertise in building high-performance, accessible, and scalable user interfaces.",
    icon: <Layout className="w-6 h-6 text-primary" />,
    skills: ["React.js", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "State & Data Management",
    description: "Robust data-fetching patterns and complex state synchronization.",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["Redux Toolkit", "RTK Query", "TanStack Query", "React Hook Form", "Zod"]
  },
  {
    title: "Modern Tools & Architecture",
    description: "Delivering high-quality code through reusable patterns and modern deployment.",
    icon: <Cpu className="w-6 h-6 text-primary" />,
    skills: ["Git & GitHub", "Vercel", "Custom Hooks", "Component Architecture", "API Integration", "Rapid Prototyping"]
  },
  {
    title: "Professional Focus",
    description: "Dedicated to rapid prototyping and clean, maintainable frontend systems.",
    icon: <Zap className="w-6 h-6 text-primary" />,
    skills: ["MERN Stack", "Dashboard Systems", "Scalable UI", "Clean Code", "Infinite Loading", "URL State"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-125 h-125 bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto  relative z-10 px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Technical Prowess
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-6">
              My Expert <span className="text-primary">Skillset</span>
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              I specialize in the MERN stack and modern frontend technologies, 
              focusing on creating seamless digital products that solve real-world problems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="group relative p-8 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-muted/30"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-primary/0 transition-colors group-hover:bg-primary/2" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {category.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-foreground mb-3">{category.title}</h4>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-1.5 bg-muted/50 border border-border text-sm font-medium text-foreground/80 transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <Zap className="w-5 h-5 text-primary animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating tech badges / logos at the bottom could be added later for more "wow" */}
      </div>
    </section>
  );
}
