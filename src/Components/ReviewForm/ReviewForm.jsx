import React, { useEffect, useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
  };

  return (
    <div className="review-container">
      <h2>Give Feedback</h2>

      {doctorData && appointmentData ? (
        <>
          <p><b>Doctor:</b> {doctorData.name}</p>
          <p><b>Date:</b> {appointmentData?.date}</p>
          <p><b>Time:</b> {appointmentData?.time}</p>

          {!submitted ? (
            <form className="review-form" onSubmit={handleSubmit}>
              <input
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Rating</option>
                <option value="1">1 ⭐</option>
                <option value="2">2 ⭐⭐</option>
                <option value="3">3 ⭐⭐⭐</option>
                <option value="4">4 ⭐⭐⭐⭐</option>
                <option value="5">5 ⭐⭐⭐⭐⭐</option>
              </select>

              <textarea
                placeholder="Write review..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              />

              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
              <h3>Thank you for your feedback!</h3>
              <button disabled>Submitted</button>
            </div>
          )}
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ReviewForm;