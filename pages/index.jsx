import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ContactUs from "../components/ContactUs"; 

export default function Page() {
  return (
    <main className="">
      <HeroSection />
      <ServicesSection />
      <ContactUs /> 
    </main>
  );
}
