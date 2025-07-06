import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import sessionRoutes from './routes/session.js';
import badgeRoutes from './routes/badge.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/badges', badgeRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  
})
.then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));
