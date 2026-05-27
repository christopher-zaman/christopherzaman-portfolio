import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let client;

async function connectDB() {
    if (!uri) {
    throw new Error("Missing MONGODB_URI. Check .env.local and restart vercel dev.");
  }

  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }

  return client.db(dbName);
}

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed"
    });
  }

  try {

    const db = await connectDB();

    await db.collection("contact_submissions").insertOne({

      firstName: req.body.firstName,

      lastName: req.body.lastName,

      company: req.body.company,

      email: req.body.email,

      message: req.body.message,

      createdAt: new Date(),

    });

    return res.status(200).json({
      success: true
    });

  } catch (err) {

    console.error(err);

    return res.status(500).json({
      success: false
    });

  }
}