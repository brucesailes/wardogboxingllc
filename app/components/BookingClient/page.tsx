import React from "react";
import Link from "next/link";

const BookingOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
      <div className="bg-white text-black p-6 shadow-xl rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Free Session</h2>
        <p className="text-lg md:text-xl mb-6">If you&apos;re scared, book a one-time free session.</p>
        <Link href="https://calendly.com/example/basic" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Book Now 
          </a>
        </Link>
      </div>
      {/* Enhanced individual booking option cards */}
      <div className="bg-white text-black p-6 shadow-xl rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Boxing</h2>
        <p className="text-lg md:text-xl mb-6">Ideal for beginners looking to learn the basics of boxing.</p>
        <Link href="https://calendly.com/example/basic" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Book Now
          </a>
        </Link>
      </div>

      {/* Repeat the enhanced card for each booking option */}
      <div className="bg-white text-black p-6 shadow-xl rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Self-Defense</h2>
        <p className="text-lg md:text-xl mb-6">Designed for intermediate boxers to improve their skills.</p>
        <Link href="https://calendly.com/example/advanced" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Book Now
          </a>
        </Link>
      </div>

      <div className="bg-white text-black p-6 shadow-xl rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Fitness</h2>
        <p className="text-lg md:text-xl mb-6">Perfect for professional boxers seeking elite training.</p>
        <Link href="https://calendly.com/example/pro" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Book Now
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BookingOptions;

