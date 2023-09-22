const AddJob = () => {
  return (
    <div className="flex justify-center bg-gray-100 p-10">
      <div className="p-4 w-1/3 bg-white">
        <h2 className="text-custom_black text-2xl font-semibold mb-6">
          Add a new Job Post
        </h2>
        <form className="">
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="title">
              Job Title
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="url">
              URL for original Job Posting
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="url"
              name="url"
              id="url"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="company">
              Company Name
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              name="company"
              id="company"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="location">
              Location
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              name="location"
              id="location"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="description">
              Job Description
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              name="description"
              id="description"
            />
          </div>
          <div className="flex flex-col my-4">
            <label className="text-lg font-medium" htmlFor="description">
              Job Description
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              name="description"
              id="description"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button>Cancel</button>
            <button className="btn_primary">Save Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
