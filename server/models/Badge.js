import mongoose from 'mongoose';

const BadgeSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  name: String,
  description: String,
  icon: String,
  unlockedAt: String,
  rarity: String
});

export default mongoose.model('Badge', BadgeSchema);
