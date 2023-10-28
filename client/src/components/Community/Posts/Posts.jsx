<<<<<<< HEAD
import React from 'react'
import Post from './Post/Post'
import { useSelector } from "react-redux"
=======
import Post from "./Post/Post";

>>>>>>> 164490c2dac5c59cfb58e797a327b33c0a04bb07
const Posts = () => {
  const posts = useSelector((state) => state.community)
  console.log(posts)
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
