import React from "react";
import Link from "next/link";
import styles from '../styles/Booking.module.css';

const BookingOptions = () => {
  const bookingLinkStyle = "bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-full shadow-xl";

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Free Session */}
        <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>FREE SESSION</h2>
            <p className="text-lg md:text-xl mb-8">If you&apos;re scared, book a one-time free session.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/free-session" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={bookingLinkStyle}>
              BOOK 
            </a>
          </Link>
        </div>

        {/* Single Session */}
        <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>Single Session</h2>
            <p className="text-lg md:text-xl mb-4">$40 per session</p>
            <p className="text-lg md:text-xl mb-8">Ideal for beginners looking to learn the basics of boxing, fitness and self-defense.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/singlesession" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={bookingLinkStyle}>
              BOOK
            </a>
          </Link>
        </div>

        {/* 4 Sessions per Month */}
        <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>4 Sessions per Month</h2>
            <p className="text-lg md:text-xl mb-4">$100 per month</p>
            <p className="text-lg md:text-xl mb-8">Learn essential self-defense techniques to enhance personal safety and confidence. Build strength and endurance. Learn the fundamentals of boxing.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/4-sessions-per-month" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={bookingLinkStyle}>
              BOOK
            </a>
          </Link>
        </div>

        {/* Twice a Week Sessions */}
        <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>2x a Week</h2>
            <p className="text-lg md:text-xl mb-4">$150 per month</p>
            <p className="text-lg md:text-xl mb-8">Tailored fitness programs to build strength, endurance, and overall health.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/twice-a-week-sessions" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={bookingLinkStyle}>
              BOOK
            </a>
          </Link>
        </div>

        {/* 3 Times a Week per Month */}
        <div className="bg-white text-blue-500 p-6 shadow-xl rounded-xl text-center transition-all duration-300 transform hover:scale-105 flex flex-col justify-between">
          <div className="flex-grow">
            <h2 className={`${styles.bookingHeader} text-2xl md:text-3xl font-bold mb-4`}>3x a Week</h2>
            <p className="text-lg md:text-xl mb-4">$250 per month</p>
            <p className="text-lg md:text-xl mb-8">Comprehensive training for those dedicated to achieving peak fitness levels.</p>
          </div>
          <Link href="https://calendly.com/wardogboxingllc/3-times-a-week" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className={bookingLinkStyle}>
              BOOK
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookingOptions;





