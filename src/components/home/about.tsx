import { GraduationCap, Award, Languages, Code } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer } from "@/components/ui/stagger-container";

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Production Projects" },
  { value: "Sparktech", label: "Current Company" },
];

const EDUCATION = [
  {
    institution: "Dinajpur Polytechnic Institute",
    degree: "Diploma in Computer Science & Technology",
    duration: "2021 – 2024",
    cgpa: "3.50 / 4.00",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  }
];

const TRAINING = [
  {
    platform: "Programming Hero",
    course: "Web Development",
    level: "Level 1",
    status: "Completed",
    icon: <Award className="w-6 h-6 text-primary" />
  },
  {
    platform: "Programming Hero",
    course: "Next Level Web Development",
    level: "Level 2",
    status: "Ongoing",
    icon: <Award className="w-6 h-6 text-primary" />
  }
];

const LANGUAGES = [
  { name: "Bangla", level: "Native", icon: <Languages className="w-5 h-5 text-primary" /> },
  { name: "English", level: "Working Proficiency", icon: <Languages className="w-5 h-5 text-primary" /> }
];

export function About() {
  return (
    <section id="about" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[5%] w-100 h-100 bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Get to Know Me"
          title="About"
          titleAccent="Me"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Bio & Stats */}
          <StaggerContainer direction="up" staggerDelay={0.12}>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              I&apos;m a <span className="text-primary font-medium">Frontend Developer</span> with{" "}
              <span className="text-foreground font-semibold">over 1 year of professional experience</span>{" "}
              building production websites, role-based dashboards, and reusable frontend systems for multiple client products.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              Currently, I work at Sparktech Agency, where I handle frontend development from requirement analysis to delivery
              using <span className="text-primary font-medium">React.js, Next.js App Router, TypeScript</span>, and modern
              state-management tools. I also have hands-on experience with Node.js, Express.js, PostgreSQL, Prisma ORM,
              MongoDB, and REST APIs.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed max-w-xl">
              I enjoy turning complex business requirements into{" "}
              <span className="text-foreground font-semibold">simple, reliable, and user-friendly digital products</span>.
              Outside of coding, I enjoy exploring new technologies, reading tech blogs, traveling, and playing cricket.
            </p>

            {/* Stats Row */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-3 sm:p-4 border border-border bg-muted/20 rounded-xl hover:border-primary/40 hover:bg-muted/30 transition-all text-center flex flex-col justify-center overflow-hidden"
                >
                  <p className="text-xl sm:text-3xl font-black text-primary leading-none mb-1 truncate">{stat.value}</p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground truncate">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h4 className="text-foreground font-bold text-xl mb-5 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Languages I Speak
              </h4>
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <div 
                    key={lang.name}
                    className="premium-hover flex items-center gap-3 px-6 py-3 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30"
                  >
                    {lang.icon}
                    <div>
                      <p className="font-bold text-foreground leading-none">{lang.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerContainer>

          {/* Right: Education & Training */}
          <StaggerContainer direction="up" staggerDelay={0.15} delay={0.1} className="space-y-10">
            {/* Education */}
            <div>
              <h4 className="text-foreground font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Education
              </h4>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div 
                    key={edu.institution}
                    className="premium-shadow group relative p-6 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h5>
                      <span className="text-sm font-medium text-primary border border-primary/20 rounded-md px-3 py-1 shrink-0 ml-3">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-primary font-medium mt-2">CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div>
              <h4 className="text-foreground font-bold text-2xl mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                Additional Training
              </h4>
              <div className="space-y-4">
                {TRAINING.map((train) => (
                  <div 
                    key={train.course}
                    className="premium-shadow group relative p-6 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h5 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {train.course}
                      </h5>
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-primary border border-primary/20 rounded-md px-2.5 py-1 shrink-0">
                        {train.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-2">{train.platform}</p>
                    <p className="text-muted-foreground font-medium flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${train.status === "Ongoing" ? "bg-primary animate-pulse" : "bg-primary"}`} />
                      {train.status}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
