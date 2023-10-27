import { useState, useEffect } from "react";
import { getChecklist, updateChecklist } from "../../api";
import { AiOutlineCheckSquare } from "react-icons/ai";
import toast from "react-hot-toast";

const Checklist = () => {
  const [checklist, setChecklist] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getChecklistData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getChecklist();
        setChecklist(data[0]);
      } catch (err) {
        console.log(err);
        toast.error("Error getting checklist");
      } finally {
        setIsLoading(false);
      }
    };
    getChecklistData();
  }, []);

  const handleInputChange = async (currentStatus, taskId, isCompleted) => {
    setChecklist((prev) => {
      const updatedChecklist = { ...prev };
      updatedChecklist[currentStatus] = updatedChecklist[currentStatus].map(
        (task) => {
          if (task.uuid === taskId) {
            task.is_completed = !isCompleted;
          }
          return task;
        }
      );
      return updatedChecklist;
    });

    try {
      await updateChecklist(currentStatus, taskId, !isCompleted);
      toast.success("Checklist updated");
    } catch (err) {
      console.log(err);
      toast.error("Error updating checklist");
    }
  };

  const checklistItems =
    checklist &&
    Object.keys(checklist).map((status) => {
      if (status === "_id") return;
      return (
        <div className="flex flex-col gap-2" key={status}>
          <h3 className="font-semibold">{status}</h3>
          {checklist[status].map((task) => {
            return (
              <div className="flex items-center gap-2" key={task.uuid}>
                <input
                  type="checkbox"
                  checked={task.is_completed}
                  onChange={() =>
                    handleInputChange(status, task.uuid, task.is_completed)
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
      <div className="flex flex-col gap-5 mt-4">
        {isLoading ? <div>Loading...</div> : checklist ? checklistItems : null}
      </div>
    </div>
  );
};

export default Checklist;
