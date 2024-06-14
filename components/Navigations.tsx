import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Importing Heroicons
import styles from '../styles/Navigations.module.css';

export default function Navigations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.nav} fixed bg-black top-0 left-0 w-full shadow-md z-50 p-4 ${isOpen ? 'h-auto' : 'h-16'} flex justify-between items-center`}>
      <div className="ml-4 flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/wardogboxing.webp" alt="Wardog Boxing Logo" width={50} height={50} />
          </a>
        </Link>
      </div>
      <div className="lg:hidden flex items-center">
        <button
          type='button'
          className="text-white focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XIcon className="w-6 h-6" /> // Using Heroicons
          ) : (
            <MenuIcon className="w-6 h-6" /> // Using Heroicons
          )}
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:justify-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 text-sm xl:text-base">
          <li className="text-white text-l sm:text-xs md:text-base lg:text-xl font-semibold">
            <Link href="/About" legacyBehavior>
              <a className="cursor-pointer" onClick={() => setIsOpen(false)}>ABOUT</a>
            </Link>
          </li>
          <li className="text-white text-l sm:text-xs md:text-base lg:text-xl font-semibold">
            <Link href="/Booking" legacyBehavior>
              <a className="cursor-pointer" onClick={() => setIsOpen(false)}>CLASSES</a>
            </Link>
          </li>
          <li className="text-white text-l sm:text-xs md:text-base lg:text-xl font-semibold">
            <Link href="/FreeTrial" legacyBehavior>
              <a className="cursor-pointer" onClick={() => setIsOpen(false)}>FREE TRIAL</a>
            </Link>
          </li>
          <li className="text-white text-l sm:text-xs md:text-base lg:text-xl font-semibold">
            <Link href="/Contact" legacyBehavior>
              <a className="cursor-pointer" onClick={() => setIsOpen(false)}>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
