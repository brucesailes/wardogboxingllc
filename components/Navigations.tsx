import Link from "next/link";
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/Navigations.module.css";
import { faHome, faMessage, faShop } from "@fortawesome/free-solid-svg-icons";

export default function Navigations(): ReactElement {
    return (
        <nav className={`${styles.nav} fixed top-0 left-0 w-full shadow-md z-50 p-4 h-14 mb-20`}>
            <ul className="flex justify-center items-center space-x-6 md:space-x-6 md:text-lg lg:text-2xl">
                <li className="text-blue-500 text-xl sm:text-xs md:text-base lg:text-2xl">
                    <Link href="/" legacyBehavior>
                        <a><FontAwesomeIcon icon={faHome} /></a>
                    </Link>
                </li>
                <li className="text-blue-500 text-xl sm:text-xs md:text-base lg:text-2xl">
                    <Link href="/Shop" legacyBehavior>
                        <a><FontAwesomeIcon icon={faShop} /></a>
                    </Link>
                </li>
                <li className="text-blue-500 text-xl sm:text-xs md:text-base lg:text-2xl">
                    <Link href="/Socials" legacyBehavior>
                        <a><FontAwesomeIcon icon={faMessage} /></a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
