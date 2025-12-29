import { Router } from 'express';
import { postChatMessage } from '../controllers/chatController';

const router = Router();

// POST /api/chat
router.post('/', postChatMessage);

export default router;