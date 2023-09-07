import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello to CareerHub API");
});

app.use("/user", userRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000")))
    .catch((err) => console.log(err));
