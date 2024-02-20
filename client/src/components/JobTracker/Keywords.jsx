import { LuWholeWord } from "react-icons/lu";

const Keywords = () => {
  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 ">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <LuWholeWord />
        <h3>Keywords</h3>
      </div>
    </div>
  );
};

export default Keywords;
