import { AiOutlineCheckSquare } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { updateChecklist } from "../../api";
import toast from "react-hot-toast";

const Checklist = () => {
  const job = useOutletContext();

  const checklistData = Object.values(job.checklist);
  const [checklist, setChecklist] = useState(checklistData);

  const handleInputChange = async (taskId, status, isCompleted) => {
    try {
      const { data } = await updateChecklist(
        job._id,
        status,
        taskId,
        !isCompleted
      );
      const checklistArray = Object.values(data);
      setChecklist(checklistArray);
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Task not updated");
    }
  };

  const checklistItems = checklist.map((item) => {
    if (!item.tasks) return null;
    return (
      <div className="flex flex-col gap-2" key={item.status}>
        <h3 className="font-semibold">{item.status}</h3>
        {item.tasks.map((task) => {
          return (
            <div className="flex items-center gap-2" key={task.uuid}>
              <input
                type="checkbox"
                checked={task.is_completed}
                onChange={() =>
                  handleInputChange(task.uuid, item.status, task.is_completed)
                }
              />
              <p>{task.task}</p>
            </div>
          );
        })}
      </div>
    );
  });

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 ">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <AiOutlineCheckSquare />
        <h3>Checklist</h3>
      </div>
      <div className="flex flex-col gap-5 mt-4">{checklistItems}</div>
    </div>
  );
};

export default Checklist;
