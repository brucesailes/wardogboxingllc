import React from 'react';
import Image from 'next/image';

const ContactUs: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-96 sm:h-96 md:h-screen w-full text-white">
      <div className="absolute inset-0">
        <Image 
          src="/slide6.webp" 
          alt="Background Image" 
          fill={true} 
          style={{ objectFit: "cover", objectPosition: "center" }} 
          quality={75} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/slide6.webp" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-center md:text-left">
        <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-8 transition-all duration-300 transform hover:scale-105">
            CONTACT US
          </h2>
          <p className="mb-2 font-bold transition-all duration-300 transform hover:scale-105">
            GIVE US A CALL
          </p>
          <p className="text-lg font-semibold mb-4 transition-all duration-300 transform hover:scale-105">
            +1 (659) 901-9298
          </p>
          <p className="mb-2 font-bold transition-all duration-300 transform hover:scale-105">
            SEND AN EMAIL
          </p>
          <p className="text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            wardogboxingllc@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;



