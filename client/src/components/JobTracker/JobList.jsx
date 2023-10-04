const JobList = ({ job }) => {
  return (
    <div>
      <h3>{job.company}</h3>
      <h4>{job.location}</h4>
    </div>
  );
};

export default JobList;
