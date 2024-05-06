import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import styles from "../styles/Navigations.module.css";

export default function Navigations () {
    return (
      <nav
        className={`${styles.nav} fixed top-0 left-0 w-full shadow-md z-50 p-4 h-14 mb-20`}
      >
        <ul className="flex justify-center items-center space-x-6 md:space-x-6 md:text-lg lg:text-2xl">
          <li className="text-blue-500 text-l sm:text-xs md:text-base lg:text-xl hover:text-blue-600">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
             HOME
            </ScrollLink>
          </li>
          <li className="text-blue-500 text-l sm:text-xs md:text-base lg:text-xl hover:text-blue-600">
            <ScrollLink
              to="booking"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              SERVICES
            </ScrollLink>
          </li>
          <li className="text-blue-500 text-l sm:text-xs md:text-base lg:text-xl hover:text-blue-600">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>
      </nav>
    );
  }