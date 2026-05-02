import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ userName, appointmentDate, appointmentTime }) => {
  // Controls visibility
  const [showNotification, setShowNotification] = useState(true);

  // Tracks cancellation
  const [isCancelled, setIsCancelled] = useState(false);

  // Watch for cancellation
  useEffect(() => {
    if (isCancelled) {
      setShowNotification(false);
    }
  }, [isCancelled]);

  // Simulate cancel action
  const handleCancel = () => {
    setIsCancelled(true);
  };

  // If false → render nothing
  if (!showNotification) {
    return null;
  }

  return (
    <div className="notification-container">
      <p>
        Appointment booked for <strong>{userName}</strong>
      </p>
      <p>Date: {appointmentDate}</p>
      <p>Time: {appointmentTime}</p>

      <button onClick={handleCancel}>Cancel Appointment</button>
    </div>
  );
};

export default Notification;