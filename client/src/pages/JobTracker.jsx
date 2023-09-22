import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const JobTracker = () => {
  return (
    <div className="px-6 py-8">
      <Link to="/add-job">
        <button className="btn_primary flex items-center gap-3">
          <IoMdAddCircle className="text-white" />
          Add a new Job
        </button>
      </Link>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        temporibus fugit nisi tempora soluta sint perspiciatis maxime non, velit
        possimus, quos praesentium! Eligendi et iure consequatur excepturi
        facilis ducimus perferendis.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        temporibus fugit nisi tempora soluta sint perspiciatis maxime non, velit
        possimus, quos praesentium! Eligendi et iure consequatur excepturi
        facilis ducimus perferendis.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        temporibus fugit nisi tempora soluta sint perspiciatis maxime non, velit
        possimus, quos praesentium! Eligendi et iure consequatur excepturi
        facilis ducimus perferendis.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        temporibus fugit nisi tempora soluta sint perspiciatis maxime non, velit
        possimus, quos praesentium! Eligendi et iure consequatur excepturi
        facilis ducimus perferendis.
      </div>
    </div>
  );
};

export default JobTracker;
