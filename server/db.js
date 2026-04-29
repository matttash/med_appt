const mongoose = require("mongoose");

// FIX: use lab-safe local fallback OR environment-safe URI
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/stayhealthybeta1";

const connectToMongo = async (retryCount = 0) => {
    const MAX_RETRIES = 3;

    try {
        await mongoose.connect(mongoURI, {
            dbName: "stayhealthybeta1"
        });

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);

        if (retryCount >= MAX_RETRIES) {
            throw new Error("Unable to connect to Mongo!");
        }

        console.log(`🔁 Retrying MongoDB... (${retryCount + 1})`);

        return connectToMongo(retryCount + 1);
    }
};

module.exports = connectToMongo;