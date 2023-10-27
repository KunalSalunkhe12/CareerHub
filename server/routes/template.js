import express from 'express';
import { postTemplate } from '../controllers/template.js';

const router = express.Router();

router.post("/", postTemplate);

export default router;