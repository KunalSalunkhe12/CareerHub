import express from 'express';
import { getChecklist } from '../controllers/checklist.js';

const router = express.Router();

router.get("/", getChecklist);

export default router;