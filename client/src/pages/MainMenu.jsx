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
    <div className="min-h-[80vh] flex items-center justify-center w-full">
      <div className="grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`${item.color} text-white font-bold shadow-2xl rounded-3xl w-full h-36 sm:h-48 flex flex-col items-center justify-center text-xl sm:text-2xl transition-transform transform hover:scale-105 border-4 border-white`}
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