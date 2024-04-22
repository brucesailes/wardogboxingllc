'use client'

import React from "react";
import ContactForm from "./components/ContactFormClient/page";
import About from "./components/About/page";
import Booking from "./components/Classes/page";
import Head from "next/head";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center text-center min-h-screen mt-10 p-10 md:p-8">
      {/* About section with responsive utility */}
      <About />
   
      {/* Booking section with responsive design */}
      <Booking />

      {/* Contact section with responsive touch */}
      <ContactForm />
    </main>
  );
}
