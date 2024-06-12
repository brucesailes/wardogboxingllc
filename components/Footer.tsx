import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-black mt-auto text-white text-l sm:text-xs md:text-base lg:text-l font-semibold">
      <div className="container mx-auto flex flex-col items-center">
        {/* <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://www.instagram.com/wardogboxing/?igshid=1sewkk192ybyg" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-purple-500 text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Link> */}
          {/* <Link href="https://www.tiktok.com/@war.dog.boxing?" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
              <FontAwesomeIcon icon={faTiktok}/>
            </a>
          </Link> */}
          {/* <Link href="https://www.youtube.com/@WarDogBoxing" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl">
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
          </Link>
        </div> */}
        <p className="text-l text-center mb-4">
          COPYRIGHT © 2024 War Dog Boxing - ALL RIGHTS RESERVED.
        </p>
        <p className="text-l text-center">
          Developed By: <a href="https://www.brucesailes.com" target="_blank" rel="noopener" className="underline">Bruce Sailes</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;



