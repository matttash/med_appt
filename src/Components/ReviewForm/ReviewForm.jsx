import React, { useState, useEffect } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    const storedDoctor = JSON.parse(localStorage.getItem("doctorData"));

    if (storedDoctor) {
      setDoctorData(storedDoctor);

      const storedAppointment = JSON.parse(
        localStorage.getItem(storedDoctor.name)
      );

      setAppointmentData(storedAppointment);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = {
      doctor: doctorData?.name,
      rating,
      reviewText,
    };

    console.log("Submitted Review:", review);

    alert("Review submitted successfully!");

    setShowForm(false);
    setReviewText("");
    setRating("");
  };

  return (
    <div className="review-container">
      <h2>Consultation Review</h2>

      {doctorData && appointmentData ? (
        <>
          <p><strong>Doctor:</strong> {doctorData.name}</p>
          <p><strong>Date:</strong> {appointmentData?.date}</p>
          <p><strong>Time:</strong> {appointmentData?.time}</p>

          {!showForm && (
            <button onClick={() => setShowForm(true)}>
              Leave a Review
            </button>
          )}

          {showForm && (
            <form className="review-form" onSubmit={handleSubmit}>
              
              <label>Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>

              <label>Review:</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write your feedback..."
                required
              />

              <button type="submit">Submit Review</button>
            </form>
          )}
        </>
      ) : (
        <p>No consultation data available.</p>
      )}
    </div>
  );
};

export default ReviewForm;