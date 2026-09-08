import mongoose from "mongoose";
import dns from 'node:dns/promises';
// Change DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;