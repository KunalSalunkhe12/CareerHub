import PostMessage from "../models/postMessage.js";
import sharp from "sharp";
import { uploadFileInCloudinary } from "../utils/cloudinary.js";
import fs from "fs"

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
      creator,
      tags,
      selectedFile: cloudinaryResponse.secure_url,
    });

    await newPost.save();

    fs.unlinkSync(optimizedImagePath);

    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
