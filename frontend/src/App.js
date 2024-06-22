import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Homepage from "./pages/homepage/Homepage";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Placeholder for currentUser. Replace this with actual logic to check if a user is logged in.
const currentUser = false; // Or replace with actual logic, e.g., useContext(AuthContext) or a similar state management solution.

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
