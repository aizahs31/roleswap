import express from 'express';
import Badge from '../models/Badge.js';
const router = express.Router();

// Award badge
router.post('/', async (req, res) => {
  try {
    const badge = new Badge(req.body);
    await badge.save();
    res.status(201).json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create badge (alias for award badge)
router.post('/create', async (req, res) => {
  try {
    const badge = new Badge(req.body);
    await badge.save();
    res.status(201).json(badge);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get badges by userId
router.get('/user/:userId', async (req, res) => {
  try {
    const badges = await Badge.find({ userId: req.params.userId });
    res.json(badges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
