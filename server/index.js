import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello to CareerHub API");
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/careerhub", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => app.listen(process.env.PORT || 5000, () => console.log("Server running on port 5000")))
    .catch((err) => console.log(err));
