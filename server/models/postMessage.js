import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      creator: String,
      message: String,
      createdAt: {
        type: Date,
        default: new Date(),
      },
    },
  ],
});

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
