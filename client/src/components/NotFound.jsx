import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center flex-col gap-4 p-2">
      <div className="w-1/5">
        <img src={NotFoundImage} alt="Not found image" />
      </div>
      <h1 className="text-xl md:text-2xl font-semibold  text-center">
        Sorry, the page you were looking for was not found.
      </h1>
      <span className="bg-black text-custom_green p-3 rounded-md font-semibold">
        <Link to="/">Return to Home</Link>
      </span>
    </div>
  );
};

export default NotFound;
