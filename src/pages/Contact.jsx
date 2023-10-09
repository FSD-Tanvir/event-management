import Navbar from "../components/Navbar";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* contact header */}
      <div className="py-14 px-8  text-center space-y-4">
        <h1 className=" py-5 text-3xl sm:text-6xl font-semibold">Contact Us</h1>
      </div>
      {/* contact us section */}
      <div className="grid px-2 lg:grid-cols-2 items-center gap-10 ">
        <div>
          <Form />
        </div>
        <div className="space-y-16 mb-4">
          <h2 className="font-semibold text-2xl hover:opacity-70">
            Contact Us
          </h2>
          <h1 className="py-5 text-3xl sm:text-6xl font-semibold ">
            Get In Touch
          </h1>
          <div className="grid sm:grid-cols-2 gap-2 px-2 ">
            {/* card-1 */}
            <div className="card shadow-xl flex-row py-2">
              <figure>
                <AiFillPhone size={60} />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Phone</h2>
                <p>+123-234-1234</p>
              </div>
            </div>
            {/* card-2 */}
            <div className="card shadow-xl flex-row px-2">
              <figure>
                <AiOutlineMail size={60} />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Email</h2>
                <p>hello@eventist.com</p>
              </div>
            </div>
            {/* card-3 */}
            <div className="card shadow-xl flex-row px-2">
              <figure>
                <BiWorld size={60} />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Website</h2>
                <p>www.eventist.com</p>
              </div>
            </div>
            {/* card-4 */}
            <div className="card shadow-xl flex-row px-2">
              <figure>
                <FaLocationDot size={60} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Address</h2>
                <p>99 Roving St., Big City, PKU 23456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
