import express from 'express';
import { getChecklist, updateChecklist } from '../controllers/checklist.js';

const router = express.Router();

router.get("/", getChecklist);
router.put("/", updateChecklist);

export default router;