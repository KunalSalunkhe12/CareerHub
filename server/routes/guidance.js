import express from 'express';
import { getGuidance } from '../controllers/guidance.js';

const router = express.Router();

router.get("/:status", getGuidance);





export default router;

