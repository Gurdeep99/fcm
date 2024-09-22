// models/FcmToken.js
import mongoose from 'mongoose';

const FcmTokenSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Add userId as a unique identifier
  token: { type: String, required: true },
});

export default mongoose.models.FcmToken || mongoose.model('FcmToken', FcmTokenSchema);
