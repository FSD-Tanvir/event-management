import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="py-14 px-8 bg-neutral opacity-70 text-white text-center space-y-4">
      <h1 className=" py-5 text-3xl sm:text-6xl font-semibold">
        {" "}
        Let us Talk About Your Event Idea With Us
      </h1>
      <p className="font-medium text-xl">
        Reach out to us with your questions, feedback, or inquiries. Our team is
        here to assist you. Contact us through the provided channels, and we
        will respond promptly to address your needs.
      </p>
      <Link to={"/contact"}>
        <button className="btn hover:text-white hover:bg-neutral my-5 capitalize ">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default ContactSection;
