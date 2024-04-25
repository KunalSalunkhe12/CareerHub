import Post from "./Post/Post";
import { useSelector } from "react-redux";
const Posts = () => {
  const { posts } = useSelector((state) => state.community);

  console.log(posts);
  return (
    <>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
      {posts.length === 0 && <h1>No Posts Yet</h1>}
    </>
  );
};

export default Posts;
