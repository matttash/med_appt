const mongoose = require('mongoose');

const MAX_RETRY = 5;
let retryCount = 0;

const connectToMongo = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/medappt', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error.message);

    retryCount++;

    if (retryCount >= MAX_RETRY) {
      throw new Error("❌ MongoDB failed after multiple retries");
    }

    console.log(`Retrying connection... (${retryCount}/${MAX_RETRY})`);

    setTimeout(connectToMongo, 3000);
  }
};

module.exports = connectToMongo;