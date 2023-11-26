import mongoose from "mongoose";

const options = {
  serverSelectionTimeoutMS: 15000,
  socketTimeoutMS: 45000,
};

const MONGO =
  "mongodb+srv://taiguara:PUCmg2023@pucmg.x1gwvhl.mongodb.net/pucmgps?retryWrites=true&w=majority";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(MONGO, options);
    connection.isConnected = db.connections[0].readyState;

    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console, "Connection error:"));
    dbConnection.once("open", () => {
      console.log("Connected to MongoDB Atlas");
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
