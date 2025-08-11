import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GlobalHeader from "./components/GlobalHeader";
import Dashboard from "./pages/Dashboard";
import Intro from "./pages/Intro";
import Calendar from "./pages/Calendar";
import AI from "./pages/AI";

import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalHeader />
        <nav className="bg-gray-200 px-4 py-2 flex gap-4 mb-8 rounded">
          <Link to="/" className="hover:underline">Intro</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/calendar" className="hover:underline">Calendar</Link>
          <Link to="/ai" className="hover:underline">AI</Link>
          <Link to="/main" className="hover:underline">Main Menu</Link> {/* New menu link */}
        </nav>
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/main" element={<MainMenu />} /> {/* New route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;