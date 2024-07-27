import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navigations from "./components/Navigations";
import Footer from './components/Footer';
import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'War Dog Boxing | The best in Alabaster, Alabama | Personal Training + Boxing + Martial Arts',
  description: 'The best personal trainer in Alabama, USA. Located in Calera, Alabama',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: { rel: 'icon', url: '/favicon.ico', sizes: 'any' },
    apple: '/apple-touch-icon.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



 return (
    <html lang="en">
      <body className={inter.className}>
        <Navigations />
        {children}
        <Footer/>
      </body>
    </html>
  );
}