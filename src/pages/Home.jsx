import Banner from "../components/Banner";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

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
    </div>
  );
};

export default Home;
