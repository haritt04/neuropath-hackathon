
import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const interTight = Inter_Tight({ 
  subsets: ["latin"], 
  variable: "--font-inter-tight" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  title: "NeuroPath | Career Observability",
  description: "Observe. Predict. Grow. A Typographic Career OS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-foreground font-sans selection:bg-accent selection:text-white">
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
