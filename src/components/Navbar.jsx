import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="hover:bg-white rounded-lg">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:bg-white rounded-lg">
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li className="hover:bg-white rounded-lg">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-medium text-xl bg-white text-black "
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost font-bold normal-case text-3xl">
            EVENTIST
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-5 font-medium text-xl ">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end ">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-neutral"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm lg:btn-md  btn-neutral font-medium lg:text-xl">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
