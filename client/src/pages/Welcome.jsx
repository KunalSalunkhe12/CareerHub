const Welcome = () => {
  return (
    <div className="border border-black flex flex-wrap gap-5">
      <div className="border w-1/2">
        <h1 className="text-5xl text-custom_green leading-snug">
          Hello,<span className="text-gray-500">User</span> Welcome to CareerHub
        </h1>
        <p className="text-gray-500 text-base mb-8">
          A job assesment and tracking platform to Ace your career{" "}
        </p>
        <button className="px-7 py-2 bg-custom_green text-white rounded  hover:bg-slate-500 cursor-pointer transition-all duration-300 hover:-translate-y-4 ">
          Explore
        </button>
      </div>
      <div className="border-black flex flex-col">
         d

      </div>
    </div>
  );
};

export default Welcome;
