import React from "react";
import About from "../components/About";
import Booking from "../components/BookingPage";
import Contact from "../components/ContactPage";
import HomeSlideshow from "@/components/HomeSlideShow";
import MeetTheCoach from "@/components/MeetTheCoach";

export default function Page() {
  return (
    <main className="m-0 p-4 flex flex-col justify-center items-center space-y-8">
      <section id="about">
        <About />
      </section>
      <HomeSlideshow />
      <section id="booking">
        <Booking />
      </section>
      <MeetTheCoach />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

