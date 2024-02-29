import { LuWholeWord } from "react-icons/lu";
import { useOutletContext } from "react-router-dom";

const Keywords = () => {
  const job = useOutletContext();

  const handleKeywordClick = (keyword) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      keyword
    )}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 ">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <LuWholeWord />
        <h3>Keywords / Skills</h3>
      </div>
      <div className="mt-4">
        {job.keywords.map((keyword, index) => (
          <li
            key={index}
            className="hover:text-blue-300 cursor-pointer transition duration-300 ease-in-out "
            onClick={() => handleKeywordClick(keyword)}
          >
            {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
