import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MenuBar from "./components/MenuBar";
import MainMenu from "./pages/MainMenu";
import Feature4Box from "./pages/Feature4Box";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ConfirmAccount from "./pages/ConfirmAccount";

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => setEntries([...entries, entry]);

  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify" element={<ConfirmAccount />} />
          <Route path="/main" element={<MainMenu />} />
          <Route path="/calendar" element={<Calendar entries={entries} />} />
          <Route path="/feature4" element={<Feature4Box addEntry={addEntry} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;