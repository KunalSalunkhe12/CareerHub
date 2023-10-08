import { NavLink } from "react-router-dom";
import {
  AiOutlineBulb,
  AiOutlineCheckSquare,
  AiOutlineMail,
} from "react-icons/ai";

const JobDetailNavbar = () => {
  return (
    <div className="border-2 border-gray-200 shadow-md rounded-lg p-3 my-4 flex gap-4 text-xl">
      <NavLink
        to="."
        end
        className={({ isActive }) =>
          isActive
            ? "bg-custom_black rounded-full p-2 text-custom_orange"
            : "p-2"
        }
      >
        <AiOutlineBulb />
      </NavLink>
      <NavLink
        to="checklist"
        className={({ isActive }) =>
          isActive
            ? "bg-custom_black rounded-full p-2 text-custom_orange"
            : "p-2"
        }
      >
        <AiOutlineCheckSquare />
      </NavLink>
      <NavLink
        to="templates"
        className={({ isActive }) =>
          isActive
            ? "bg-custom_black rounded-full p-2 text-custom_orange"
            : "p-2"
        }
      >
        <AiOutlineMail />
      </NavLink>
    </div>
  );
};

export default JobDetailNavbar;
