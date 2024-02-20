import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = () => {
  const { posts } = useSelector((state) => state.community);
  console.log(posts);
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </>
  );
};

export default Posts;
