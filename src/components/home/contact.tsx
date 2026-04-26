"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/20 rounded-full blur-[100px] pointer-events-none translate-y-1/4 -translate-x-1/4" />
      
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
            <Card className="h-full border-border bg-muted/5">
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
                        className="bg-background border-border rounded-none h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
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
                        className="bg-background border-border rounded-none h-11 px-4 focus:ring-1 focus:ring-primary/30 text-base font-bold"
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
                      className="h-32 bg-background border-border rounded-none px-4 py-3 focus:ring-1 focus:ring-primary/30 resize-none text-base font-bold"
                    />
                    <FieldError className="text-[9px] uppercase font-bold tracking-widest text-destructive mt-1.5">
                      {errors.message?.message}
                    </FieldError>
                  </Field>
                  <Button type="submit" variant="hero" className="w-full h-12 text-xs font-bold uppercase tracking-[0.2em]">
                    <Send className="mr-2 w-4 h-4" />
                    Send Transmission
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Details (Right Strip) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* Email Card */}
            <div className="p-5 border border-border bg-muted/10 flex flex-col justify-between hover:border-primary/50 transition-all group">
              <Mail className="w-6 h-6 text-primary mb-6" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                <a href="mailto:nurullahasan.dev@gmail.com" className="text-lg font-black text-foreground hover:text-primary transition-colors block break-all leading-tight">
                  nurullahasan.dev@gmail.com
                </a>
              </div>
            </div>

            {/* Phone & Location Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 border border-border bg-muted/10 flex flex-col justify-between hover:border-primary/50 transition-all group">
                <Phone className="w-6 h-6 text-primary mb-6" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+8801750974716" className="text-lg font-black text-foreground hover:text-primary transition-colors block leading-tight">
                    +8801750974716
                  </a>
                </div>
              </div>
              <div className="p-5 border border-border bg-muted/10 flex flex-col justify-between hover:border-primary/50 transition-all group">
                <MapPin className="w-6 h-6 text-primary mb-6" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Location</p>
                  <p className="text-lg font-black text-foreground leading-tight">Dhaka, BD</p>
                </div>
              </div>
            </div>

            {/* Availability Badge Card */}
            <div className="p-5 border border-primary/20 bg-primary/5 flex items-center gap-4">
              <div className="h-2 w-2 bg-primary shadow-[0_0_8px_var(--color-primary)] animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Status: Open for opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
