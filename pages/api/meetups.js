import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "GET") {
      const data = req.body;
  
      const client = await MongoClient.connect(
        "mongodb+srv://nihar078:hQl21s8e5iZjJ7bP@cluster0.ghenp8l.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();
  
      const meetupsCollection = db.collection("meetups");
  
      const result = await meetupsCollection.find().toArray();
  
    //   console.log(result);
      client.close();
      res.status(200).json({ meetups: result });
    }else{
        res.status(405).json({message: "Method Not Allowed"})
    }
  }
  
  export default handler;
  