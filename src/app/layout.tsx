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
  title: "Nurulla Hasan | Portfolio",
  description: "Frontend-Focused MERN Stack Developer",
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
