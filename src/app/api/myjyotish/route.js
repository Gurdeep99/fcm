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
    const db = client.db("auw");
    return { client, db };
}

const CLIENT_KEY = "0016a264f1c1bc7a0557398d";
const PROPERTY_KEY = "0128512c3bc7ce464214cfbc";
const AUTHORIZATION_TOKEN = "Bearer safaxadfsffcaZcvdsds";

export async function POST(req) {
    // Validate headers
    const clientKey = req.headers.get("clientkey");
    const propertyKey = req.headers.get("propertykey");
    const authorization = req.headers.get("Authorization");

    if (clientKey !== process.env.CLIENT_KEY || propertyKey !== process.env.PROPERTY_KEY || authorization !== process.env.AUTHORIZATION) {
        return new Response(
            JSON.stringify({ error: "Unauthorized request" }),
            {
                status: 401,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    const body = await req.json();
    const { user, token } = body;

    if (!user || (user !== "a" && user !== "b")) {
        return new Response(
            JSON.stringify({ error: "Invalid user parameter" }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    if (!token) {
        return new Response(
            JSON.stringify({ error: "Token is required" }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
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
