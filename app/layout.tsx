import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roby Tanama | Full-Stack Engineer & CTO",
  description: "Co-Founder & CTO at TrieTech. Building fast, accessible, and beautiful web experiences with focus on production-ready, industry-grade applications.",
  keywords: ["Full-Stack Developer", "CTO", "Next.js", "TypeScript", "React", "Supabase", "Web Development"],
  authors: [{ name: "Roby Tanama" }],
  creator: "Roby Tanama",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tanamaroby.com",
    title: "Roby Tanama | Full-Stack Engineer & CTO",
    description: "Building fast, accessible, and beautiful web experiences",
    siteName: "Roby Tanama Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roby Tanama | Full-Stack Engineer & CTO",
    description: "Building fast, accessible, and beautiful web experiences",
    creator: "@tanamaroby",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
