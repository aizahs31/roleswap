import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  userId: String,
  roleName: String,
  roleId: String,
  choices: [Number],
  scoreReport: Object,
  date: String,
  completed: Boolean
});

export default mongoose.model('Session', SessionSchema);
