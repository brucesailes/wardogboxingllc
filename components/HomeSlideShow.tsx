import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/HomeSlideShow.module.css";


interface Image {
    src: string;
    alt: string;
  }
  
  interface SlideshowProps {
    images: Image[];
  }


  const HomeSlideshow: React.FC<SlideshowProps> = ({ images }) => {
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
          
  
    return (
      <div className="text-center m-10">
        <h1 className={`${styles.gradientHeader} mx-4 mt-4 mb-2 text-xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 transform hover:scale-105`}>
          MAKE THE CHANGE OF A LIFETIME
        </h1>
    
        <div className="px-4 sm:px-6 lg:px-8">
          <Slider {...settings} className="m-4 max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto border shadow-lg">
            {images.map((image, index) => (
              <div key={index} className="">
                <Image src={image.src} alt={image.alt} width={100} height={100} layout="responsive" className="transition-all duration-300 transform hover:scale-105"/>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }    
  
  export default HomeSlideshow;
  