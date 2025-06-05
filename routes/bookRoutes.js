import { Router } from 'express';
import authenticateToken from '../middleware/authMiddleware.js';
import {
  createBook,
  getBooks,
  getBookDetails,
  searchBooks,
} from '../controllers/bookController.js';
import { createReview } from '../controllers/reviewController.js';

const router = Router();

router.post('/', authenticateToken, createBook);
router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookDetails);
router.post('/:id/reviews', authenticateToken, createReview);

export default router;
