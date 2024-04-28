import ContactForm from "./ContactForm";
import styles from '../styles/Contact.module.css';



export default function Contact() {
    return(
      <main className="text-center">
         <h1 className={`${styles.gradientHeader} text-4xl  text-blue-500 font-bold mb-4 text-center transition-all duration-300 transform hover:scale-105`}>Contact Us</h1>
        <ContactForm />
      </main>
    )
  } 

  