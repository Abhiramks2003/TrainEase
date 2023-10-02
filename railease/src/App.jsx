import Signup from "./Authentication/Signup";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Authentication/Login";
import HomePage from "./Components/HomePage";

import Ticket from "./Components/Ticket";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
