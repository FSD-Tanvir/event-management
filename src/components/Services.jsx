import { useEffect, useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-10">
      <h1 className="text-center py-8 text-3xl sm:text-6xl font-semibold">
        Event Service We Provide
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-2 ">
        {services.map((service) => {
          return (
            <div
              className="max-w-lg mx-auto flex flex-col p-2 rounded-lg border-2 border-neutral-500   space-y-3"
              key={service.id}
            >
              <div className="flex-grow">
                <img src={service.img} alt="" className=" w-full rounded-lg " />
              </div>
              <h1 className="font-semibold text-2xl">{service.title}</h1>
              <p className="text-xl font-medium ">{service.description}</p>
              <div className="my-2 flex justify-between items-center">
                <p className="flex items-center gap-1 text-xl font-medium">
                  Price:{service.price}
                  <AiOutlineDollar className="text-2xl" />
                </p>
                <button className="bg-neutral rounded-lg p-3  text-white font-medium text-lg">
                  Show Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
