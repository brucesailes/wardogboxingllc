import React from 'react';
import Image from 'next/image';


const ContactUs: React.FC = () => {
  return (
    <section className="relative text-white py-16">
      <div className="absolute inset-0">
        <Image 
          src="/slide6.png" 
          alt="Background Image" 
          fill={true} 
          style={{ objectFit: "cover" }} 
          quality={50} 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/slide6.png"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        {/* First Column: Logo */}
        <div className="flex justify-center md:justify-end mb-8 md:mb-0 md:mr-8">
          <Image src="/wardogboxing.png" alt="Wardog Boxing Logo" width={200} height={200} />
        </div>
        {/* Second Column: Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 transition-all duration-300 transform hover:scale-105">CONTACT US</h2>
          <p className="mb-2 font-bold transition-all duration-300 transform hover:scale-105">GIVE US A CALL</p>
          <p className="text-lg font-semibold mb-4 transition-all duration-300 transform hover:scale-105">+1 (659) 901-9298</p>
          <p className="mb-2 font-bold transition-all duration-300 transform hover:scale-105">SEND AN EMAIL</p>
          <p className="text-lg font-semibold transition-all duration-300 transform hover:scale-105">wardogboxingllc@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


