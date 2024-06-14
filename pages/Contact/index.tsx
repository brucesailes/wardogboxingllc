import ContactForm from "../../components/ContactForm";
import Image from 'next/image';

export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 md:pt-15 py-8">
            <section className="relative w-full text-white py-32 bg-black">
                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Logo Column */}
                        <div className="flex justify-center md:justify-end mb-8 md:mb-0">
                            <Image 
                                src="/wardogboxing.webp" 
                                alt="Wardog Boxing Logo" 
                                width={200} 
                                height={200} 
                            />
                        </div>
                        {/* Contact Info Column */}
                        <div className="text-center md:text-left">
                            <h1 className="text-white text-5xl md:text-4xl font-bold mb-4 transition-all duration-300 transform hover:scale-105">
                                GET IN TOUCH
                            </h1>
                            <p className="text-lg md:text-l mb-2 transition-all duration-300 transform hover:scale-105">
                                Phone number: +1 (659) 901-9298
                            </p>
                            <p className="text-lg md:text-l transition-all duration-300 transform hover:scale-105">
                                Email Address: wardogboxingllc@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full max-w-4xl px-6 mt-10">
                <h2 className="text-4xl md:text-2xl text-center text-black font-bold mb-10 transition-all duration-300 transform hover:scale-105">ENTER INFORMATION BELOW</h2>
                <div className="bg-white rounded-lg shadow-lg">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
