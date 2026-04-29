import { useState } from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {

 const [showForm,setShowForm] = useState(false);
 const [appointmentBooked,setAppointmentBooked] = useState(false);

 const handleBookingSuccess = () => {
   setAppointmentBooked(true);
   setShowForm(false);
 };

 const cancelAppointment = () => {
   setAppointmentBooked(false);
   alert("Appointment cancelled.");
 };

 return (
   <div className="doctor-card">

     <h2>{doctor.name}</h2>
     <p>{doctor.specialty}</p>
     <p>{doctor.experience} years experience</p>
     <p>⭐ {doctor.rating}</p>

     <div className="doctor-card-options-container">

       {!appointmentBooked ? (
         <button
           onClick={() => setShowForm(true)}
         >
           Book Appointment
         </button>
       ) : (
         <>
           <p>Appointment Booked ✅</p>

           <button onClick={cancelAppointment}>
             Cancel Appointment
           </button>
         </>
       )}

     </div>

     {showForm && (
       <AppointmentForm
         doctorName={doctor.name}
         onClose={() => setShowForm(false)}
         onBook={handleBookingSuccess}
       />
     )}

   </div>
 );
}

export default DoctorCard;