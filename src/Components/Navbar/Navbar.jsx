import React, { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Navbar.css";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar">
      <h2>Doctor App</h2>

      <div className="nav-right">
        <button>Home</button>
        <button>Consultation</button>

        {/* PROFILE DROPDOWN */}
        <div className="profile-dropdown">
          <button onClick={() => setShowProfile(!showProfile)}>
            Profile ▼
          </button>

          {showProfile && <ProfileCard />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;