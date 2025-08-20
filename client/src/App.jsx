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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-teal-50 to-indigo-100">
        <Router>
          <MenuBar />
          <div className="flex flex-col items-center justify-center w-full px-2 py-2">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify" element={<ConfirmAccount />} />
              <Route path="/main" element={<MainMenu />} />
              <Route path="/calendar" element={<Calendar entries={entries} />} />
              <Route path="/feature4" element={<Feature4Box addEntry={addEntry} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;