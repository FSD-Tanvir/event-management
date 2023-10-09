import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ServiceDetails = () => {
  const services = useLoaderData();
  const [service, setService] = useState();
  const { id } = useParams();

  useEffect(() => {
    const findService = services.find((item) => item.id === id);
    setService(findService);
  }, [id, services]);

  const { img, title, description, price } = service || {};

  return (
    <div>
      <Navbar />
      <div className="bg-base-200 rounded">
        <div className="space-y-6 py-10 max-w-3xl  mx-auto  ">
          <h1 className=" py-5 text-3xl sm:text-6xl font-semibold">{title}</h1>
          <img src={img} alt="" className="w-full rounded-lg" />
          <p className="text-xl ">{description}</p>
          <div className="flex justify-between">
            <p className="text-neutral text-4xl font-medium">Price: {price}$</p>
            <button className="bg-neutral rounded-lg p-3  text-white font-medium text-lg">
              Booking Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
