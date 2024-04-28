import Link from "next/link";
import styles from "../styles/navigation.module.css";

export default function Navigations() {
    return (
        <nav className={`${styles.nav} fixed top-0 left-0 w-full shadow-md z-50 py-10 h-14 mb-20`}>
            <ul className="flex justify-center items-center space-x-2 md:space-x-4">
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Home</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/About" legacyBehavior>
                        <a className="text-white hover:text-blue-500">About</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Services" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Services</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Contact" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
