import React from 'react';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/HomeSlideShow.module.css';

export default function Socials(): ReactElement {
    return (
        <div className="text-center mt-20 p-4">
            <h1 className={`${styles.gradientHeader} text-4xl mt-5 md:text-6xl font-bold  transition-all duration-300 transform hover:scale-105`}>WAR DOG BOXING</h1>
            <div className="inline-block text-left p-8 rounded-lg">
                <Image src="/wardogboxing.png" alt="War Dog Boxing Logo" width={400} height={200} />
                <ul className="grid grid-cols-3 mt-6 p-4 gap-2 list-none p-0 text-center">
    <li className="mb-2">
        <Link href="https://www.instagram.com/wardogboxing/?igsh=ZmV3c2tvMTl3NzVu" legacyBehavior={true}>
            <a target="_blank" rel="noopener" className="text-6xl text-purple-500">
                <FontAwesomeIcon icon={faInstagram} className='animate-bounce'/>
            </a>
        </Link>
    </li>
    <li className="mb-2">
        <Link href="https://www.tiktok.com/@war.dog.boxing?_t=8lu6lA9PccA&_r=1" legacyBehavior={true}>
            <a target="_blank" rel="noopener" className="text-6xl text-black">
                <FontAwesomeIcon icon={faTiktok} className='animate-bounce'  />
            </a>
        </Link>
    </li>
    <li className="mb-2">
        <Link href="https://www.youtube.com/@WarDogBoxing" legacyBehavior={true}>
            <a target="_blank" rel="noopener" className='text-6xl text-red-500'>
                <FontAwesomeIcon icon={faYoutube} className='animate-bounce' />
            </a>
        </Link>
    </li>
</ul>
            </div>
        </div>
    );
}
