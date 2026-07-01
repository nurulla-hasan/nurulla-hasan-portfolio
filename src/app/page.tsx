import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Contact />
      <Footer />
    </main>
  );
}
