import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-[80vh] gap-10">
      <h1 className="text-4xl sm:text-6xl font-semibold text-center">
        Get An Unforgettable <br /> Event Experience With us
      </h1>
      <div className="flex gap-5">
        <Link to={"/explore"}>
          <button className="btn hover:text-white hover:bg-neutral border-0">
            Explore More
          </button>
        </Link>
        <Link to={"/about"}>
          <button className="btn hover:text-white hover:bg-neutral border-0">
            About us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
