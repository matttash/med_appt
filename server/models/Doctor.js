const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
    name: String,
    specialty: String,
    experience: Number,
    fee: Number,
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Doctor", DoctorSchema);