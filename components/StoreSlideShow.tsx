import Image  from "next/image";    
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

const StoreSlideshow: React.FC<SlideshowProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
      };

    return (

        <div className="text-center m-10 shadow-lg">
        <h1 className={`${styles.gradientHeader} mx-4 mt-4 mb-2 text-2xl sm:text-3xl lg:text-4xl transition-all duration-300 transform hover:scale-105`}>WAR DOG BOXING MERCH AVAILABLE</h1>
        <Slider {...settings} className="w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">

{images.map((image, index) => (
 <div key={index} className="">
    <Image src={image.src} alt={image.alt} width={100} height={100}  layout="responsive" className="transition-all duration-300 transform hover:scale-105"/>
  </div>
))}
</Slider>

        </div>
    );
}

export default StoreSlideshow;