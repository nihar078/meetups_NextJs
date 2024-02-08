// /api/new-meetup
// post/api/new-meet-up

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://nihar078:hQl21s8e5iZjJ7bP@cluster0.ghenp8l.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
