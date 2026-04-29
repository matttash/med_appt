import { useState } from "react";
import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./DoctorCard/DoctorCard";

function BookingConsultation() {
  const [search, setSearch] = useState("");

  const doctors = [
    {
      name: "Dr. Sarah Kim",
      specialty: "Cardiology",
      experience: 12,
      rating: 4.8,
      profile: "Heart specialist with 12 years experience.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Dr. James Patel",
      specialty: "Dermatology",
      experience: 8,
      rating: 4.6,
      profile: "Skin care expert and dermatologist.",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Dr. Amina Noor",
      specialty: "Pediatrics",
      experience: 10,
      rating: 4.7,
      profile: "Child health specialist.",
      image: "https://via.placeholder.com/150"
    }
  ];

  // Filter doctors based on search
  const filteredDoctors = doctors.filter((doc) =>
    doc.specialty.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="booking-consultation">

      <h1>Book a Consultation</h1>

      {/* Search Component */}
      <FindDoctorSearch setSearch={setSearch} />

      {/* Doctor List */}
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <p>No doctors found</p>
        )}
      </div>

    </div>
  );
}

export default BookingConsultation;