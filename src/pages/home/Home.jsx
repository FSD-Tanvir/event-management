import Banner from "./Banner";
import Features from "./Features";
import Navbar from "../../components/Navbar";
import Services from "./Services";
import ContactSection from "./ContactSection";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/vcPtQsS/event-bg.jpg')] bg-cover bg-blend-saturation">
        <div className="backdrop-brightness-50  h-screen text-white ">
          <Navbar />
          <Banner />
        </div>
      </div>
      <div data-aos="fade-up">
        <Features />
      </div>
      <div data-aos="fade-in">
        <Services />
      </div>
      <div data-aos="fade-down">
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
