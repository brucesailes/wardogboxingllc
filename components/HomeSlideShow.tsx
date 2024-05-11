import Image from "next/image";
import styles from "../styles/HomeSlideShow.module.css";

export default function HomeSlideShow() {
  return (
    <div>
      <div className="text-center">
        <h1 className={`${styles.gradientHeader} mx-4 mt-4 mb-4 text-3xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 transform hover:scale-105`}>
          PERSONAL TRAINING AVAILABLE
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8">
    <div className="p-2 rounded-lg transition-all duration-300 transform hover:scale-105">
        <Image src="/slide1.png" alt="Image 1" width={500} height={400} className="rounded-lg shadow-xl" />
    </div>

    <div className="p-2 transition-all duration-300 transform hover:scale-105">
        <Image src="/slide2.png" alt="Image 2" width={500} height={400} className="rounded-lg shadow-xl" />
    </div>

    <div className="p-2 transition-all duration-300 transform hover:scale-105">
        <Image src="/slide3.png" alt="Image 3"  width={500} height={400} className="rounded-lg shadow-xl" />
    </div>
</div>

    </div>
  );
}


  