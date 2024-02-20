import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  is_completed: {
    type: Boolean,
    required: true,
  },
});

const checklistSchema = new mongoose.Schema({
  BOOKMARKED: {
    status: "string",
    tasks: [taskSchema],
  },
  APPLYING: {
    status: "string",
    tasks: [taskSchema],
  },
  APPLIED: {
    status: "string",
    tasks: [taskSchema],
  },
  INTERVIEWING: {
    status: "string",
    tasks: [taskSchema],
  },
  NEGOTIATING: {
    status: "string",
    tasks: [taskSchema],
  },
  ACCEPTED: {
    status: "string",
    tasks: [taskSchema],
  },
});

export { checklistSchema, taskSchema };
export default mongoose.model("Checklist", checklistSchema);
