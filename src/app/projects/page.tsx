import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { PROJECTS } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-6 lg:px-10 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-20 relative">
          <div className="flex flex-col gap-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group text-xs font-bold uppercase tracking-widest"
            >
              <div className="w-8 h-px bg-muted-foreground/30 group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
              Back to Home
            </Link>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <h1 className="text-5xl md:text-7xl font-bold uppercase text-foreground">
                  Works <span className="text-primary">.</span>
                </h1>
                <div className="h-px flex-1 bg-linear-to-r from-border to-transparent hidden md:block" />
                <span className="text-sm text-muted-foreground border border-border px-3 py-1 rounded-full uppercase bg-muted/10">
                  {PROJECTS.length} &nbsp; Showcases
                </span>
              </div>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
                A selection of digital experiences and technical engineering 
                focused on <span className="text-foreground">scalability</span> and <span className="text-foreground">performance</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col rounded-3xl border border-border bg-muted/20 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-widest uppercase text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/40">
                  <Link href={project.liveUrl} target="_blank" className="flex-1">
                    <Button variant="hero" size="sm" className="w-full rounded-xl h-10">
                      Live Preview <ExternalLink className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                  <Link href={project.githubUrl} target="_blank">
                    <Button variant="nav" size="sm" className="rounded-xl h-10 w-10 flex items-center justify-center p-0">
                      <GithubIcon className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
