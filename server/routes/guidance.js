import express from 'express';
import { getGuidance, updateGuidance } from '../controllers/guidance.js';

const router = express.Router();

router.get("/:status", getGuidance);
router.put("/", updateGuidance);





export default router;

