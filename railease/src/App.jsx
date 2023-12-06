import Signup from "./Authentication/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import HomePage from "./Components/HomePage";
import Ticket from "./Components/Ticket";
import PassengerDetails from "./Components/PassengerDetails";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/details" element={<PassengerDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
