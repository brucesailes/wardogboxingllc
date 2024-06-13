import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactUs from "../components/ContactUs";

export default function Page() {
  return (
    <main className="">
      <HeroSection />
      <div className="w-full h-2 bg-gray-200"></div> 
      <ServicesSection />
      <div className="w-full h-2 bg-gray-200"></div> 
      <ContactUs />
      <div className="w-full h-2 bg-gray-200"></div>
    </main>
  );
}
