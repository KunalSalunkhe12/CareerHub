import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const TemplateInout = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const { uuid, status, subject, body } = data;
    try {
      axios.post("http://localhost:5000/template", {
        uuid,
        status,
        subject,
        body,
      });
      toast.success("Template added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border-2" type="text" {...register("uuid")} />
      <input className="border-2" type="text" {...register("status")} />
      <input className="border-2" type="text" {...register("subject")} />
      <textarea className="border-2" type="text" {...register("body")} />
      <button type="submit">submit</button>
    </form>
  );
};

export default TemplateInout;
