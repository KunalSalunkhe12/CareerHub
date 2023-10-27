import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom"
import pic_one from "../assets/images/29.jpg";
import resume_pic from "../assets/images/resume_pic.png";
import search_pic from "../assets/images/search_pic.png";
import { useSelector } from "react-redux";
const Home = () => {
  const user = useSelector((state) => state.auth.userInfo);

  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full">
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
                <Link to="/auth"><button className="px-7 py-2 bg-custom_green text-white rounded">
                Register
              </button></Link>
              )}
            </div>
          </div>
          <div className=" flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="image">
              <img src={resume_pic} className="h-96" alt="" />
            </div>
            <div className="md:w-1/2 mr-10">
              <span className="text-custom_green loading-snug text-5xl font-semibold mb-4  md:w-3/4">
                Learn & Earn
              </span>
              <h1 className="text-5xl font-semibold mb-4 text-gray-500 leading-snug md:w-3/4">
                With Our guided Ai tool
              </h1>
              <p className="text-gray-500 text-base mb-8">
                Ace Your Career and give a it a kick start
              </p>
              {!user && (
                <Link to="/auth"><button className="btn_primary">
                Register
              </button></Link>
              )}
            </div>
          </div>
          <div className=" flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="image">
              <img src={search_pic} className="h-96" alt="" />
            </div>
            <div className="md:w-1/2 mr-10">
              <span className="text-custom_green loading-snug text-5xl font-semibold mb-4  md:w-3/4">
                Save Jobs
              </span>
              <h1 className="text-5xl font-semibold mb-4 text-gray-500 leading-snug md:w-3/4">
                In convinient way
              </h1>
              <p className="text-gray-500 text-base mb-8">
                where you can able to save jobs{" "}
              </p>
              {!user && (
                <Link to="/auth"><button className="btn_primary">
                Register
              </button></Link>
              )}
            </div>
          </div>
        </Carousel>
        {/* <Welcome/> */}
      </div>
    </div>
  );
};

export default Home;
