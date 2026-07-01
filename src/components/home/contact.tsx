"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer } from "@/components/ui/stagger-container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { errors } = form.formState;

  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSending(true);
    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        toast.success("Transmission successful!", {
          description: "I've received your message and will get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Transmission failed", {
          description: result.error || "A system error occurred. Please try again.",
        });
      }
    } catch {
      toast.error("System Error", {
        description: "Could not establish connection. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/15 dark:bg-primary/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/15 dark:bg-primary/40 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Get in Touch"
          title="Let's"
          titleAccent="Connect"
          description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Form Box (Left) */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="up" threshold={0.15}>
              <Card className="h-full border-border bg-muted/5 premium-shadow">
              <CardHeader className="p-6">
                <CardTitle className="text-xl font-black uppercase tracking-tighter">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Field data-invalid={!!errors.name}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Full Name</FieldLabel>
                      <Input 
                        placeholder="John Doe"
                        {...form.register("name")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.name?.message}
                      </FieldError>
                    </Field>
                    <Field data-invalid={!!errors.email}>
                      <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Email Address</FieldLabel>
                      <Input 
                        type="email" 
                        placeholder="john@example.com"
                        {...form.register("email")}
                        className="bg-background border-border rounded-lg h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
                      />
                      <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                        {errors.email?.message}
                      </FieldError>
                    </Field>
                  </div>
                  <Field data-invalid={!!errors.message}>
                    <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1.5 block">Message Body</FieldLabel>
                    <Textarea 
                      placeholder="How can I help you?"
                      {...form.register("message")}
                      className="h-32 bg-background border-border rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary/30 resize-none text-base font-bold"
                    />
                    <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                      {errors.message?.message}
                    </FieldError>
                  </Field>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full h-12 text-xs font-bold uppercase tracking-[0.2em]"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send Transmission
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>

          {/* Contact Details (Right Strip) — Unified Premium Panel */}
          <StaggerContainer direction="up" staggerDelay={0.1} className="lg:col-span-5 flex flex-col gap-6">
            {/* Unified Contact Info Card */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-muted/20 to-muted/5 premium-shadow group">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-primary/5 blur-2xl rounded-full pointer-events-none" />
              
              <div className="relative z-10 p-6 space-y-5">
                {/* Section label */}
                <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                  <div className="h-8 w-1 bg-primary rounded-full" />
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-foreground/60">Contact Information</p>
                </div>

                {/* Email */}
                <a href="mailto:nurullahasan.dev@gmail.com" className="flex items-center gap-4 group/item">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-all duration-300 group-hover/item:scale-110">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Email</p>
                    <p className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors truncate">
                      nurullahasan.dev@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+8801750974716" className="flex items-center gap-4 group/item">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover/item:bg-primary/20 transition-all duration-300 group-hover/item:scale-110">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Phone</p>
                    <p className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors">
                      +8801750974716
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5">Location</p>
                    <p className="text-sm font-bold text-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="relative z-10 mx-6 pb-5">
                <div className="h-px bg-linear-to-r from-primary/30 via-primary/10 to-transparent" />
              </div>

              {/* Availability Badge */}
              <div className="relative z-10 px-6 pb-6 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_var(--color-primary)]" />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                  Open for Opportunities
                </p>
              </div>
            </div>

            {/* Social Profiles Card */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-linear-to-br from-muted/10 to-transparent premium-shadow group p-5 flex flex-col justify-center">
              {/* <div className="flex items-center gap-3 pb-2 mb-3 border-b border-border/50">
                <div className="h-6 w-1 bg-primary rounded-full" />
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/60">Social Profiles</p>
              </div> */}
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                <a 
                  href="https://github.com/nurulla-hasan" 
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
                >
                  <GithubIcon className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground group-hover/social:text-primary transition-colors">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/nurulla-hasan/" 
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
                >
                  <LinkedinIcon className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground group-hover/social:text-primary transition-colors">LinkedIn</span>
                </a>
                {/* <a 
                  href="https://x.com/nurullahasan44" 
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
                >
                  <XIcon className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground group-hover/social:text-primary transition-colors">Twitter</span>
                </a> */}
                <a 
                  href="https://wa.me/8801750974716" 
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
                >
                  <MessageCircle className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground group-hover/social:text-primary transition-colors">WhatsApp</span>
                </a>
                <a 
                  href="https://t.me/+8801750974716" 
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
                >
                  <Send className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground group-hover/social:text-primary transition-colors">Telegram</span>
                </a>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
