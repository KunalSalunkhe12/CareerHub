import { IoMdAddCircle } from "react-icons/io";

const JobTracker = () => {
  return (
    <div>
      <button className="btn_primary flex items-center gap-2">
        <IoMdAddCircle className="text-white" />
        Add a new Job
      </button>
    </div>
  );
};

export default JobTracker;
