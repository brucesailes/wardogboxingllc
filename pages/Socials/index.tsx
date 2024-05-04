import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/HomeSlideShow.module.css';

export default function Socials() {
    return (
        // Main container with flexbox to center all contents
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="p-4 mt-20 text-center">
                {/* Image and Social Icons Container */}
                <div className="flex flex-col items-center justify-center p-8 rounded-lg relative">
                    {/* Header */}
                    <div className={`${styles.gradientHeader} text-4xl font-bold md:text-6xl transition-all duration-300 transform hover:scale-105 z-10`}>
                        <h1>WAR DOG BOXING</h1>
                    </div>
                    <Image src="/wardogboxing.png" alt="War Dog Boxing Logo" width={400} height={200} />
                    <ul className="grid grid-cols-3 gap-2 mt-6 list-none p-4 text-center w-full">
                        <li className="mb-2">
                            <Link href="https://www.instagram.com/wardogboxing/?igsh=ZmV3c2tvMTl3NzVu" legacyBehavior={true}>
                                <a target="_blank" rel="noopener noreferrer" className="text-purple-500 text-6xl">
                                    <FontAwesomeIcon icon={faInstagram} className='animate-bounce'/>
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="https://www.tiktok.com/@war.dog.boxing?_t=8lu6lA9PccA&_r=1" legacyBehavior={true}>
                                <a target="_blank" rel="noopener noreferrer" className="text-black text-6xl">
                                    <FontAwesomeIcon icon={faTiktok} className='animate-bounce' />
                                </a>
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="https://www.youtube.com/@WarDogBoxing" legacyBehavior={true}>
                                <a target="_blank" rel="noopener noreferrer" className='text-red-500 text-6xl'>
                                    <FontAwesomeIcon icon={faYoutube} className='animate-bounce' />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

