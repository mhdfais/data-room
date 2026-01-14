import express from 'express';
import { createFolder, getFolders, getFolderByShareToken } from '../controllers/folderController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, createFolder);
router.get('/', verifyToken, getFolders);
router.get('/share/:shareToken', getFolderByShareToken);

export default router;
