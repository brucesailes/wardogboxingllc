import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const FreeTrial: React.FC = () => {
  return (
    <section className="relative text-blue-500 py-16 min-h-screen flex flex-col items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0">
        <Image 
          src="/slide7.png" 
          alt="Background Image" 
          fill={true} 
          style={{objectFit:"cover"}} 
          quality={50} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/slide7.png"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">JOIN US FOR A FREE SESSION</h1>
        <div className="bg-white p-8 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between max-w-lg mx-auto">
          <div className="flex-grow">
            <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">FREE SESSION</h2>
            <p className="text-black text-lg md:text-xl mb-8">If you&apos;re scared, book a one-time free session.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/free-session" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-105">
              BOOK
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;


