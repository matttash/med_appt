import React, { useEffect, useState } from "react";
import "./InstantConsultation.css";
import { useSearchParams } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getDoctorsDetails = () => {
    fetch("https://api.npoint.io/9a5543d36f1460da2f63")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);

        if (searchParams.get("speciality")) {
          const filtered = data.filter(
            (doctor) =>
              doctor.speciality.toLowerCase() ===
              searchParams.get("speciality").toLowerCase()
          );

          setFilteredDoctors(filtered);
          setIsSearched(true);
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = (searchText) => {
    if (searchText === "") {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );

      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  useEffect(() => {
    getDoctorsDetails();
  }, [searchParams]);

  return (
    <center>
      <div className="searchpage-container">

        {/* SIMPLE SEARCH INPUT (replaces missing components) */}
        <input
          type="text"
          placeholder="Search doctor speciality..."
          onChange={(e) => handleSearch(e.target.value)}
        />

        <div className="search-results-container">
          {isSearched ? (
            <center>
              <h2>
                {filteredDoctors.length} doctors available{" "}
                {searchParams.get("location")}
              </h2>

              <h3>
                Book appointments with minimum wait-time & verified doctors
              </h3>

              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => (
                  <div key={doctor.name} className="doctor-card">
                    <h4>{doctor.name}</h4>
                    <p>{doctor.speciality}</p>
                  </div>
                ))
              ) : (
                <p>No doctors found.</p>
              )}
            </center>
          ) : (
            ""
          )}
        </div>

        {/* ✅ REVIEW FORM INTEGRATION */}
        <div style={{ marginTop: "40px" }}>
          <ReviewForm />
        </div>

      </div>
    </center>
  );
};

export default InstantConsultation;