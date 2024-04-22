import React from "react";
import BookingOptions from "../BookingClient/page"; // Import the client component

export default function Booking() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Book A Session</h1>
      <BookingOptions />
    </div>
  );
}
