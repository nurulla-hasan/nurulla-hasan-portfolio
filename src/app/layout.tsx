import type { Metadata, Viewport } from "next";
import { Cagliostro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/json-ld";

const cagliostro = Cagliostro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cagliostro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurulla-hasan-portfolio-pink.vercel.app"),
  title: {
    default: "Nurulla Hasan | Frontend-Focused MERN Stack Developer",
    template: "%s | Nurulla Hasan",
  },
  description:
    "Nurulla Hasan — Frontend-Focused MERN Stack Developer specializing in building modern, high-performance web applications with React, Next.js, TypeScript, and Node.js. Explore my projects and get in touch.",
  keywords: [
    "Nurulla Hasan",
    "Nurulla Hasan Portfolio",
    "Nurulla Hasan Developer",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "Portfolio Website",
    "Software Engineer",
    "Tailwind CSS",
    "Web Development",
    "UI Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Nurulla Hasan", url: "https://nurulla-hasan-portfolio-pink.vercel.app" }],
  creator: "Nurulla Hasan",
  publisher: "Nurulla Hasan",
  category: "Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nurulla-hasan-portfolio-pink.vercel.app",
    siteName: "Nurulla Hasan Portfolio",
    title: "Nurulla Hasan | Frontend-Focused MERN Stack Developer",
    description:
      "Explore the portfolio of Nurulla Hasan — a Frontend-Focused MERN Stack Developer building modern web applications with React, Next.js, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurulla Hasan — Frontend-Focused MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurulla Hasan | Frontend-Focused MERN Stack Developer",
    description:
      "Explore the portfolio of Nurulla Hasan — building modern web apps with React, Next.js & Node.js.",
    images: ["/og-image.png"],
    creator: "@nurulla_hasan",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "Nurulla Hasan",
    statusBarStyle: "black-translucent",
  },
  verification: {
    google: "IhcboU1VL3736BrgXDuvYguYXsjToJ1pnTXA8aMSOOM",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
  ],
};

import { Navbar } from "@/components/home/navbar";
import { SocialSidebar } from "@/components/ui/social-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", cagliostro.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
            {children}
            <SocialSidebar />
          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
