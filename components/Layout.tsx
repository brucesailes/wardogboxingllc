import { ReactNode } from 'react'
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Meta />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        <Footer />
    </>
  );
}