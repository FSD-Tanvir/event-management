import Banner from "./Banner";
import Features from "./Features";
import Navbar from "../../components/Navbar";
import Services from "./Services";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/vcPtQsS/event-bg.jpg')] bg-cover bg-blend-saturation">
        <div className="backdrop-brightness-50  h-screen text-white ">
          <Navbar />
          <Banner />
        </div>
      </div>
      <Features/>
      <Services/>
      <ContactSection/>
    </div>
  );
};

export default Home;
