import Book from '../models/Book.js';
import Review from '../models/Review.js';
import mongoose from 'mongoose';

export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const { author, genre, page = 1, limit = 10 } = req.query;
    const query = {};
    if (author) query.author = new RegExp(author, 'i');
    if (genre) query.genre = genre;
    const books = await Book.find(query).skip((page - 1) * limit).limit(limit);
    const count = await Book.countDocuments(query);
    res.json({ books, count });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBookDetails = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const reviews = await Review.find({ book: req.params.id }).limit(5);
    const avgResult = await Review.aggregate([
      { $match: { book: new mongoose.Types.ObjectId(req.params.id) } },
      { $group: { _id: null, avgRating: { $avg: '$rating' } } },
    ]);
    const avgRating = avgResult[0]?.avgRating || 0;
    res.json({ book, averageRating: avgRating, reviews });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchBooks = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: 'Query string required' });

    const regex = new RegExp(q, 'i');
    const books = await Book.find({
      $or: [
        { title: { $regex: regex } },
        { author: { $regex: regex } },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
