import { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { getJob } from "../../api/index";

import JobCard from "../../components/JobTracker/JobCard";
import JobDetailNavbar from "../../components/JobTracker/JobDetailNavbar";

import { AiOutlineArrowLeft } from "react-icons/ai";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState("");

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const { data } = await getJob(jobId);
        setJob(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobDetail();
  }, [jobId]);

  return (
    <div className="px-6 py-4">
      <div>
        <Link
          to=".."
          className="text-sm underline font-medium flex gap-2 items-center text-custom_green"
        >
          <AiOutlineArrowLeft /> Back to Job List
        </Link>
      </div>
      {job ? (
        <div>
          <JobCard job={job} />
          <JobDetailNavbar />
          <div className="flex gap-4 mt-4">
            <div className="p-4 border-2 border-gray-200 rounded-md shadow-md w-1/2">
              <h2 className="text-lg font-semibold">Job Description</h2>
              <pre className="font-sans mt-2 min-h-[20rem]">
                {job.description}
              </pre>
            </div>
            <Outlet />
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default JobDetail;
