import type { Metadata } from "next";
import { Cagliostro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const cagliostro = Cagliostro({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cagliostro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurulla-hasan-portfolio-pink.vercel.app"),
  title: {
    default: "Nurulla Hasan | Portfolio",
    template: "%s | Nurulla Hasan",
  },
  description:
    "Frontend-Focused MERN Stack Developer specializing in building modern web applications with React, Next.js, and Node.js.",
  keywords: [
    "Nurulla Hasan",
    "Frontend Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Nurulla Hasan" }],
  creator: "Nurulla Hasan",
  publisher: "Nurulla Hasan",
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
    title: "Nurulla Hasan | Portfolio",
    description:
      "Frontend-Focused MERN Stack Developer specializing in building modern web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurulla Hasan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurulla Hasan | Portfolio",
    description:
      "Frontend-Focused MERN Stack Developer specializing in building modern web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Ensure this file exists or standard Next.js icons are used
  },
};

import { Navbar } from "@/components/home/navbar";
import { SocialSidebar } from "@/components/ui/social-sidebar";
import SmoothScrollProvider from "@/components/ui/smooth-scroll";

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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <Navbar />
            {children}
            <SocialSidebar />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
