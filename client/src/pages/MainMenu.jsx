import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const buttonClass =
  "bg-blue-600 text-white font-bold py-6 px-8 rounded-xl shadow hover:bg-blue-700 transition w-40 h-40 text-xl";

const MainMenu = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-2 grid-rows-2 gap-6 p-8 bg-gray-50 relative">
      
      <div className="flex items-center justify-center h-full">
        <button className={buttonClass} onClick={() => {}}>
          Feature 1
        </button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button className={buttonClass} onClick={() => {}}>
          Feature 2
        </button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button
          className={buttonClass}
          onClick={() => navigate("/calendar")}
        >
          Cal View
        </button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button
          className={buttonClass}
          onClick={() => navigate("/feature4")}
        >
          Cal Bash
        </button>
      </div>
    </div>
  );
};

export default MainMenu;