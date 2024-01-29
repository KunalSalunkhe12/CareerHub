import express from 'express';

import { getPosts, createPost, } from '../controllers/post.js';
// import {upload} from '../middlewares/multer.js';
import { upload } from '../middlewares/multer.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', upload.single('file'), createPost); 

export default router;