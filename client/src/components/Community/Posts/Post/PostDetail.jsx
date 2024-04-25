import { useParams } from "react-router-dom";
import { deletePost, likePost } from "../../../../api";
import { useEffect, useState } from "react";
import { fetchPostDetails } from "../../../../api";
import { commentPost } from "../../../../api";
import { useSelector } from "react-redux";

const PostDetail = () => {
  const [likes, setLikes] = useState(null);
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.auth.userInfo);

  console.log(post);

  const { postId } = useParams();

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const { data } = await fetchPostDetails(postId);
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPostDetails();
  }, [postId]);

  const handleLike = async () => {
    try {
      const { data } = await likePost(post._id);
      console.log(data);
      console.log("Like clicked before api call");
      console.log(data.likes.length);
      setLikes(data.likes.length);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(post._id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  function formatDateString(dateString) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    const time = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${formattedDate} at ${time}`;
  }

  // const createdAt = new Date(post.createdAt);
  const multiFormatDateString = (timestamp) => {
    const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
    const date = new Date(timestampNum * 1000);
    const now = new Date();

    const diff = now.getTime() - date.getTime();
    const diffInSeconds = diff / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;

    switch (true) {
      case Math.floor(diffInDays) >= 30:
        return formatDateString(timestamp); // Assuming formatDateString is defined elsewhere
      case Math.floor(diffInDays) === 1:
        return `${Math.floor(diffInDays)} day ago`;
      case Math.floor(diffInDays) > 1 && diffInDays < 30:
        return `${Math.floor(diffInDays)} days ago`;
      case Math.floor(diffInHours) >= 1:
        return `${Math.floor(diffInHours)} hours ago`;
      case Math.floor(diffInMinutes) >= 1:
        return `${Math.floor(diffInMinutes)} minutes ago`;
      default:
        return "Just now";
    }
  };

  const handleComment = async () => {
    await commentPost(post._id, user.result.name, comment);
    setComment("");
    window.location.reload();
  };

  return (
    post && (
      <div className="border bg-white rounded-md shadow-md my-10 p-4 w-[80%] mx-auto">
        <div className="font-semibold">
          <p className="">{post.creator}</p>
        </div>
        <p className="text-sm mb-2">{multiFormatDateString(post.createdAt)}</p>
        <img src={post.selectedFile} className="w-full object-cover" />
        <h5 className="text-2xl font-semibold my-4">{post.title}</h5>
        <div dangerouslySetInnerHTML={{ __html: post.message }}></div>
        <div className="flex justify-between mt-4">
          {user.result.name === post.creator && (
            <>
              <div className="flex gap-2">
                <button className="text-blue-500" onClick={handleLike}>
                  Like
                </button>
                <p className="text-blue-500">{likes === 0 ? " " : likes}</p>
              </div>
              <button className="text-blue-500" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
        <hr className="mt-5" />
        <div>
          <h3 className="text-2xl font-semibold my-5">Comments</h3>
          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="Add a comment"
              className="border rounded-md p-2 w-full"
            />
            <button className="btn_primary" onClick={handleComment}>
              Add Comment
            </button>
          </div>
          <div>
            {post.comments.map((comment, i) => (
              <div
                key={i}
                className="border bg-white rounded-md shadow-md my-5 p-4"
              >
                <div className="font-semibold">
                  <p className="">{comment.creator}</p>
                </div>
                <p className="text-sm mb-2">
                  {multiFormatDateString(comment.createdAt)}
                </p>
                <h5 className="my-4">{comment.message}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default PostDetail;
