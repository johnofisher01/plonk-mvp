import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Feature4Box from "./pages/Feature4Box";
import Calendar from "./pages/Calendar";
import MenuBar from "./components/MenuBar";


function App() {
  // Store entries in state
  const [entries, setEntries] = useState([]);

  // Add new entry
  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <Router>
            <MenuBar />

      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/main" element={<MainMenu />} />
        <Route path="/feature4" element={<Feature4Box addEntry={addEntry} />} />
        <Route path="/calendar" element={<Calendar entries={entries} />} />
      </Routes>
    </Router>
  );
}

export default App;