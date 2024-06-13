import ContactForm from "../../components/ContactForm";
import Image from 'next/image';


export default function Contact() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-16 md:pt-15 py-8">
            <section className="relative w-full text-white py-40">
                <div className="absolute inset-0">
                    <Image 
                        src="/images/compressed/contact-image-1.png" 
                        alt="Background Image" 
                        fill={true} 
                        style={{ objectFit: "cover" }} 
                        quality={50}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="/images/compressed/contact-image-1.png"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                    <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 transform hover:scale-105">
                        GET IN TOUCH
                    </h1>
                    <p className="text-lg md:text-xl mb-2 transition-all duration-300 transform hover:scale-105">
                        Phone number: +1 (659) 901-9298
                    </p>
                    <p className="text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
                        Email Address: wardogboxingllc@gmail.com
                    </p>
                </div>
            </section>
            <div className="w-full max-w-4xl px-6 mt-10">
                <h2 className="text-4xl md:text-5xl text-center text-black font-bold mb-10 transition-all duration-300 transform hover:scale-105">ENTER INFORMATION BELOW</h2>
                <div className="bg-white rounded-lg shadow-lg">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}


