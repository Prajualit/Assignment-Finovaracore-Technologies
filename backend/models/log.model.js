import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({

  userId: mongoose.Types.ObjectId,
  role: String,
  timestamp: Date,
  aadhaar: String,
  dob: String

});

export const Log = mongoose.model('Log', logSchema);