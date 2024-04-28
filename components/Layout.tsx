import { ReactNode } from 'react'
import Header from "@/components/Navigations";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import Navigations from '@/components/Navigations';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
        <Navigations />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        <Footer />
    </>
  );
}