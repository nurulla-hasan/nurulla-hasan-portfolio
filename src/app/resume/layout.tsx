import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View the professional resume of Nurulla Hasan — Frontend Developer with expertise in React.js, Next.js, and TypeScript.",
  openGraph: {
    title: "Resume | Nurulla Hasan",
    description:
      "Professional resume of Nurulla Hasan — a Frontend Developer with React.js, Next.js & TypeScript.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
