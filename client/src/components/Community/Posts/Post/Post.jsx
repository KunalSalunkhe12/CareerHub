import { deletePost } from "../../../../api";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post?.likeCount);

  const handleLike = () => {
    if (likes === 1) {
      setLikes(0);
      return;
    }
    setLikes(likes + 1);
  };

  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border rounded-md shadow-md mt-3 p-4">
      <img src={post.selectedFile} className="w-full h-20 object-cover" />
      <div className="p-2">
        <p className="text-sm text-gray-500">{post.creator}</p>
      </div>
      <h5 className="text-xl font-semibold my-2">{post.title}</h5>
      <p className="text-gray-500">{post.message}</p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <button className="text-blue-500" onClick={handleLike}>
            Like
          </button>
          <p className="text-blue-500">{likes}</p>
        </div>
        <button className="text-blue-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
