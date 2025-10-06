import type {Metadata} from "next";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from '@vercel/analytics/react';
import {Inter, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const jetbrains_mono = JetBrains_Mono({subsets: ["latin"], variable: "--jetbrains-mono"})

export const metadata: Metadata = {
  title: "Melissa Tamplin - Profile",
  description: "Mel's profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains_mono.variable} `}>
      <body className={`text-gray-950`} style={{ background: "var(--workshop-bg)", color: "var(--workshop-text)", margin: 0, padding: 0, width: "100%" }}>
        <ThemeToggle />
        <Navigation />
        {children}
        <Footer />
        <Toaster position={"top-center"} reverseOrder={false} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
