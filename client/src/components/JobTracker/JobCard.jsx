import { useState } from "react";
import { Link } from "react-router-dom";
import { updateJobStatus } from "../../api";
import toast from "react-hot-toast";

const JobList = ({ job, jobStatusChange }) => {
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
      jobStatusChange && jobStatusChange(job._id, newStatus);
      setStatus(data.job.status);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast.error("Could not update status");
    }
  };

  return (
    <div className="mt-5 flex justify-between shadow-md p-4 rounded-md border-2 border-gray-200">
      <Link to={`/job-tracker/${job._id}`} className="cursor-pointer">
        <div className="flex flex-col gap-1">
          <h3 className="text-custom_black text-xl font-medium hover:underline">
            {job.title}
          </h3>
          <h4 className="text-custom_green">
            {job.company}, {job.location}
          </h4>
          <h4 className="text-custom_grey">{formattedDate}</h4>
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <select
          name="status"
          value={status}
          className="border-2 border-custom_black text-black p-2 rounded-md font-medium outline-none cursor-pointer shadow-md"
          onChange={handleStatusChange}
        >
          <option className="" value="Bookmarked">
            Bookmarked
          </option>
          <option className="" value="Applying">
            Applying
          </option>
          <option className="" value="Applied">
            Applied
          </option>
          <option className="" value="Interviewing">
            Interviewing
          </option>
          <option className="" value="Negotiating">
            Negotiating
          </option>
          <option className="" value="Accepted">
            Accepted
          </option>
          <option className="" value="Rejected">
            Rejected
          </option>
        </select>
      </div>
    </div>
  );
};

export default JobList;
