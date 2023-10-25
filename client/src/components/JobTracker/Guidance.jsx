import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { getGuidance } from "../../api/index";

import { AiOutlineBulb } from "react-icons/ai";

const Guidance = () => {
  const [guidance, setGuidance] = useState();
  const status = useOutletContext();

  useEffect(() => {
    const getGuidanceList = async () => {
      try {
        const { data } = await getGuidance(status);
        setGuidance(data[0].tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getGuidanceList();
  }, [status]);

  console.log(guidance);

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-full">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <AiOutlineBulb />
        <h3>Guidance</h3>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {guidance
          ? guidance.map((task) => {
              return (
                <div key={task._id}>
                  <div className="flex items-center gap-2 font-medium mb-2">
                    <input type="checkbox" checked={task.isCompleted} />
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
          : "Loading..."}
      </div>
    </div>
  );
};

export default Guidance;
