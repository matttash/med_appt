const express = require("express");
const router = express.Router();
const Doctor = require("../models/Doctor");

// GET all doctors
router.get("/", async (req, res) => {
    const doctors = await Doctor.find();
    res.json(doctors);
});

// SEARCH doctors
router.get("/search", async (req, res) => {
    const { specialty } = req.query;

    const doctors = await Doctor.find({
        specialty: { $regex: specialty, $options: "i" }
    });

    res.json(doctors);
});

module.exports = router;