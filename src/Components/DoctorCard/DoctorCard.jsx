import "./DoctorCard.css";

function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="doctor-image"
      />

      <h2>{doctor.name}</h2>

      <p><strong>Specialty:</strong> {doctor.specialty}</p>

      <p><strong>Experience:</strong> {doctor.experience} years</p>

      <p><strong>Rating:</strong> ⭐ {doctor.rating}</p>

      <p className="career-profile">
        {doctor.profile}
      </p>

      <button className="book-btn">
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;