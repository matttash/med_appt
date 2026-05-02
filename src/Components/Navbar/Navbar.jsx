import React, { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import ReportsLayout from "../ReportsLayout/ReportsLayout";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showReports, setShowReports] = useState(false);

  return (
    <nav className="navbar">
      <h2>Doctor App</h2>

      <div className="nav-right">

        {/* PROFILE */}
        <div className="dropdown">
          <button onClick={() => setShowProfile(!showProfile)}>
            Profile ▼
          </button>
          {showProfile && <ProfileCard />}
        </div>

        {/* REPORTS */}
        <div className="dropdown">
          <button onClick={() => setShowReports(!showReports)}>
            Reports ▼
          </button>
          {showReports && <ReportsLayout />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;