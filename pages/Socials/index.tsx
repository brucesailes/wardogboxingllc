import React from 'react';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Socials(): ReactElement {
    return (
        <div className="text-center mt-20 p-4">
            <div className="inline-block text-left border border-gray-300 p-8 rounded-lg">
                <Image src="/wardogboxing.png" alt="War Dog Boxing Logo" width={500} height={500} />
                <h1 className="text-blue-600 text-center text-3xl font-bold m-4">CONNECT WITH US:</h1>
                <ul className="mt-4 list-none p-0 text-center">
                    <li className="mb-2"><a href="https://www.instagram.com/wardogboxing/?igsh=ZmV3c2tvMTl3NzVu" target="_blank" rel='noopener' className="text-purple-500"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>


                    <li className="mb-2"><a href="https://www.tiktok.com/@war.dog.boxing?_t=8lu6lA9PccA&_r=1" target="_blank" rel='noopener' className="text-black"><FontAwesomeIcon icon={faTiktok} /> TikTok</a></li>


                    <li className="mb-2"><a href="https://www.youtube.com/@WarDogBoxing" target="_blank" rel='noopener' className='text-red-500'><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
                </ul>
            </div>
        </div>
    );
}
