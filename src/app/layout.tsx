import type { Metadata } from "next";
import {SpeedInsights} from "@vercel/speed-insights/next"
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const space_grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--space-grotesk" });
const syne = Syne({subsets: ["latin"], variable: "--syne"})

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
    <html lang="en" className={`${space_grotesk.variable} ${syne.variable} `}>
      <body className={`text-gray-950`}>
        <Navigation />
        {children}
        <Footer />
        <Toaster position={"top-center"} reverseOrder={false} />
        <SpeedInsights />
      </body>
    </html>
  );
}
