import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center h-[80vh] gap-10">
      <h1 className="text-4xl sm:text-6xl font-semibold text-center">
        Get An Unforgettable <br /> Event Experience With us
      </h1>
      <Link to={"/explore"}>
        <button className="btn hover:text-white hover:bg-neutral border-0">
          Explore More
        </button>
      </Link>
    </div>
  );
};

export default Banner;
