// src/app/models/CricketScore.js
import mongoose from 'mongoose';

const CricketScoreSchema = new mongoose.Schema({
  team: String, // "1" or "2" for each team section
  teamName: String,
  teamLogo: String,
  teamScore: String,
  teamWicket: String,
  teamOver: String,
});

export default mongoose.models.CricketScore || mongoose.model('CricketScore', CricketScoreSchema);
