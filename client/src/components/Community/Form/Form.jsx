import React from 'react'

const Form = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto p-4">
      <form
        autoComplete="off"
        noValidate
        className="bg-white p-4 rounded-md shadow-md"
        // onSubmit={handleSubmit}
      >
        <h6 className="text-xl">
          creating 
        </h6>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          // value={postData.creator}
          // onChange={(e) =>
          //   setPostData({ ...postData, creator: e.target.value })
          // }
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          // value={postData.title}
          // onChange={(e) =>
          //   setPostData({ ...postData, title: e.target.value })
          // }
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          rows="4"
          // value={postData.message}
          // onChange={(e) =>
          //   setPostData({ ...postData, message: e.target.value })
          // }
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="w-full p-2 border border-gray-300 rounded-md mt-2"
          // value={postData.tags}
          // onChange={(e) =>
          //   setPostData({ ...postData, tags: e.target.value.split(',') })
          // }
        />
        <div className="mt-2">
          {/* <FileBase
            type="file"
            multiple={false}
            // onDone={({ base64 }) =>
            //   setPostData({ ...postData, selectedFile: base64 })
            // }
          /> */}
        </div>
        <button
          className="bg-blue-500 text-white p-2 mt-4 rounded-md w-full"
          type="submit"
        >
          Submit
        </button>
        <button
          className="bg-red-500 text-white p-1 mt-2 rounded-md w-full"
          // onClick={clear}
        >
          Clear
        </button>
      </form>
    </div>
  </div>
);
  
}

export default Form;
