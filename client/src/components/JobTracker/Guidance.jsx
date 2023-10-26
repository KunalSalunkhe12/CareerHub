import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getGuidance, updateGuidance } from "../../api/index";

import { AiOutlineBulb } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Guidance = () => {
  const [guidance, setGuidance] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const status = useOutletContext();

  // Fetch guidance list
  useEffect(() => {
    const getGuidanceList = async () => {
      try {
        setIsLoading(true);
        const { data } = await getGuidance(status);
        setGuidance(data[0].tasks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getGuidanceList();
  }, [status]);

  const handleInputChange = async (taskId) => {
    try {
      const updatedGuidance = guidance.map((task) => {
        if (task.uuid === taskId) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
      setGuidance(updatedGuidance);

      const isCompleted = updatedGuidance.find(
        (task) => task.uuid === taskId
      ).isCompleted;

      await updateGuidance(status, taskId, isCompleted);
      toast.success("Guidance updated");
    } catch (error) {
      console.log(error);
      toast.error("Error updating guidance");
    }
  };

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 ">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <AiOutlineBulb />
        <h3>Guidance</h3>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : guidance ? (
          guidance.map((task) => {
            return (
              <div key={task._id}>
                <div className="flex items-center gap-2 font-medium mb-2">
                  <input
                    className="cursor-pointer"
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => handleInputChange(task.uuid)}
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
          })
        ) : (
          <div className="font-semibold text-lg">No guidance available</div>
        )}
      </div>
    </div>
  );
};

export default Guidance;
