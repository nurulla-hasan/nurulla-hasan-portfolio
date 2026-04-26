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

const CONTACT_INFO = [
  {
    label: "Email",
    value: "nurullahasan.dev@gmail.com",
    href: "mailto:nurullahasan.dev@gmail.com",
    icon: <Mail className="w-5 h-5 text-primary" />
  },
  {
    label: "Phone",
    value: "+8801750974716",
    href: "tel:+8801750974716",
    icon: <Phone className="w-5 h-5 text-primary" />
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
    icon: <MapPin className="w-5 h-5 text-primary" />
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

  const { errors } = form.formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeader 
          badge="Get in Touch"
          title="Let's"
          titleAccent="Connect"
          description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-xl font-bold text-foreground hover:text-primary transition-colors block">
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
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold uppercase tracking-widest">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field data-invalid={!!errors.name}>
                    <FieldLabel>Full Name</FieldLabel>
                    <Input 
                      placeholder="John Doe"
                      {...form.register("name")}
                    />
                    <FieldError>
                      {errors.name?.message}
                    </FieldError>
                  </Field>
                  <Field data-invalid={!!errors.email}>
                    <FieldLabel>Email Address</FieldLabel>
                    <Input 
                      type="email" 
                      placeholder="john@example.com"
                      {...form.register("email")}
                    />
                    <FieldError>
                      {errors.email?.message}
                    </FieldError>
                  </Field>
                </div>
                <Field data-invalid={!!errors.message}>
                  <FieldLabel>Message</FieldLabel>
                  <Textarea 
                    placeholder="How can I help you?"
                    {...form.register("message")}
                    className="h-36"
                  />
                  <FieldError>
                    {errors.message?.message}
                  </FieldError>
                </Field>
                <Button type="submit" variant="hero" className="w-full">
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
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
