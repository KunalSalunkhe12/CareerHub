import express from "express";
import { updateChecklist } from "../controllers/checklist.js";

const router = express.Router();

router.put("/:jobId", updateChecklist);

export default router;
