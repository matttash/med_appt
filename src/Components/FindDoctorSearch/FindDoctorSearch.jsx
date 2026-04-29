import React from "react";
import "./FindDoctorSearch.css";

function FindDoctorSearch({ setSearch }) {
  return (
    <div className="find-doctor-search">
      <input
        type="text"
        placeholder="Search specialty..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default FindDoctorSearch;