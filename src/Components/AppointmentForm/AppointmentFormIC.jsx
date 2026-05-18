import { useState } from "react";

function AppointmentFormIC({ onClose, onBook }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill all fields");
      return;
    }

    alert(`Appointment booked for ${formData.name}`);

    if (onBook) onBook();
    if (onClose) onClose();

    setFormData({
      name: "",
      phone: ""
    });
  };

  return (
    <div className="appointment-form">
      <h2>Instant Consultation</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone"
          />
        </div>

        <button type="submit">
          Book Now
        </button>

        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AppointmentFormIC;