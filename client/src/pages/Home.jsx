import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import pic_one from "../assets/images/29.jpg";
const Home = () => {
  const user = useSelector((state) => state.auth.userInfo);
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
      <div className=" flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div className="image">
          <img src={pic_one} className="h-96" alt="" />
        </div>
        <div className="md:w-1/2 mr-10">
          <span className="text-custom_green loading-snug text-5xl font-semibold mb-4  md:w-3/4">
            CareerHub-
          </span>
          <h1 className="text-5xl font-semibold mb-4 text-gray-500 leading-snug md:w-3/4">
            Job Assesment & Career Growth Platform
          </h1>
          <p className="text-gray-500 text-base mb-8">
            where one can build their own career and growth
          </p>
          {!user && (
            <Link to="/auth">
              <button className="btn_primary">Register</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
