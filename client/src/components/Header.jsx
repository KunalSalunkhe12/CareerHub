import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";

const Header = () => {
  let user = useSelector((state) => state.auth.userInfo);
  console.log(user);
  let dispatch = useDispatch();

  return (
    <nav className="px-12 py-3 flex justify-between items-center bg-custom_black">
      <Link to="/">
        <h1 className="text-3xl font-bold cursor-pointer text-custom_green">
          CareerHub
        </h1>
      </Link>
      <ul className="flex items-center gap-7 ml-6 text-white">
        <li className="font-semibold hover:text-custom_orange cursor-pointer">
          Ai Resume Builder
        </li>
        <li className="font-semibold hover:text-custom_orange cursor-pointer">
          Job Application Tracker
        </li>
        <li className="font-semibold hover:text-custom_orange cursor-pointer">
          How it works
        </li>
        <li className="font-semibold hover:text-custom_orange cursor-pointer">
          Career Blogs
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
