import { ReactNode } from 'react'
import Navigations from "./Navigations";
import Footer from "@/app/components/Footer";
import Meta from "@/app/components/Meta";
// import Navigations from '@/components/Navigations';

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