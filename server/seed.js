const mongoose = require("mongoose");
const Doctor = require("./models/Doctor");

// 🔥 USE YOUR ORIGINAL LAB CONNECTION (IMPORTANT)
const mongoURI = "mongodb://root:rJClnwkRxnhPYgTUduOSO4hj@172.21.186.249:27017/stayhealthybeta1";

async function seed() {
    try {
        await mongoose.connect(mongoURI, {
            dbName: "stayhealthybeta1"
        });

        console.log("✅ Connected to MongoDB");

        const doctors = [
            { name: "Dr A", specialty: "Cardiology", experience: 10, fee: 1000 },
            { name: "Dr B", specialty: "Dermatology", experience: 8, fee: 800 },
            { name: "Dr C", specialty: "Neurology", experience: 12, fee: 1500 },
            { name: "Dr D", specialty: "Pediatrics", experience: 6, fee: 700 }
        ];

        await Doctor.deleteMany({});
        await Doctor.insertMany(doctors);

        console.log("Doctors seeded successfully");

        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Seed error:", error.message);
    }
}

seed();