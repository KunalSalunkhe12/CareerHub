import { useState, useEffect } from "react";
import { getTemplates } from "../../api";
import { AiOutlineMail } from "react-icons/ai";
import toast from "react-hot-toast";

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTemplatesData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getTemplates();
        setTemplates(data[0].templates);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTemplatesData();
  }, []);

  console.log(templates);
  const handleCopyMessage = async (uuid) => {
    await navigator.clipboard.writeText(
      templates.find((template) => template.uuid === uuid).body
    );
    toast.success("Message copied");
  };

  const handleCopySubject = async (uuid) => {
    await navigator.clipboard.writeText(
      templates.find((template) => template.uuid === uuid).subject
    );
    toast.success("Subject copied");
  };

  return (
    <div className="p-4 shadow-md border-2 border-gray-200 rounded-md w-1/2 bg-custom_green">
      <div className="flex gap-2 items-center text-lg font-semibold">
        <AiOutlineMail />
        <h3>Templates</h3>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : templates ? (
          templates.map((template) => {
            return (
              <div
                key={template.uuid}
                className="bg-custom_white p-2 rounded-md"
              >
                <p className="font-semibold my-4 text-wh">{template.subject}</p>
                <p className="font-sans">{template.body}</p>
                <div className="flex justify-between">
                  <button
                    className="btn_primary mt-4"
                    onClick={() => handleCopySubject(template.uuid)}
                  >
                    Copy Subject
                  </button>
                  <button
                    className="btn_primary mt-4 "
                    onClick={() => handleCopyMessage(template.uuid)}
                  >
                    Copy Message
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="font-semibold text-lg">No Template available</div>
        )}
      </div>
    </div>
  );
};

export default Templates;
