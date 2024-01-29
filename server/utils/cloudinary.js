import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const uploadFileInCloudinary = async (file) => {
  try {
    if (!file) {
      throw new Error("No file provided");
    }
    
    const response = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });

    return response;
  } catch (error) {
    if (file) {
      fs.unlinkSync(file);
    }
    throw error; 
  }
};
