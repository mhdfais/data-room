import express from 'express';
import { getFiles, uploadFile } from '../controllers/fileController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/:folderId', verifyToken, getFiles);
router.post('/:folderId', verifyToken, uploadFile);

export default router;
