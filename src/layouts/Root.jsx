import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto font-dmSans ">
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
