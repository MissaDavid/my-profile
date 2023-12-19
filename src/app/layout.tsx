import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "src/components/header";
import { Toaster } from "react-hot-toast";
import Footer from "src/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--merriweather",
});

export const metadata: Metadata = {
  title: "Melissa Tamplin",
  description: "Mel's developer profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} `}>
      <body className={`bg-blue-50 text-gray-950`}>
        <Header />
        {children}
        <Footer />
        <Toaster position={"top-center"} reverseOrder={false} />
      </body>
    </html>
  );
}
