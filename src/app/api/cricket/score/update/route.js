// src/app/api/cricket/score/update/route.js
import dbConnect from '@/lib/dbConnect.js';
import CricketScore from '@/app/models/CricketScore';

export async function POST(req) {
  try {
    await dbConnect();

    const { team, teamName, teamLogo, teamScore, teamWicket, teamOver } = await req.json();

    // Update or create team data
    const scoreData = await CricketScore.findOneAndUpdate(
      { team },
      { team, teamName, teamLogo, teamScore, teamWicket, teamOver },
      { new: true, upsert: true }
    );

    return new Response(JSON.stringify(scoreData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error updating score data' }), { status: 500 });
  }
}
