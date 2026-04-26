"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const CONTACT_INFO = [
  {
    label: "Email",
    value: "nurullahasan.dev@gmail.com",
    href: "mailto:nurullahasan.dev@gmail.com",
    icon: <Mail className="w-6 h-6 text-primary" />
  },
  {
    label: "Phone",
    value: "+8801750974716",
    href: "tel:+8801750974716",
    icon: <Phone className="w-6 h-6 text-primary" />
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    icon: <MapPin className="w-6 h-6 text-primary" />
  }
];

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { formState: { errors } } = form;

  function onSubmit(values: FormValues) {
    console.log(values);
    // Handle form submission (e.g., send to API)
    alert("Message sent successfully!");
    form.reset();
  }

  return (
    <section id="contact" className="pt-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute right-0 bottom-0 w-150 h-150 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              Contact
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold uppercase text-foreground mb-8">
              Let&apos;s Build Something <span className="text-primary">Great</span> Together
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
              I&apos;m always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-6 mb-12">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-muted/50 border border-border flex items-center justify-center transition-all group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:scale-110">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-xl font-bold text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 md:p-10 rounded-3xl border border-border bg-muted/20 backdrop-blur-sm">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field data-invalid={!!errors.name}>
                  <FieldLabel className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Your Name</FieldLabel>
                  <Input 
                    placeholder="John Doe"
                    {...form.register("name")}
                    className="bg-background border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 transition-all h-12"
                  />
                  <FieldError className="text-xs text-destructive font-semibold ml-1">
                    {errors.name?.message}
                  </FieldError>
                </Field>
                <Field data-invalid={!!errors.email}>
                  <FieldLabel className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Email Address</FieldLabel>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    {...form.register("email")}
                    className="bg-background border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 transition-all h-12"
                  />
                  <FieldError className="text-xs text-destructive font-semibold ml-1">
                    {errors.email?.message}
                  </FieldError>
                </Field>
              </div>
              <Field data-invalid={!!errors.message}>
                <FieldLabel className="text-sm font-bold uppercase tracking-widest text-foreground/70 ml-1">Message</FieldLabel>
                <Textarea 
                  placeholder="How can I help you?"
                  {...form.register("message")}
                  className="bg-background border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/50 transition-all resize-none h-36"
                />
                <FieldError className="text-xs text-destructive font-semibold ml-1">
                  {errors.message?.message}
                </FieldError>
              </Field>
              <Button type="submit" variant="hero" size="lg" className="w-full rounded-xl py-8 text-lg font-bold">
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-24 py-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground font-medium text-sm">
            © {new Date().getFullYear()} Nurulla Hasan. Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
