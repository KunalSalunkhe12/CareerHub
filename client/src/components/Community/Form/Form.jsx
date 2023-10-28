import { useState } from "react";
import FileBase from "react-file-base64";
import { createPost } from "../../../api";
import { createPosts } from "../../../redux/features/communitySlice";

import { useDispatch } from "react-redux";
const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

console.log(postData)
  const createPostOnHandleSubmit = async () => {
   try {
    let { data } = await createPost(postData)
    console.log(data)
   } catch (error) {
      console.log(error)
   }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    createPostOnHandleSubmit()
  };

  const clear = () => {

  };
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <form
          autoComplete="off"
          noValidate
          className="bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <h6 className="text-xl">Creating a Post</h6>
          <input
            type="text"
            name="creator"
            placeholder="Creator"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            rows="4"
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className="mt-2">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <button className="btn_primary_outline mt-3 w-full" type="submit">
            Submit
          </button>
          <button className="btn_primary mt-2 w-full" onClick={clear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
