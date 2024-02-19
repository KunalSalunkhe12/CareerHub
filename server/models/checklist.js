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
  BOOKMARKED: [taskSchema],
  APPLYING: [taskSchema],
  APPLIED: [taskSchema],
  INTERVIEWING: [taskSchema],
  NEGOTIATING: [taskSchema],
  ACCEPTED: [taskSchema],
});

export { checklistSchema, taskSchema };
export default mongoose.model("Checklist", checklistSchema);
