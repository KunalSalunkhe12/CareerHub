import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials, logout } from "../redux/features/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      dispatch(setCredentials(userInfo));
    }
  }, []);

  return (
    <nav className="px-12 py-3 flex justify-between items-center bg-custom_black">
      <Link className="flex gap-2 items-center" to="/">
        <h1 className="text-3xl font-bold cursor-pointer text-custom_green">
          CareerHub
        </h1>
        <img
          width="35"
          height="35"
          src="https://img.icons8.com/color/48/000000/goal--v1.png"
          alt="goal--v1"
        />
      </Link>
      <ul className="flex items-center gap-7 ml-6 text-white">
        {user && (
          <>
            <li className="font-semibold hover:text-custom_orange cursor-pointer">
              <NavLink>Ai Resume Builder</NavLink>
            </li>
            <li className="font-semibold hover:text-custom_orange cursor-pointer">
              <NavLink
                to="/job-tracker"
                className={({ isActive }) =>
                  isActive ? "text-custom_orange" : ""
                }
              >
                Job Application Tracker
              </NavLink>
            </li>
            <li className="font-semibold hover:text-custom_orange cursor-pointer">
              <NavLink
                to="/community"
                className={({ isActive }) =>
                  isActive ? "text-custom_orange" : ""
                }
              >
                Community
              </NavLink>
            </li>
          </>
        )}
        <li className="font-semibold hover:text-custom_orange cursor-pointer">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-custom_orange" : "")}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      {user === null ? (
        <Link
          to="/auth"
          className="px-5 py-1 rounded-lg font-bold bg-custom_green text-white hover:bg-custom_black border-2 border-custom_green cursor-pointer"
        >
          Sign In
        </Link>
      ) : (
        <Link
          to="/"
          className="px-5 py-1 rounded-lg font-bold bg-custom_green text-white hover:bg-custom_black border-2 border-custom_green cursor-pointer"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Link>
      )}
    </nav>
  );
};

export default Header;
