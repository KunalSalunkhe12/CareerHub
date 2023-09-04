const Header = () => {
  return (
    <nav className="px-12 py-3 flex justify-between items-center bg-custom_black">
      <h1 className="text-3xl font-bold cursor-pointer text-custom_green">
        CareerHub
      </h1>
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
      <ul className="flex gap-3 mr-10">
        <li className="px-5 py-1 rounded-lg font-bold bg-custom_green text-white hover:bg-custom_black border-2 border-custom_green cursor-pointer">
          Sign in
        </li>
      </ul>
    </nav>
  );
};

export default Header;
