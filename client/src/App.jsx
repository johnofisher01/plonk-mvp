import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import MainMenu from "./pages/MainMenu";
import Feature4Box from "./pages/Feature4Box";
import Calendar from "./pages/Calendar";

function App() {
  // Store entries in state
  const [entries, setEntries] = useState([]);

  // Function to add an entry (used only by Feature 4)
  const addEntry = (entry) => setEntries([...entries, entry]);

  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/main" element={<MainMenu />} />
        <Route path="/calendar" element={<Calendar entries={entries} />} />
        <Route path="/feature4" element={<Feature4Box addEntry={addEntry} />} />
      </Routes>
    </Router>
  );
}

export default App;