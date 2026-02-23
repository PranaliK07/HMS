// server/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Only pass the connection string, no extra options
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/hospital_db");

    console.log("✅ MongoDB connected successfully.");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // stop server if DB not connected
  }
};

module.exports = connectDB;