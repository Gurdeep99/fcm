// src/app/api/audio/route.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

async function getAudioData(skip, limit) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('test'); // Replace with your DB name
    const collection = database.collection('audios'); // Replace with your collection name

    const audioData = await collection
      .find({})
      .skip(skip) // Skip the number of documents
      .limit(limit) // Limit the number of documents returned
      .project({ __v: 0 }) // Exclude __v field
      .toArray();

    return audioData;
  } finally {
    await client.close();
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get('skip') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    const audioData = await getAudioData(skip, limit);
    return new Response(JSON.stringify(audioData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch data from MongoDB' }),
      { status: 500 }
    );
  }
}
