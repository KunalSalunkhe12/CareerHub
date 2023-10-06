import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJob } from "../../api/index";
import JobCard from "../../components/JobTracker/JobCard";

const JobDetail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const { data } = await getJob(jobId);
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobDetail();
  }, [jobId]);

  return (
    <div className="px-6 py-8">
      {job ? (
        <div>
          <JobCard job={job} />
          <div className="mt-10">
            <h2 className="text-2xl font-semibold">Job Description</h2>
            <p className="mt-5">{job.description}</p>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default JobDetail;
