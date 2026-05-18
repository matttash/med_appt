import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import Notification from "./Components/Notification/Notification";
import Navbar from "./Components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>StayHealthy Medical App</h1>
      <p>Book appointments with doctors online</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Notification>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
      </Notification>
    </Router>
  );
}

export default App;