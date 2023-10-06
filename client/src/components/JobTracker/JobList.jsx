const JobList = ({ job }) => {
  const date = new Date(job.createdAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="shadow-md p-4 rounded-md border-2 border-gray-100 cursor-pointer">
      <h3 className="text-custom_black text-xl font-medium">{job.title}</h3>
      <div className="flex gap-2">
        <h4 className="text-custom_orange">
          {job.company}, {job.location}
        </h4>
      </div>
      <div className="flex gap-2">
        <>{job.status}</>
        <h4 className="text-custom_grey">{formattedDate}</h4>
      </div>
    </div>
  );
};

export default JobList;
