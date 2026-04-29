import { useState } from "react";

function AppointmentForm({ doctorName, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ){
      alert("Please fill all fields");
      return;
    }

    alert(
      `Appointment booked with ${doctorName} on ${formData.date} at ${formData.time}`
    );

    onClose();
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment with {doctorName}</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Patient Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Choose Time Slot</option>
          <option>9:00 AM</option>
          <option>11:00 AM</option>
          <option>2:00 PM</option>
          <option>4:00 PM</option>
        </select>

        <button type="submit">
          Confirm Appointment
        </button>

        <button
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>

      </form>
    </div>
  );
}

export default AppointmentForm;