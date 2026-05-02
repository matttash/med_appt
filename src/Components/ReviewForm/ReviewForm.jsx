import React, { useEffect, useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

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

    const data = {
      name,
      review,
      rating,
      doctor: doctorData?.name,
    };

    setSubmittedData(data);
    setSubmitted(true);

    console.log("Review Submitted:", data);
  };

  return (
    <div className="review-container">
      <h2>Give Your Feedback</h2>

      {doctorData && appointmentData ? (
        <>
          <p><strong>Doctor:</strong> {doctorData.name}</p>
          <p><strong>Date:</strong> {appointmentData?.date}</p>
          <p><strong>Time:</strong> {appointmentData?.time}</p>

          {/* INPUT FORM (disabled after submit) */}
          {!submitted && (
            <form onSubmit={handleSubmit} className="review-form">

              {/* NAME INPUT */}
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />

              {/* RATING SELECTOR */}
              <label>Rating (1-5):</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select rating</option>
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
              </select>

              {/* REVIEW TEXT */}
              <label>Review:</label>
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your feedback..."
                required
              />

              {/* SUBMIT BUTTON */}
              <button type="submit">Submit Feedback</button>
            </form>
          )}

          {/* AFTER SUBMISSION DISPLAY */}
          {submitted && submittedData && (
            <div className="submitted-box">
              <h3>Thank you for your feedback!</h3>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Rating:</strong> {submittedData.rating}</p>
              <p><strong>Review:</strong> {submittedData.review}</p>

              {/* DISABLED BUTTON REQUIREMENT */}
              <button disabled className="disabled-btn">
                Feedback Submitted
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No consultation data available.</p>
      )}
    </div>
  );
};

export default ReviewForm;