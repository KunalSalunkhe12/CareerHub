import Form from "../Form/Form";
import Posts from "./Posts";
import { useEffect } from "react";

import { fetchAll } from "../../../redux/features/communitySlice";
import { fetchPosts } from "../../../api";

import { useDispatch } from "react-redux";
const PostsMain = () => {
  let dispatch = useDispatch();

  let getPosts = async () => {

    try {
      const { data } = await fetchPosts();
      console.log(data);
      dispatch(fetchAll(data));

    } catch (error) {
      console.log("rerro in fetching", error);
    }
   
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <header className="bg-white">
          <div className="container mx-auto py-4">
            <div className="flex justify-center items-center">
              <h1 className="text-2xl font-semibold">
                Community Section Feel free to Join
              </h1>
            </div>
          </div>
        </header>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-between items-stretch space-x-4">
            <div className="w-full sm:w-7/12">
              <Posts />
            </div>
            <div className="w-full sm:w-4/12">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostsMain;
