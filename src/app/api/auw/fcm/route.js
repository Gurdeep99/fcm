// pages/api/fcm/[userOrGuruji].js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const { userOrGuruji } = req.query;

  // Validate the path parameter
  if (!['user', 'guruji'].includes(userOrGuruji)) {
    return res.status(400).json({ message: 'Invalid parameter, use "user" or "guruji".' });
  }

  // MongoDB connection string
  const uri = process.env.MONGODB_URI; // Add this to your .env.local file
  const client = new MongoClient(uri);

  try {
    // Connect to the database
    await client.connect();
    const db = client.db('yourDatabaseName'); // Replace with your database name
    const collection = db.collection('fcmData');

    if (req.method === 'GET') {
      // Fetch data for the specified type
      const data = await collection.findOne({ type: userOrGuruji });
      return res.status(200).json(data || { message: `No data found for ${userOrGuruji}.` });
    } else if (req.method === 'POST') {
      // Validate request body
      const body = req.body;
      if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ message: 'Request body is required.' });
      }

      // Update or insert data
      const result = await collection.updateOne(
        { type: userOrGuruji },
        { $set: { data: body } },
        { upsert: true }
      );

      return res.status(200).json({ message: `Data updated for ${userOrGuruji}.`, result });
    } else {
      // Method not allowed
      return res.status(405).json({ message: 'Method not allowed.' });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  } finally {
    // Close the database connection
    await client.close();
  }
}
