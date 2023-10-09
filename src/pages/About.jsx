import { FaPeopleGroup } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import { BiHappyHeartEyes, BiHomeAlt2 } from "react-icons/bi";
import { GiGraveFlowers } from "react-icons/gi";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        {/* about header */}
        <div className="py-14 px-8 bg-neutral opacity-70 text-white text-center space-y-4">
          <h1 className=" py-5 text-3xl sm:text-6xl font-semibold">
            About Eventist
          </h1>
        </div>
        {/* About us */}
        <div className="grid lg:grid-cols-2 py-10 items-center px-3 gap-10">
          <div>
            <h2 className="font-semibold text-2xl hover:opacity-70">
              About Eventist
            </h2>
            <h1 className="py-5 text-3xl sm:text-6xl font-semibold">
              Make Your Event <br />
              Idea Come True
            </h1>
            <div className="flex gap-10 ml-10 text-xl font-medium">
              <ul className="list-disc">
                <li>Provide Best Quality Events</li>
                <li>Satisfaction Guarantee</li>
                <li>Experienced Team</li>
              </ul>
              <ul className="list-disc">
                <li>Satisfaction Guarantee</li>
                <li>Experienced Team</li>
                <li>Provide Best Quality Events</li>
              </ul>
            </div>
          </div>
          <div className="">
            <img
              src="https://i.ibb.co/9Tj0d6y/why-choose.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
        {/* why choose us */}
        <div className="grid lg:grid-cols-2 py-10 items-center gap-10  px-2 ">
          <div className="order-last  lg:order-first">
            <img
              src="https://i.ibb.co/grH9kV6/about-us-1.jpg"
              alt=""
              className="rounded-lg "
            />
          </div>
          <div>
            <h2 className="font-semibold text-2xl hover:opacity-70 ">
              Why choose us
            </h2>
            <h1 className="py-2 text-2xl sm:text-6xl font-semibold">
              Very Responsible <br /> With Your Event
            </h1>
            {/* cards */}
            <div>
              <div className="grid sm:grid-cols-2 gap-2 sm:px-2 ">
                {/* card-1 */}
                <div className="card shadow-xl flex-row py-2 ">
                  <figure>
                    <FaPeopleGroup size={100} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Friendly Team</h2>
                    <p>
                      A harmonious group of individuals who collaborate,
                      support, and communicate openly.
                    </p>
                  </div>
                </div>
                {/* card-2 */}
                <div className="card shadow-xl flex-row px-2">
                  <figure>
                    <BiHomeAlt2 size={100} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Perfect Venues</h2>
                    <p>
                      Ideal spaces for ensuring your special occasion is truly
                      exceptional
                    </p>
                  </div>
                </div>
                {/* card-3 */}
                <div className="card shadow-xl flex-row px-2">
                  <figure>
                    <GiGraveFlowers size={100} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Unique Scenarios</h2>
                    <p>
                      Unique scenarios offering opportunities for novel
                      experiences.
                    </p>
                  </div>
                </div>
                {/* card-4 */}
                <div className="card shadow-xl flex-row px-2">
                  <figure>
                    <BiHappyHeartEyes size={100} />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Unforgettable Time</h2>
                    <p>
                      Cherished moments etched in our hearts, a tapestry of
                      memories that warm the soul.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
