import React from "react";
import Link from "next/link";
import styles from '../styles/Booking.module.css';

const BookingOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-8">
      <div className="bg-white  text-blue-500  p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105">
        <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>Free Session</h2>
        <p className="text-lg md:text-xl mb-6">If you&apos;re scared, book a one-time free session.</p>
        <Link href="https://calendly.com/wardogboxingllc/free-session" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 hover:text-black font-bold py-2 px-6 rounded-full shadow-xl">
            Book 
          </a>
        </Link>
      </div>
      {/* Enhanced individual booking option cards */}
      <div className="bg-white  text-blue-500  p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105">
        <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>Boxing</h2>
        <p className="text-lg md:text-xl mb-6">Ideal for beginners looking to learn the basics of boxing.</p>
        <Link href="https://calendly.com/wardogboxingllc/boxing" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-white  text-blue-500 hover:text-black font-bold py-2 px-6 rounded-full shadow-xl">
            Book
          </a>
        </Link>
      </div>

      {/* Repeat the enhanced card for each booking option */}
      <div className="bg-white  text-blue-500  p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105">
      <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>Self-Defense</h2>
      <p className="text-lg md:text-xl mb-6">Learn essential self-defense techniques to enhance personal safety and confidence.</p>
        <Link href="https://calendly.com/wardogboxingllc/self-defense" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-white  text-blue-500 hover:text-black font-bold py-2 px-6 rounded-full shadow-xl">
            Book
          </a>
        </Link>
      </div>

      <div className="bg-white  text-blue-500  p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105">
      <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>Fitness</h2>
      <p className="text-lg md:text-xl mb-6">Tailored fitness programs to build strength, endurance, and overall health.</p>
        <Link href="https://calendly.com/wardogboxingllc/fitness" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="bg-white text-blue-500 hover:text-black font-bold py-2 px-6 rounded-full shadow-xl">
            Book
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BookingOptions;

