import Image from 'next/image'; 
import { companyInfo } from "../../../src/data/companyInfo";

export default function About() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4">
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">War Dog Boxing</h1>
                <p className="text-l md:text-xl font-light mt-4">{companyInfo.companySlogan}</p>
            </header>
            <section className="w-full max-w-4xl mx-auto p-8 rounded-xl shadow-xl space-y-6">
                <div className="flex justify-center items-center p-6">
                    <div className="w-64 h-64 md:w-96 md:h-96 relative overflow-hidden rounded-full shadow-lg">
                        {/* Image component, responsive sizing */}
                        <Image 
                            src="/wardoglogo.png"
                            alt="War dog boxing logo"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                </div>
                <h2 className="text-3xl font-semibold text-center">
                    Our Mission:
                </h2>
                <p className="text-sm md:text-xl px-6 md:px-16 leading-relaxed">
                    {companyInfo.aboutText}
                </p>
            </section>
        </main>
    );
}

