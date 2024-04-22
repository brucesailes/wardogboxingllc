import { Inter } from "next/font/google";
import { Metadata } from "next";
import "../styles/globals.css"
import Footer from "@/app/components/Footer/page";
import Navigations from "@/app/components/Navigations/page";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "War Dog Boxing",
  description: "Boxing, Self-Defense, and Fitness. Located in Alabaster, Alabama.",
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navigations />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
