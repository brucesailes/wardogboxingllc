import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-gray-200 mt-auto text-blue-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-l text-center md:text-left mb-4 md:mb-0">
          <p>
            COPYRIGHT © 2024 War Dog Boxing - ALL RIGHTS RESERVED.
          </p>
          <ul className="flex justify-center md:justify-start mt-6 list-none p-4">
            <li className="mx-2">
              <Link href="https://www.instagram.com/wardogboxing/?igshid=1sewkk192ybyg" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="text-purple-500 text-2xl">
                  <FontAwesomeIcon icon={faInstagram} className="animate-bounce" />
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="https://www.tiktok.com/@war.dog.boxing?" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
                  <FontAwesomeIcon icon={faTiktok} className="animate-bounce" />
                </a>
              </Link>
            </li>
            <li className="mx-2">
              <Link href="https://www.youtube.com/@WarDogBoxing" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl">
                  <FontAwesomeIcon icon={faYoutube} className="animate-bounce" />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-l text-center md:text-right">
          <p>
            Developed By: <a href="https://www.brucesailes.com" target="_blank" rel="noopener" className="underline">Bruce Sailes</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
