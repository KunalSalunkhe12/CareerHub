import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import jobRouter from "./routes/job.js";
import guidanceRouter from "./routes/guidance.js";
import checklistRouter from "./routes/checklist.js";

import postRoutes from "./routes/posts.js"

const app = express();
dotenv.config();


app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.get("/", (req, res) => {
    res.send("Hello to CareerHub API");
});
app.use("/posts",postRoutes)

app.use("/user", userRouter)
app.use("/job", jobRouter)
app.use("/guidance", guidanceRouter)
app.use("/checklist", checklistRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000")))
    .catch((err) => console.log(err + "Encountering error"));
