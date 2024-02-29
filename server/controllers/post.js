import PostMessage from "../models/postMessage.js";
import sharp from "sharp";
import { uploadFileInCloudinary } from "../utils/cloudinary.js";
import fs from "fs";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, message, creator, tags } = req.body;
  console.log(title, message, creator);
  const selectedFile = req.file.path;
  console.log(selectedFile);

  try {
    const optimizedImagePath = `uploads/optimized-${Date.now()}.jpg`;
    await sharp(selectedFile)
      .resize({ width: 800 })
      .jpeg({ quality: 80 })
      .toFile(optimizedImagePath);

    const cloudinaryResponse = await uploadFileInCloudinary(optimizedImagePath);
    const newPost = new PostMessage({
      title,
      message,
      tags,
      selectedFile: cloudinaryResponse.secure_url,
      creator: req.userId
    });

    await newPost.save();

    fs.unlinkSync(optimizedImagePath);

    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    await PostMessage.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!req.userId) return res.status(404).json("Please sign up or sign in");
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  let post = await PostMessage.findById(id);
  // console.log(post)
  const index = post.likes.findIndex((id) => id === String(req.userId));
  // console.log(index)

  if (index === -1) {
    post.likes.push(req.userId);
  } else {
    post.likes.splice(index, 1);
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost)
};
