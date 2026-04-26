import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
