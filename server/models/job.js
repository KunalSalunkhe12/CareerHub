import mongoose from "mongoose";
import { checklistSchema } from "./checklist.js";
import { guidanceSchema } from "./guidance.js";

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Bookmarked",
    },
    checklist: {
      type: checklistSchema,
      required: true,
    },
    guidance: {
      type: guidanceSchema,
      required: true,
    },
    keywords: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
