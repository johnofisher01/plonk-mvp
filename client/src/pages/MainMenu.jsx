import React from "react";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Feature 1",
    color: "bg-gradient-to-br from-indigo-400 to-blue-400",
    onClick: () => {},
    icon: "💡",
  },
  {
    label: "Feature 2",
    color: "bg-gradient-to-br from-purple-400 to-pink-300",
    onClick: () => {},
    icon: "🧩",
  },
  {
    label: "Cal View",
    color: "bg-gradient-to-br from-teal-400 to-green-300",
    onClick: (navigate) => navigate("/calendar"),
    icon: "🗓️",
  },
  {
    label: "Cal Bash",
    color: "bg-gradient-to-br from-orange-300 to-yellow-400",
    onClick: (navigate) => navigate("/feature4"),
    icon: "⚡",
  },
];

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-2xl">
        {menuItems.map((item, idx) => (
          <button
            key={item.label}
            className={`${item.color} text-white font-bold shadow-2xl rounded-3xl w-full sm:w-56 h-40 flex flex-col items-center justify-center text-xl sm:text-2xl transition-transform transform hover:scale-105 border-4 border-white`}
            onClick={() => item.onClick(navigate)}
            style={{ boxShadow: "0 6px 32px 0 rgba(30, 64, 175, 0.18)" }}
          >
            <span className="text-4xl mb-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;