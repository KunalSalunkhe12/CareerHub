import mongoose from "mongoose";

const guidanceSchema = new mongoose.Schema({
    status: String,
    tasks: [
        {
            title: String,
            isCompleted: Boolean,
            subtasks: [String],
        },
    ],
})

export default mongoose.model("Guidance", guidanceSchema);