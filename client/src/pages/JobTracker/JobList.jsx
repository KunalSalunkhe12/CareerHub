import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { getJobs } from "../../api/index";

import JobCard from "../../components/JobTracker/JobCard";
import JobFilters from "../../components/JobTracker/JobFilters";

const JobTracker = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllJobs = async () => {
      setIsLoading(true);
      try {
        const { data } = await getJobs();
        setJobs(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllJobs();
  }, []);

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="px-6 py-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">My Jobs</h2>
        <Link to="add-job">
          <button className="btn_primary flex items-center gap-3">
            <IoMdAddCircle className="text-white" />
            Add a new Job
          </button>
        </Link>
      </div>
      <div className="mt-5 w-2/3 mx-auto">
        <JobFilters />
        {isLoading ? (
          <div>Loading...</div>
        ) : jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <div>No Jobs</div>
        )}
      </div>
    </div>
  );
};

export default JobTracker;
