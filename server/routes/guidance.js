import express from "express";
import { updateGuidance } from "../controllers/guidance.js";

const router = express.Router();

router.put("/:jobId", updateGuidance);

export default router;
