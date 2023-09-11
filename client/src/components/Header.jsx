import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";
const Header = () => {
  let store = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  console.log(store.userInfo);
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
      {store.userInfo === null ? (
        <Link
          to="/auth"
          className="px-5 py-1 rounded-lg font-bold bg-custom_green text-white hover:bg-custom_black border-2 border-custom_green cursor-pointer"
        >
          Signin
        </Link>
      ) : (
        <Link
          to="/" // You can specify the logout route here
          className="px-5 py-1 rounded-lg font-bold bg-custom_green text-white hover:bg-custom_black border-2 border-custom_green cursor-pointer"
          onClick={() => {
            dispatch(logOut());
          }}
        >
          Logout
        </Link>
      )}
    </nav>
  );
};

export default Header;
