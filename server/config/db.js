import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);


  } catch (error) {
    process.exit(1);
  }
};
