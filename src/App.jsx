import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import Notification from "./Components/Notification/Notification";

function App() {
  return (
    <Router>
      <Notification>
        <Routes>
          <Route
            path="/instant-consultation"
            element={<InstantConsultation />}
          />
        </Routes>
      </Notification>
    </Router>
  );
}

export default App;