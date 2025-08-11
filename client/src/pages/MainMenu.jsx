import React from "react";
import { useNavigate } from "react-router-dom";

const buttonClass =
  "px-8 py-4 rounded-xl bg-white shadow hover:bg-gray-100 text-base sm:text-lg font-semibold transition";

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-2 grid-rows-2">
      <div className="flex items-center justify-center h-full">
        <button className={buttonClass}>Feature 1</button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button className={buttonClass}>Feature 2</button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button className={buttonClass}>Feature 3</button>
      </div>
      <div className="flex items-center justify-center h-full">
        <button
          className={buttonClass}
          onClick={() => navigate("/feature4")}
        >
          Feature 4
        </button>
      </div>
    </div>
  );
};

export default MainMenu;