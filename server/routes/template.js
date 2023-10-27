import express from 'express';
import { postTemplate, getTemplates } from '../controllers/template.js';

const router = express.Router();

router.get("/", getTemplates);
router.post("/", postTemplate);

export default router;