// /app/api/myjtotish/route.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error("Please define MONGODB_URI and MONGODB_DB in your environment variables.");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

async function connectToDatabase() {
    const client = await clientPromise;
    const db = client.db('auw');
    return { client, db };
}

export async function POST(req) {
    const body = await req.json();
    const { user, token } = body;

    if (!user || (user !== "a" && user !== "b")) {
        return new Response(JSON.stringify({ error: "Invalid user parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    if (!token) {
        return new Response(JSON.stringify({ error: "Token is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { db } = await connectToDatabase();
    const collection = db.collection("token");

    const currentUser = user === "a" ? "userA" : "userB";
    const otherUser = user === "a" ? "userB" : "userA";

    // Update or insert the current user's token
    await collection.updateOne(
        { user: currentUser },
        { $set: { token } },
        { upsert: true }
    );

    // Retrieve the other user's token
    const otherUserData = await collection.findOne({ user: otherUser });

    return new Response(
        JSON.stringify({
            user: otherUser === "userA" ? "a" : "b",
            token: otherUserData ? otherUserData.token : null,
        }),
        {
            status: 200,
            headers: { "Content-Type": "application/json" },
        }
    );
}
