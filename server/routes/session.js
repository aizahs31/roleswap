import express from 'express';
import Session from '../models/Session.js';
const router = express.Router();

// Create session
router.post('/', async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get sessions by userId
router.get('/user/:userId', async (req, res) => {
  try {
    const sessions = await Session.find({ userId: req.params.userId });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
