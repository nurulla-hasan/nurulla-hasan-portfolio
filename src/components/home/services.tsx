import { 
  Code2, 
  Paintbrush, 
  Smartphone, 
  Rocket, 
  RefreshCcw, 
  Blocks 
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer } from "@/components/ui/stagger-container";

const SERVICES = [
  {
    title: "Custom Web Application",
    description:
      "Full-featured, scalable web applications built with React, Next.js, and modern technologies — tailored to your unique business needs.",
    icon: <Code2 className="w-7 h-7 text-primary" />,
  },
  {
    title: "Responsive UI/UX Development",
    description:
      "Pixel-perfect, mobile-first interfaces that look stunning on every device — from smartphones to ultrawide monitors.",
    icon: <Paintbrush className="w-7 h-7 text-primary" />,
  },
  {
    title: "Single Page Applications",
    description:
      "Fast, interactive SPAs with seamless navigation, dynamic content loading, and smooth user experiences using React ecosystem.",
    icon: <Smartphone className="w-7 h-7 text-primary" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Speed audit, lazy loading, code splitting, image optimization, and caching strategies to make your app lightning fast.",
    icon: <Rocket className="w-7 h-7 text-primary" />,
  },
  {
    title: "API Integration & Full Stack",
    description:
      "RESTful API design and integration with Node.js, Express, and MongoDB — connecting your frontend to powerful backends.",
    icon: <Blocks className="w-7 h-7 text-primary" />,
  },
  {
    title: "Maintenance & Upgrades",
    description:
      "Ongoing support, bug fixes, feature additions, and technology upgrades to keep your application modern and secure.",
    icon: <RefreshCcw className="w-7 h-7 text-primary" />,
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[15%] left-[5%] w-100 h-100 bg-primary/15 dark:bg-primary/35 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 lg:px-10">
        <SectionHeader
          badge="What I Offer"
          title="My"
          titleAccent="Services"
          description="From concept to deployment — I provide end-to-end development solutions that help businesses grow and succeed online."
        />

        <StaggerContainer
          direction="up"
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="premium-hover group relative p-7 border border-border bg-muted/20 rounded-xl transition-all hover:border-primary/30 hover:bg-muted/30"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-primary/0 rounded-xl transition-colors group-hover:bg-primary/2" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-primary/0 group-hover:bg-primary/40 transition-colors" />
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
