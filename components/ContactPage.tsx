import ContactForm from "../components/ContactForm";
import styles from '../styles/Contact.module.css';
import Image from "next/image";



export default function Contact() {
    return(
      <main className="text-center">
        <div className="flex items-center justify-center space-x-4">
          <h1 className={`${styles.gradientHeader} text-4xl text-blue-500 font-bold mb-4 transition-all duration-300 transform hover:scale-105`}>CONTACT US</h1>
          <Image src={'/contact.png'} width={50} height={50} alt="Contact Us"className="pb-4 transition-all duration-300 transform hover:scale-105"/>
        </div>
        <ContactForm />
      </main>
    )
}


  