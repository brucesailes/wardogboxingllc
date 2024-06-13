import React from "react";
import Link from "next/link";
import Image from 'next/image';


const BookingOptions: React.FC = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-15 py-8">
      {/* Our Programs Section */}
      <section className="relative w-full text-white py-40">
        <div className="absolute inset-0">
          <Image 
            src="/slide5.png" 
            alt="Background Image" 
            fill={true} 
            style={{ objectFit: "cover" }} 
            quality={50} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="/slide5.png"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 transform hover:scale-105">
            OUR PROGRAMS
          </h1>
        </div>
      </section>

      {/* Price List Section */}
      <section className="container mt-10 mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Single Session */}
          <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
            <div className="flex-grow">
              <h2 className="text-black text-2xl md:text-3xl font-bold mb-4">Single Session</h2>
              <p className="text-black text-lg md:text-xl mb-4">$40 per session</p>
              <p className="text-black text-lg md:text-xl mb-8">Ideal for beginners looking to learn the basics of boxing, fitness and self-defense.</p>
            </div>
            <Link href="https://calendly.com/wardogboxingllc/singlesession" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                BOOK
              </a>
            </Link>
          </div>

          {/* 4 Sessions per Month */}
          <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
            <div className="flex-grow">
              <h2  className="text-black text-2xl md:text-3xl font-bold mb-4">1 session per Week</h2>
              <p className="text-black text-lg md:text-xl mb-4">$100 per month</p>
              <p className="text-black text-lg md:text-xl mb-8">Learn essential self-defense techniques to enhance personal safety and confidence. Build strength and endurance. Learn the fundamentals of boxing.</p>
            </div>
            <Link href="https://calendly.com/wardogboxingllc/4-sessions-per-month" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                BOOK
              </a>
            </Link>
          </div>

          {/* Twice a Week Sessions */}
          <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
            <div className="flex-grow">
              <h2  className="text-black text-2xl md:text-3xl font-bold mb-4">2 sessions per Week</h2>
              <p className="text-black text-lg md:text-xl mb-4">$150 per month</p>
              <p className="text-black text-lg md:text-xl mb-8">Tailored fitness programs to build strength, endurance, and overall health.</p>
            </div>
            <Link href="https://calendly.com/wardogboxingllc/twice-a-week-sessions" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                BOOK
              </a>
            </Link>
          </div>

          {/* 3 Times a Week per Month */}
          <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
            <div className="flex-grow">
              <h2  className="text-black text-2xl md:text-3xl font-bold mb-4">3 sessions per Week</h2>
              <p className="text-black text-lg md:text-xl mb-4">$250 per month</p>
              <p className="text-black text-lg md:text-xl mb-8">Comprehensive training for those dedicated to achieving peak fitness levels.</p>
            </div>
            <Link href="https://calendly.com/wardogboxingllc/3-times-a-week" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                BOOK
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingOptions;
