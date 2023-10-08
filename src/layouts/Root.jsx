import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-dmSans ">
      <Outlet />
      <Footer/>
      <Toaster/>
    </div>
  );
};

export default Root;
