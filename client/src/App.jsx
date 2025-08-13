import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MenuBar from "./components/MenuBar";
import MainMenu from "./pages/MainMenu";
import Feature4Box from "./pages/Feature4Box";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Store entries in state
  const [entries, setEntries] = useState([]);
  const addEntry = (entry) => setEntries([...entries, entry]);

  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/main"
            element={
              <ProtectedRoute>
                <MainMenu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calendar entries={entries} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feature4"
            element={
              <ProtectedRoute>
                <Feature4Box addEntry={addEntry} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;