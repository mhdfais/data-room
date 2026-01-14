import express from 'express';
import { register, login, logout, getMe, forgotPassword, resetPassword, verifyResetToken } from '../controllers/authController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:resetToken', verifyResetToken);
router.put('/reset-password/:resetToken', resetPassword);
router.get('/me', verifyToken, getMe);

export default router;
