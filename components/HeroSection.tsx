import { companyInfo } from "../src/data/companyInfo";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function HeroSection() {
  return (
    <>
      <Head>
        {/* Preload the hero image */}
        <link rel="preload" href="/slide2.webp" as="image" />
      </Head>
      <main className="relative flex items-center justify-center h-96 sm:h-96 md:h-screen w-full text-white">
        <div className="absolute inset-0">
          <Image 
            src="/slide2.webp" 
            alt="Background Image" 
            fill={true} 
            className="object-cover"
            quality={70} 
            priority={true}
            loading="eager" // Eager loading for the main hero image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center w-full max-w-none px-4 py-16">
          <h1 className="text-white text-4xl mt-5 md:text-7xl font-extrabold transition-transform duration-300 transform hover:scale-105">
            WAR DOG BOXING
          </h1>
          <blockquote className="text-xl md:text-2xl mt-4 italic transition-transform duration-300 transform hover:scale-105">
            &rdquo;{companyInfo.companySlogan}&rdquo;
            <footer className="mt-2">- KEVIN COOPER</footer>
          </blockquote>
          <div className="flex justify-center mt-6">
            <Link href="/Booking" legacyBehavior>
              <a 
                className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition-transform duration-300 transform hover:scale-105"
                aria-label="Get Started with Booking"
              >
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}




