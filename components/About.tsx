import Image from 'next/image'; 
import { companyInfo } from "../src/data/companyInfo";
import styles from '../styles/About.module.css';


export default function About() {
    return (
        <main className="flex flex-col shadow-lg text-center text-blue-500 items-center justify-center min-h-screen mt-20  transition-all duration-300 transform hover:scale-105">
            <header className="text-center mb-8">
                <h1 className={`${styles.gradientHeader} text-4xl mt-5 md:text-6xl font-bold  transition-all duration-300 transform hover:scale-105`}>WAR DOG BOXING</h1>
                <blockquote className="text-l md:text-xl  mt-4  transition-all duration-300 transform hover:scale-105">&rdquo;{companyInfo.companySlogan}&rdquo;
                <footer>- KEVIN COOPER</footer>
                </blockquote>
            </header>
            <section className="w-full max-w-4xl mx-auto p-8 rounded-xl shadow-xl space-y-6">
                <div className="flex justify-center items-center p-6">
                    <div className="w-64 h-64 md:w-96 md:h-96 relative overflow-hidden rounded-full shadow-2xl">
                        {/* Image component, responsive sizing */}
                        <Image 
                            src="/wardogboxing.png"
                            alt="War dog boxing logo"
                            priority
                            fill={true} 
                            style={{objectFit: "cover"}}
                            className="rounded-full"
                        />
                    </div>
                </div>
                
                <h2 className={`${styles.gradientHeader} text-3xl font-bold`}>
                    OUR MISSION:
                </h2>

                <div className='flex justify-center items-center text-center text-l md:text-xl text-center leading-relaxed'>
                    <p className="">
                        {companyInfo.aboutText}
                    </p>
                </div>

            </section>
        </main>
    );
}
