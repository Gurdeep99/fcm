import { MongoClient } from 'mongodb';

// MongoDB URI and database name
const uri = process.env.MONGODB_URI; // Make sure to set this in your .env file
const dbName = 'AUW';  // Your database name

// Connect to MongoDB
async function connectToDatabase() {
  if (global._mongoClient) {
    return global._mongoClient;
  }

  const client = await MongoClient.connect(uri);
  global._mongoClient = client;
  return client;
}

export default async function handler(req, res) {
  if (req.method === 'GET' || req.method === 'get') {
    const { skip = 0, limit = 5 } = req.query;  // Default skip to 0 and limit to 5
    
    try {
      // Convert skip and limit to integers
      const skipNumber = parseInt(skip, 10);
      const limitNumber = parseInt(limit, 10);

      const client = await connectToDatabase();
      const db = client.db(dbName);
      const collection = db.collection('audios');  // Collection name

      // Fetch the paginated data
      const audios = await collection
        .find({})
        .skip(skipNumber)
        .limit(limitNumber)
        .toArray();

      // Format the data to the desired structure
      const formattedAudios = audios.map(audio => ({
        id: audio._id.toString(),  // Convert _id to string
        index: audio.id,
        title: audio.title,
        url: audio.URL
      }));

      res.status(200).json({ audios: formattedAudios });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
