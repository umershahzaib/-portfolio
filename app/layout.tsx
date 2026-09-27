import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Umer Shahzaib | AI & Full-Stack Developer",
  description: "AI-focused full-stack developer specializing in LLMs, RAG systems, and modern web applications. Building intelligent solutions with Next.js, React, Python, and AI technologies.",
  keywords: ["AI Developer", "Full-Stack Developer", "LLM", "RAG", "Next.js", "React", "Python", "Umer Shahzaib"],
  authors: [{ name: "Umer Shahzaib" }],
  openGraph: {
    title: "Umer Shahzaib | AI & Full-Stack Developer",
    description: "AI-focused full-stack developer specializing in LLMs, RAG systems, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
