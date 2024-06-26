import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className="relative flex items-center justify-center h-96 sm:h-96 md:h-screen w-full text-white">
      <div className="absolute inset-0">
        <Image 
          src="/slide4.webp" 
          alt="Background Image" 
          fill={true} 
          className="object-cover object-top"
          quality={75} 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center w-full px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-8 transition-all duration-300 transform hover:scale-105">
            OUR SERVICES
          </h2>
          <p className="text-lg font-semibold md:text-xl mb-8 transition-all duration-300 transform hover:scale-105">
            We offer a variety of services to help you achieve your fitness goals, including personal training, group classes, and specialized programs for athletes of all levels.
          </p>
          <div className="flex justify-center mt-6">
            <Link href="/Booking" legacyBehavior>
              <a 
                className="bg-blue-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
                aria-label="Book Now"
              >
                Book Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
