import { useForm } from "react-hook-form";
import { createPost } from "../../../api";
import { createPosts } from "../../../redux/features/communitySlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("creator", data.creator);
      formData.append("title", data.title);
      formData.append("message", data.message);
      formData.append("tags", data.tags);
      formData.append("file", data.file[0]); // Assuming "file" is the field name for the file input

      const response = await createPost(formData);
      console.log(response)
      dispatch(createPosts(response.data));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <form
          autoComplete="off"
          noValidate
          className="bg-white p-4 rounded-md shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h6 className="text-xl">Creating a Post</h6>
          <input
            type="text"
            name="creator"
            placeholder="Creator"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            {...register("creator")}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            {...register("title")}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            rows="4"
            {...register("message")}
          />
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            {...register("tags")}
          />
          <div className="mt-2">
            <input type="file" {...register("file")} />
          </div>
          <button className="btn_primary_outline mt-3 w-full" type="submit">
            Submit
          </button>
          <button
            className="btn_primary mt-2 w-full"
            type="button"
            onClick={reset}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
