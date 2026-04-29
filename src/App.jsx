import { Routes, Route } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";

function App() {
  return (
    <Routes>
      <Route path="/instant-consultation" element={<InstantConsultation />} />
    </Routes>
  );
}

export default App;