import React from "react";

const Header = () => {
  return (
    <nav className="px-5 py-3 flex justify-between ">
      <ul className="flex items-center gap-7 ml-6 text-lime-700">
        <li className="text-3xl font-bold cursor-pointer">CareerHub</li>
        <li className="font-semibold hover:text-black cursor-pointer">Ai Resume Builder</li>
        <li className="font-semibold hover:text-black cursor-pointer">Job Application Tracker</li>
        <li className="font-semibold hover:text-black cursor-pointer">How it works</li>
        <li className="font-semibold hover:text-black cursor-pointer">Career Blogs</li>
        <li className="font-semibold hover:text-black cursor-pointer">Jobs</li>
      </ul>
      <ul className="flex gap-3 mr-10">
        <li className="border border-black px-5 py-2 rounded-lg font-bold text-xl bg-lime-700 text-white hover:bg-black cursor-pointer">
          Sign in{" "}
        </li>
        <li className="border border-black px-5 py-2 rounded-lg font-bold text-xl hover:bg-black hover:text-white cursor-pointer">
          Log in
        </li>
      </ul>
    </nav>
  );
};

export default Header;
