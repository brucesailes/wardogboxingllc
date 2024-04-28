import Image from 'next/image'; 
import { companyInfo } from "../src/data/companyInfo";
import styles from '../styles/About.module.css';


export default function About() {
    return (
        <main className="flex flex-col  text-center text-blue-500 items-center justify-center min-h-screen mt-10">
            <header className="text-center mb-8">
                <h1 className={`${styles.gradientHeader} text-4xl md:text-6xl font-bold  transition-all duration-300 transform hover:scale-105`}>War Dog Boxing</h1>
                <p className="text-l md:text-xl  mt-4  transition-all duration-300 transform hover:scale-105">{companyInfo.companySlogan}</p>
            </header>
            <section className="w-full max-w-4xl mx-auto p-8 rounded-xl shadow-xl space-y-6  transition-all duration-300 transform hover:scale-105">
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
                    Our Mission:
                </h2>

                <p className="text-sm md:text-xl text-center px-6 md:px-16 leading-relaxed">
                    {companyInfo.aboutText}
                </p>
            </section>
        </main>
    );
}
