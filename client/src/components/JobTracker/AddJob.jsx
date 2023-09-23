import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { newJob } from "../../api/index";
import toast from "react-hot-toast";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const { data } = await newJob(formData);
      if (data) {
        toast.success("Job added successfully");
        navigate("/job-tracker");
      }
    } catch (error) {
      console.log(error);
      toast.error("Job not added");
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 p-10">
      <div className="p-4 w-1/3 bg-white">
        <h2 className="text-custom_green text-2xl font-semibold mb-6">
          Add a new Job Post
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col my-4">
            <label className="font-medium" htmlFor="title">
              Job Title
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              {...register("title", {
                required: {
                  value: true,
                  message: "Please enter Job Title",
                },
              })}
              id="title"
              placeholder="Job Title"
            />
            <p className="text-xs text-red-500">{errors.title?.message}</p>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-medium" htmlFor="url">
              URL for original Job Posting
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="url"
              {...register("url", {
                required: {
                  value: true,
                  message: "Please enter Job URL",
                },
              })}
              id="url"
              placeholder="Job URL"
            />
            <p className="text-xs text-red-500">{errors.url?.message}</p>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-medium" htmlFor="company">
              Company Name
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              {...register("company", {
                required: {
                  value: true,
                  message: "Please enter the Company Name",
                },
              })}
              id="company"
              placeholder="Company Name"
            />
            <p className="text-xs text-red-500">{errors.company?.message}</p>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-medium" htmlFor="location">
              Location
            </label>
            <input
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              {...register("location", {
                required: {
                  value: true,
                  message: "Please enter Company location",
                },
              })}
              id="location"
              placeholder="Company Location"
            />
            <p className="text-xs text-red-500">{errors.location?.message}</p>
          </div>
          <div className="flex flex-col my-4">
            <label className="font-medium" htmlFor="description">
              Job Description
            </label>
            <textarea
              rows="10"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Please enter your name",
                },
              })}
              id="description"
              placeholder="Job Description"
            />
            <p className="text-xs text-red-500">
              {errors.description?.message}
            </p>
          </div>
          <div className="flex justify-end gap-4">
            <button>Cancel</button>
            <button type="submit" className="btn_primary">
              {isSubmitting ? "Saving..." : "Save Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
