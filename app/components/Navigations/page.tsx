import Link from "next/link";

export default function Navigations() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50 py-6 border-b" style={{ backgroundImage: 'linear-gradient(to right, black, rgb(48, 48, 184))' }}>
            <ul className="flex justify-center items-center space-x-2 md:space-x-4">
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Home</a>
                    </Link>
                </li>
                {/* <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Shop" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Shop</a>
                    </Link>
                </li> */}
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Socials" legacyBehavior>
                        <a className="text-white hover:text-blue-500">Socials</a>
                    </Link>
                </li>
                <li className="text-xs sm:text-sm md:text-base lg:text-lg">
                    <Link href="/Owner" legacyBehavior>
                        <a className="text-white hover:text-blue-500">About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
