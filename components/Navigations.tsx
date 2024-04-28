import Link from "next/link";
import styles from "../styles/Navigations.module.css";

export default function Navigations() {
    return (
        <nav className={`${styles.nav} fixed top-0 left-0 w-full shadow-md z-50 p-4 h-14 mb-20`}>
            <ul className="flex justify-center items-center space-x-2 md:space-x-4 md:text-lg lg:text-2xl">
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/" legacyBehavior>
                        <a className="text-blue-600 hover:text-blue-500">Home</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Shop" legacyBehavior>
                        <a className="text-blue-600  hover:text-blue-500">Shop</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Socials" legacyBehavior>
                        <a className="text-blue-600  hover:text-blue-500">Socials</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
