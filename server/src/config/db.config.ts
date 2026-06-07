import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  const MONGO_URI =
    process.env.MONGO_URI || "mongodb://localhost:27017/pulseHR";

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    mongoose.connection.on("disconnected", () => {
      console.log("❌ MongoDB Disconnected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB Error:", err);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};
