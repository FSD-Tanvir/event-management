import Banner from "../components/Banner";
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
    </div>
  );
};

export default Home;
