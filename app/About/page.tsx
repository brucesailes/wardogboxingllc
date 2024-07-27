import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function MeetTheCoach() {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-4 pt-24 md:pt-32">
            {/* Image container */}
            <div className="flex justify-center items-center">
                <Image 
                    src="/coach.png" 
                    alt="Coach Kevin Cooper" 
                    width={500} 
                    height={500} 
                    className="rounded-full shadow-xl"  // Makes the image round, remove if not needed
                />
            </div>

            {/* Text content container */}
            <div className="flex flex-col justify-center m-10 p-2">
                <h2 className="text-4xl font-bold text-center md:text-left transition-all duration-300 transform hover:scale-105">
                    Meet Your Coach
                </h2>
                <p className="text-lg mt-4 text-black text-center md:text-left transition-all duration-300 transform hover:scale-105">
                    Coach Kevin Cooper has extensive experience in martial arts and a passion for teaching. His expertise encompasses fitness, boxing, and self-defense. Kevin has trained with some of the top coaches in the industry and is dedicated to sharing his knowledge and skills with others.
                </p>
                <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    <Link href="https://www.instagram.com/wardogboxing/?igshid=1sewkk192ybyg" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-purple-500 text-2xl">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </Link>
                    <Link href="https://www.tiktok.com/@war.dog.boxing?" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-black text-2xl">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </a>
                    </Link>
                    <Link href="https://www.youtube.com/@WarDogBoxing" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="text-red-500 text-2xl">
                            <FontAwesomeIcon icon={faYoutube}/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
