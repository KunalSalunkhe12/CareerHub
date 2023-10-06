import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { getJobs } from "../api/index";
import JobList from "../components/JobTracker/JobList";

const JobTracker = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getAllJobs = async () => {
      const { data } = await getJobs();
      setJobs(data);
    };
    getAllJobs();
  }, []);

  return (
    <div className="px-6 py-8">
      <Link to="/add-job">
        <button className="btn_primary flex items-center gap-3">
          <IoMdAddCircle className="text-white" />
          Add a new Job
        </button>
      </Link>
      <div className="mt-10 grid grid-cols-5 gap-4">
        {jobs && jobs.map((job) => <JobList key={job._id} job={job} />)}
      </div>
    </div>
  );
};

export default JobTracker;
