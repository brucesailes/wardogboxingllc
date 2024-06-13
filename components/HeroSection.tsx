import { companyInfo } from "../src/data/companyInfo";
import Link from 'next/link';
import Image from 'next/image';


export default function HeroSection() {
  return (
    <main className="relative flex items-center justify-center min-h-screen w-full text-white">
      <div className="absolute inset-0">
        <Image 
          src="/slide2.png" 
          alt="Background Image" 
          fill={true} 
          style={{ objectFit: "cover" }} 
          quality={50} 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center w-full max-w-none px-4 py-16">
        <h1 className="text-white text-4xl mt-5 md:text-7xl font-extrabold transition-all duration-300 transform hover:scale-105">
          WAR DOG BOXING
        </h1>
        <blockquote className="text-xl md:text-2xl mt-4 italic transition-all duration-300 transform hover:scale-105">
          &rdquo;{companyInfo.companySlogan}&rdquo;
          <footer className="mt-2">- KEVIN COOPER</footer>
        </blockquote>
        <div className="flex justify-center mt-6">
          <Link href="/Booking" legacyBehavior>
            <a className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
              Get Started
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}

