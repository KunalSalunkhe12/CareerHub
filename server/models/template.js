import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
    status: "string",
    templates: [
        {
            uuid: "string",
            subject: "string",
            body: "string",
        }
    ]
})

export default mongoose.model("Template", templateSchema);