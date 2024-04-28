import About from '../components/About';
import Booking from '../components/BookingPage';
import Contact from '../components/ContactPage';





export default function Page() {
  return (
    <main className="m-5 flex flex-col items-center space-y-8">
      <About  />
      <Booking />
      <Contact />
    </main>
  );
}

