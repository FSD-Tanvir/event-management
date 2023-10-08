import Banner from "../components/Banner";
import Features from "../components/Features";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

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
    </div>
  );
};

export default Home;
