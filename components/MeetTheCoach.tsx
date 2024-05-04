import Image from 'next/image';
import styles from '../styles/Coach.module.css';

export default function MeetTheCoach() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* Image container */}
            <div className="flex justify-center items-center">
                <Image 
                    src="/coach.png" 
                    alt="Coach Kevin Cooper" 
                    width={300} 
                    height={300} 
                    className="rounded-full"  // Makes the image round, remove if not needed
                />
            </div>

            {/* Text content container */}
            <div className="flex flex-col justify-center">
                <h2 className={`${styles.gradientHeader} text-2xl font-bold text-center md:text-left transition-all duration-300 transform hover:scale-105`}>
                    Meet the Owner & Coach
                </h2>
                <p className="text-md mt-2 text-gray-600 text-center md:text-left">
                    Coach Kevin Cooper has extensive experience in martial arts and a passion for teaching. His expertise encompasses fitness, boxing, and self-defense. Kevin has trained with some of the top coaches in the world and is dedicated to sharing his knowledge and skills with others.
                </p>
            </div>
        </div>
    );
}
