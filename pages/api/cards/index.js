import connectDB from "../_db/connect-db";
import {Card} from "../_db/models/Card";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const cards = await Card.find({});
        res.status(200).json(cards);
      } catch (error) {
        console.log(error);
        // You can inspect the error and return more meaningful error messages...
        res.status(500).json({error: "something went wrong"});
      }
      break;
    case "POST":
    case "DELETE":
    case "PUT":
    case "PATCH":
    default:
      res.status(405).json({error: "method not allowed"});
  }
}

export default connectDB(handler);
