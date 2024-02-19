import express from "express";
import { getGuidance, updateGuidance } from "../controllers/guidance.js";

const router = express.Router();

router.get("/:jobId", getGuidance);
router.put("/:jobId", updateGuidance);

export default router;
