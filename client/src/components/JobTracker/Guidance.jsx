import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBulb } from "react-icons/ai";
import { updateGuidance } from "../../api";
import toast from "react-hot-toast";

const Guidance = () => {
  const job = useOutletContext();

  const guidanceData = Object.values(job.guidance).filter(
    (guidance) => guidance.status === job.status
  )[0];

  const [guidance, setGuidance] = useState(guidanceData);

  const handleInputChange = async (taskId, isCompleted) => {
    try {
      const { data } = await updateGuidance(
        job._id,
        job.status,
        taskId,
        !isCompleted
      );

      setGuidance(data);
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Task not updated");
    }
  };

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 ">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <AiOutlineBulb />
        <h3>Guidance</h3>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {guidance &&
          guidance.tasks.map((task) => {
            return (
              <div key={task._id}>
                <div className="flex items-center gap-2 font-medium mb-2">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() =>
                      handleInputChange(task.uuid, task.isCompleted)
                    }
                  />
                  <label htmlFor="">{task.title}</label>
                </div>
                <ul className="list-disc px-6">
                  {task.subtasks.map((subtask, index) => {
                    return <li key={index}>{subtask}</li>;
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Guidance;
