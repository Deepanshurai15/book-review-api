import express from 'express';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();

app.use(express.json());

app.use('/', authRoutes);
app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

export default app;
