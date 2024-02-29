import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getJobs } from "../../api/index";

import { IoMdAddCircle } from "react-icons/io";

import JobCard from "../../components/JobTracker/JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const userInfo = JSON.parse(localStorage.getItem("Profile"));

  const jobStatus = [
    "All",
    "Bookmarked",
    "Applying",
    "Applied",
    "Interviewing",
    "Negotiating",
    "Accepted",
    "Rejected",
  ];

  // Get all jobs
  useEffect(() => {
    const getAllJobs = async () => {
      setIsLoading(true);
      try {
        const { data } = await getJobs(userInfo.result._id);
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

  // filter jobs based on status
  const jobFilter = searchParams.get("status") || "All";
  const displayedJobs =
    jobFilter !== "All" && jobFilter
      ? jobs.filter((job) => job.status === jobFilter)
      : jobs;

  //Handle Job Status Change
  // const jobStatusChange = (jobId, newStatus) => {
  //   const updatedJobs = jobs.map((job) => {
  //     if (job._id === jobId) {
  //       return { ...job, status: newStatus };
  //     }
  //     return job;
  //   });
  //   setJobs(updatedJobs);
  // };

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
        <div className="flex gap-2">
          {jobStatus.map((status) => (
            <button
              key={status}
              onClick={() => setSearchParams({ status: status })}
              className={
                jobFilter === status ? "btn_primary" : "btn_primary_outline"
              }
            >
              {status}
            </button>
          ))}
        </div>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : displayedJobs.length > 0 ? (
            displayedJobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                // jobStatusChange={jobStatusChange}
              />
            ))
          ) : (
            <div className="text-center text-xl font-semibold mt-20 ">
              No Jobs Saved
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
