import Image from "next/image";
import styles from "../styles/HomeSlideShow.module.css";

export default function HomeSlideShow() {
  return (
    <div>
      <div className="text-center">
        <h1 className={`${styles.gradientHeader} mx-4 mt-4 mb-2 text-3xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 transform hover:scale-105`}>
          MAKE THE CHANGE OF A LIFETIME
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
        <div className="p-2 transition-all duration-300 transform hover:scale-105">
          <Image src="/slide1.png" alt="Image 1" width={300} height={300} layout="responsive"/>
        </div>

        <div className="p-2 transition-all duration-300 transform hover:scale-105">
          <Image src="/slide2.png" alt="Image 2" width={300} height={300} layout="responsive" />
        </div>

        <div className="p-2 transition-all duration-300 transform hover:scale-105">
          <Image src="/slide3.png" alt="Image 3" width={300} height={300} layout="responsive" />
        </div>

      </div>
    </div>
  );
}


  