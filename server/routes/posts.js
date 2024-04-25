import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  likePost,
} from "../controllers/post.js";
import { upload } from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", upload.single("file"), auth, createPost);
router.delete("/:id", auth, deletePost);

router.put("/:id/like", auth, likePost);

export default router;
