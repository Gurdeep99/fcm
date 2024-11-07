import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { team, field, value } = req.body;

    const client = new MongoClient(process.env.MONGODB_URI);
    try {
      await client.connect();
      const db = client.db('cricketScores');
      const collection = db.collection('teams');

      await collection.updateOne(
        { name: team },
        { $set: { [field]: value } },
        { upsert: true }
      );

      res.status(200).json({ message: `${field} updated for ${team}` });
    } catch (error) {
      res.status(500).json({ message: 'Error updating field' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
