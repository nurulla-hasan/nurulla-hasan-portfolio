import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
    </main>
  );
}
