import { Link } from "react-router-dom";
const JobList = ({ job }) => {
  const date = new Date(job.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mt-5 flex justify-between shadow-md p-4 rounded-md border-2 border-gray-100">
      <Link to={job._id} className="cursor-pointer">
        <div className="flex flex-col gap-1">
          <h3 className="text-custom_black text-xl font-medium">{job.title}</h3>
          <h4 className="text-custom_orange">
            {job.company}, {job.location}
          </h4>
          <h4 className="text-custom_grey">{formattedDate}</h4>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <select
          name="status"
          className="bg-custom_green text-white p-2 rounded-md font-medium outline-none cursor-pointer"
        >
          <option className="bg-custom_black p-2" value="bookmarked">
            Bookmarked
          </option>
          <option className="bg-custom_black p-2" value="applied">
            Applied
          </option>
          <option className="bg-custom_black p-2" value="interview">
            Interview
          </option>
          <option className="bg-custom_black p-2" value="offer">
            Offer
          </option>
          <option className="bg-custom_black p-2" value="rejected">
            Rejected
          </option>
        </select>
      </div>
    </div>
  );
};

export default JobList;
