"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, Code } from "lucide-react";

const EDUCATION = [
  {
    institution: "Dinajpur Polytechnic Institute",
    degree: "Diploma in Engineering",
    duration: "2021 – 2024",
    icon: <GraduationCap className="w-6 h-6 text-primary" />
  }
];

const TRAINING = [
  {
    platform: "Programming Hero",
    status: "Level 1 Completed, Level 2 Continuing",
    icon: <Award className="w-6 h-6 text-primary" />
  }
];

const LANGUAGES = [
  { name: "Bangla", level: "Native", icon: <Languages className="w-5 h-5 text-primary" /> },
  { name: "English", level: "Comfortable", icon: <Languages className="w-5 h-5 text-primary" /> }
];

export function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left: Bio & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Get to Know Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-8">
              About <span className="text-primary">Me</span>
            </h3>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              <p>
                I am a passionate <span className="text-foreground font-semibold">Frontend-focused MERN Stack Developer</span> with 
                a deep love for building clean, scalable, and impactful web applications.
              </p>
              <p>
                With over a year of experience in the industry, I have honed my skills in 
                <span className="text-primary font-medium"> React, Next.js, and TypeScript</span>. 
                I take pride in my ability to bridge the gap between complex backend logic and 
                intuitive, aesthetic user interfaces.
              </p>
              <p>
                My approach to development is centered around <span className="text-foreground font-semibold">reusable architecture</span> and 
                clean code, ensuring that every product I build is not only powerful but also 
                maintainable and developer-friendly.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-12">
              <h4 className="text-foreground font-bold text-xl mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Languages I Speak
              </h4>
              <div className="flex flex-wrap gap-4">
                {LANGUAGES.map((lang) => (
                  <div 
                    key={lang.name}
                    className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-border bg-muted/20 backdrop-blur-sm"
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
          </motion.div>

          {/* Right: Education & Training */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-foreground font-bold text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                Education
              </h4>
              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <div 
                    key={edu.institution}
                    className="group relative p-8 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h5>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-foreground font-bold text-2xl mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                Additional Training
              </h4>
              <div className="space-y-6">
                {TRAINING.map((train) => (
                  <div 
                    key={train.platform}
                    className="group relative p-8 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-muted/30"
                  >
                    <h5 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {train.platform}
                    </h5>
                    <p className="text-muted-foreground font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {train.status}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
