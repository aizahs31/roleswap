import mongoose from 'mongoose';

const BadgeSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  icon: String,
  unlockedAt: String,
  rarity: String
}, { _id: false });

const SessionSchema = new mongoose.Schema({
  id: String,
  userId: String,
  roleName: String,
  roleId: String,
  choices: [Number],
  scoreReport: Object,
  date: String,
  completed: Boolean
}, { _id: false });

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  badges: [BadgeSchema],
  sessions: [SessionSchema],
  streak: Number,
  totalSimulations: Number
});

export default mongoose.model('User', UserSchema);
