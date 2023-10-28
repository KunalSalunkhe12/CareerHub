<<<<<<< HEAD
import React from "react";
import resume_png from "../../../../assets/images/resume_pic.png";
=======
// import resume_png from "../../../../assets/images/resume_pic.png";
>>>>>>> 164490c2dac5c59cfb58e797a327b33c0a04bb07

const PostCard = () => {
  return (
    <div className="border rounded-md shadow-md mt-3">
      <img
        src={resume_png}
        className="w-full h-20 object-cover"
<<<<<<< HEAD
      />
=======
      /> */}
>>>>>>> 164490c2dac5c59cfb58e797a327b33c0a04bb07
      <div className="p-2">
        <p className="text-sm text-gray-500">hie</p>
      </div>
      <h5 className="text-xl font-semibold my-2">title</h5>
      <p className="text-gray-500">message</p>
      <div className="flex justify-between mt-4">
        <button className="text-blue-500">like count</button>
        <button className="text-blue-500">delete button</button>
      </div>
    </div>
  );
};

export default PostCard;
