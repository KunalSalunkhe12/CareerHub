import { useState } from "react";
import { Link } from "react-router-dom";
import { updateJobStatus } from "../../api";
import toast from "react-hot-toast";

const JobList = ({ job }) => {
  const [status, setStatus] = useState(job.status);

  const date = new Date(job.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const { data } = await updateJobStatus(job._id, newStatus);
      setStatus(data.job.status);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="mt-5 flex justify-between shadow-md p-4 rounded-md border-2 border-gray-100">
      <Link to={`/job-tracker/${job._id}`} className="cursor-pointer">
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
          value={status}
          className="bg-custom_green text-white p-2 rounded-md font-medium outline-none cursor-pointer"
          onChange={handleStatusChange}
        >
          <option className="bg-custom_black p-2" value="Bookmarked">
            Bookmarked
          </option>
          <option className="bg-custom_black p-2" value="Applied">
            Applied
          </option>
          <option className="bg-custom_black p-2" value="Interview">
            Interview
          </option>
          <option className="bg-custom_black p-2" value="Offer">
            Offer
          </option>
          <option className="bg-custom_black p-2" value="Rejected">
            Rejected
          </option>
        </select>
      </div>
    </div>
  );
};

export default JobList;
