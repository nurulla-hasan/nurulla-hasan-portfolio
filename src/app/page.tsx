import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Skills />
    </main>
  );
}
