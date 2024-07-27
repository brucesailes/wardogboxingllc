import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 bg-black mt-auto text-white text-l sm:text-xs md:text-base lg:text-l font-semibold">
      <div className="container mx-auto flex flex-col items-center">
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



