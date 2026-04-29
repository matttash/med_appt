import { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {

 const [showForm,setShowForm] = useState(false);

 return (
   <div className="doctor-card">

     <h2>{doctor.name}</h2>
     <p>{doctor.specialty}</p>
     <p>{doctor.experience} years</p>
     <p>⭐ {doctor.rating}</p>

     <button onClick={() => setShowForm(true)}>
       Book Appointment
     </button>

     {showForm && (
       <AppointmentForm
         doctorName={doctor.name}
         onClose={() => setShowForm(false)}
       />
     )}

   </div>
 );
}

export default DoctorCard;