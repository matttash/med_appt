import { useState } from "react";

function AppointmentForm({ doctorName, onClose, onBook }) {
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

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Booking confirmation
    alert(
      `Appointment booked with ${doctorName} on ${formData.date} at ${formData.time}`
    );

    // Tell DoctorCard appointment was booked
    if (onBook) {
      onBook();
    }

    // Optional reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: ""
    });

    // Close form
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment with {doctorName}</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Appointment Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Time Slot</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">
              Select a time
            </option>
            <option value="9:00 AM">
              9:00 AM
            </option>
            <option value="11:00 AM">
              11:00 AM
            </option>
            <option value="2:00 PM">
              2:00 PM
            </option>
            <option value="4:00 PM">
              4:00 PM
            </option>
          </select>
        </div>

        <br />

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