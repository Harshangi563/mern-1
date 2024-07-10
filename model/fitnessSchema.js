const mongoose = require('mongoose');
const fitnessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userSchema', required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }
});
module.exports = mongoose.model('FitnessData', fitnessSchema);