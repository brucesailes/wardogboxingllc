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
      <main className="relative mt-10 md:mt-10 flex items-center justify-center h-screen w-full text-white">
        <div className="absolute inset-0">
          <Image 
            src="/slide2.webp" 
            alt="Background Image" 
            fill={true} 
            className="object-cover"
            quality={100} 
            priority={true}
            unoptimized
            loading="eager" // Eager loading for the main hero image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center w-full max-w-3xl px-6 py-24">
          <h1 className="header-font text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl mb-4 transition-transform duration-300 transform hover:scale-105">
            WAR DOG BOXING
          </h1>
          <blockquote className="quote-font text-sm sm:text-lg md:text-2xl lg:text-3xl italic mb-6 transition-transform duration-300 transform hover:scale-105">
            "SAVING HUMANITY ONE JAB AT A TIME."
            <footer className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg">- KEVIN COOPER</footer>
          </blockquote>
          <div className="flex justify-center mt-8">
            <Link href="/Booking" legacyBehavior>
              <a 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
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




