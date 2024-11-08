// src/app/api/cricket/score/fetch/route.js

import { connectToDatabase } from '@/lib/dbConnect.js';

export async function GET(req) {
  const { db } = await connectToDatabase();
  const data = await db.collection('cricket_scores').find().toArray();

  // Structure the response to match the required format
  const response = {
    home: [
      {
        component_name: "cricket_score",
        component_id: "1",
        id: "001",
        title: "क्रिकेट कवरेज",
        match_status: "लाइव",
        marque: "LSG को जीत के लिए 129 रन, 61 गेंदों में चाहिए : CRR: 8.3",
        game_date: "April 01",
        data: data.map((teamData) => ({
          id: teamData._id.toString(),
          team: teamData.team,
          title: teamData.teamName,
          image: teamData.teamLogo,
          score: teamData.teamScore,
          wicket: teamData.teamWicket,
          over: teamData.teamOver,
        }))
      }
    ],
    metadata: {
      id: "668f9d84a5d3qb34b86477ad",
      private: false,
      createdAt: new Date().toISOString(),
      name: "cricket_score",
      name_hn: "क्रिकेट कवरेज"
    }
  };

  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' }
  });
}
