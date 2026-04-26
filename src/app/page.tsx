import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Skills } from "@/components/home/skills";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/home/projects";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
