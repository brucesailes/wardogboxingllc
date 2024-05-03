// import HomeSlideShow from '../components/HomeSlideShow';
import Image from 'next/image';
import About from '../components/About';
import Booking from '../components/BookingPage';
import Contact from '../components/ContactPage';
import HomeSlideshow from '@/components/HomeSlideShow';



const image = [
  {
      src: "/slide1.png",
      alt: "Image 1",
  },
  {
      src: "/slide2.png",
      alt: "Image 2",
  },
  {
      src: "/slide3.png",
      alt: "Image 3",
  },

  ];

export default function Page() {
  return (
    <main className="m-5 flex flex-col justify-center items-center space-y-8">
      <About  />
      <HomeSlideshow images={image} />
      <Booking />
      <Contact />
    </main>
  );
}

