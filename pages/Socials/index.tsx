import React from 'react';
import Image from 'next/image';

export default function Socials() {
    return (
        <div className="text-center mt-20 p-4">
            <h1 className="text-blue-600 text-3xl font-bold mb-8">Connect with us on social media</h1>
            <div className="inline-block text-left border border-gray-300 p-8 rounded-lg">
                <Image src="/wardogboxing.png" alt="War Dog Boxing Logo" width={500} height={500} />
                <p className="text-blue-600 text-lg mb-4">Follow War Dog Boxing on:</p>
                <ul className="list-none p-0">
                    <li className="mb-2"><a href="https://www.instagram.com/wardogboxing/?igsh=ZmV3c2tvMTl3NzVu" target="_blank" rel='noopener' className="text-blue-500 hover:text-blue-700">Instagram</a></li>
                    <li className="mb-2"><a href="https://www.tiktok.com/@war.dog.boxing?_t=8lu6lA9PccA&_r=1" target="_blank" rel='noopener' className="text-blue-500 hover:text-blue-700">TikTok</a></li>
                    <li className="mb-2"><a href="https://www.youtube.com/@WarDogBoxing" target="_blank" rel='noopener' className='text-blue-500 hover:text-blue-700'>YouTube</a></li>
                </ul>
            </div>
        </div>
    );
}