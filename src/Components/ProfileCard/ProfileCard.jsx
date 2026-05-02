import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  // FETCH USER PROFILE
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");

    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [navigate]);

  const fetchUserProfile = async () => {
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${authtoken}`,
          Email: email,
        },
      });

      if (response.ok) {
        const user = await response.json();
        setUserDetails(user);
        setUpdatedDetails(user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT BUTTON
  const handleEdit = () => {
    setEditMode(true);
  };

  // INPUT CHANGE
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE PROFILE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email");

      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          Email: email,
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        setUserDetails(updatedDetails);
        sessionStorage.setItem("name", updatedDetails.name);
        sessionStorage.setItem("phone", updatedDetails.phone);

        setEditMode(false);
        alert("Profile Updated Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profile-card">

      {/* EDIT MODE */}
      {editMode ? (
        <form onSubmit={handleSubmit} className="profile-form">

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedDetails.name || ""}
            onChange={handleInputChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={updatedDetails.email || ""}
            disabled
          />

          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={updatedDetails.phone || ""}
            onChange={handleInputChange}
          />

          <button type="submit">Save</button>
        </form>
      ) : (
        // VIEW MODE
        <div className="profile-view">

          <h3>Profile Details</h3>

          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;