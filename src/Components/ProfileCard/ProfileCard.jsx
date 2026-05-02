import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  const userEmail = sessionStorage.getItem("email");

  return (
    <div className="profile-card">
      <h3>Profile</h3>

      {userEmail ? (
        <>
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>Status:</strong> Patient Account</p>
        </>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default ProfileCard;