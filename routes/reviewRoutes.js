import { Router } from 'express';
import authenticateToken from '../middleware/authMiddleware.js';
import { updateReview, deleteReview } from '../controllers/reviewController.js';

const router = Router();

router.put('/:id', authenticateToken, updateReview);
router.delete('/:id', authenticateToken, deleteReview);

export default router;
