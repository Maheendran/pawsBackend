import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ?? '',
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
