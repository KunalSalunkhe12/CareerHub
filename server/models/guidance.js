import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  uuid: String,
  title: String,
  isCompleted: Boolean,
  subtasks: [String],
});

const guidanceSchema = new mongoose.Schema({
  BOOKMARKED: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
  APPLYING: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
  APPLIED: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
  INTERVIEWING: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
  NEGOTIATING: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
  ACCEPTED: {
    uuid: String,
    status: String,
    tasks: [taskSchema],
  },
});

export { guidanceSchema, taskSchema };
export default mongoose.model("Guidance", guidanceSchema);
