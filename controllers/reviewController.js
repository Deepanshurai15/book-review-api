import Review from '../models/Review.js';

export const createReview = async (req, res) => {
  try {
    const existing = await Review.findOne({ user: req.user.id, book: req.params.id });
    if (existing) return res.status(400).json({ message: 'Already reviewed' });

    const review = await Review.create({ ...req.body, user: req.user.id, book: req.params.id });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    Object.assign(review, req.body);
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    if (review.user.toString() !== req.user.id) return res.status(403).json({ message: 'Forbidden' });

    await review.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
