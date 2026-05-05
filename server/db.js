const mongoose = require('mongoose');

const connectToMongo = async () => {
  try {
    // Try to connect to MongoDB (optional)
    await mongoose.connect('mongodb://127.0.0.1:27017/medappt');

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("⚠️ MongoDB not available. Running without database.");
    console.log("Server will continue without DB connection.");
  }
};

module.exports = connectToMongo;